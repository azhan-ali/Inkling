/**
 * scripts/test-prompt.ts
 *
 * Smoke-test the prompt builder and schema validation without hitting any API.
 *
 * Run with:
 *   npx tsx scripts/test-prompt.ts
 */

import { buildPrompt } from "../lib/ai/prompt";
import { inputSchema, outputSchema } from "../lib/schema";
import type { InklingInputs } from "../types/inkling";

// ---------------------------------------------------------------------------
// Sample inputs
// ---------------------------------------------------------------------------

const sample1: InklingInputs = {
  projectName: "PayLayer",
  oneLiner:
    "Instant cross-border freelancer payments for UAE workers using Solana and Token-2022",
  techStack: "Anchor, Token-2022, PUSD, Next.js",
  targetUser:
    "UAE-based freelancers who wait 3–14 days for international payments and lose 5–8% to fees",
  teamBackground:
    "2-person team. One ex-fintech engineer from Dubai, one Anchor developer. Bootstrapped.",
  biggestFear:
    "We ship and nobody notices because we don't know how to talk about it",
  communicationStyle: "founder",
};

const sample2: InklingInputs = {
  projectName: "AnchorKit",
  oneLiner:
    "Open-source Anchor component library that cuts Solana program boilerplate by 70%",
  techStack: "Anchor, Rust, TypeScript, Solana CLI",
  targetUser:
    "Solana developers who waste days writing repetitive account validation and CPI boilerplate",
  teamBackground:
    "Solo developer. 3 years Rust, 2 years Anchor. Previously contributed to Metaplex.",
  biggestFear:
    "Someone else ships the same thing while I'm still polishing the docs",
  communicationStyle: "builder",
};

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

function testInputSchema() {
  console.log("\n=== Test 1: Input schema validation ===");

  const valid = inputSchema.safeParse(sample1);
  console.assert(valid.success, "sample1 should pass input schema");
  console.log("✓ sample1 passes input schema");

  const valid2 = inputSchema.safeParse(sample2);
  console.assert(valid2.success, "sample2 should pass input schema");
  console.log("✓ sample2 passes input schema");

  const invalid = inputSchema.safeParse({ projectName: "", communicationStyle: "wizard" });
  console.assert(!invalid.success, "invalid input should fail");
  console.log("✓ invalid input correctly rejected");
}

function testPromptBuilder() {
  console.log("\n=== Test 2: Prompt builder ===");

  const prompt1 = buildPrompt(sample1);
  console.assert(typeof prompt1 === "string", "prompt should be a string");
  console.assert(prompt1.length > 1000, "prompt should be substantial");
  console.assert(prompt1.includes("PayLayer"), "prompt should include project name");
  console.assert(prompt1.includes("FOUNDER"), "prompt should include communication style");
  console.assert(prompt1.includes("@mert_mumtaz"), "prompt should include ecosystem handles");
  console.assert(prompt1.includes("LIVE DEBATES"), "prompt should include debates section");
  console.assert(prompt1.includes("ARCHETYPE SCORING"), "prompt should include archetype scoring");
  console.log(`✓ sample1 prompt built — ${prompt1.length} chars`);

  const prompt2 = buildPrompt(sample2);
  console.assert(prompt2.includes("AnchorKit"), "prompt should include project name");
  console.assert(prompt2.includes("BUILDER"), "prompt should include builder style");
  console.log(`✓ sample2 prompt built — ${prompt2.length} chars`);
}

