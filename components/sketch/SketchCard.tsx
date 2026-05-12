"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface SketchCardProps {
  children: ReactNode;
  className?: string;
  rotate?: number;
  tape?: boolean;
  shadow?: boolean;
}

/**
 * SketchCard — a paper card with wobbly border, optional tape corners,
 * and slight random rotation for the hand-drawn aesthetic.
 */
export function SketchCard({
  children,
  className,
  rotate = 0,
  tape = false,
  shadow = true,
}: SketchCardProps) {
  return (
    <div
      className={cn(
        "relative bg-white border-2 border-ink rounded-sm p-5 wobble",
        shadow && "sketch-shadow",
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {tape && (
        <>
          <div className="absolute -top-2 left-4 w-8 h-4 bg-marker-yellow/80 rotate-[-5deg] rounded-sm border border-marker-yellow" />
          <div className="absolute -top-2 right-4 w-8 h-4 bg-marker-yellow/80 rotate-[3deg] rounded-sm border border-marker-yellow" />
        </>
      )}
      {children}
    </div>
  );
}
