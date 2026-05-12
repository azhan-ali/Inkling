"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Pen, Sparkles, Zap } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-b-[3px] border-ink shadow-[0_4px_0_0_#1a1a2e]"
          : "border-b-[3px] border-ink/30"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-[70px] flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          {/* Animated ink drop */}
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-marker-orange border-[3px] border-ink flex items-center justify-center sketch-shadow-sm group-hover:-translate-y-1.5 group-hover:rotate-12 transition-all duration-200">
              <Pen className="w-4 h-4 text-white" />
            </div>
            {/* Ink splatter dots */}
            <span className="absolute -top-1 -right-0.5 w-2 h-2 rounded-full bg-marker-yellow border border-ink opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-200" />
            <span className="absolute -bottom-0.5 -left-1 w-1.5 h-1.5 rounded-full bg-marker-pink border border-ink opacity-0 group-hover:opacity-100 group-hover:translate-y-1 group-hover:-translate-x-1 transition-all duration-200 delay-75" />
          </div>

          <div className="flex flex-col leading-none">
            <span
              className="text-[1.7rem] text-ink leading-none tracking-tight"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              Inkling
            </span>
            <span className="font-hand text-[0.6rem] text-marker-orange tracking-widest uppercase hidden sm:block">
              narrative engine ✦
            </span>
          </div>
        </Link>

        {/* ── Nav links (desktop) ── */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { href: "/#features", label: "Features", emoji: "✦" },
            { href: "/#how", label: "How it Works", emoji: "⚡" },
            { href: "/#why", label: "Why Inkling", emoji: "🎯" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative font-body text-[0.95rem] text-ink px-4 py-2 rounded-xl hover:bg-card-yellow transition-all duration-150"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-1 text-xs">
                {item.emoji}
              </span>
              {item.label}
              {/* Animated underline */}
              <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-marker-orange rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
          ))}
        </div>

        {/* ── Right side ── */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Live badge */}
          <div className="hidden sm:flex items-center gap-1.5 sketch-badge bg-card-green text-xs py-1 px-3">
            <span className="w-1.5 h-1.5 rounded-full bg-marker-green animate-pulse" />
            <span className="font-hand text-xs text-ink">Free</span>
          </div>

          {/* Primary CTA */}
          <Link
            href="/forge"
            className="btn-sketch btn-primary-sketch text-[1rem] py-2 px-5 group relative overflow-hidden"
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
            <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300 relative z-10" />
            <span className="relative z-10">Forge Now</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 sketch-border-sm rounded-lg bg-white"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-ink rounded transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-ink rounded transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-ink rounded transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden border-t-[3px] border-ink bg-paper px-5 py-4 space-y-2">
          {[
            { href: "/#features", label: "Features", bg: "bg-card-yellow" },
            { href: "/#how", label: "How it Works", bg: "bg-card-blue" },
            { href: "/#why", label: "Why Inkling", bg: "bg-card-green" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block font-body text-base text-ink px-4 py-3 rounded-xl ${item.bg} border-2 border-ink sketch-shadow-sm`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/forge"
            onClick={() => setMobileOpen(false)}
            className="block btn-sketch btn-primary-sketch text-lg py-3 text-center w-full justify-center"
          >
            <Zap className="w-4 h-4" />
            Forge My Strategy →
          </Link>
        </div>
      )}
    </header>
  );
}
