import type { OutputSchema } from "@/lib/schema";
import { CopyButton } from "./CopyButton";
import { SectionWrapper } from "./SectionWrapper";

type Props = { data: OutputSchema["narrativeIdentity"] };

const archetypeConfig = {
  underdog: { emoji: "🥊", label: "The Underdog", color: "bg-card-orange", emotion: "Hope", spread: "Community rallies behind you" },
  infrastructure: { emoji: "⚙️", label: "The Infrastructure Play", color: "bg-card-blue", emotion: "Respect", spread: "Developer RT culture" },
  "culture-shift": { emoji: "⚡", label: "The Culture Shift", color: "bg-card-pink", emotion: "Disruption", spread: "Contrarian engagement" },
  "use-case-pioneer": { emoji: "🧭", label: "The Use-Case Pioneer", color: "bg-card-green", emotion: "Curiosity", spread: "'Why has nobody done this?'" },
};

export function NarrativeIdentity({ data }: Props) {
  const cfg = archetypeConfig[data.archetype];

  return (
    <SectionWrapper sectionNum={1} title="Narrative Identity" emoji="🎭" badge="Your Archetype" badgeBg="bg-card-purple" cardBg="bg-white">
      {/* Archetype card */}
      <div className={`sketch-card ${cfg.color} p-5 mb-5`}>
        <div className="flex items-start gap-4">
          <span className="text-5xl">{cfg.emoji}</span>
          <div className="flex-1">
            <h3 className="font-comic text-2xl text-ink mb-1">{cfg.label}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="sketch-badge bg-white text-xs">Emotion: {cfg.emotion}</span>
              <span className="sketch-badge bg-white text-xs">Spread: {cfg.spread}</span>
            </div>
            <p className="font-body text-sm text-ink-soft">{data.archetypeReason}</p>
          </div>
        </div>
      </div>

      {/* One Truth */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-comic text-lg text-ink">✦ Your One Truth</h4>
          <CopyButton text={data.oneTruth} />
        </div>
        <div className="sketch-card bg-card-yellow p-4">
          <p className="font-hand text-lg text-ink italic">&ldquo;{data.oneTruth}&rdquo;</p>
        </div>
      </div>

      {/* Personal Hashtag */}
      <div className="mb-5">
        <h4 className="font-comic text-lg text-ink mb-2">🏷️ Your Personal Hashtag</h4>
        <div className="flex items-center gap-3">
          <span className="sketch-badge bg-card-mint text-xl font-bold">{data.personalHashtag}</span>
          <CopyButton text={data.personalHashtag} />
        </div>
      </div>

      {/* Threat Assessment */}
      {data.threatAssessment.length > 0 && (
        <div>
          <h4 className="font-comic text-lg text-ink mb-3">⚔️ Threat Assessment</h4>
          <div className="space-y-3">
            {data.threatAssessment.map((t, i) => (
              <div key={i} className="sketch-card bg-card-pink p-4">
                <p className="font-comic text-base text-ink mb-1">{t.competitorType}</p>
                <p className="font-body text-xs text-pencil mb-2">
                  <span className="font-bold">They say:</span> {t.theirPositioning}
                </p>
                <div className="flex items-start justify-between gap-2">
                  <p className="font-body text-sm text-ink">
                    <span className="font-bold text-marker-green">Your counter:</span> {t.yourCounter}
                  </p>
                  <CopyButton text={t.yourCounter} label="Copy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
