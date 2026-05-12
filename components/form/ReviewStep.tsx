"use client";

import type { InputSchema } from "@/lib/schema";

interface ReviewStepProps {
  data: InputSchema;
  onEdit: (step: number) => void;
}

const fields: { label: string; key: keyof InputSchema; step: number }[] = [
  { label: "Project Name", key: "projectName", step: 0 },
  { label: "One-liner", key: "oneLiner", step: 1 },
  { label: "Tech Stack", key: "techStack", step: 2 },
  { label: "Target User", key: "targetUser", step: 3 },
  { label: "Team Background", key: "teamBackground", step: 4 },
  { label: "Biggest Fear", key: "biggestFear", step: 5 },
  { label: "Communication Style", key: "communicationStyle", step: 6 },
];

const styleEmoji: Record<string, string> = {
  degen: "🕶️ Degen",
  builder: "👨‍💻 Builder",
  founder: "🎤 Founder",
};

export function ReviewStep({ data, onEdit }: ReviewStepProps) {
  return (
    <div className="space-y-3">
      {fields.map((f) => (
        <div
          key={f.key}
          className="sketch-card bg-white p-4 flex items-start justify-between gap-4"
        >
          <div className="flex-1 min-w-0">
            <p className="font-hand text-xs text-pencil mb-0.5">{f.label}</p>
            <p className="font-body text-sm text-ink break-words">
              {f.key === "communicationStyle"
                ? styleEmoji[data[f.key]] ?? data[f.key]
                : data[f.key]}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onEdit(f.step)}
            className="font-hand text-xs text-marker-orange hover:text-ink transition shrink-0 underline"
          >
            edit
          </button>
        </div>
      ))}
    </div>
  );
}
