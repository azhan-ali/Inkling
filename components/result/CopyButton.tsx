"use client";

import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyButton({ text, label = "Copy", className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    if (copied) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for older browsers / non-HTTPS
      const el = document.createElement("textarea");
      el.value = text;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.focus();
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text, copied]);

  return (
    <button
      onClick={handleCopy}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleCopy(); }}
      aria-label={copied ? "Copied!" : `Copy ${label}`}
      aria-pressed={copied}
      className={`inline-flex items-center gap-1.5 font-hand text-sm px-3 py-1.5 rounded-lg border-2 border-ink transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-marker-orange focus-visible:ring-offset-1 ${
        copied
          ? "bg-marker-green text-white border-marker-green scale-95"
          : "bg-white text-ink hover:bg-marker-yellow hover:border-marker-yellow hover:-translate-y-0.5 active:translate-y-0"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          {label}
        </>
      )}
    </button>
  );
}
