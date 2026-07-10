"use client";

import { memo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CopyIcon, CheckIcon, RefreshIcon, PaloMark } from "./icons";

export interface Msg {
  id: string;
  role: "user" | "assistant";
  content: string;
}

function CodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    });
  };
  return (
    <div className="group/code relative">
      <button
        onClick={copy}
        className="absolute right-2 top-2 rounded-md border border-hairline bg-elevated px-2 py-1 text-[11px] text-muted opacity-0 transition hover:text-ink group-hover/code:opacity-100"
        aria-label="Copy code"
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
}

function AssistantBubble({
  content,
  streaming,
  onRegenerate,
}: {
  content: string;
  streaming?: boolean;
  onRegenerate?: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    });
  };

  return (
    <div className="group flex gap-3.5 px-4 py-5 sm:px-6">
      <div className="mt-0.5 shrink-0">
        <PaloMark />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 text-[13px] font-semibold text-ink">
          Palo Assistant
        </div>
        <div className="prose-chat text-ink/90">
          {content ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                pre: ({ children }) => <>{children}</>,
                code: ({ className, children }) => {
                  const isBlock = /language-/.test(className || "");
                  const text = String(children).replace(/\n$/, "");
                  return isBlock ? (
                    <CodeBlock>{text}</CodeBlock>
                  ) : (
                    <code className={className}>{children}</code>
                  );
                },
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noreferrer">
                    {children}
                  </a>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          ) : null}
          {streaming && (
            <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-blink rounded-sm bg-brand-soft align-middle" />
          )}
        </div>

        {!streaming && content && (
          <div className="mt-2.5 flex items-center gap-1 opacity-0 transition group-hover:opacity-100">
            <button
              onClick={copy}
              className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[12px] text-faint transition hover:bg-elevated hover:text-ink"
            >
              {copied ? <CheckIcon width={13} height={13} /> : <CopyIcon width={13} height={13} />}
              {copied ? "Copied" : "Copy"}
            </button>
            {onRegenerate && (
              <button
                onClick={onRegenerate}
                className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[12px] text-faint transition hover:bg-elevated hover:text-ink"
              >
                <RefreshIcon width={13} height={13} />
                Regenerate
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function UserBubble({ content }: { content: string }) {
  return (
    <div className="flex justify-end px-4 py-3 sm:px-6">
      <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-brand/15 px-4 py-2.5 text-[15px] leading-relaxed text-ink ring-1 ring-brand/25">
        {content}
      </div>
    </div>
  );
}

export const ChatMessage = memo(function ChatMessage({
  msg,
  streaming,
  onRegenerate,
}: {
  msg: Msg;
  streaming?: boolean;
  onRegenerate?: () => void;
}) {
  return msg.role === "assistant" ? (
    <AssistantBubble
      content={msg.content}
      streaming={streaming}
      onRegenerate={onRegenerate}
    />
  ) : (
    <UserBubble content={msg.content} />
  );
});
