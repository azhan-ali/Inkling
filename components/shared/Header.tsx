"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Pen, Sparkles, Zap, Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#fdf6e3]/96 backdrop-blur-xl border-b-[3px] border-ink shadow-[0_5px_0_0_#1a1a2e]"
            : "bg-[#fdf6e3]/80 backdrop-blur-md border-b-[2px] border-ink/20"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between gap-3">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            {/* Ink drop with splatter */}
            <div className="relative w-11 h-11">
              <div className="w-11 h-11 rounded-full bg-marker-orange border-[3px] border-ink sketch-shadow-sm flex items-center justify-center group-hover:-translate-y-2 group-hover:rotate-[15deg] transition-all duration-250 ease-out">
                <Pen className="w-[18px] h-[18px] text-white" />
              </div>
              {/* Splatter dots on hover */}
              <span className="absolute -top-1.5 right-0 w-2 h-2 rounded-full bg-marker-yellow border-[1.5px] border-ink opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-1.5 transition-all duration-200 delay-75" />
              <span className="absolute top-0 -left-1.5 w-1.5 h-1.5 rounded-full bg-marker-pink border-[1.5px] border-ink opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:-translate-x-2 transition-all duration-200 delay-100" />
              <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 rounded-full bg-marker-green border-[1.5px] border-ink opacity-0 group-hover:opacity-100 group-hover:translate-y-1.5 group-hover:translate-x-1 transition-all duration-200 delay-50" />
            </div>

            <div className="flex flex-col leading-none gap-0.5">
              <span
                className="text-[1.75rem] text-ink leading-none"
                style={{ fontFamily: "'Permanent Marker', cursive" }}
              >
                Inkling
              </span>
              <span
                className="text-[0.58rem] text-marker-orange tracking-[0.18em] uppercase hidden sm:block"
                style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}
              >
                narrative engine ✦
              </span>
            </div>
          </Link>

          {/* ── NAV LINKS — pill-style ── */}
          <div className="hidden md:flex items-center bg-white/60 border-[2px] border-ink rounded-full px-2 py-1.5 gap-0.5 sketch-shadow-sm">
            {[
              { href: "/#features", label: "Features" },
              { href: "/#how", label: "How it Works" },
              { href: "/#why", label: "Why Inkling" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative font-body text-[0.9rem] text-ink px-4 py-1.5 rounded-full hover:bg-card-yellow hover:text-ink transition-all duration-150 group"
              >
                {item.label}
                <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-marker-orange rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
              </Link>
            ))}
          </div>

          {/* ── RIGHT SIDE ── */}
          <div className="flex items-center gap-2.5 shrink-0">

            {/* "Free" live badge */}
            <div className="hidden sm:flex items-center gap-1.5 bg-card-green border-[2px] border-ink rounded-full px-3 py-1 sketch-shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-marker-green animate-pulse" />
              <span
                className="text-xs text-ink"
                style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}
              >
                Free
              </span>
            </div>

            {/* Primary CTA */}
            <Link
              href="/forge"
              className="relative overflow-hidden btn-sketch btn-primary-sketch text-[0.95rem] py-2 px-5 group"
            >
              {/* Shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <Sparkles className="w-4 h-4 group-hover:rotate-[180deg] transition-transform duration-300 relative z-10 shrink-0" />
              <span className="relative z-10 font-body font-bold" style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1rem" }}>
                Forge Now
              </span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center bg-white border-[2.5px] border-ink rounded-xl sketch-shadow-sm hover:bg-card-yellow transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <X className="w-5 h-5 text-ink" />
                : <Menu className="w-5 h-5 text-ink" />
              }
            </button>
          </div>
        </nav>
      </header>

      {/* ── MOBILE MENU — slides down ── */}
      <div
        className={`md:hidden sticky top-[68px] z-40 overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#fdf6e3]/98 backdrop-blur-xl border-b-[3px] border-ink px-5 py-4 space-y-2.5">
          {[
            { href: "/#features", label: "✦ Features", bg: "bg-card-yellow" },
            { href: "/#how", label: "⚡ How it Works", bg: "bg-card-blue" },
            { href: "/#why", label: "🎯 Why Inkling", bg: "bg-card-green" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center font-body text-base text-ink px-4 py-3 rounded-2xl ${item.bg} border-[2.5px] border-ink sketch-shadow-sm hover:-translate-y-0.5 transition-transform`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/forge"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 btn-sketch btn-primary-sketch text-lg py-3 w-full"
          >
            <Zap className="w-4 h-4" />
            Forge My Strategy →
          </Link>
        </div>
      </div>
    </>
  );
}
