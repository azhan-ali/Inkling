/**
 * repairAIOutput — fixes common deviations from both Gemini and Groq
 * before strict Zod validation.
 *
 * Both AI clients import this so the repair logic stays in one place.
 */

export function repairAIOutput(raw: unknown): unknown {
  if (!raw || typeof raw !== "object") return raw;
  const obj = raw as Record<string, unknown>;

  // --- narrativeIdentity.archetype ---
  if (obj.narrativeIdentity && typeof obj.narrativeIdentity === "object") {
    const ni = obj.narrativeIdentity as Record<string, unknown>;
    if (typeof ni.archetype === "string") {
      const a = ni.archetype.toLowerCase().trim().replace(/\s+/g, "-");
      const valid = [
        "underdog",
        "infrastructure",
        "culture-shift",
        "use-case-pioneer",
      ];
      if (!valid.includes(a)) {
        if (a.includes("pioneer") || a.includes("use") || a.includes("case"))
          ni.archetype = "use-case-pioneer";
        else if (a.includes("infra")) ni.archetype = "infrastructure";
        else if (a.includes("culture") || a.includes("shift"))
          ni.archetype = "culture-shift";
        else ni.archetype = "underdog";
      } else {
        ni.archetype = a;
      }
    }
  }

  // --- weekZeroKit: join array content fields ---
  if (obj.weekZeroKit && typeof obj.weekZeroKit === "object") {
    const wz = obj.weekZeroKit as Record<string, unknown>;
    for (const slot of [
      "hour_0_6",
      "hour_6_12",
      "hour_12_24",
      "hour_24_36",
      "hour_36_48",
    ]) {
      if (wz[slot] && typeof wz[slot] === "object") {
        const s = wz[slot] as Record<string, unknown>;
        if (Array.isArray(s.content))
          s.content = (s.content as string[]).join("\n");
        if (Array.isArray(s.action))
          s.action = (s.action as string[]).join(" ");
      }
    }
  }

  // --- insertionPoints: ensure exactly 3, fix riskLevel casing ---
  if (Array.isArray(obj.insertionPoints)) {
    const fallback = {
      debate: "Solana ecosystem growth",
      yourAngle: "supportive",
      preWrittenReply:
        "Building on Solana because speed and cost matter for real users.",
      bestAccountToReplyTo: "@mert_mumtaz",
      optimalTiming: "Tuesday–Thursday, 09:00–11:00 UTC",
      riskLevel: "LOW",
      riskAdvice: "Add value, don't pitch.",
    };
    while (obj.insertionPoints.length < 3)
      obj.insertionPoints.push({ ...fallback });
    obj.insertionPoints = (
      obj.insertionPoints as Record<string, unknown>[]
    )
      .slice(0, 3)
      .map((ip) => ({
        ...ip,
        riskLevel:
          typeof ip.riskLevel === "string"
            ? ip.riskLevel.toUpperCase()
            : "LOW",
      }));
  }

  // --- ecosystemAllyFinder: ensure exactly 5 ---
  if (Array.isArray(obj.ecosystemAllyFinder)) {
    const fallback = {
      allyHandle: "@superteamdao",
      why: "Global Solana builder community — natural amplifier for your project.",
      angle: "Community amplification",
      howToApproach:
        "Engage genuinely in their Discord before making any ask.",
    };
    while (obj.ecosystemAllyFinder.length < 5)
      obj.ecosystemAllyFinder.push({ ...fallback });
    obj.ecosystemAllyFinder = obj.ecosystemAllyFinder.slice(0, 5);
  }

  // --- rivalryRadar: ensure all required fields exist ---
  if (obj.rivalryRadar && typeof obj.rivalryRadar === "object") {
    const rr = obj.rivalryRadar as Record<string, unknown>;
    const fallbackRR = {
      competingCategory: "Generic Solana tooling",
      howTheyWillPosition: "Fast, cheap, decentralized — the generic Solana pitch",
      yourCounterPosition: "We solve a specific problem for a specific user",
      theOneThingTheyCannotSay: "Our lived experience with this problem",
      yourNarrativeMoat: "Specificity and authenticity cannot be copied",
    };
    for (const [key, val] of Object.entries(fallbackRR)) {
      if (!rr[key] || typeof rr[key] !== "string") {
        rr[key] = val;
      }
    }
  }

  // --- viralThreadPack.threads: ensure exactly 2 × 7 tweets + labels ---
  if (obj.viralThreadPack && typeof obj.viralThreadPack === "object") {
    const vtp = obj.viralThreadPack as Record<string, unknown>;
    const labels = [
      "Hook",
      "Pain",
      "Insight",
      "Entry",
      "Proof",
      "Vision",
      "CTA",
    ];
    if (Array.isArray(vtp.threads)) {
      vtp.threads = (vtp.threads as Record<string, unknown>[]).map((t) => {
        const tweets = Array.isArray(t.tweets)
          ? [...(t.tweets as string[])]
          : [];
        while (tweets.length < 7)
          tweets.push("Building something meaningful on Solana.");
        return { ...t, tweets: tweets.slice(0, 7), labels };
      });
      while ((vtp.threads as unknown[]).length < 2) {
        (vtp.threads as unknown[]).push({
          title: "Why we're building on Solana",
          tweets: Array(7).fill("Building the future on Solana."),
          labels,
        });
      }
      vtp.threads = (vtp.threads as unknown[]).slice(0, 2);
    }
  }

  return obj;
}
