import { createClient } from "@supabase/supabase-js";

/**
 * Single shared Supabase client for the project.
 *
 * Uses the anon key — all writes/reads are expected to go through our
 * API route with server-side validation. RLS on the `generations` table
 * allows public read by `id` only.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  url && anonKey
    ? createClient(url, anonKey, {
        auth: { persistSession: false },
      })
    : null;

/**
 * Guard used by server code. Throws a readable error if env is missing,
 * so developers see it immediately instead of a cryptic null deref.
 */
export function requireSupabase() {
  if (!supabase) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local."
    );
  }
  return supabase;
}
