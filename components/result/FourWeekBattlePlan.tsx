"use client";

import { useState } from "react";
import type { OutputSchema } from "@/lib/schema";
import { SectionWrapper } from "./SectionWrapper";

type Props = { data: OutputSchema["fourWeekBattlePlan"] };

const weekConfig = [
  { key: "week1" as const, label: "Week 1", bg: "bg-card-yellow" },
  { key: "week2" as const, label: "Week 2", bg: "bg-card-blue" },
  { key: "week3" as const, label: "Week 3", bg: "bg-card-green" },
  { key: "week4" as const, label: "Week 4", bg: "bg-card-purple" },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sun"];

export function FourWeekBattlePlan({ data }: Props) {
  const [activeWeek, setActiveWeek] = useState<"week1" | "week2" | "week3" | "week4">("week1");
  const week = data[activeWeek];
  const cfg = weekConfig.find((w) => w.key === activeWeek)!;

  return (
    <SectionWrapper sectionNum={3} title="4-Week Battle Plan" emoji="📅" badge="Content Calendar" badgeBg="bg-card-green" cardBg="bg-white">
      {/* Week tabs */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {weekConfig.map((w) => (
          <button
            key={w.key}
            onClick={() => setActiveWeek(w.key)}
            className={`font-comic text-base px-4 py-1.5 rounded-lg border-2 border-ink transition-all ${
              activeWeek === w.key
                ? `${w.bg} sketch-shadow-sm scale-105`
                : "bg-white hover:bg-paper"
            }`}
          >
            {w.label}
          </button>
        ))}
      </div>

      {/* Week content */}
      <div className={`sketch-card ${cfg.bg} p-5`}>
        <h3 className="font-comic text-2xl text-ink mb-4">{week.theme}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            { label: "Why", value: week.why, emoji: "🎯" },
            { label: "How", value: week.how, emoji: "⚙️" },
            { label: "Proof", value: week.proof, emoji: "📊" },
            { label: "Sets Up", value: week.future, emoji: "🚀" },
          ].map((item) => (
            <div key={item.label} className="bg-white/70 rounded-lg p-3">
              <p className="font-hand text-xs text-pencil mb-1">
                {item.emoji} {item.label}
              </p>
              <p className="font-body text-sm text-ink">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Daily post types */}
        {week.dailyPostTypes.length > 0 && (
          <div>
            <p className="font-hand text-xs text-pencil mb-2">📆 Daily Post Types</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {days.map((day, i) => (
                <div key={day} className="bg-white/70 rounded-lg p-2 text-center">
                  <p className="font-comic text-xs text-pencil">{day}</p>
                  <p className="font-body text-xs text-ink mt-0.5 leading-tight">
                    {week.dailyPostTypes[i] ?? "—"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
