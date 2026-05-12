import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { NarrativeIdentity } from "@/components/result/NarrativeIdentity";
import { WeekZeroKit } from "@/components/result/WeekZeroKit";
import { FourWeekBattlePlan } from "@/components/result/FourWeekBattlePlan";
import { InsertionPointsMap } from "@/components/result/InsertionPointsMap";
import { RivalryRadar } from "@/components/result/RivalryRadar";
import { ViralThreadPack } from "@/components/result/ViralThreadPack";
import { EcosystemAllyFinder } from "@/components/result/EcosystemAllyFinder";
import { requireSupabase } from "@/lib/supabase";
import type { OutputSchema } from "@/lib/schema";
import type { InklingInputs } from "@/types/inkling";

// ---------------------------------------------------------------------------
// Data fetching
// ---------------------------------------------------------------------------

async function getGeneration(id: string): Promise<{
  inputs: InklingInputs;
  output: OutputSchema;
} | null> {
  try {
    const db = requireSupabase();
    const { data, error } = await db
      .from("generations")
      .select("inputs, output")
      .eq("id", id)
      .single();

    if (error || !data) return null;
    return data as { inputs: InklingInputs; output: OutputSchema };
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Share tweet text
// ---------------------------------------------------------------------------

function buildShareTweet(
  projectName: string,
  archetype: string,
  hashtag: string,
  id: string
): string {
  const base =
    typeof window !== "undefined" ? window.location.origin : "https://inkling.vercel.app";
  return encodeURIComponent(
    `Just got my Inkling strategy for ${projectName}!\n\nArchetype: ${archetype}\n\n${hashtag}\n\nGenerate yours → ${base}/result/${id}`
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function ResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // "preview" id = DB fallback, output stored in sessionStorage (handled client-side)
  // For all real ids, fetch from Supabase
  if (id === "preview") {
    return <PreviewFallbackPage />;
  }

  const gen = await getGeneration(id);
  if (!gen) notFound();

  const { inputs, output } = gen;
  const archetype = output.narrativeIdentity.archetypeName;
  const hashtag = output.narrativeIdentity.personalHashtag;
  const tweetText = buildShareTweet(inputs.projectName, archetype, hashtag, id);

  return (
    <>
      <Header />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-10">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="sketch-badge bg-card-yellow mb-2 inline-flex">
              ✦ Strategy Ready
            </div>
            <h1 className="font-comic text-3xl sm:text-4xl text-ink">
              {inputs.projectName}
            </h1>
            <p className="font-body text-sm text-pencil mt-1">
              {inputs.oneLiner}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Share tweet */}
            <a
              href={`https://twitter.com/intent/tweet?text=${tweetText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sketch btn-secondary-sketch text-sm py-2 px-4"
            >
              🐦 Share Archetype
            </a>
            {/* Forge again */}
            <Link href="/forge" className="btn-sketch btn-ghost-sketch text-sm py-2 px-4">
              ✏️ New Strategy
            </Link>
          </div>
        </div>

        {/* Quick nav */}
        <div className="sketch-card bg-card-mint p-4 mb-8">
          <p className="font-hand text-xs text-pencil mb-2">Jump to section:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "01 Identity",
              "02 Week Zero",
              "03 Battle Plan",
              "04 Insertion",
              "05 Rivalry",
              "06 Threads",
              "07 Allies",
            ].map((s) => (
              <span
                key={s}
                className="font-hand text-xs px-2 py-1 bg-white border border-ink/20 rounded-lg text-ink"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* 7 Sections */}
        <div className="space-y-5">
          <NarrativeIdentity data={output.narrativeIdentity} />
          <WeekZeroKit data={output.weekZeroKit} />
          <FourWeekBattlePlan data={output.fourWeekBattlePlan} />
          <InsertionPointsMap data={output.insertionPoints} />
          <RivalryRadar data={output.rivalryRadar} />
          <ViralThreadPack data={output.viralThreadPack} />
          <EcosystemAllyFinder data={output.ecosystemAllyFinder} />
        </div>

        {/* Bottom CTA */}
        <div className="sketch-card bg-card-yellow p-6 text-center mt-8">
          <p className="font-comic text-2xl text-ink mb-2">
            Your war room is ready. 🚀
          </p>
          <p className="font-body text-sm text-pencil mb-4">
            Start with the Week Zero Kit. Post your origin story in the next 6 hours.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href={`https://twitter.com/intent/tweet?text=${tweetText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sketch btn-primary-sketch text-base py-2 px-6"
            >
              🐦 Share My Archetype
            </a>
            <Link href="/forge" className="btn-sketch btn-ghost-sketch text-base py-2 px-6">
              ✏️ Generate Another
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// ---------------------------------------------------------------------------
// Preview fallback (DB unavailable — output in sessionStorage)
// ---------------------------------------------------------------------------

function PreviewFallbackPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="sketch-card bg-card-yellow p-10 text-center max-w-md">
          <p className="text-4xl mb-3">⚠️</p>
          <h1 className="font-comic text-3xl text-ink mb-2">
            Result Not Saved
          </h1>
          <p className="font-body text-sm text-pencil mb-4">
            Your strategy was generated but couldn&apos;t be saved to the database.
            Please try generating again.
          </p>
          <Link href="/forge" className="btn-sketch btn-primary-sketch text-base py-2 px-6">
            Try Again →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
