import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import {
  Compass,
  Clock,
  Map,
  Swords,
  BookOpen,
  Zap,
  Users,
  ArrowRight,
  Sparkles,
  Target,
  Pen,
  CheckCircle2,
  XCircle,
  Rocket,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const features = [
  {
    icon: Compass,
    title: "Narrative Archetype",
    description: "Discover your identity — Underdog, Infrastructure, Culture Shift, or Pioneer. With threat assessment.",
    color: "from-purple-500/20 to-purple-900/10",
    iconColor: "text-purple-400",
  },
  {
    icon: Clock,
    title: "Week Zero Kit",
    description: "Hour-by-hour 48hr action plan with copy-paste posts. Execute before momentum dies.",
    color: "from-cyan-500/20 to-cyan-900/10",
    iconColor: "text-cyan-400",
  },
  {
    icon: Map,
    title: "Insertion Points Map",
    description: "3 live Solana debates + pre-written replies + risk levels + optimal timing windows.",
    color: "from-blue-500/20 to-blue-900/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Swords,
    title: "Rivalry Radar",
    description: "How competitors will position. Your counter-strategy. Your unfair narrative advantage.",
    color: "from-red-500/20 to-red-900/10",
    iconColor: "text-red-400",
  },
  {
    icon: BookOpen,
    title: "3 Origin Stories",
    description: "Same story in Degen, Builder, and Founder voice. Pick what fits. Ready to post.",
    color: "from-emerald-500/20 to-emerald-900/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: Zap,
    title: "Viral Thread Pack",
    description: "2 complete 7-tweet threads (Hook-Proof-Pull) + 5 standalone posts + your hashtag.",
    color: "from-amber-500/20 to-amber-900/10",
    iconColor: "text-amber-400",
  },
  {
    icon: Users,
    title: "Ecosystem Ally Finder",
    description: "5 builders to collaborate with, cross-promo angles, and non-pitchy approach scripts.",
    color: "from-pink-500/20 to-pink-900/10",
    iconColor: "text-pink-400",
  },
];

const steps = [
  { num: "01", emoji: "📝", title: "Fill 7 Fields", desc: "Project name, one-liner, tech stack, target user, team, fear, and style." },
  { num: "02", emoji: "🧠", title: "AI Analyzes", desc: "Archetype scoring, ecosystem mapping, rivalry detection, tone calibration." },
  { num: "03", emoji: "⚡", title: "Strategy Generated", desc: "Complete 7-section war room in under 60 seconds." },
  { num: "04", emoji: "🎯", title: "Post & Insert", desc: "Origin story live in 6 hours. Insertion points hit in 12 hours." },
  { num: "05", emoji: "📈", title: "Compound Signal", desc: "4-week battle plan. Every post builds on the last." },
  { num: "06", emoji: "🚀", title: "Become Visible", desc: "From invisible builder to ecosystem voice." },
];

const comparisons = [
  { feature: "Strategy type", inkling: "Personalized war room", others: "Generic calendar" },
  { feature: "Time to first post", inkling: "< 6 hours", others: "Days of planning" },
  { feature: "Competitor awareness", inkling: "Rivalry Radar", others: "None" },
  { feature: "Ecosystem intelligence", inkling: "Live Solana data", others: "Generic advice" },
  { feature: "Content quality", inkling: "Copy-paste ready", others: "Templates" },
  { feature: "Insertion strategy", inkling: "3 debates + replies", others: "Post 3x/week" },
  { feature: "Retention", inkling: "Weekly Ally Refresh", others: "One-time use" },
  { feature: "Built for Solana", inkling: "Native", others: "Generic" },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        {/* ===== HERO ===== */}
        <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
          {/* Decorative orbiting elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-30" aria-hidden="true">
            <div className="orbit absolute top-1/2 left-1/2">
              <div className="w-2 h-2 rounded-full bg-accent-light" />
            </div>
            <div className="orbit-reverse absolute top-1/2 left-1/2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            </div>
            <div className="orbit-slow absolute top-1/2 left-1/2">
              <div className="w-1 h-1 rounded-full bg-accent-pink" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-sm text-accent-light mb-8 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Colosseum × SagaPad Hackathon</span>
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="gradient-text-hero">
              You Built It.
            </span>
            <br />
            <span className="gradient-text-hero" style={{ animationDelay: "2s" }}>
              We&apos;ll Ink The Story.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            AI-powered narrative strategy engine for Solana hackathon builders.
            <br className="hidden sm:block" />
            <span className="text-foreground font-medium">7 inputs</span> →{" "}
            <span className="text-foreground font-medium">complete war room</span> →{" "}
            <span className="text-foreground font-medium">60 seconds</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link href="/forge" className="btn-primary inline-flex items-center gap-2 text-base">
              <Rocket className="w-4 h-4" />
              Forge Your Narrative
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/#how" className="btn-secondary inline-flex items-center gap-2 text-base">
              See How It Works
            </Link>
          </div>

          {/* Stats */}
          <div className="glass-card inline-flex items-center gap-6 sm:gap-10 px-8 py-4 rounded-2xl">
            <div className="text-center">
              <p className="font-display text-2xl text-accent-light">7</p>
              <p className="text-xs text-muted mt-0.5">Inputs</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="font-display text-2xl text-accent-cyan">7</p>
              <p className="text-xs text-muted mt-0.5">Sections</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="font-display text-2xl text-accent-pink">&lt;60s</p>
              <p className="text-xs text-muted mt-0.5">Generation</p>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="text-center hidden sm:block">
              <p className="font-display text-2xl text-success">100%</p>
              <p className="text-xs text-muted mt-0.5">Copy-Paste</p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mt-10 animate-bounce">↓ scroll</p>
        </section>

        {/* ===== FEATURES ===== */}
        <section id="features" className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Features</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">7 Sections. One War Room.</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Every section is copy-paste ready. No editing required. Just execute.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-6 fade-up">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 border border-white/5`}>
                  <f.icon className={`w-5 h-5 ${f.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section id="how" className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Process</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Six Steps. Zero Headaches.</span>
            </h2>
          </div>

          <div className="space-y-4 stagger">
            {steps.map((step) => (
              <div key={step.num} className="glass-card p-5 flex items-center gap-5 fade-up">
                <div className="flex items-center gap-4 shrink-0">
                  <span className="font-display text-xs text-accent-light/50 w-6">
                    {step.num}
                  </span>
                  <span className="text-2xl">{step.emoji}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-0.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/forge" className="inline-flex items-center gap-2 text-accent-light hover:text-foreground font-medium transition text-sm">
              Try it yourself <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* ===== COMPARISON ===== */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Comparison</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Inkling vs. The Old Way</span>
            </h2>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="comparison-table w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-muted-foreground font-normal py-4 px-5">Feature</th>
                    <th className="text-left py-4 px-5">
                      <span className="font-display text-xs tracking-wider gradient-text-accent">Inkling</span>
                    </th>
                    <th className="text-left text-muted-foreground font-normal py-4 px-5">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row) => (
                    <tr key={row.feature} className="border-b border-white/5 last:border-0">
                      <td className="py-3.5 px-5 text-muted">{row.feature}</td>
                      <td className="py-3.5 px-5 text-foreground font-medium">
                        <span className="inline-flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
                          {row.inkling}
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-muted-foreground">
                        <span className="inline-flex items-center gap-2">
                          <XCircle className="w-3.5 h-3.5 text-danger/50 shrink-0" />
                          {row.others}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="max-w-3xl mx-auto px-6 py-24 text-center">
          <div className="glow-card p-12 sm:p-16 text-center">
            <p className="section-label mb-4">Ready?</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text-hero">Forge Your Narrative</span>
            </h2>
            <p className="text-muted max-w-lg mx-auto mb-8">
              3 minutes of input. A complete strategy war room. Every post, reply,
              and DM ready to copy-paste.
            </p>

            <Link href="/forge" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4">
              <Pen className="w-5 h-5" />
              Start Inkling — Free
            </Link>

            <div className="flex items-center justify-center gap-6 mt-8 text-xs text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1.5">
                <Target className="w-3 h-3 text-accent-light" />
                No signup required
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-accent-cyan" />
                60-second generation
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-accent-pink" />
                Powered by Gemini AI
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
