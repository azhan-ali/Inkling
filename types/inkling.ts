/**
 * Inkling — shared TypeScript types.
 *
 * The full Zod schema lives in `lib/schema.ts` (added in Phase 1).
 * This file is the public contract between API, server, and UI.
 */

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

/**
 * Placeholder for the full AI output shape.
 * Phase 1 replaces this with the Zod-inferred type.
 */
export interface InklingOutput {
  // filled in Phase 1
  [key: string]: unknown;
}

export interface GenerationRecord {
  id: string;
  inputs: InklingInputs;
  output: InklingOutput;
  createdAt: string;
}
