import Anthropic from "@anthropic-ai/sdk";
import { buildSystemPrompt, demoAnswer } from "@/lib/knowledge";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";

function sse(text: string): Uint8Array {
  return new TextEncoder().encode(text);
}

async function streamText(
  controller: ReadableStreamDefaultController,
  text: string
) {
  // Stream in small chunks so the UI renders a live typing effect.
  const tokens = text.match(/\S+\s*|\s+/g) || [text];
  for (const t of tokens) {
    controller.enqueue(sse(t));
    // Tiny delay for a natural cadence.
    await new Promise((r) => setTimeout(r, 12));
  }
}

export async function POST(req: Request) {
  let messages: ChatMessage[] = [];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return new Response("Invalid request body", { status: 400 });
  }

  const last = [...messages].reverse().find((m) => m.role === "user");
  const query = last?.content ?? "";
  const apiKey = process.env.ANTHROPIC_API_KEY;

  // ---- Keyless demo mode ----
  if (!apiKey) {
    const answer = demoAnswer(query);
    const stream = new ReadableStream({
      async start(controller) {
        await streamText(controller, answer);
        controller.close();
      },
    });
    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Chat-Mode": "demo",
      },
    });
  }

  // ---- Live mode (Anthropic) ----
  const client = new Anthropic({ apiKey });
  const system = buildSystemPrompt();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const llm = await client.messages.stream({
          model: MODEL,
          // Tight cap = short, skimmable, fast answers for live sales calls.
          max_tokens: 400,
          system,
          messages: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        });

        llm.on("text", (delta) => controller.enqueue(sse(delta)));
        await llm.finalMessage();
        controller.close();
      } catch (err: unknown) {
        const msg =
          err instanceof Error ? err.message : "Unknown error contacting the model.";
        controller.enqueue(
          sse(
            `\n\n> ⚠️ I hit an error reaching the model: ${msg}\n> Falling back to knowledge-base retrieval.\n\n`
          )
        );
        await streamText(controller, demoAnswer(query));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "X-Chat-Mode": "live",
    },
  });
}
