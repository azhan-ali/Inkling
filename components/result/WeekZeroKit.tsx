import type { OutputSchema } from "@/lib/schema";
import { CopyButton } from "./CopyButton";
import { SectionWrapper } from "./SectionWrapper";

type Props = { data: OutputSchema["weekZeroKit"] };

const timeSlots = [
  { key: "hour_0_6" as const, label: "Hour 0–6", emoji: "🌅", bg: "bg-card-yellow" },
  { key: "hour_6_12" as const, label: "Hour 6–12", emoji: "☀️", bg: "bg-card-orange" },
  { key: "hour_12_24" as const, label: "Hour 12–24", emoji: "🌤️", bg: "bg-card-blue" },
  { key: "hour_24_36" as const, label: "Hour 24–36", emoji: "🌙", bg: "bg-card-purple" },
  { key: "hour_36_48" as const, label: "Hour 36–48", emoji: "⭐", bg: "bg-card-green" },
];

const originStyleConfig = [
  { key: "degen" as const, emoji: "🕶️", label: "Degen Version", bg: "bg-card-orange" },
  { key: "builder" as const, emoji: "👨‍💻", label: "Builder Version", bg: "bg-card-blue" },
  { key: "founder" as const, emoji: "🎤", label: "Founder Version", bg: "bg-card-purple" },
];

export function WeekZeroKit({ data }: Props) {
  return (
    <SectionWrapper sectionNum={2} title="Week Zero Kit" emoji="⏰" badge="48-Hour Action Plan" badgeBg="bg-card-orange" cardBg="bg-white">
      {/* Timeline */}
      <div className="space-y-3 mb-6">
        {timeSlots.map((slot) => {
          const slotData = data[slot.key];
          return (
            <div key={slot.key} className={`sketch-card ${slot.bg} p-4`}>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{slot.emoji}</span>
                  <span className="font-comic text-lg text-ink">{slot.label}</span>
                </div>
                <CopyButton text={slotData.content} />
              </div>
              <p className="font-body text-xs text-pencil mb-2 italic">{slotData.action}</p>
              <div className="bg-white/70 rounded-lg p-3 border border-ink/10">
                <p className="font-body text-sm text-ink whitespace-pre-wrap">{slotData.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Origin Stories */}
      <h4 className="font-comic text-xl text-ink mb-3">📖 3 Origin Story Versions</h4>
      <div className="space-y-3 mb-6">
        {originStyleConfig.map((s) => (
          <div key={s.key} className={`sketch-card ${s.bg} p-4`}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-comic text-lg text-ink">
                {s.emoji} {s.label}
              </span>
              <CopyButton text={data.originStories[s.key]} />
            </div>
            <div className="bg-white/70 rounded-lg p-3 border border-ink/10">
              <p className="font-body text-sm text-ink whitespace-pre-wrap">{data.originStories[s.key]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Teaser Thread */}
      {data.teaserThread.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-comic text-xl text-ink">🧵 Teaser Thread</h4>
            <CopyButton text={data.teaserThread.join("\n\n")} label="Copy All" />
          </div>
          <div className="space-y-2">
            {data.teaserThread.map((tweet, i) => (
              <div key={i} className="sketch-card bg-card-mint p-3 flex items-start gap-3">
                <span className="font-comic text-pencil text-sm w-5 shrink-0">{i + 1}</span>
                <div className="flex-1">
                  <p className="font-body text-sm text-ink">{tweet}</p>
                </div>
                <CopyButton text={tweet} label="" />
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
