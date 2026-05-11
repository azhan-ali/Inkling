/**
 * Inkling — shared TypeScript types.
 *
 * InklingOutput is now derived from the Zod schema so the type and
 * runtime validation are always in sync.
 */

import type { OutputSchema } from "@/lib/schema";

export type CommunicationStyle = "degen" | "builder" | "founder";

export type Archetype =
  | "underdog"
  | "infrastructure"
  | "culture-shift"
  | "use-case-pioneer";

export interface InklingInputs {
  projectName: string;
  oneLiner: string;
  techStack: string;
  targetUser: string;
  teamBackground: string;
  biggestFear: string;
  communicationStyle: CommunicationStyle;
}

/** Full AI output — 7 sections. Derived from Zod schema for single source of truth. */
export type InklingOutput = OutputSchema;

export interface GenerationRecord {
  id: string;
  inputs: InklingInputs;
  output: InklingOutput;
  createdAt: string;
}
