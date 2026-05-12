import type { OutputSchema } from "@/lib/schema";
import { CopyButton } from "./CopyButton";
import { SectionWrapper } from "./SectionWrapper";

type Props = { data: OutputSchema["ecosystemAllyFinder"] };

const cardColors = [
  "bg-card-yellow",
  "bg-card-blue",
  "bg-card-green",
  "bg-card-purple",
  "bg-card-orange",
];

export function EcosystemAllyFinder({ data }: Props) {
  return (
    <SectionWrapper sectionNum={7} title="Ecosystem Ally Finder" emoji="🤝" badge="5 Collaborators" badgeBg="bg-card-mint" cardBg="bg-white">
      <div className="space-y-4">
        {data.map((ally, i) => (
          <div key={i} className={`sketch-card ${cardColors[i % cardColors.length]} p-5`}>
            {/* Handle */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <span className="font-comic text-pencil text-sm">#{i + 1}</span>
                <h4 className="font-comic text-xl text-ink">{ally.allyHandle}</h4>
              </div>
            </div>

            {/* Why + Angle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="bg-white/70 rounded-lg p-3">
                <p className="font-hand text-xs text-pencil mb-1">🎯 Why They Matter</p>
                <p className="font-body text-sm text-ink">{ally.why}</p>
              </div>
              <div className="bg-white/70 rounded-lg p-3">
                <p className="font-hand text-xs text-pencil mb-1">🔗 Collaboration Angle</p>
                <p className="font-body text-sm text-ink">{ally.angle}</p>
              </div>
            </div>

            {/* Approach script */}
            <div className="bg-white/70 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <p className="font-hand text-xs text-pencil">💬 How to Approach</p>
                <CopyButton text={ally.howToApproach} />
              </div>
              <p className="font-body text-sm text-ink italic">{ally.howToApproach}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
