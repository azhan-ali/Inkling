"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface SketchBadgeProps {
  children: ReactNode;
  variant?: "default" | "blue" | "green" | "red" | "yellow" | "purple";
  className?: string;
}

const variantStyles = {
  default: "bg-paper-shade text-ink border-ink",
  blue: "bg-marker-blue/10 text-marker-blue border-marker-blue",
  green: "bg-marker-green/10 text-marker-green border-marker-green",
  red: "bg-marker-red/10 text-marker-red border-marker-red",
  yellow: "bg-marker-yellow/30 text-ink border-marker-yellow",
  purple: "bg-marker-purple/10 text-marker-purple border-marker-purple",
};

export function SketchBadge({
  children,
  variant = "default",
  className,
}: SketchBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block font-handwritten text-base px-3 py-0.5 border-2 rounded-sm wobble",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
