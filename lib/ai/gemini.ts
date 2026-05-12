/**
 * Gemini 2.5 Pro client — primary AI provider for Inkling.
 *
 * Uses `@google/generative-ai` with JSON mode enforced via
 * `responseMimeType: 'application/json'` so the output is always parseable.
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import type { InklingInputs } from "@/types/inkling";
import type { OutputSchema } from "@/lib/schema";
import { outputSchema } from "@/lib/schema";
import { buildPrompt } from "./prompt";
import { repairAIOutput } from "./repair";

let _client: GoogleGenerativeAI | null = null;

function getClient(): GoogleGenerativeAI {
  if (!_client) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error(
        "GEMINI_API_KEY is not set. Add it to .env.local before calling generateWithGemini()."
      );
    }
    _client = new GoogleGenerativeAI(key);
  }
  return _client;
}

export async function generateWithGemini(
  inputs: InklingInputs
): Promise<OutputSchema> {
  const client = getClient();

  const model = client.getGenerativeModel({
    // gemini-2.5-flash has a generous free tier (500 RPD).
    // gemini-2.5-pro has 0 free-tier quota — use flash for free accounts.
    model: "gemini-2.5-flash",
    generationConfig: {
      // Force JSON output — prevents markdown fences and prose wrapping.
      responseMimeType: "application/json",
      temperature: 0.85,
      maxOutputTokens: 8192,
    },
  });

  const fullPrompt = buildPrompt(inputs);

  const result = await model.generateContent(fullPrompt);
  const text = result.response.text();

  // Parse and validate against our Zod schema.
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error(
      `Gemini returned non-JSON output. Raw response (first 500 chars): ${text.slice(0, 500)}`
    );
  }

  // Repair common deviations before strict validation.
  parsed = repairAIOutput(parsed);

  const validated = outputSchema.safeParse(parsed);
  if (!validated.success) {
    // Log the issues for debugging but throw a clean error upstream.
    console.error("[Gemini] Output schema validation failed:", validated.error.flatten());
    throw new Error(
      `Gemini output did not match expected schema. Issues: ${JSON.stringify(validated.error.flatten().fieldErrors)}`
    );
  }

  return validated.data;
}
