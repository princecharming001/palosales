import type { KnowledgeSection } from "./knowledge";

/**
 * The Palo knowledge base.
 *
 * Single source of truth for what the assistant knows. Each section is grounded
 * in Palo's own product docs, landing copy, and pricing surfaces. Edit here to
 * update the bot — no retraining, no vector DB.
 */
export const PALO_SECTIONS: KnowledgeSection[] = [
  {
    id: "overview",
    title: "What Palo is",
    tags: ["about", "overview", "what", "product", "creator", "workspace", "ai"],
    content: `Palo (palo.ai) is an **invite-only AI workspace built for serious, cross-platform short-form video creators**. You connect your social accounts (YouTube, TikTok, Instagram) and Palo continuously watches and analyzes your videos to build a "live intelligence" of your content — then acts as an opinionated content strategist across the whole creation pipeline: understanding what works, generating ideas, outlining, scriptwriting, critiquing drafts before you post, publishing, and tracking cross-platform analytics.

The tagline is **"Serious power for serious creators."** Palo's core claim: it "doesn't just know what your videos are, it knows *why* they work and why they don't — down to the smallest details."

Internally, Palo is one creator pipeline: **Brain → Ideate → Outline → Write → Publish → Track**, where Track's insights loop back into Ideate.`,
  },
  {
    id: "access",
    title: "Access & membership (invite-only)",
    tags: ["access", "invite", "membership", "waitlist", "signup", "join", "request", "trial"],
    content: `Palo is **invite-only**. The main call to action is **"Request Membership"** — "Palo access is invite only." There's a waitlist and invite system; invited users get a bonus trial.

**Free trial:** 3 days free by default, or **7 days free** when you arrive through an invite with a trial bonus.

**Sign-in:** primary auth is magic-link / email code. Password and OAuth (Google/YouTube/TikTok/Instagram) are secondary options.`,
  },
  {
    id: "feature-set-to-work",
    title: "Set Palo to Work (24/7 analysis)",
    tags: ["tracking", "analyze", "24/7", "connect", "link", "account", "channel", "page", "background"],
    content: `**"Set Palo to Work"** connects a social account and puts it under continuous AI tracking — Palo "will watch & analyze your content 24/7." This is the foundation that powers every other feature.

Once a page is linked and tracking is on, Palo scrapes stats, analyzes each video, builds a channel analysis (identity, content clusters, insights), maintains a per-channel living **strategy** document, and fires proactive findings. In customer language a connected account is a **page**; internally it's a **channel**, and most data in the product is scoped to it.`,
  },
  {
    id: "feature-brain",
    title: "Palo Brain",
    tags: ["brain", "patterns", "clusters", "visualize", "catalog", "map", "understanding"],
    content: `**Palo Brain** lets you "visualize your content and discover patterns." It's a visual map of your whole catalog that surfaces content clusters, storytelling patterns, and recurring elements — built on Palo's channel-analysis pipeline (identity, clusters, insights).

Brain is one of the few surfaces available on the **Free** plan, and it's one of the mobile-accessible surfaces.`,
  },
  {
    id: "feature-chat-ideate",
    title: "Palo Chat / Ideate",
    tags: ["chat", "ideate", "ideas", "advice", "ask", "agent", "insights", "brainstorm"],
    content: `**Palo Chat** ("Ask Palo anything…") is a conversational agent grounded in *your own* data plus Palo's storytelling **Doctrine**. Use it to ask for ideas, advice, and insights. It generates ideas and story beats and can pull in retrieval tools — diagnostics, playbooks, and your channel strategy.

This is the **Ideate** stage of the pipeline; insights from Track feed back into it so ideas get sharper over time.`,
  },
  {
    id: "feature-outline",
    title: "Palo Outline",
    tags: ["outline", "structure", "beats", "plan", "video"],
    content: `**Palo Outline** helps you "structure out your videos to perfect them." It's the AI outlining stage that organizes a video's beats before you move into scriptwriting.`,
  },
  {
    id: "feature-write",
    title: "Palo Write (scriptwriting)",
    tags: ["write", "script", "scriptwriting", "editor", "collaborative", "viral", "rephrase", "desktop"],
    content: `**Palo Write** is "scriptwriting built to help you go viral" — a real-time collaborative script editor built for content virality. It supports AI fill / edit / add actions and inline transforms like **Rephrase, Shorten, Add Tension, and Cut Fluff**.

**Important:** the Write editor is **desktop-only by design.** On mobile it shows a "Switch to PC" screen. (You can still talk to Palo from your phone via Mobile Texting.)`,
  },
  {
    id: "feature-review",
    title: "Palo Review (Creative Review)",
    tags: ["review", "critique", "draft", "feedback", "hooks", "payoff", "pacing", "timestamped"],
    content: `**Palo Review** (Creative Review) gets "your video drafts critiqued before you post." Palo gives **timestamped notes on hooks, payoffs, and pacing** on a draft video, so you can fix problems before publishing (e.g. "3-5s: huge tangent," "revealed too soon").`,
  },
  {
    id: "feature-track",
    title: "Palo Track (analytics)",
    tags: ["track", "analytics", "metrics", "views", "subscribers", "followers", "cross-platform", "insights"],
    content: `**Palo Track** puts "your entire cross-platform analytics in one place" with AI insights layered on top. It shows views over time (e.g. Views Last 48h), subscribers/followers, per-page selection, and AI-generated insights.

Track is the end of the pipeline — and its insights loop back into Ideate to inform your next ideas.`,
  },
  {
    id: "feature-scope",
    title: "Scope (research & discovery)",
    tags: ["scope", "research", "discovery", "competitors", "outliers", "trends", "hooks", "trending", "niches", "internet"],
    content: `**Scope** helps you "understand the internet." Palo tracks trends, creators, and hooks, and Scope surfaces them across views like **Competitors, Outliers, Top Hooks, Top Last 7d, and Trending Niches** — e.g. "give me 1M+ view videos in my formats." It's how you find high-performing external content in your own formats.`,
  },
  {
    id: "feature-publish",
    title: "Publish",
    tags: ["publish", "renders", "post", "title", "suggestions", "voice", "translate", "caption", "spring"],
    content: `**Publish** lets you "view and publish your renders to any platform with live AI suggestions." It offers title suggestions and critique (e.g. "strong but too long," "revealed too soon"), plus **AI Voice, Auto Translate, and AI Caption**.

Publish is Palo's newest surface — parts are marked **"Coming this spring"** and it isn't fully live in production yet.`,
  },
  {
    id: "feature-network-teams-mobile",
    title: "Network, Teams & Mobile Texting",
    tags: ["network", "profile", "identity", "friends", "teams", "seats", "collaborate", "mobile", "texting", "phone"],
    content: `**Network** is your "one profile" — a cross-platform creator identity and social layer ("access the Palo network with your cross-platform identity," including a Friends layer). It's available on the **Free** plan.

**Teams** lets you add teammates to open and work on your projects in your overview. A manager can operate on behalf of a managed creator.

**Mobile Texting** lets you "talk to Palo from anywhere using your phone" — so even though the full editor is desktop-only, you can chat with Palo on mobile.`,
  },
  {
    id: "feature-pulse",
    title: "Pulse / Weekly Pulse / Proactive Palo",
    tags: ["pulse", "weekly", "proactive", "monday", "brief", "digest", "overnight", "thoughts", "strategist", "notifications"],
    content: `**Pulse** is Palo's proactive strategist layer — it turns Palo "from a passive tool you open into an actively reaching-out content strategist."

**Weekly Pulse** is a weekly brief delivered **every Monday**. Free users get a data-only digest; paid users get LLM-written narratives, cross-video patterns, and concrete recommendations.

**Proactive Palo** ("today" view) assembles a day verdict and summary in Palo's voice, a **"hero"** (ideas plus a ready-to-post shot script grounded in your own top videos), ranked **findings**, and a **"Palo's activity"** provenance trace showing which sensor fired and why.

On **Studio Max**, related proactive features include **Overnight Ideas** (briefs Palo generates for you overnight), **Get Palo Thoughts**, and **Change Palo's Personality**.`,
  },
  {
    id: "pipeline",
    title: "How Palo works — the creation pipeline",
    tags: ["how", "works", "pipeline", "flow", "project", "stages", "process", "onboarding"],
    content: `A **Project** threads one piece of content through stages: **IDEA → WRITING → EDITING → REVIEW → COMPLETED**. In practice you ideate in Chat, move to Outline, then Write the script, then Review the draft critique, then Publish — while Track monitors performance and feeds insights back into new ideas.

**Onboarding** branches on creator type (aspiring, growing, established, business). It's a guided wizard (or an AI-chat flow) that covers your knowledge level and interests, a pricing/Stripe step, and a final gate where you must **link at least one channel**. Aspiring creators go through niche selection and get a generated channel identity; established/growing creators get their channel analyzed directly.`,
  },
  {
    id: "audience",
    title: "Who Palo is for",
    tags: ["who", "audience", "icp", "creators", "followers", "established", "target", "for"],
    content: `Palo is built for **serious, top, cross-platform short-form video creators.** The landing page frames it as "purpose built for the top cross-platform creators" and references creators with large followings (marketing says 1M+; internal notes describe an established-creator profile around ~100k+ followers with an existing content backlog).

The safe framing: Palo is for **established, cross-platform short-form creators** who post regularly and have a catalog of videos worth analyzing.`,
  },
  {
    id: "positioning",
    title: "Why Palo is different (positioning)",
    tags: ["why", "different", "positioning", "value", "differentiator", "benefit", "compare"],
    content: `Palo's differentiator: "Palo is constantly watching your videos to build a **live intelligence** of everything in your content. It doesn't just know *what* your videos are, it knows *why* they work and why they don't — down to the smallest details. It's trained on thousands of storytelling elements and can find patterns and errors across your page to help you grow."

Other positioning themes:
- **Cross-platform, one place** — one profile and one analytics view across YouTube, TikTok, and Instagram.
- **Built for virality** — writing and scripting are "built to help you go viral."
- **Proactive, not passive** — Pulse reaches out to you instead of waiting to be opened.
- **Fits your workflow** — integrates with your existing tools (AI Voice, Auto Translate, AI Caption).
- **Results scale with use** — "the more you follow Palo's direction, the better your results will be."`,
  },
  {
    id: "pricing",
    title: "Pricing & plans",
    tags: ["pricing", "price", "cost", "plans", "free", "studio", "max", "money", "subscription", "how much", "tier"],
    content: `Palo has three tiers:

**Free — $0.** Limited surfaces: **Brain, Network, and public profiles.** Weekly Pulse is a data-only digest.

**Studio — $75/month.** Unlocks the core pipeline: Set Palo to Work, Brain, Chat, Outline, Write, Review, Track, Mobile Texting, and Teams. Palo watches **2 pages** 24/7.

**Studio Max — $249/month.** Everything in Studio, plus **~20x more usage**, **5 pages** (then **$25/mo per additional page**), **2 team seats** (then **$25/mo per additional seat**), and the proactive features: Overnight Ideas, Get Palo Thoughts, and Change Palo's Personality. It's "supercharged with Palo's most advanced intelligence."

**Trial:** 3 days free (7 days with an invite). **Billing** is via Stripe. If you cancel within a current billing period or free trial you won't be charged again, and you keep access until the plan ends. You can downgrade (Studio Max → Studio).

Usage is intentionally limited on lower tiers to maintain performance, since Palo's analysis is deeper than standard AI tools; Studio Max offers effectively unlimited usage.`,
  },
  {
    id: "platforms",
    title: "Supported platforms & devices",
    tags: ["platforms", "youtube", "tiktok", "instagram", "supported", "devices", "desktop", "mobile", "pc", "languages"],
    content: `**Supported platforms:** YouTube, TikTok, and Instagram. Guidance: "link as many as you can to make Palo work as well as possible."

**Desktop vs mobile:** The **Write editor is desktop-only** ("Switch to PC"), and the full app is optimized for larger screens. **Mobile Texting** lets you chat with Palo from your phone, and **Brain, Network, and public profiles** are the mobile-accessible surfaces.

**Languages:** Palo ships in **English and Japanese.**`,
  },
  {
    id: "privacy",
    title: "Privacy & security",
    tags: ["privacy", "security", "data", "safe", "private", "confidential", "public"],
    content: `Palo does **not** use any information that isn't public — unless you give it non-public information yourself while chatting. **Your content is not used to make Palo better for other creators**; it's secure and private to you by design. (See Palo's Privacy Policy for full details.)`,
  },
  {
    id: "glossary",
    title: "Glossary of Palo terms",
    tags: ["glossary", "terms", "terminology", "definitions", "meaning", "vocabulary", "doctrine", "niche", "hook"],
    content: `- **Page** — a connected social account (Studio = 2, Studio Max = 5). Internally a **channel**.
- **AI tracking / "Set Palo to Work"** — the background system that watches and analyzes a page 24/7.
- **Project** — one piece of content moving through IDEA → WRITING → EDITING → REVIEW → COMPLETED.
- **Brain** — the visual intelligence layer over your catalog (patterns, clusters).
- **Scope** — the external research surface (competitors, outliers, top hooks, trending niches).
- **Network** — your cross-platform creator profile and social layer.
- **Pulse / Weekly Pulse / Proactive Palo** — the proactive weekly brief and daily strategist, with a hero, findings, and a "Palo's activity" trace.
- **Doctrine** — Palo's hand-authored storytelling worldview that grounds its AI agents.
- **Strategy** — a per-channel living strategy document applying the Doctrine to your data.
- **Niche** — a synthesized content-category document; aspiring creators pick one during onboarding.
- **Hook / Tension / Payoff** — Palo's core storytelling beat vocabulary, used in Write, Review, and Publish.
- **Renders** — finished/exported video files you publish.
- **Overnight Ideas / Briefs** — ideas Palo generates for you overnight (Studio Max).`,
  },
  {
    id: "faq-results",
    title: "FAQ — Getting results & usage limits",
    tags: ["faq", "results", "usage", "limits", "why", "slow", "unlimited", "performance", "when"],
    content: `**When will I see results?** "The more you follow Palo's direction, the better your results will be." As you continuously follow its guidance, you should see results.

**Why is usage limited?** Palo limits usage on lower tiers to maintain high performance, because its analysis is deeper than standard AI tools. **Studio Max** gives ~20x more usage — effectively unlimited.

**What does Palo actually analyze?** It studies your video backlog to find which **hooks and pacing drive retention** and recommends what to make next. Review then gives timestamped notes on hooks, payoffs, and pacing before you post.`,
  },
];
