"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Pen, Sparkles } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b-[3px] border-ink transition-shadow duration-300 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-[68px] flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          {/* Ink drop icon */}
          <div className="relative w-10 h-10">
            <div className="w-10 h-10 rounded-full bg-marker-orange border-[3px] border-ink sketch-shadow-sm flex items-center justify-center group-hover:-translate-y-1 group-hover:rotate-6 transition-all duration-200">
              <Pen className="w-4 h-4 text-white" />
            </div>
            {/* Tiny sparkle */}
            <span className="absolute -top-1 -right-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">✦</span>
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="font-comic text-[1.6rem] text-ink leading-none"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              Inkling
            </span>
            <span className="font-hand text-[0.65rem] text-pencil tracking-wide hidden sm:block">
              narrative engine
            </span>
          </div>
        </Link>

        {/* ── Nav links ── */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { href: "/#features", label: "Features" },
            { href: "/#how", label: "How it Works" },
            { href: "/#why", label: "Why Inkling" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-[0.95rem] text-ink px-3 py-1.5 rounded-lg hover:bg-card-yellow hover:text-ink transition-all duration-150 relative group"
            >
              {item.label}
              {/* Hover underline squiggle */}
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-marker-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </Link>
          ))}
        </div>

        {/* ── Right side ── */}
        <div className="flex items-center gap-3 shrink-0">
          {/* "Live" indicator */}
          <div className="hidden sm:flex items-center gap-1.5 font-hand text-xs text-pencil">
            <span className="w-2 h-2 rounded-full bg-marker-green animate-pulse" />
            Free to use
          </div>

          {/* CTA button */}
          <Link
            href="/forge"
            className="btn-sketch btn-primary-sketch text-[1rem] py-2 px-5 group"
          >
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>Forge Now</span>
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
