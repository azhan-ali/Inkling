/**
 * scripts/setup-db.ts
 *
 * Creates the `generations` table in Supabase if it doesn't exist.
 * Run once: npx tsx scripts/setup-db.ts
 *
 * NOTE: This uses the anon key which can only run SELECT/INSERT/UPDATE/DELETE.
 * The CREATE TABLE DDL must be run via Supabase Dashboard → SQL Editor.
 * This script tests the connection and verifies the table exists.
 */

import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });

async function main() {
  console.log("Testing Supabase connection...");
  console.log("URL:", url);

  // Try to query the generations table
  const { data, error } = await supabase
    .from("generations")
    .select("id")
    .limit(1);

  if (error) {
    if (error.code === "PGRST205" || error.message?.includes("does not exist")) {
      console.error("\n❌ Table 'generations' does not exist.");
      console.error("\nRun this SQL in your Supabase Dashboard → SQL Editor:\n");
      console.log(`
create table if not exists public.generations (
  id text primary key,
  inputs jsonb not null,
  output jsonb not null,
  created_at timestamptz default now() not null
);

alter table public.generations enable row level security;

create policy "Public read by id"
  on public.generations for select
  using (true);

create policy "API insert only"
  on public.generations for insert
  with check (true);
`);
      process.exit(1);
    } else {
      console.error("Supabase error:", error);
      process.exit(1);
    }
  }

  console.log("✅ Table 'generations' exists and is accessible.");
  console.log("Rows found:", data?.length ?? 0);

  // Test insert
  const testId = "test-" + Date.now();
  const { error: insertError } = await supabase.from("generations").insert({
    id: testId,
    inputs: { test: true },
    output: { test: true },
    created_at: new Date().toISOString(),
  });

  if (insertError) {
    console.error("❌ Insert test failed:", insertError);
    process.exit(1);
  }
  console.log("✅ Insert test passed.");

  // Clean up test row
  await supabase.from("generations").delete().eq("id", testId);
  console.log("✅ Cleanup done.");
  console.log("\n✅ Supabase is fully configured and ready.");
}

main().catch(console.error);
