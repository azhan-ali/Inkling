import { Pen } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-auto relative">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-accent-cyan flex items-center justify-center">
                <Pen className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-display text-sm tracking-wider">
                Inkling
              </span>
            </div>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              AI-powered narrative strategy engine for Solana hackathon builders.
              You built it. We&apos;ll ink the story.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display text-xs tracking-wider text-accent-light mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <Link href="/#features" className="hover:text-foreground transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how" className="hover:text-foreground transition">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/forge" className="hover:text-foreground transition">
                  Try Inkling
                </Link>
              </li>
            </ul>
          </div>

          {/* Built On */}
          <div>
            <h4 className="font-display text-xs tracking-wider text-accent-light mb-4">
              Built With
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>Solana Ecosystem</li>
              <li>Google Gemini AI</li>
              <li>SagaPad Marketplace</li>
              <li>Colosseum Hackathon</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            Built for Colosseum × SagaPad Hackathon · Topic 1 — Social Playbook
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
