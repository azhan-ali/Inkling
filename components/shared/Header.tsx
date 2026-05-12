"use client";

import Link from "next/link";
import { Pen } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b-2 border-ink/10 py-4 px-6">
      <nav className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full border-2 border-ink flex items-center justify-center wobble bg-marker-yellow/30 group-hover:bg-marker-yellow/60 transition">
            <Pen className="w-4 h-4 text-ink" />
          </div>
          <span className="font-handwritten text-3xl text-ink">Inkling</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/#features"
            className="font-body-hand text-lg text-pencil hover:text-ink transition hidden sm:block"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="font-body-hand text-lg text-pencil hover:text-ink transition hidden sm:block"
          >
            How it works
          </Link>
          <Link
            href="/forge"
            className="font-handwritten text-xl px-4 py-1.5 bg-marker-yellow text-ink border-2 border-ink rounded-sm sketch-shadow-sm hover:-translate-y-0.5 transition wobble"
          >
            Forge →
          </Link>
        </div>
      </nav>
    </header>
  );
}
