"use client";

import { cn } from "@/lib/utils";
import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

interface SketchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost" | "danger";
  loading?: boolean;
  size?: "sm" | "md" | "lg";
}

const variantStyles = {
  primary:
    "bg-marker-yellow text-ink border-2 border-ink sketch-shadow hover:-translate-y-0.5 hover:shadow-none active:translate-y-0.5",
  ghost:
    "bg-transparent text-ink border-2 border-pencil/50 hover:border-ink hover:bg-paper-shade",
  danger:
    "bg-marker-red/10 text-marker-red border-2 border-marker-red hover:bg-marker-red/20",
};

const sizeStyles = {
  sm: "px-4 py-1.5 text-lg",
  md: "px-6 py-2.5 text-xl",
  lg: "px-8 py-3.5 text-2xl",
};

export function SketchButton({
  children,
  variant = "primary",
  loading = false,
  size = "md",
  className,
  disabled,
  ...props
}: SketchButtonProps) {
  return (
    <button
      className={cn(
        "font-handwritten rounded-sm transition-all duration-150 cursor-pointer wobble inline-flex items-center justify-center gap-2",
        variantStyles[variant],
        sizeStyles[size],
        (disabled || loading) && "opacity-60 cursor-not-allowed pointer-events-none",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-5 h-5 animate-spin" />}
      {children}
    </button>
  );
}
