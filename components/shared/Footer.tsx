import Link from "next/link";
import { Pen } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-3 border-ink mt-auto bg-paper">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-marker-orange border-2 border-ink flex items-center justify-center">
                <Pen className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-comic text-2xl text-ink">Inkling</span>
            </div>
            <p className="font-body text-sm text-pencil max-w-xs leading-relaxed">
              AI-powered narrative strategy engine for Solana hackathon builders.
              You built it. We&apos;ll ink the story.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-comic text-lg text-ink mb-3">Product</h4>
            <ul className="space-y-2 font-body text-sm text-pencil">
              <li><Link href="/#features" className="hover:text-ink transition">Features</Link></li>
              <li><Link href="/#how" className="hover:text-ink transition">How it Works</Link></li>
              <li><Link href="/forge" className="hover:text-ink transition">Try Inkling</Link></li>
            </ul>
          </div>

          {/* Built On */}
          <div>
            <h4 className="font-comic text-lg text-ink mb-3">Built With</h4>
            <ul className="space-y-2 font-body text-sm text-pencil">
              <li>Solana Ecosystem</li>
              <li>Google Gemini AI</li>
              <li>SagaPad Marketplace</li>
              <li>Colosseum Hackathon</li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-paper-grid mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-pencil">
            Built for Colosseum × SagaPad Hackathon · Topic 1 — Social Playbook
          </p>
          <div className="flex items-center gap-4 font-body text-xs text-pencil">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
