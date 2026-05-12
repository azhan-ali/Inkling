"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SectionWrapperProps {
  sectionNum: number;
  title: string;
  emoji: string;
  badge?: string;
  badgeBg?: string;
  cardBg?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function SectionWrapper({
  sectionNum,
  title,
  emoji,
  badge,
  badgeBg = "bg-card-yellow",
  cardBg = "bg-white",
  children,
  defaultOpen = true,
}: SectionWrapperProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`sketch-card ${cardBg} overflow-hidden`}>
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="font-comic text-pencil text-sm w-6 shrink-0">
            {String(sectionNum).padStart(2, "0")}
          </span>
          <span className="text-2xl">{emoji}</span>
          <div>
            <h2 className="font-comic text-xl sm:text-2xl text-ink leading-tight">
              {title}
            </h2>
            {badge && (
              <span className={`inline-block font-hand text-xs px-2 py-0.5 rounded-full border border-ink/20 ${badgeBg} mt-0.5`}>
                {badge}
              </span>
            )}
          </div>
        </div>
        <div className="shrink-0 text-pencil">
          {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {/* Content */}
      {open && (
        <div className="px-5 sm:px-6 pb-6 border-t-2 border-dashed border-paper-grid pt-4">
          {children}
        </div>
      )}
    </div>
  );
}
