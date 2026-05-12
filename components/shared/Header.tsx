"use client";

import Link from "next/link";
import { Pen } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition">
            <Pen className="w-4 h-4 text-accent-light" />
          </div>
          <span className="text-lg font-semibold text-foreground">
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
            className="text-sm font-medium px-4 py-2 bg-accent hover:bg-accent-light text-white rounded-lg transition"
          >
            Get Started →
          </Link>
        </div>
      </nav>
    </header>
  );
}
