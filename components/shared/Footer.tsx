import { Pen } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-card-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                <Pen className="w-4 h-4 text-accent-light" />
              </div>
              <span className="text-lg font-semibold">Inkling</span>
            </div>
            <p className="text-sm text-muted max-w-sm">
              AI-powered narrative strategy engine for Solana hackathon builders.
              You built it. We&apos;ll ink the story.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-muted">
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
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Built On
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>Solana</li>
              <li>Google Gemini</li>
              <li>SagaPad Marketplace</li>
              <li>Colosseum Hackathon</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            Built for the Colosseum × SagaPad Hackathon · Topic 1 — Social Playbook
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
