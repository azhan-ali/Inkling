"use client";

import Link from "next/link";
import { Pen } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050510]/70 backdrop-blur-2xl">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent-cyan flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-shadow">
            <Pen className="w-4 h-4 text-white" />
          </div>
          <span className="font-display text-base tracking-wider text-foreground">
            Inkling
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/#features"
            className="text-sm text-muted hover:text-foreground transition hidden sm:block"
          >
            Features
          </Link>
          <Link
            href="/#how"
            className="text-sm text-muted hover:text-foreground transition hidden sm:block"
          >
            How it Works
          </Link>
          <Link
            href="/forge"
            className="btn-primary text-sm py-2 px-5"
          >
            Launch App →
          </Link>
        </div>
      </nav>
    </header>
  );
}
