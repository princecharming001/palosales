"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ChatMessage, type Msg } from "@/components/ChatMessage";
import {
  SendIcon,
  PlusIcon,
  StopIcon,
  MenuIcon,
  TrashIcon,
  MessageIcon,
  SparkIcon,
  PaloMark,
} from "@/components/icons";

interface Conversation {
  id: string;
  title: string;
  messages: Msg[];
  updatedAt: number;
}

const STORAGE_KEY = "palo-chat/conversations/v1";

const SUGGESTIONS = [
  "What is Palo and who is it for?",
  "Walk me through Palo's core features.",
  "How does Palo actually work under the hood?",
  "What does Palo cost?",
];

function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

function titleFrom(text: string) {
  const t = text.trim().replace(/\s+/g, " ");
  return t.length > 42 ? t.slice(0, 42) + "…" : t || "New chat";
}

function newConversation(): Conversation {
  return { id: uid(), title: "New chat", messages: [], updatedAt: Date.now() };
}

export default function Page() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const active =
    conversations.find((c) => c.id === activeId) ?? conversations[0];

  // ---- Load / persist ----
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Conversation[];
        if (Array.isArray(parsed) && parsed.length) {
          setConversations(parsed);
          setActiveId(parsed[0].id);
          setLoaded(true);
          return;
        }
      }
    } catch {
      /* ignore corrupt storage */
    }
    const fresh = newConversation();
    setConversations([fresh]);
    setActiveId(fresh.id);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
    } catch {
      /* storage full — ignore */
    }
  }, [conversations, loaded]);

  // ---- Auto-scroll on new content ----
  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [active?.messages, streaming]);

  // ---- Auto-grow textarea ----
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "0px";
    ta.style.height = Math.min(ta.scrollHeight, 200) + "px";
  }, [input]);

  const patchActive = useCallback(
    (updater: (c: Conversation) => Conversation) => {
      setConversations((prev) =>
        prev.map((c) => (c.id === active?.id ? updater(c) : c))
      );
    },
    [active?.id]
  );

  const runStream = useCallback(
    async (history: Msg[], assistantId: string) => {
      const controller = new AbortController();
      abortRef.current = controller;
      setStreaming(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: history.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
          signal: controller.signal,
        });

        if (!res.body) throw new Error("No response stream");
        const reader = res.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          patchActive((c) => ({
            ...c,
            messages: c.messages.map((m) =>
              m.id === assistantId ? { ...m, content: m.content + chunk } : m
            ),
            updatedAt: Date.now(),
          }));
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          patchActive((c) => ({
            ...c,
            messages: c.messages.map((m) =>
              m.id === assistantId
                ? {
                    ...m,
                    content:
                      m.content ||
                      "⚠️ Something went wrong reaching the assistant. Please try again.",
                  }
                : m
            ),
          }));
        }
      } finally {
        setStreaming(false);
        abortRef.current = null;
      }
    },
    [patchActive]
  );

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || streaming || !active) return;

      const userMsg: Msg = { id: uid(), role: "user", content: trimmed };
      const assistantId = uid();
      const assistantMsg: Msg = {
        id: assistantId,
        role: "assistant",
        content: "",
      };
      const nextMessages = [...active.messages, userMsg, assistantMsg];

      patchActive((c) => ({
        ...c,
        title: c.messages.length === 0 ? titleFrom(trimmed) : c.title,
        messages: nextMessages,
        updatedAt: Date.now(),
      }));
      setInput("");

      await runStream(
        nextMessages.filter((m) => m.id !== assistantId),
        assistantId
      );
    },
    [active, streaming, patchActive, runStream]
  );

  const regenerate = useCallback(async () => {
    if (!active || streaming) return;
    const msgs = [...active.messages];
    // Drop trailing assistant message, keep history up to last user turn.
    while (msgs.length && msgs[msgs.length - 1].role === "assistant") {
      msgs.pop();
    }
    if (!msgs.length) return;
    const assistantId = uid();
    patchActive((c) => ({
      ...c,
      messages: [...msgs, { id: assistantId, role: "assistant", content: "" }],
    }));
    await runStream(msgs, assistantId);
  }, [active, streaming, patchActive, runStream]);

  const stop = () => abortRef.current?.abort();

  const startNewChat = () => {
    if (streaming) return;
    // Reuse an existing empty chat if present.
    const empty = conversations.find((c) => c.messages.length === 0);
    if (empty) {
      setActiveId(empty.id);
    } else {
      const fresh = newConversation();
      setConversations((prev) => [fresh, ...prev]);
      setActiveId(fresh.id);
    }
    setSidebarOpen(false);
    setInput("");
  };

  const deleteConversation = (id: string) => {
    setConversations((prev) => {
      const filtered = prev.filter((c) => c.id !== id);
      if (filtered.length === 0) {
        const fresh = newConversation();
        setActiveId(fresh.id);
        return [fresh];
      }
      if (id === activeId) setActiveId(filtered[0].id);
      return filtered;
    });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const isEmpty = !active || active.messages.length === 0;

  return (
    <div className="flex h-[100dvh] overflow-hidden text-ink">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-[272px] flex-col border-r border-hairline bg-panel/95 backdrop-blur transition-transform duration-200 sm:static sm:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-2.5 px-4 pb-3 pt-4">
          <PaloMark />
          <div className="text-[15px] font-semibold tracking-tight">
            Palo Assistant
          </div>
        </div>

        <div className="px-3">
          <button
            onClick={startNewChat}
            className="flex w-full items-center gap-2 rounded-xl border border-hairline bg-elevated px-3 py-2.5 text-[14px] font-medium text-ink transition hover:border-brand/50 hover:bg-brand/10"
          >
            <PlusIcon width={16} height={16} />
            New chat
          </button>
        </div>

        <div className="mt-4 flex-1 overflow-y-auto px-2 pb-3">
          <div className="px-2 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-faint">
            Recent
          </div>
          {[...conversations]
            .sort((a, b) => b.updatedAt - a.updatedAt)
            .map((c) => (
              <div
                key={c.id}
                className={`group mb-0.5 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13.5px] transition ${
                  c.id === active?.id
                    ? "bg-elevated text-ink"
                    : "text-muted hover:bg-elevated/60 hover:text-ink"
                }`}
              >
                <button
                  onClick={() => {
                    setActiveId(c.id);
                    setSidebarOpen(false);
                  }}
                  className="flex min-w-0 flex-1 items-center gap-2 text-left"
                >
                  <MessageIcon
                    width={15}
                    height={15}
                    className="shrink-0 text-faint"
                  />
                  <span className="truncate">{c.title}</span>
                </button>
                <button
                  onClick={() => deleteConversation(c.id)}
                  className="shrink-0 text-faint opacity-0 transition hover:text-ink group-hover:opacity-100"
                  aria-label="Delete chat"
                >
                  <TrashIcon width={14} height={14} />
                </button>
              </div>
            ))}
        </div>

        <div className="border-t border-hairline px-4 py-3 text-[11px] leading-relaxed text-faint">
          Trained on Palo product knowledge. Answers are grounded in Palo&apos;s
          docs — always verify critical details at{" "}
          <a
            href="https://palo.ai"
            target="_blank"
            rel="noreferrer"
            className="text-brand-soft hover:underline"
          >
            palo.ai
          </a>
          .
        </div>
      </aside>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <main className="relative flex min-w-0 flex-1 flex-col">
        {/* Header */}
        <header className="flex items-center gap-3 border-b border-hairline px-4 py-3 sm:px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-muted transition hover:text-ink sm:hidden"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-semibold">
              {active?.title ?? "New chat"}
            </span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-elevated px-2.5 py-1 text-[11px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Palo knowledge
            </span>
          </div>
        </header>

        {/* Messages / empty state */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          {isEmpty ? (
            <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center px-6 text-center">
              <div className="mb-5 animate-fade-up">
                <PaloMark width={48} height={48} />
              </div>
              <h1 className="animate-fade-up text-2xl font-semibold tracking-tight sm:text-[28px]">
                Ask me anything about Palo
              </h1>
              <p className="mt-2 max-w-md animate-fade-up text-[15px] text-muted">
                I&apos;m trained on Palo&apos;s product knowledge — features, how
                it works, pricing, and getting started.
              </p>
              <div className="mt-8 grid w-full gap-2.5 sm:grid-cols-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="group flex items-start gap-2.5 rounded-xl border border-hairline bg-panel px-4 py-3 text-left text-[14px] text-muted transition hover:border-brand/40 hover:bg-elevated hover:text-ink"
                  >
                    <SparkIcon
                      width={16}
                      height={16}
                      className="mt-0.5 shrink-0 text-brand-soft"
                    />
                    <span>{s}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl pb-6">
              {active.messages.map((m, i) => {
                const isLastAssistant =
                  m.role === "assistant" && i === active.messages.length - 1;
                return (
                  <ChatMessage
                    key={m.id}
                    msg={m}
                    streaming={isLastAssistant && streaming}
                    onRegenerate={
                      isLastAssistant && !streaming ? regenerate : undefined
                    }
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Composer */}
        <div className="border-t border-hairline bg-canvas/80 px-4 py-3.5 backdrop-blur sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-end gap-2 rounded-2xl border border-hairline bg-panel px-3 py-2 shadow-lg shadow-black/20 transition focus-within:border-brand/50">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Message Palo Assistant…"
                className="max-h-[200px] flex-1 resize-none bg-transparent py-1.5 text-[15px] leading-relaxed text-ink outline-none placeholder:text-faint"
              />
              {streaming ? (
                <button
                  onClick={stop}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-elevated text-ink transition hover:bg-hairline"
                  aria-label="Stop generating"
                >
                  <StopIcon width={16} height={16} />
                </button>
              ) : (
                <button
                  onClick={() => send(input)}
                  disabled={!input.trim()}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand text-white transition enabled:hover:bg-brand-glow disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send message"
                >
                  <SendIcon width={17} height={17} />
                </button>
              )}
            </div>
            <div className="mt-2 text-center text-[11px] text-faint">
              Palo Assistant can make mistakes. Verify important details on
              palo.ai.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
