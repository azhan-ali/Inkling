/**
 * Solana ecosystem intelligence — hardcoded so Inkling outputs feel native,
 * not AI-generated. This data is injected into every prompt.
 */

// ---------------------------------------------------------------------------
// Key Handles
// ---------------------------------------------------------------------------

export interface EcosystemHandle {
  handle: string;
  name: string;
  role: string;
  tags: string[];
  engagementNote: string;
}

export const KEY_HANDLES: EcosystemHandle[] = [
  {
    handle: "@aeyakovenko",
    name: "Anatoly Yakovenko",
    role: "Solana co-founder",
    tags: ["core", "protocol", "vision"],
    engagementNote:
      "Replies to technical threads. Lead with a specific protocol insight, never a pitch.",
  },
  {
    handle: "@mert_mumtaz",
    name: "Mert Mumtaz",
    role: "Helius CEO, Solana ecosystem voice",
    tags: ["rpc", "developer-tools", "ecosystem", "payments"],
    engagementNote:
      "Very active on builder threads. Supportive of real-world use cases. Good first target.",
  },
  {
    handle: "@rajgokal",
    name: "Raj Gokal",
    role: "Solana co-founder",
    tags: ["core", "consumer", "culture"],
    engagementNote:
      "Engages with consumer and culture narratives. Founder-voice content resonates.",
  },
  {
    handle: "@SuperteamUAE",
    name: "Superteam UAE",
    role: "Regional Solana community — MENA",
    tags: ["mena", "community", "rwa", "payments"],
    engagementNote:
      "Perfect for UAE/MENA-focused projects. Co-host Spaces, tag in regional threads.",
  },
  {
    handle: "@PalmFoundation",
    name: "Palm Foundation",
    role: "Solana RWA and institutional adoption",
    tags: ["rwa", "institutional", "payments"],
    engagementNote:
      "Relevant for RWA and cross-border payment projects. Formal tone preferred.",
  },
  {
    handle: "@Colosseum_io",
    name: "Colosseum",
    role: "Solana hackathon organizer",
    tags: ["hackathon", "builders", "colosseum"],
    engagementNote:
      "Tag in submission posts. They actively repost strong builder narratives.",
  },
  {
    handle: "@superteamdao",
    name: "Superteam DAO",
    role: "Global Solana builder community",
    tags: ["community", "builders", "global"],
    engagementNote:
      "Post in their Discord/Telegram. Weekly calls are good insertion points.",
  },
  {
    handle: "@solana",
    name: "Solana",
    role: "Official Solana account",
    tags: ["core", "ecosystem"],
    engagementNote:
      "Tag sparingly — only on milestone posts. Overuse dilutes credibility.",
  },
  {
    handle: "@jito_labs",
    name: "Jito Labs",
    role: "MEV and validator infrastructure",
    tags: ["infrastructure", "mev", "validators"],
    engagementNote:
      "Relevant for infrastructure and DeFi projects. Technical threads only.",
  },
  {
    handle: "@pyth_network",
    name: "Pyth Network",
    role: "On-chain price oracle",
    tags: ["defi", "oracle", "data"],
    engagementNote:
      "Good ally for DeFi and payments projects that need price feeds.",
  },
  {
    handle: "@marginfi",
    name: "marginfi",
    role: "Solana lending protocol",
    tags: ["defi", "lending", "infrastructure"],
    engagementNote:
      "Active builder community. Good for DeFi-adjacent projects.",
  },
  {
    handle: "@solana_devs",
    name: "Solana Developers",
    role: "Official developer resources account",
    tags: ["developers", "anchor", "sdk"],
    engagementNote:
      "Tag in technical build-in-public threads. They repost quality dev content.",
  },
];

// ---------------------------------------------------------------------------
// Live Debate Categories
// ---------------------------------------------------------------------------

export interface LiveDebate {
  id: string;
  topic: string;
  category: string;
  summary: string;
  activeAccounts: string[];
  angle: "supportive" | "contrarian" | "solutions-focused";
}

