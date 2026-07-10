import type { KnowledgeSection } from "./knowledge";

/**
 * The Palo knowledge base — derived from Palo's official Messaging One-Pager
 * (the single source of truth for all sales/marketing copy). Content, voice,
 * claims, and nomenclature here are canonical. If a fact isn't in here, it
 * should be derived from §"What Palo is" and the voice rules — never improvised.
 *
 * Edit this file to update what the sales co-pilot knows and how it speaks.
 */
export const PALO_SECTIONS: KnowledgeSection[] = [
  {
    id: "what-palo-is",
    title: "What Palo is (the canonical line)",
    tags: ["about", "overview", "what", "product", "strategist", "pitch", "elevator", "explain", "summary"],
    content: `**Palo is the AI content strategist that learns your channel, builds it a brain, and works on it 24/7.**

Length variants:
- **Shortest:** The AI content strategist.
- **Short:** Palo learns your channel, builds it a brain, and never stops working.
- **Long:** Palo studies every video you've made, builds your channel a brain — your strategy, your patterns, your playbook — and never stops working on it: spotting what's moving, running experiments, and leaving your next video ready every morning. Built for short-form: Shorts, Reels, and TikTok.

**Business positioning line:** Not a tool you use. A strategist you hire.`,
  },
  {
    id: "the-intelligence",
    title: "The product is the intelligence (why it's worth it)",
    tags: ["value", "intelligence", "overnight", "nightly", "why", "worth", "core", "moat", "defensible", "compute", "expensive", "night"],
    content: `The real product is the intelligence. Every night, Palo holds your entire channel in mind at once — who you are, the strategy it's built, every tactic it's running and where each one stands, your last 28 days of numbers, your newest videos, your top performers, the conversations you've had, the experiments it's watching. It catches what a person would miss: a breakout forming, a bet paying off, a format going stale. Then it investigates, cross-references, and rewrites what it believes.

A human strategist does this review once a quarter and bills by the hour. Palo does it every single night — no human can hold that much at once, and no human would do it nightly. That's the defensible core, and it's honestly why it costs what it costs: real compute, every night, spent on your channel.

**The "overnight" story (paste-ready):** Every night, Palo clocks in. It looks over your recent videos and your top performers. It compares this week to your last month. It rereads the conversations you've had and the strategy it's already built. It notices things — a video from two months ago quietly picking up views, a pattern starting to fatigue, a post you skipped. It investigates, cross-references, and updates your channel's brain. By morning, it knows your channel better than it did yesterday. And your next video is waiting.

Ideas, scripts, outlines, and reviews are where the value *actualizes* — they're the deliverables. Lead with them to hook, but never let them define the product, or Palo becomes "an idea generator" (a $10 product). Palo is the strategist; the ideas are its output.`,
  },
  {
    id: "the-build",
    title: "What happens when you Build my brain",
    tags: ["build", "brain", "onboarding", "setup", "start", "first", "watch", "niche", "strategy", "how it works"],
    content: `When someone presses **Build my brain**, here's what happens (paste-ready):

First, Palo watches. Every video on your page — not just the titles and the numbers, but the videos themselves, the way a strategist would watch them. It learns who you are: your voice, your world, what your audience shows up for. Then it studies your niche — the channels winning around you and the formats that got them there. It weighs all of it against how elite strategists think, argues with itself about what your channel should do next, and writes the answer down: your strategy. Alongside it, your library — every hook, build-up, and payoff that works for you, each one labeled by how proven it is. That's your brain. And from that night on, Palo never stops updating it.

**Build my brain** is the one unlock CTA everywhere — landing, gated widgets, onboarding, paywall.`,
  },
  {
    id: "experiments",
    title: "Palo runs experiments",
    tags: ["experiment", "playbook", "tactics", "status", "proven", "declining", "bets", "test", "double down", "retire"],
    content: `Palo doesn't just advise — it experiments. Every tactic in your playbook has a status — experiment, early signal, proven, declining — and Palo moves them based on what actually happens on your channel. Winners get doubled down on. What fades gets retired.

Copy angles:
- "It doesn't just advise. It experiments."
- "Palo places bets on your channel — and keeps the winners."

(Sell the *concept* of experimentation, not the internal labeling system.)`,
  },
  {
    id: "the-story",
    title: "How Palo works — the 5 beats",
    tags: ["how", "works", "story", "process", "learn", "niche", "brain", "deliver", "nonstop", "steps", "walk me through"],
    content: `The narrative spine (keep this order):

1. **Palo learns who you are.** Not a form — it watches every video you've made: the content, the numbers, the voice, the brand, the person. Everything starts from your identity, not a universal formula.
2. **Then it masters your niche.** It studies the channels winning around you — what formats got them there, and which fit *you*.
3. **It builds your brain.** It argues with itself over what your channel should do, then writes the answer down: a thesis, a direction, and a playbook — every hook, build-up, and payoff, each marked by how proven it is.
4. **It puts the brain to work.** Daily ideas, outlines, scripts, honest reviews — every one traceable to why.
5. **It never turns off.** Every night it reviews everything, moves its experiments forward, and updates what it believes. Smarter every morning.

**Paragraph version (paste-ready):** Palo starts by learning who you are — it watches every video you've made, the content and the numbers, until it understands your channel: your voice, your world, what your audience shows up for. Then it masters your niche — the channels winning around you and the formats that got them there. From all of it, it builds your brain: a strategy for your channel and a playbook of tactics, each one marked by how proven it is. It puts that brain to work every day — ideas, outlines, scripts, reviews. And it never turns off. Every night it reviews everything, moves its experiments forward, and updates what it believes. Smarter every morning.`,
  },
  {
    id: "education-strategist",
    title: "The strategist — the job behind every big channel",
    tags: ["strategist", "job", "education", "big channels", "hire", "role", "head of content", "who decides", "employee"],
    content: `Use this to create the need before selling the solution.

Every big channel runs on a job most people have never heard of: the strategist — the one deciding what gets made, what gets shelved, and why. Top creators pay serious money for that person. Most people don't even know the job exists.

**Paste-ready mini-narrative:** Every big channel runs on a job you've never heard of. Not the person on camera. Not the editor. The strategist — the one who decides what gets made, what gets shelved, and why last week's video worked. Top creators pay six figures for that person. Most people don't even know the job exists. That's the job Palo does.

One-liner: "Top creators pay for content strategists. Most people don't know they exist."`,
  },
  {
    id: "feature-todays-pick",
    title: "Feature — Today's Pick",
    tags: ["today", "pick", "daily", "idea", "next video", "ideas", "feature", "researched", "ready"],
    content: `**Today's Pick — Your next video. Researched, sourced, ready to make.**

Palo doesn't wait to be asked. Each day it hands you a fully-formed video idea pulled from your brain, your niche, and what's working right now — with the sources attached so you can see exactly why it picked it. Open it, remix it, or shoot it as-is.`,
  },
  {
    id: "feature-insights",
    title: "Feature — Insights",
    tags: ["insights", "findings", "what's working", "why", "recommendation", "feature", "evidence", "advice"],
    content: `**Insights — What's working. Why. What to do next.**

As Palo studies your channel, it forms findings — specific, evidence-backed observations about your content. When one matters, it shows up as an insight: the claim, the numbers behind it, and one concrete move to make. No dashboards to decode. No "data suggests."`,
  },
  {
    id: "feature-library",
    title: "Feature — Library (your playbook)",
    tags: ["library", "playbook", "hooks", "tactics", "proven", "feature", "experiments", "in play"],
    content: `**Library — Your playbook. Everything Palo has in play, in one place.**

Palo builds a living playbook from your content: the hooks that stop the scroll, the build-ups that hold attention, the payoffs that earn the rewatch — plus the experiments it's running to find the next one. Every tactic has a status and real numbers behind it. What proves out gets promoted. What fades gets retired.

Note: it's what Palo *has in play* (proven tactics + live experiments), not just "everything that works."`,
  },
  {
    id: "feature-creative-review",
    title: "Feature — Creative Review",
    tags: ["review", "creative review", "critique", "feedback", "timestamped", "feature", "draft", "honest"],
    content: `**Creative Review — Every second, accounted for.**

Drop in any video and get an honest, timestamped read. Palo reviews videos the way a strategist would — moment by moment, calling out where attention is won and lost, and what to change next time. Specific, direct, and grounded in how your audience actually behaves.`,
  },
  {
    id: "feature-chat",
    title: "Feature — Chat",
    tags: ["chat", "ask", "talk", "strategist", "feature", "questions", "advice", "remembers"],
    content: `**Chat — The one AI that knows your channel.**

Talk strategy with the strategist who's seen every video you've made. Ask Palo anything — what to post, why a video underperformed, what pattern it's seeing. It answers from your brain, your library, and your numbers, not generic advice. And it remembers the decisions you make together.`,
  },
  {
    id: "feature-outline-script",
    title: "Features — Outline & Script",
    tags: ["outline", "script", "write", "scriptwriting", "camera-ready", "feature", "hook", "voice", "structure"],
    content: `**Outline — From idea to camera-ready.**
Palo structures your video before you shoot it — hook, build-up, payoff, beat by beat — using the patterns from your playbook. You walk in knowing exactly what you're making and why it's built that way.

**Script — Your video, written.**
Palo writes full scripts in your voice, on your patterns — the hooks that stop the scroll, the pacing that holds, the payoff that earns the rewatch. Not generic AI writing: your playbook, executed.`,
  },
  {
    id: "feature-live-activity",
    title: "Feature — Live Activity",
    tags: ["live activity", "always working", "offline", "work log", "feature", "employee", "status"],
    content: `**Live Activity — Palo is always working, even when you're offline.**

Open Palo any time and see what it's been doing: studying your videos, scoping your niche, adding to your library, forming ideas. It's not a status bar — it's your employee's work log.`,
  },
  {
    id: "proof-lines",
    title: "What Palo tells you (example insights)",
    tags: ["proof", "examples", "insights", "output", "sample", "cheese", "retention", "hook", "like what", "for instance"],
    content: `Illustrative examples of Palo's output — always specific, always a number, always one physical instruction. Frame these as "the kind of thing Palo tells you," never a promised result:

- "When you put cheese in your videos, you get 5× more views. Get it on camera in the first 3 seconds."
- "Your intros open on a still logo — you lose 68% of viewers in the first 3 seconds. Open on the action instead."
- "Your tunnel video is resurging — 18.5M views and climbing. I've drafted a follow-up idea."
- "The countdown format is fatiguing. Park it for a few weeks — here's what to run instead."`,
  },
  {
    id: "audience-roi",
    title: "Who Palo is for + ROI framing",
    tags: ["audience", "who", "business", "creator", "roi", "price", "cost", "justify", "small business", "agency", "worth it", "expensive"],
    content: `**Primary: small businesses** (pool cleaners, salons, local services) doing short-form. They expense $75–250/mo without blinking *if it's framed as hiring, not software.*
- Lead frame: an employee/strategist you hire. Hero: "Hire the strategist you can't afford."
- ROI line: **"Less than one hour of an agency. Working every hour of the month."**

**Secondary: creators** (growing → established). Price is harder; lead with outcome and time-back.
- Lead frame: creative sidekick. Palo doesn't replace your vision — it protects and reality-checks it. You bring the creative gem; Palo tells you what will actually perform. No creator wants to stare at analytics; Palo stares at them for you.
- Line: **"You stay the artist. Palo handles the strategy."**`,
  },
  {
    id: "production-agnostic",
    title: "Production-agnostic — what, not how",
    tags: ["production", "filming", "editing", "camera", "ai video", "how you shoot", "make the video", "record"],
    content: `Palo's job is what goes *into* the video — the idea, the strategy, the script — not how you produce it. Face on camera, AI generation, whatever.
- "We don't care how you make the video. We care what you make."
- "Palo tells you what to make. How you shoot it is yours."

Never promise videography/editing coaching — that's deliberately out of scope. Never disparage production tools either.`,
  },
  {
    id: "claims",
    title: "Claims — what Palo can and cannot say",
    tags: ["claims", "honesty", "guarantee", "cannot", "rules", "promise", "safe", "data", "privacy", "true"],
    content: `**CAN say (all literally true):**
- Palo watches/studies every video on your page — the content itself, not just the numbers.
- Palo works 24/7 / overnight / while you sleep, and gets smarter about your channel every night.
- Every insight is backed by evidence from your actual videos and numbers.
- Palo remembers your decisions and never contradicts what you agreed on.
- Palo leaves you at least one new deliverable every day (idea, script, outline, or review).
- Palo is trained on how elite content strategists think.
- Palo studies the winning channels in your niche and what makes their formats work.
- Palo runs experiments on your channel — winners doubled down on, fades retired.
- Palo knows who you are and stays in your lane (it won't pitch a Tokyo video if you're not in Tokyo).
- Palo is a fraction of the cost of a professional strategist — and holds more in mind than any human could, reviewed every night.
- Supports YouTube Shorts, Instagram Reels, and TikTok.

**CANNOT say:**
- Guaranteed views, growth, or virality.
- "Palo replaces your whole team" — it's the strategist you'd otherwise pay for.
- Mechanism names (index, embeddings, model, "analyzes your data," AI-powered).
- Long-form, or any platform beyond the three above.
- Real-time competitor monitoring — Palo *studies* your niche; it's not a live tracker.
- Production coaching — never imply filming/editing/camera lessons.`,
  },
  {
    id: "pricing",
    title: "Pricing, trial & CTA",
    tags: ["pricing", "price", "cost", "studio", "max", "plan", "trial", "referral", "how much", "cta", "free", "money", "subscription", "seats", "pages"],
    content: `**Studio — $75/mo:** Palo works your channel 24/7 · Chat · Outline · Write · Review · Library.

**Studio Max — $250/mo:** everything in Studio + 20× usage + 5 pages (then $25/mo each) + 2 team seats (then $25/mo each).

**Trial:** 3 days free. **7 days when referred by an existing Palo user** — use the longer trial as the referral perk.

**CTA verbs:**
- **Build my brain** — the one unlock verb: product-led contexts, gated widgets, onboarding, site CTA.
- **Try 3 days free** — pricing/paywall contexts only.

Campaign angle (business-persona ads only): "Hire a Head of Content for $75/month."`,
  },
  {
    id: "category-nomenclature",
    title: "Category term, platforms & locked nomenclature",
    tags: ["category", "term", "positioning", "ai content strategist", "brain", "playbook", "platforms", "youtube", "tiktok", "instagram", "shorts", "reels", "short-form", "glossary", "terms"],
    content: `**Category (locked):** AI content strategist. Use it everywhere a category is named. It's a real job title — that's what makes the "strategist you've never heard of" story land.

**Platforms (locked):** YouTube Shorts, Instagram Reels, TikTok. Always "short-form." Never imply long-form.

**Locked terms:**
- **brain** — the durable thing Palo builds and maintains for your channel ("Palo builds a brain for your channel"). Lowercase in prose. Never a UI tab/feature name — the brain is the *thing*, not a screen.
- **playbook** — the deployable layer of the brain: the tactics Palo is actively running for your channel (proven plays + live experiments).
- **Build my brain** — the one unlock/CTA verb everywhere.
- **Trial** — 3 days free; 7 days when referred by an existing Palo user.`,
  },
  {
    id: "headlines-hooks",
    title: "Approved headlines & hooks (for framing answers)",
    tags: ["headline", "hook", "tagline", "slogan", "one-liner", "pitch line", "opener", "subject line"],
    content: `Ship-ready lines to draw on (short declaratives; a period does the selling, never an exclamation mark):

**Outcome-led:** "Wake up to your next viral video." · "Your next viral video is already in the works." · "Every morning: a video worth making."

**Strategy-problem:** "Your videos aren't the problem. Your strategy is." · "It's not your camera. It's your strategy."

**Hire-led:** "It's not software you learn — it's a strategist you hire." · "Not a tool you use. A strategist you hire." · "One strategist. Zero days off." · "For the price of one agency hour, Palo works the whole month."

**Always-working:** "Never stops working. Ever." · "Always on. Always learning." · "Smarter every morning." · "While you sleep, it studies."

**Proof/experiment:** "Knows what works. And why." · "It doesn't just advise. It experiments." · "Palo places bets on your channel. And keeps the winners."

**Sales one-liners:** "Palo watches every video on your page, builds your channel a brain, and works it around the clock." · "Everything it tells you comes with receipts — your videos, your numbers." · "One deliverable a day, minimum. Most employees can't promise that."`,
  },
];
