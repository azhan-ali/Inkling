"use client";
import Link from "next/link";
import { Pen } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b-3 border-ink">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-marker-orange border-3 border-ink sketch-shadow-sm flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
            <Pen className="w-4 h-4 text-white" />
          </div>
          <span className="font-comic text-2xl text-ink tracking-wide">Inkling</span>
        </Link>

        {/* Nav */}
        <div className="hidden sm:flex items-center gap-6">
          <Link href="/#features" className="font-body text-base text-ink hover:text-marker-orange transition">Features</Link>
          <Link href="/#how" className="font-body text-base text-ink hover:text-marker-orange transition">How it Works</Link>
          <Link href="/#why" className="font-body text-base text-ink hover:text-marker-orange transition">Why Inkling</Link>
        </div>

        {/* CTA */}
        <Link href="/forge" className="btn-sketch btn-primary-sketch text-base py-2 px-5">
          <Pen className="w-4 h-4" />
          Start Forging →
        </Link>
      </nav>
    </header>
  );
}
