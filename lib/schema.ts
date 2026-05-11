/**
 * Zod schemas — single source of truth for input + output shapes.
 *
 * Phase 1 fills these in fully. The input schema is already usable
 * because the form will consume it starting in Phase 4.
 */

import { z } from "zod";

export const inputSchema = z.object({
  projectName: z.string().min(1, "Project name is required").max(80),
  oneLiner: z
    .string()
    .min(10, "Tell us what it does in one line")
    .max(200, "Keep it crisp — 200 chars max"),
  techStack: z.string().min(2).max(300),
  targetUser: z.string().min(5).max(300),
  teamBackground: z.string().min(5).max(300),
  biggestFear: z.string().min(5).max(300),
  communicationStyle: z.enum(["degen", "builder", "founder"]),
});

export type InputSchema = z.infer<typeof inputSchema>;

// Output schema is authored in Phase 1 — see `lib/ai/prompt.ts` for the
// detailed shape that the AI must return.
export const outputSchemaStub = z.object({}).passthrough();
