/**
 * Zod schemas — single source of truth for all input + output shapes.
 * Used by: API route (validation), AI clients (output parsing), form (field validation).
 */

import { z } from "zod";

// ---------------------------------------------------------------------------
// Input Schema (7 fields)
// ---------------------------------------------------------------------------

export const inputSchema = z.object({
  projectName: z
    .string()
    .min(1, "Project name is required")
    .max(80, "Keep it under 80 characters"),
  oneLiner: z
    .string()
    .min(10, "Tell us what it does in one line")
    .max(200, "Keep it crisp — 200 chars max"),
  techStack: z
    .string()
    .min(2, "List at least one technology")
    .max(300, "Too long — summarise your stack"),
  targetUser: z
    .string()
    .min(5, "Describe who suffers without your product")
    .max(300),
  teamBackground: z
    .string()
    .min(5, "Tell us about your team")
    .max(300),
  biggestFear: z
    .string()
    .min(5, "Be honest — what keeps you up at night?")
    .max(300),
  communicationStyle: z.enum(["degen", "builder", "founder"], {
    error: "Pick one: degen, builder, or founder",
  }),
});

export type InputSchema = z.infer<typeof inputSchema>;

// ---------------------------------------------------------------------------
// Output Schema (7 sections)
// ---------------------------------------------------------------------------

const insertionPointSchema = z.object({
  debate: z.string(),
  yourAngle: z.string(),
  preWrittenReply: z.string(),
  bestAccountToReplyTo: z.string(),
  optimalTiming: z.string(),
  riskLevel: z.enum(["LOW", "MEDIUM", "HIGH"]),
  riskAdvice: z.string(),
});

const allySchema = z.object({
  allyHandle: z.string(),
  why: z.string(),
  angle: z.string(),
  howToApproach: z.string(),
});

const weekPlanSchema = z.object({
  theme: z.string(),
  why: z.string(),
  how: z.string(),
  proof: z.string(),
  future: z.string(),
  dailyPostTypes: z.array(z.string()),
});

const threadSchema = z.object({
  title: z.string(),
  tweets: z.array(z.string()).length(7),
  labels: z.array(z.string()).length(7),
});

export const outputSchema = z.object({
  narrativeIdentity: z.object({
    archetype: z.enum([
      "underdog",
      "infrastructure",
      "culture-shift",
      "use-case-pioneer",
    ]),
    archetypeName: z.string(),
    archetypeReason: z.string(),
    threatAssessment: z.array(
      z.object({
        competitorType: z.string(),
        theirPositioning: z.string(),
        yourCounter: z.string(),
      })
    ),
    oneTruth: z.string(),
    personalHashtag: z.string(),
  }),

  weekZeroKit: z.object({
    hour_0_6: z.object({ action: z.string(), content: z.string() }),
    hour_6_12: z.object({ action: z.string(), content: z.string() }),
    hour_12_24: z.object({ action: z.string(), content: z.string() }),
    hour_24_36: z.object({ action: z.string(), content: z.string() }),
    hour_36_48: z.object({ action: z.string(), content: z.string() }),
    originStories: z.object({
      degen: z.string(),
      builder: z.string(),
      founder: z.string(),
    }),
    teaserThread: z.array(z.string()),
  }),

  fourWeekBattlePlan: z.object({
    week1: weekPlanSchema,
    week2: weekPlanSchema,
    week3: weekPlanSchema,
    week4: weekPlanSchema,
  }),

  insertionPoints: z.array(insertionPointSchema).length(3),

  rivalryRadar: z.object({
    competingCategory: z.string(),
    howTheyWillPosition: z.string(),
    yourCounterPosition: z.string(),
    theOneThingTheyCannotSay: z.string(),
    yourNarrativeMoat: z.string(),
  }),

  viralThreadPack: z.object({
    threads: z.array(threadSchema).length(2),
    standalonePosts: z.object({
      contrarian: z.string(),
      buildInPublic1: z.string(),
      buildInPublic2: z.string(),
      communityShoutout: z.string(),
      cta: z.string(),
    }),
    weeklyAccountabilityTemplate: z.string(),
  }),

  ecosystemAllyFinder: z.array(allySchema).length(5),
});

export type OutputSchema = z.infer<typeof outputSchema>;
