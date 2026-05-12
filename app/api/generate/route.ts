/**
 * POST /api/generate
 *
 * Accepts 7 project inputs, runs them through the AI engine,
 * saves the result to Supabase, and returns { id } for the result URL.
 *
 * GET /api/generate?id=<id>
 *
 * Fetches a saved generation by id (used by the result page SSR).
 */

import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { inputSchema } from "@/lib/schema";
import { generateStrategy } from "@/lib/generate";
import { requireSupabase } from "@/lib/supabase";
import { checkRateLimit } from "@/lib/rate-limit";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

// ---------------------------------------------------------------------------
// POST — generate a new strategy
// ---------------------------------------------------------------------------

export async function POST(req: NextRequest) {
  // 1. Rate limit check
  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return errorResponse(
      "You've hit the rate limit (5 generations per hour). Come back soon.",
      429
    );
  }

  // 2. Parse + validate body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return errorResponse("Invalid JSON body.", 400);
  }

  const parsed = inputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const inputs = parsed.data;

  // 3. Generate strategy via AI
  let output;
  try {
    output = await generateStrategy(inputs);
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : "Unexpected error during generation.";
    return errorResponse(message, 500);
  }

  // 4. Save to Supabase
  const id = nanoid(10);
  try {
    const db = requireSupabase();
    const { error: dbError } = await db.from("generations").insert({
      id,
      inputs,
      output,
      created_at: new Date().toISOString(),
    });

    if (dbError) {
      console.error("[POST /api/generate] Supabase insert error:", dbError);
      // Don't fail the request — return the output inline as fallback.
      return NextResponse.json({ id: null, output }, { status: 200 });
    }
  } catch (dbErr) {
    console.error("[POST /api/generate] Supabase unavailable:", dbErr);
    // Graceful degradation: return output inline so user isn't blocked.
    return NextResponse.json({ id: null, output }, { status: 200 });
  }

  // 5. Return the generation id
  return NextResponse.json({ id }, { status: 201 });
}

// ---------------------------------------------------------------------------
// GET — fetch a saved generation by id
// ---------------------------------------------------------------------------

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id || id.trim().length === 0) {
    return errorResponse("Missing required query param: id", 400);
  }

  try {
    const db = requireSupabase();
    const { data, error } = await db
      .from("generations")
      .select("id, inputs, output, created_at")
      .eq("id", id)
      .single();

    if (error || !data) {
      return errorResponse("Generation not found.", 404);
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error("[GET /api/generate] Error:", err);
    return errorResponse("Failed to fetch generation.", 500);
  }
}
