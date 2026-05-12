"use client";

import type { CommunicationStyle } from "@/types/inkling";

interface StylePickerProps {
  value: CommunicationStyle | "";
  onChange: (val: CommunicationStyle) => void;
  error?: string;
}

const styles: {
  id: CommunicationStyle;
  emoji: string;
  label: string;
  desc: string;
  example: string;
  bg: string;
  border: string;
}[] = [
  {
    id: "degen",
    emoji: "🕶️",
    label: "Degen",
    desc: "Punchy, meme-aware, hype-native",
    example: '"gm. built a thing. shipping."',
    bg: "bg-card-orange",
    border: "border-marker-orange",
  },
  {
    id: "builder",
    emoji: "👨‍💻",
    label: "Builder",
    desc: "Technical credibility, data-backed",
    example: '"Anchor + Token-2022 makes this possible. Thread 🧵"',
    bg: "bg-card-blue",
    border: "border-marker-blue",
  },
  {
    id: "founder",
    emoji: "🎤",
    label: "Founder",
    desc: "Visionary, impact-focused, ecosystem leader",
    example: '"We\'re building the infrastructure layer that changes this."',
    bg: "bg-card-purple",
    border: "border-marker-purple",
  },
];

export function StylePicker({ value, onChange, error }: StylePickerProps) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {styles.map((s) => {
          const selected = value === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onChange(s.id)}
              className={`sketch-card ${s.bg} p-5 text-left transition-all cursor-pointer ${
                selected
                  ? `ring-4 ring-offset-2 ring-marker-orange scale-105 sketch-shadow-lg`
                  : "hover:scale-102"
              }`}
            >
              <div className="text-4xl mb-3">{s.emoji}</div>
              <h3 className="font-comic text-2xl text-ink mb-1">{s.label}</h3>
              <p className="font-body text-sm text-pencil mb-3">{s.desc}</p>
              <p className="font-hand text-xs text-ink-soft italic bg-white/60 rounded-lg p-2 border border-ink/10">
                {s.example}
              </p>
              {selected && (
                <div className="mt-3 inline-flex items-center gap-1 sketch-badge bg-marker-yellow text-ink text-sm">
                  ✓ Selected
                </div>
              )}
            </button>
          );
        })}
      </div>
      {error && (
        <p className="font-hand text-sm text-marker-pink mt-2">⚠ {error}</p>
      )}
    </div>
  );
}