function testOutputSchemaWithMockData() {
  console.log("\n=== Test 3: Output schema with mock data ===");

  const mockOutput = {
    narrativeIdentity: {
      archetype: "use-case-pioneer",
      archetypeName: "The Use-Case Pioneer",
      archetypeReason: "UAE freelancer payments have never been properly solved on-chain.",
      threatAssessment: [
        {
          competitorType: "Generic DeFi payment tools",
          theirPositioning: "Fast, cheap, decentralized",
          yourCounter: "Stop saying payments. Say Freelance Infrastructure.",
        },
      ],
      oneTruth: "We are building what SWIFT forgot.",
      personalHashtag: "#FreelanceLayer",
    },
    weekZeroKit: {
      hour_0_6: {
        action: "Post your origin story",
        content: "Every week, 2M+ UAE freelancers wait 3–14 days for payment. We built the fix. On Solana. Here's why now 🧵",
      },
      hour_6_12: {
        action: "Reply to @mert_mumtaz thread on Solana payments",
        content: "We've been building exactly this for UAE freelancers. Anchor + Token-2022 makes sub-second settlement real. Happy to share what we learned.",
      },
      hour_12_24: {
        action: "Post build-in-public teaser thread",
        content: "Why I quit my job to fix freelancer payments on Solana 🧵",
      },
      hour_24_36: {
        action: "DM 5 builders",
        content: "DM @SuperteamUAE: 'Saw your thread on Solana in MENA. We're building exactly for that audience. Would love to connect.'",
      },
      hour_36_48: {
        action: "Post week 1 anchor post",
        content: "The problem nobody is talking about in Solana payments: 2M UAE freelancers, 0 proper on-chain solutions. Until now.",
      },
      originStories: {
        degen: "gm. built a thing that lets UAE freelancers get paid on-chain in seconds. no banks. no 3-day delays. just SOL. shipping.",
        builder: "6 months ago I hit a wall — Anchor was perfect but Token-2022 compliance for cross-border payments wasn't documented anywhere. We figured it out. Thread 🧵",
        founder: "Every week, 2M+ UAE freelancers wait 3–14 days for international payment. We built the infrastructure layer that changes this — on Solana. Here's why now.",
      },
      teaserThread: [
        "Why I quit my job to fix freelancer payments on Solana 🧵",
        "The problem: 2M+ UAE freelancers lose 5–8% per payment and wait up to 14 days. In 2024. On a blockchain that settles in 400ms.",
        "The insight: Token-2022 + Anchor makes compliant cross-border settlement possible without a bank in the middle.",
        "What we built: PayLayer — instant, compliant, on-chain freelancer payments. Sub-second. Zero chargebacks.",
        "We're live on Colosseum. If you're a UAE freelancer or know one, this is for you. Link in bio.",
      ],
    },
    fourWeekBattlePlan: {
      week1: {
        theme: "Establish Your Presence",
        why: "First impressions compound. Week 1 sets the narrative anchor.",
        how: "Post origin story, join 2 debates, DM 5 builders.",
        proof: "Screenshot of first on-chain transaction or demo.",
        future: "Sets up Week 2 community building.",
        dailyPostTypes: [
          "Origin story post",
          "Insertion point reply",
          "Build-in-public thread",
          "Community shoutout",
          "Milestone post",
          "Weekly accountability",
        ],
      },
      week2: {
        theme: "Build Community",
        why: "Audience compounds when you give before you ask.",
        how: "Co-host a Space, engage with 3 allies, share a technical insight.",
        proof: "Space recording or thread with 50+ likes.",
        future: "Sets up Week 3 proof points.",
        dailyPostTypes: [
          "Ally engagement",
          "Technical deep-dive",
          "Community reply",
          "Space announcement",
          "Recap post",
          "Weekly accountability",
        ],
      },
      week3: {
        theme: "Show Proof",
        why: "Credibility converts followers to users.",
        how: "Share real user story, transaction data, or testimonial.",
        proof: "User quote or on-chain data screenshot.",
        future: "Sets up Week 4 vision post.",
        dailyPostTypes: [
          "User story",
          "Data post",
          "Contrarian take",
          "Build-in-public",
          "Milestone",
          "Weekly accountability",
        ],
      },
      week4: {
        theme: "Cast the Vision",
        why: "End the hackathon period with a forward-looking narrative.",
        how: "Post your roadmap, tag @Colosseum_io, invite collaborators.",
        proof: "Roadmap thread with 3 concrete next milestones.",
        future: "Positions you for post-hackathon funding conversations.",
        dailyPostTypes: [
          "Vision thread",
          "Roadmap post",
          "Ally shoutout",
          "CTA post",
          "Thank you post",
          "Weekly accountability",
        ],
      },
    },
    insertionPoints: [
      {
        debate: "Crypto for cross-border payments — hype vs reality",
        yourAngle: "supportive — here's proof it works in the real world",
        preWrittenReply: "We've built exactly this for UAE freelancers. Anchor + Token-2022 gives sub-second settlement with zero chargebacks. Happy to share the full build stack.",
        bestAccountToReplyTo: "@mert_mumtaz",
        optimalTiming: "Tuesday–Thursday, 09:00–11:00 UTC",
        riskLevel: "MEDIUM",
        riskAdvice: "High visibility, high reward. Do not pitch. Add value only. Lead with the technical insight.",
      },
      {
        debate: "Solana vs Ethereum for real-world asset (RWA) applications",
        yourAngle: "supportive — UAE freelancer payments as a concrete RWA use case",
        preWrittenReply: "UAE freelancer payments are the RWA use case nobody talks about. 2M workers, $12B in annual payments, 0 proper on-chain solutions. We're fixing that with Anchor + Token-2022.",
        bestAccountToReplyTo: "@PalmFoundation",
        optimalTiming: "Tuesday–Thursday, 09:00–11:00 UTC",
        riskLevel: "LOW",
        riskAdvice: "Institutional audience. Keep tone professional. Lead with the market size, not the tech.",
      },
      {
        debate: "Anchor framework vs native Solana programs",
        yourAngle: "solutions-focused — what we learned building compliant cross-border payments with Anchor",
        preWrittenReply: "Built cross-border payment compliance on Anchor + Token-2022. The undocumented parts were brutal. Happy to share what we learned — thread coming this week.",
        bestAccountToReplyTo: "@solana_devs",
        optimalTiming: "Tuesday–Thursday, 14:00–16:00 UTC",
        riskLevel: "LOW",
        riskAdvice: "Developer audience. Pure value add. No pitch needed — the technical insight is the hook.",
      },
    ],
    rivalryRadar: {
      competingCategory: "Solana DeFi payment tooling",
      howTheyWillPosition: "Fast, cheap, decentralized — the generic Solana pitch",
      yourCounterPosition: "Stop saying payments. Say Freelance Infrastructure.",
      theOneThingTheyCannotSay: "We built this because we personally couldn't get paid on time in Dubai. Your lived experience is your narrative moat.",
      yourNarrativeMoat: "Geographic specificity + personal founder story creates an emotional connection no generic DeFi tool can replicate.",
    },
    viralThreadPack: {
      threads: [
        {
          title: "Why UAE freelancers are Solana's biggest untapped market",
          tweets: [
            "2M UAE freelancers lose $600M/year to payment delays and fees. Nobody in crypto is talking about this. We are. 🧵",
            "The pain: international clients pay via SWIFT. 3–14 day delays. 5–8% fees. Chargebacks. Freelancers absorb all of it.",
            "The insight: Token-2022 on Solana makes compliant cross-border settlement possible without a bank in the middle. Sub-second. Zero chargebacks.",
            "We built PayLayer — the first on-chain freelancer payment layer for UAE workers. Anchor + Token-2022 + PUSD.",
            "First 10 freelancers onboarded. Average settlement time: 1.2 seconds. Average fee: $0.002. SWIFT average: 7 days, $45.",
            "This is what Solana was built for. Not speculation. Real workers. Real payments. Real infrastructure.",
            "We're live on Colosseum. If you're building in payments or RWA, let's talk. DM open. #FreelanceLayer",
          ],
          labels: ["Hook", "Pain", "Insight", "Entry", "Proof", "Vision", "CTA"],
        },
        {
          title: "What building cross-border payments on Anchor taught us",
          tweets: [
            "We spent 3 months building cross-border payment compliance on Anchor + Token-2022. Here's what nobody documents. 🧵",
            "The problem: Token-2022 transfer hooks for compliance aren't in the official docs. We found 3 undocumented behaviors the hard way.",
            "Insight: You can encode KYC status directly in the token extension. No separate oracle needed. This changes the compliance architecture entirely.",
            "We built a reusable compliance layer on top of this. It's now the core of PayLayer — instant, compliant, on-chain freelancer payments.",
            "Proof: 10 UAE freelancers paid in the last 2 weeks. Zero failed transactions. Zero compliance flags. 1.2s average settlement.",
            "The future: every cross-border payment layer on Solana will use this pattern. We're open to sharing the architecture with other builders.",
            "Full technical write-up coming this week. Follow for the thread. #FreelanceLayer #Solana",
          ],
          labels: ["Hook", "Pain", "Insight", "Entry", "Proof", "Vision", "CTA"],
        },
      ],
      standalonePosts: {
        contrarian: "Hot take: 'crypto payments' is the wrong frame. The right frame is 'freelance infrastructure'. One is a feature. The other is a category. We're building the category. #FreelanceLayer",
        buildInPublic1: "Week 2 update: Token-2022 compliance hook is live. 10 test transactions. 0 failures. 1.2s average. The boring infrastructure work is the most important work. #BuildInPublic",
        buildInPublic2: "Shipped: PUSD integration for PayLayer. UAE freelancers can now receive stable payments without touching a bank. This is what we came to build. #FreelanceLayer",
        communityShoutout: "Shoutout to @SuperteamUAE for connecting us with our first 10 beta users. The MENA Solana community is the most underrated builder community in crypto. 🙏",
        cta: "PayLayer is live on Colosseum. If you're a UAE freelancer, a Solana builder in payments, or just curious — try it. Link in bio. #FreelanceLayer",
      },
      weeklyAccountabilityTemplate: "Week [N] update for #FreelanceLayer:\n✅ Shipped: [what you shipped]\n📊 Numbers: [key metric]\n🔨 Next: [what's coming]\n\nBuilding in public on @Colosseum_io. Follow along.",
    },
    ecosystemAllyFinder: [
      {
        allyHandle: "@SuperteamUAE",
        why: "They own the exact audience you need — MENA Solana community with 12K+ followers and high engagement.",
        angle: "Co-host a Space on 'Crypto for Freelancers in the Middle East'",
        howToApproach: "Reply to their latest thread with a genuine insight about MENA payments. Three genuine replies before you suggest anything. Then DM: 'Saw your thread on Solana in MENA. We're building exactly for that. Would love to collaborate on a Space.'",
      },
      {
        allyHandle: "@PalmFoundation",
        why: "They're pushing RWA adoption on Solana. Freelancer payments are a perfect RWA use case they can point to.",
        angle: "Case study — PayLayer as a live RWA implementation on Solana",
        howToApproach: "Tag them in your technical thread about Token-2022 compliance. No pitch. Let the technical content do the work. If they engage, follow up with a DM.",
      },
      {
        allyHandle: "A Solana NFT marketplace builder",
        why: "They need payment infrastructure. You ARE payment infrastructure. Integration makes both products stronger.",
        angle: "Integration — your users pay faster, their users convert better",
        howToApproach: "Reply to their latest build thread with a question about their payment flow. Three genuine replies before you suggest anything.",
      },
      {
        allyHandle: "A DePIN project on Solana",
        why: "DePIN workers need to get paid. Your infrastructure solves their payment problem.",
        angle: "PayLayer as the payment layer for DePIN worker rewards",
        howToApproach: "Find a DePIN project in the Colosseum submissions. Reply to their thread: 'How are you handling worker payments? We've been solving exactly this for UAE freelancers — might be relevant.'",
      },
      {
        allyHandle: "@solana_devs",
        why: "Your technical thread about Token-2022 compliance is exactly the content they amplify.",
        angle: "Technical content amplification — they RT quality Anchor/Token-2022 deep-dives",
        howToApproach: "Post your technical thread. Tag @solana_devs at the end: 'cc @solana_devs — happy to contribute this to the docs if useful.' No ask, just an offer.",
      },
    ],
  };

  const result = outputSchema.safeParse(mockOutput);
  if (!result.success) {
    console.error("Mock output validation errors:", result.error.flatten());
    throw new Error("Mock output failed schema validation — fix the schema or mock data.");
  }
  console.log("✓ Mock output passes full output schema validation");
  console.log(`  - narrativeIdentity.archetype: ${result.data.narrativeIdentity.archetype}`);
  console.log(`  - insertionPoints count: ${result.data.insertionPoints.length}`);
  console.log(`  - ecosystemAllyFinder count: ${result.data.ecosystemAllyFinder.length}`);
  console.log(`  - viralThreadPack.threads count: ${result.data.viralThreadPack.threads.length}`);
  console.log(`  - viralThreadPack.threads[0].tweets count: ${result.data.viralThreadPack.threads[0].tweets.length}`);
}

// ---------------------------------------------------------------------------
// Run all tests
// ---------------------------------------------------------------------------

console.log("=== Inkling Phase 1 — Prompt + Schema Smoke Tests ===");
testInputSchema();
testPromptBuilder();
testOutputSchemaWithMockData();
console.log("\n✅ All Phase 1 tests passed.\n");
