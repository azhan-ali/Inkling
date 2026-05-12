/**
 * Core generation orchestrator.
 *
 * Tries Gemini first. On any error, falls back to Groq.
 * Returns the validated OutputSchema or throws with a user-friendly message.
 */

import { generateWithGemini } from "@/lib/ai/gemini";
import { generateWithGroq } from "@/lib/ai/groq";
import type { InklingInputs } from "@/types/inkling";
import type { OutputSchema } from "@/lib/schema";

export async function generateStrategy(
  inputs: InklingInputs
): Promise<OutputSchema> {
  // --- Primary: Gemini 2.5 Pro ---
  try {
    console.log("[generate] Trying Gemini 2.5 Pro...");
    const result = await generateWithGemini(inputs);
    console.log("[generate] Gemini succeeded.");
    return result;
  } catch (geminiError) {
    console.warn(
      "[generate] Gemini failed, falling back to Groq.",
      geminiError instanceof Error ? geminiError.message : geminiError
    );
  }

  // --- Fallback: Groq Llama 3.3 70B ---
  try {
    console.log("[generate] Trying Groq Llama 3.3 70B...");
    const result = await generateWithGroq(inputs);
    console.log("[generate] Groq succeeded.");
    return result;
  } catch (groqError) {
    console.error(
      "[generate] Both Gemini and Groq failed.",
      groqError instanceof Error ? groqError.message : groqError
    );
    throw new Error(
      "Our AI engine is temporarily unavailable. Please try again in a minute."
    );
  }
}
