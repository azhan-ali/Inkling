import type { OutputSchema } from "@/lib/schema";
import { CopyButton } from "./CopyButton";
import { SectionWrapper } from "./SectionWrapper";

type Props = { data: OutputSchema["insertionPoints"] };

const riskConfig = {
  LOW: { bg: "bg-card-green", badge: "bg-marker-green", label: "LOW RISK", emoji: "🟢" },
  MEDIUM: { bg: "bg-card-yellow", badge: "bg-marker-yellow", label: "MEDIUM RISK", emoji: "🟡" },
  HIGH: { bg: "bg-card-pink", badge: "bg-marker-pink", label: "HIGH RISK", emoji: "🔴" },
};

export function InsertionPointsMap({ data }: Props) {
  return (
    <SectionWrapper sectionNum={4} title="Insertion Points Map" emoji="🗺️" badge="3 Live Debates" badgeBg="bg-card-blue" cardBg="bg-white">
      <div className="space-y-5">
        {data.map((point, i) => {
          const risk = riskConfig[point.riskLevel];
          return (
            <div key={i} className={`sketch-card ${risk.bg} p-5`}>
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-comic text-pencil text-sm">#{i + 1}</span>
                    <span className={`sketch-badge text-xs text-white ${risk.badge}`}>
                      {risk.emoji} {risk.label}
                    </span>
                  </div>
                  <h4 className="font-comic text-lg text-ink">{point.debate}</h4>
                </div>
              </div>

              {/* Angle */}
              <div className="mb-3">
                <p className="font-hand text-xs text-pencil mb-1">Your Angle</p>
                <p className="font-body text-sm text-ink">{point.yourAngle}</p>
              </div>

              {/* Pre-written reply */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-hand text-xs text-pencil">Pre-Written Reply</p>
                  <CopyButton text={point.preWrittenReply} />
                </div>
                <div className="bg-white/80 rounded-lg p-3 border border-ink/10">
                  <p className="font-body text-sm text-ink">{point.preWrittenReply}</p>
                </div>
              </div>

              {/* Meta */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/60 rounded-lg p-2">
                  <p className="font-hand text-xs text-pencil">Best Account</p>
                  <p className="font-body text-sm text-ink font-medium">{point.bestAccountToReplyTo}</p>
                </div>
                <div className="bg-white/60 rounded-lg p-2">
                  <p className="font-hand text-xs text-pencil">Optimal Timing</p>
                  <p className="font-body text-sm text-ink">{point.optimalTiming}</p>
                </div>
              </div>

              {/* Risk advice */}
              <div className="mt-3 bg-white/60 rounded-lg p-2">
                <p className="font-hand text-xs text-pencil mb-0.5">Tactical Advice</p>
                <p className="font-body text-xs text-ink-soft">{point.riskAdvice}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
