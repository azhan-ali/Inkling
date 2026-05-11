/**
 * Groq fallback client (Phase 1 stub).
 *
 * Will use `groq-sdk` with `model: 'llama-3.3-70b-versatile'` and
 * `response_format: { type: 'json_object' }`.
 */

export async function generateWithGroq(): Promise<never> {
  throw new Error("generateWithGroq is not implemented yet — built in Phase 1.");
}