export const LIVE_DEBATES: LiveDebate[] = [
  {
    id: "solana-vs-eth-rwa",
    topic: "Solana vs Ethereum for real-world asset (RWA) applications",
    category: "rwa",
    summary:
      "Ongoing debate about whether Solana's speed and cost advantages outweigh Ethereum's institutional trust for tokenizing real-world assets like real estate, invoices, and cross-border payments.",
    activeAccounts: ["@mert_mumtaz", "@PalmFoundation", "@aeyakovenko"],
    angle: "supportive",
  },
  {
    id: "dex-fragmentation",
    topic: "DEX fragmentation and liquidity on Solana",
    category: "defi",
    summary:
      "Debate about whether Solana's multiple DEXes (Jupiter, Raydium, Orca) create fragmented liquidity or healthy competition. Builders argue about aggregation vs native liquidity.",
    activeAccounts: ["@jito_labs", "@marginfi"],
    angle: "solutions-focused",
  },
  {
    id: "cross-border-payments",
    topic: "Crypto for cross-border payments — hype vs reality",
    category: "payments",
    summary:
      "Skeptics say crypto payments are still too complex for mainstream use. Builders counter with real transaction data. High engagement from MENA and Southeast Asia communities.",
    activeAccounts: ["@mert_mumtaz", "@SuperteamUAE", "@PalmFoundation"],
    angle: "supportive",
  },
  {
    id: "on-chain-identity",
    topic: "On-chain identity and reputation on Solana",
    category: "identity",
    summary:
      "Whether Solana needs a native identity layer (like ENS on Ethereum). Debate between wallet-based identity, SNS domains, and reputation protocols.",
    activeAccounts: ["@solana_devs", "@superteamdao"],
    angle: "solutions-focused",
  },
  {
    id: "mobile-native-solana",
    topic: "Mobile-native Solana apps — Saga phone and beyond",
    category: "mobile",
    summary:
      "Whether mobile-first is the right bet for Solana consumer apps. Saga phone adoption, dApp store, and whether builders should prioritize mobile UX.",
    activeAccounts: ["@rajgokal", "@solana"],
    angle: "contrarian",
  },
  {
    id: "anchor-vs-native",
    topic: "Anchor framework vs native Solana programs",
    category: "developer-tools",
    summary:
      "Technical debate: Anchor adds safety and DX but adds overhead. Native programs are faster but harder to audit. Relevant for any team mentioning their tech stack.",
    activeAccounts: ["@solana_devs", "@aeyakovenko"],
    angle: "solutions-focused",
  },
  {
    id: "depin-solana",
    topic: "DePIN on Solana — real infrastructure or narrative play?",
    category: "depin",
    summary:
      "Whether decentralized physical infrastructure networks (Helium, Hivemapper) represent Solana's killer use case or are overhyped. High engagement from builders.",
    activeAccounts: ["@superteamdao", "@Colosseum_io"],
    angle: "contrarian",
  },
];

// ---------------------------------------------------------------------------
// Timing Windows
// ---------------------------------------------------------------------------

export interface TimingWindow {
  dayRange: string;
  utcHours: string;
  audience: string;
  note: string;
}

export const TIMING_WINDOWS: TimingWindow[] = [
  {
    dayRange: "Tuesday–Thursday",
    utcHours: "09:00–11:00",
    audience: "European + MENA Solana builders",
    note: "Peak engagement for technical and RWA content. Best for Insertion Points.",
  },
  {
    dayRange: "Tuesday–Thursday",
    utcHours: "14:00–16:00",
    audience: "US East Coast builders and VCs",
    note: "Good for founder-voice and vision content. Best for thread launches.",
  },
  {
    dayRange: "Monday",
    utcHours: "08:00–10:00",
    audience: "Global Solana community",
    note: "Week-start energy. Good for 'what we're building this week' posts.",
  },
  {
    dayRange: "Sunday",
    utcHours: "16:00–18:00",
    audience: "Global async readers",
    note: "Weekly accountability posts. Lower competition, high saves/bookmarks.",
  },
  {
    dayRange: "Friday",
    utcHours: "12:00–14:00",
    audience: "Degen and community crowd",
    note: "Good for lighter, degen-tone content and community shoutouts.",
  },
];

