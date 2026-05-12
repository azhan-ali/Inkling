import type { OutputSchema } from "@/lib/schema";
import { CopyButton } from "./CopyButton";
import { SectionWrapper } from "./SectionWrapper";

type Props = { data: OutputSchema["rivalryRadar"] };

export function RivalryRadar({ data }: Props) {
  return (
    <SectionWrapper sectionNum={5} title="Rivalry Radar" emoji="⚔️" badge="Counter-Positioning" badgeBg="bg-card-pink" cardBg="bg-white">
      {/* VS layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        {/* Them */}
        <div className="sketch-card bg-card-pink p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🤖</span>
            <span className="font-comic text-lg text-ink">THEM</span>
          </div>
          <p className="font-hand text-xs text-pencil mb-1">Competing Category</p>
          <p className="font-body text-sm text-ink mb-3">{data.competingCategory}</p>
          <p className="font-hand text-xs text-pencil mb-1">How They&apos;ll Position</p>
          <div className="bg-white/70 rounded-lg p-2">
            <p className="font-body text-sm text-ink line-through opacity-60">{data.howTheyWillPosition}</p>
          </div>
        </div>

        {/* You */}
        <div className="sketch-card bg-card-green p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🦸</span>
            <span className="font-comic text-lg text-ink">YOU</span>
          </div>
          <p className="font-hand text-xs text-pencil mb-1">Your Counter-Position</p>
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="bg-white/70 rounded-lg p-2 flex-1">
              <p className="font-body text-sm text-ink font-medium">{data.yourCounterPosition}</p>
            </div>
            <CopyButton text={data.yourCounterPosition} />
          </div>
          <p className="font-hand text-xs text-pencil mb-1">Narrative Moat</p>
          <p className="font-body text-xs text-ink-soft">{data.yourNarrativeMoat}</p>
        </div>
      </div>

      {/* One Thing They Cannot Say */}
      <div className="sketch-card bg-card-yellow p-5">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-comic text-xl text-ink">
            🔒 The One Thing They Cannot Say
          </h4>
          <CopyButton text={data.theOneThingTheyCannotSay} />
        </div>
        <div className="bg-white/70 rounded-lg p-4 border-2 border-dashed border-marker-orange">
          <p className="font-hand text-lg text-ink italic">
            &ldquo;{data.theOneThingTheyCannotSay}&rdquo;
          </p>
        </div>
        <p className="font-body text-xs text-pencil mt-2">
          This is your unfair narrative advantage. Use it in every post.
        </p>
      </div>
    </SectionWrapper>
  );
}
