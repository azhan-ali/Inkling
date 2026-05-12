"use client";

import { useState } from "react";
import type { OutputSchema } from "@/lib/schema";
import { CopyButton } from "./CopyButton";
import { SectionWrapper } from "./SectionWrapper";

type Props = { data: OutputSchema["viralThreadPack"] };

const labelColors: Record<string, string> = {
  Hook: "bg-card-orange",
  Pain: "bg-card-pink",
  Insight: "bg-card-purple",
  Entry: "bg-card-blue",
  Proof: "bg-card-green",
  Vision: "bg-card-mint",
  CTA: "bg-card-yellow",
};

const standaloneConfig = [
  { key: "contrarian" as const, label: "Contrarian Take", emoji: "🔥" },
  { key: "buildInPublic1" as const, label: "Build in Public #1", emoji: "🔨" },
  { key: "buildInPublic2" as const, label: "Build in Public #2", emoji: "🔨" },
  { key: "communityShoutout" as const, label: "Community Shoutout", emoji: "🙌" },
  { key: "cta" as const, label: "Call to Action", emoji: "📣" },
];

export function ViralThreadPack({ data }: Props) {
  const [activeThread, setActiveThread] = useState(0);
  const thread = data.threads[activeThread];

  return (
    <SectionWrapper sectionNum={6} title="Viral Thread Pack" emoji="🧵" badge="Hook-Proof-Pull Formula" badgeBg="bg-card-orange" cardBg="bg-white">
      {/* Thread selector */}
      <div className="flex gap-2 mb-4">
        {data.threads.map((t, i) => (
          <button
            key={i}
            onClick={() => setActiveThread(i)}
            className={`font-comic text-sm px-4 py-1.5 rounded-lg border-2 border-ink transition-all ${
              activeThread === i ? "bg-card-orange sketch-shadow-sm scale-105" : "bg-white hover:bg-paper"
            }`}
          >
            Thread {i + 1}
          </button>
        ))}
      </div>

      {/* Thread title */}
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-comic text-lg text-ink">{thread.title}</h4>
        <CopyButton text={thread.tweets.join("\n\n")} label="Copy Full Thread" />
      </div>

      {/* Tweets */}
      <div className="space-y-2 mb-6">
        {thread.tweets.map((tweet, i) => {
          const label = thread.labels[i] ?? "";
          return (
            <div key={i} className="sketch-card bg-white p-3 flex items-start gap-3">
              <div className="flex flex-col items-center gap-1 shrink-0">
                <span className="font-comic text-pencil text-xs w-5 text-center">{i + 1}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded font-hand border border-ink/20 ${labelColors[label] ?? "bg-paper"}`}>
                  {label}
                </span>
              </div>
              <p className="font-body text-sm text-ink flex-1">{tweet}</p>
              <CopyButton text={tweet} label="" />
            </div>
          );
        })}
      </div>

      {/* Standalone posts */}
      <h4 className="font-comic text-xl text-ink mb-3">📌 Standalone Posts</h4>
      <div className="space-y-3 mb-5">
        {standaloneConfig.map((s) => (
          <div key={s.key} className="sketch-card bg-card-mint p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-comic text-base text-ink">
                {s.emoji} {s.label}
              </span>
              <CopyButton text={data.standalonePosts[s.key]} />
            </div>
            <p className="font-body text-sm text-ink">{data.standalonePosts[s.key]}</p>
          </div>
        ))}
      </div>

      {/* Weekly accountability */}
      <div className="sketch-card bg-card-yellow p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-comic text-base text-ink">📅 Weekly Accountability Template</span>
          <CopyButton text={data.weeklyAccountabilityTemplate} />
        </div>
        <p className="font-body text-sm text-ink whitespace-pre-wrap">{data.weeklyAccountabilityTemplate}</p>
      </div>
    </SectionWrapper>
  );
}