// ---------------------------------------------------------------------------
// Content Formats That Work
// ---------------------------------------------------------------------------

export const CONTENT_FORMATS = [
  {
    format: "Build-in-public thread",
    description:
      "7-tweet thread showing what you built this week, what broke, and what you learned. Highest RT rate in Solana builder community.",
    bestFor: ["builder", "founder"],
  },
  {
    format: "Contrarian take",
    description:
      "Single tweet challenging a mainstream Solana narrative. Must be backed by a specific data point or lived experience. High engagement, high risk.",
    bestFor: ["degen", "builder"],
  },
  {
    format: "Technical deep-dive",
    description:
      "Thread explaining a specific Anchor/Token-2022/Rust pattern you solved. Gets RTs from @solana_devs and technical accounts.",
    bestFor: ["builder"],
  },
  {
    format: "Founder story",
    description:
      "Personal narrative about why you're building this. Emotion-first, data-second. Resonates with VCs and community builders.",
    bestFor: ["founder"],
  },
  {
    format: "Milestone post",
    description:
      "Short, punchy announcement of a shipped feature or metric. Include a screenshot or demo GIF. Tag @Colosseum_io.",
    bestFor: ["degen", "builder", "founder"],
  },
  {
    format: "Community shoutout",
    description:
      "Publicly thank a builder, community, or protocol that helped you. Generates goodwill and often gets a reply from the tagged account.",
    bestFor: ["degen", "builder", "founder"],
  },
];

// ---------------------------------------------------------------------------
// Archetype Definitions
// ---------------------------------------------------------------------------

export const ARCHETYPES = {
  underdog: {
    name: "The Underdog",
    emotion: "Hope",
    spread: "Community rallies behind you",
    description:
      "Small team, big vision. You're the scrappy builder taking on a problem the big players ignored. Your story is about grit, not resources.",
    signals: [
      "solo founder or 2-person team",
      "bootstrapped",
      "personal pain point",
      "underserved community",
    ],
    contentTone:
      "Vulnerable, honest, progress-focused. Share the struggle as much as the wins.",
  },
  infrastructure: {
    name: "The Infrastructure Play",
    emotion: "Respect",
    spread: "Developer RT culture",
    description:
      "Quiet but essential. You're building the layer that makes other things possible. Developers respect you even if end users never know your name.",
    signals: [
      "SDK or tooling",
      "protocol layer",
      "developer-facing product",
      "Anchor/Rust heavy",
    ],
    contentTone:
      "Technical, precise, understated. Let the code speak. Deep-dives over hype.",
  },
  "culture-shift": {
    name: "The Culture Shift",
    emotion: "Anger / Disruption",
    spread: "Contrarian engagement",
    description:
      "You're challenging the status quo. Something about how things are done is broken, and you're the one calling it out — and fixing it.",
    signals: [
      "challenging existing solution",
      "strong opinion on broken system",
      "disruptive positioning",
      "anti-establishment angle",
    ],
    contentTone:
      "Bold, opinionated, slightly provocative. Take a clear stance. Invite debate.",
  },
  "use-case-pioneer": {
    name: "The Use-Case Pioneer",
    emotion: "Curiosity",
    spread: "'Why has nobody done this?' engagement",
    description:
      "First to solve X for Y. You've found a specific, underserved use case that nobody has properly addressed on Solana. Your story is about discovery.",
    signals: [
      "novel target user",
      "specific geography or vertical",
      "first-mover in niche",
      "clear 'why now' moment",
    ],
    contentTone:
      "Curious, educational, specific. Teach people why this problem matters before you pitch the solution.",
  },
} as const;

export type ArchetypeKey = keyof typeof ARCHETYPES;
