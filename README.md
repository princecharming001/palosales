# Palo Assistant 💬

An AI chat assistant **trained on Palo product knowledge**. Ask it anything about
Palo — what it is, its features, how it works, pricing, and getting started — and
it answers grounded in a curated knowledge base, with a polished, full-featured
chat UI.

> Streaming replies · conversation history · Markdown &amp; code · regenerate · keyless demo mode

---

## Features

- **Grounded answers** — every response is constrained to Palo's knowledge base, so the assistant stays on-topic and won't invent features or pricing.
- **Streaming responses** — tokens render live with a typing cursor.
- **Conversation history** — multiple chats, saved to `localStorage`, with rename-on-first-message, delete, and a recent list.
- **Rich Markdown** — headings, lists, tables, links, and syntax-styled code blocks with copy buttons.
- **Message actions** — copy any answer, or **regenerate** the last one.
- **Suggested prompts** — a clean empty state to get users started.
- **Stop generation** mid-stream, auto-growing composer, `Enter` to send / `Shift+Enter` for newline.
- **Responsive** — collapsible sidebar on mobile, works down to phone widths.
- **Keyless demo mode** — runs with **no API key** by retrieving from the knowledge base; drop in a key for fully conversational answers.

## Tech stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- **Anthropic SDK** for streaming Claude responses
- `react-markdown` + `remark-gfm` for rendering

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — add your key for live AI answers
npm run dev
```

Open [http://localhost:3009](http://localhost:3009).

### Environment

| Variable            | Required | Purpose                                                   |
| ------------------- | -------- | --------------------------------------------------------- |
| `ANTHROPIC_API_KEY` | No\*     | Enables live, synthesized streaming answers from Claude.  |
| `ANTHROPIC_MODEL`   | No       | Override the model (defaults to a current Claude model).  |

\* Without a key, the app runs in **demo mode**: it answers by retrieving the
most relevant sections from the built-in Palo knowledge base. No external calls
are made.

## How it's "trained" on Palo

This app uses **knowledge grounding** rather than fine-tuning:

- `lib/palo-content.ts` holds the Palo knowledge base as structured sections.
- `lib/knowledge.ts` builds a system prompt from those sections and constrains
  the model to answer only from them. It also powers keyword retrieval for the
  keyless demo mode.
- `app/api/chat/route.ts` streams the answer — from Claude when a key is set,
  or from retrieval when it isn't.

To update what the assistant knows, edit `lib/palo-content.ts`. No retraining,
no vector DB — just edit the content and redeploy.

## Project structure

```
app/
  api/chat/route.ts   # streaming endpoint (Anthropic + keyless fallback)
  page.tsx            # chat UI (sidebar, history, composer, streaming)
  layout.tsx, globals.css
components/
  ChatMessage.tsx     # markdown message bubbles, copy, regenerate
  icons.tsx           # inline SVG icon set + Palo mark
lib/
  knowledge.ts        # system-prompt builder + retrieval
  palo-content.ts     # the Palo knowledge base (edit me)
```

## Deploy

Works out of the box on **Vercel**. Set `ANTHROPIC_API_KEY` in the project's
environment variables for live answers.

---

Built as an internal Palo knowledge assistant. Answers should always be verified
against [palo.ai](https://palo.ai).
