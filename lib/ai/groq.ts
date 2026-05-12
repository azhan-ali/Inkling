/**
 * Groq fallback client — used when Gemini is unavailable or rate-limited.
 *
 * Uses `groq-sdk` with `llama-3.3-70b-versatile` and JSON mode.
 * Includes a repair step to fix common Groq output deviations before
 * strict Zod validation.
 */

import Groq from "groq-sdk";
import type { InklingInputs } from "@/types/inkling";
import type { OutputSchema } from "@/lib/schema";
import { outputSchema } from "@/lib/schema";
import { buildPrompt } from "./prompt";
import { repairAIOutput } from "./repair";

let _client: Groq | null = null;

function getClient(): Groq {
  if (!_client) {
    const key = process.env.GROQ_API_KEY;
    if (!key) {
      throw new Error(
        "GROQ_API_KEY is not set. Add it to .env.local before calling generateWithGroq()."
      );
    }
    _client = new Groq({ apiKey: key });
  }
  return _client;
}

export async function generateWithGroq(
  inputs: InklingInputs
): Promise<OutputSchema> {
  const client = getClient();
  const fullPrompt = buildPrompt(inputs);

  const completion = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "You are a JSON API. You MUST respond with ONLY a valid JSON object. No markdown, no explanation, no code fences. The archetype field MUST be exactly one of: underdog, infrastructure, culture-shift, use-case-pioneer. The insertionPoints array MUST have exactly 3 items. The ecosystemAllyFinder array MUST have exactly 5 items. The viralThreadPack.threads array MUST have exactly 2 items, each with exactly 7 tweets and 7 labels.",
      },
      {
        role: "user",
        content: fullPrompt,
      },
    ],
    response_format: { type: "json_object" },
    temperature: 0.8,
    max_tokens: 8000,
  });

  const text = completion.choices[0]?.message?.content ?? "";

  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error(
      `Groq returned non-JSON output. Raw response (first 500 chars): ${text.slice(0, 500)}`
    );
  }

  // Repair common Groq deviations before strict validation.
  parsed = repairAIOutput(parsed);

  const validated = outputSchema.safeParse(parsed);
  if (!validated.success) {
    console.error(
      "[Groq] Output schema validation failed:",
      validated.error.flatten()
    );
    throw new Error(
      `Groq output did not match expected schema. Issues: ${JSON.stringify(
        validated.error.flatten().fieldErrors
      )}`
    );
  }

  return validated.data;
}
