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
} from "lucide-react";

// ---------------------------------------------------------------------------
// Feature data
// ---------------------------------------------------------------------------

const features = [
  {
    icon: Compass,
    title: "Narrative Archetype Engine",
    description:
      "Assigns your identity in the ecosystem — Underdog, Infrastructure, Culture Shift, or Use-Case Pioneer. Includes threat assessment.",
  },
  {
    icon: Clock,
    title: "Week Zero Kit",
    description:
      "Hour-by-hour 48hr action plan with copy-paste posts. No more 'what do I post first?' anxiety.",
  },
  {
    icon: Map,
    title: "Insertion Points Map",
    description:
      "3 live Solana debates to join, with pre-written replies, risk levels, and optimal posting times.",
  },
  {
    icon: Swords,
    title: "Rivalry Radar",
    description:
      "Know how competitors will position. Get your counter-strategy and unfair narrative advantage.",
  },
  {
    icon: BookOpen,
    title: "3 Origin Story Versions",
    description:
      "Same story in Degen, Builder, and Founder voice. Pick what fits your natural style. Copy-paste ready.",
  },
  {
    icon: Zap,
    title: "Viral Thread Pack",
    description:
      "2 complete 7-tweet threads using Hook-Proof-Pull formula + 5 standalone posts + your personal hashtag.",
  },
  {
    icon: Users,
    title: "Ecosystem Ally Finder",
    description:
      "5 builders to collaborate with, cross-promo angles, and non-pitchy approach scripts. Updated weekly.",
  },
];

// ---------------------------------------------------------------------------
// Steps data
// ---------------------------------------------------------------------------

const steps = [
  {
    num: 1,
    emoji: "📝",
    title: "Fill 7 Fields",
    description:
      "Project name, one-liner, tech stack, target user, team, biggest fear, and communication style.",
  },
  {
    num: 2,
    emoji: "🧠",
    title: "AI Analyzes Your Project",
    description:
      "Inkling scores your archetype, maps the ecosystem, and identifies your narrative position.",
  },
  {
    num: 3,
    emoji: "⚡",
    title: "Strategy Generated",
    description:
      "Complete 7-section war room generated in under 60 seconds. All content copy-paste ready.",
  },
  {
    num: 4,
    emoji: "🎯",
    title: "Post Origin Story",
    description:
      "Hour 0–6: Your origin story goes live. First post before the momentum window closes.",
  },
  {
    num: 5,
    emoji: "💬",
    title: "Insert Into Debates",
    description:
      "Pre-written replies go out to targeted accounts at optimal times. Visibility begins.",
  },
  {
    num: 6,
    emoji: "🚀",
    title: "Compound Your Signal",
    description:
      "Follow the 4-week battle plan. Every post builds on the last. Audience compounds.",
  },
];

// ---------------------------------------------------------------------------
// Comparison data
// ---------------------------------------------------------------------------

const comparisons = [
  { feature: "Strategy type", inkling: "Personalized war room", others: "Generic content calendar" },
  { feature: "Time to first post", inkling: "< 6 hours", others: "Days of planning" },
  { feature: "Competitor awareness", inkling: "Rivalry Radar built-in", others: "None" },
  { feature: "Ecosystem intelligence", inkling: "Live Solana data", others: "Generic advice" },
  { feature: "Content ready to post", inkling: "Copy-paste ready", others: "Templates only" },
  { feature: "Insertion points", inkling: "3 debates + replies", others: "Post 3x a week" },
  { feature: "Retention hook", inkling: "Weekly Ally Refresh", others: "One-time use" },
  { feature: "Built for Solana", inkling: "✓ Native", others: "Generic" },
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
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-card-border bg-card text-sm text-muted mb-8">
            <Sparkles className="w-3.5 h-3.5 text-accent-light" />
            Built for Colosseum × SagaPad Hackathon
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="gradient-text">
              Stop Building in Silence.
            </span>
            <br />
            <span className="gradient-text">
              Start Building a{" "}
            </span>
            <span className="gradient-text-accent">Narrative.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            AI-powered narrative strategy engine for Solana hackathon builders.
            7 inputs → complete war room in 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/forge"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition glow-accent-sm"
            >
              Start Getting Visible
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#how"
              className="inline-flex items-center gap-2 px-6 py-3 border border-card-border text-muted hover:text-foreground hover:border-muted rounded-lg transition"
            >
              See How It Works
            </Link>
          </div>

          {/* Stats bar */}
          <div className="stats-bar inline-flex items-center gap-6 sm:gap-8 px-6 py-3 rounded-full text-sm">
            <div className="flex items-center gap-2">
              <span className="text-accent-light font-semibold">7</span>
              <span className="text-muted">inputs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-light font-semibold">7</span>
              <span className="text-muted">strategy sections</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-light font-semibold">&lt;60s</span>
              <span className="text-muted">generation time</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-accent-light font-semibold">100%</span>
              <span className="text-muted">copy-paste ready</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mt-6">scroll down ↓</p>
        </section>

        {/* ===== FEATURES ===== */}
        <section id="features" className="max-w-6xl mx-auto px-6 py-20">
          <p className="section-label text-center mb-3">
            ~ what you get ~
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Everything you need.</span>
            <br />
            <span className="text-muted">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-12">
            7 sections designed to take you from invisible to unmissable in the
            Solana ecosystem.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="feature-card p-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-accent-light" />
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
        <section id="how" className="max-w-4xl mx-auto px-6 py-20">
          <p className="section-label text-center mb-3">
            ~ how it works ~
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Six steps.</span>
            <br />
            <span className="text-muted">Zero headaches.</span>
          </h2>

          <div className="mt-12 space-y-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="feature-card p-5 flex items-start gap-4"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-mono text-muted-foreground w-5">
                    {step.num}
                  </span>
                  <span className="text-2xl">{step.emoji}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/forge"
              className="inline-flex items-center gap-2 text-accent-light hover:text-accent font-medium transition text-sm"
            >
              Try it yourself →
            </Link>
          </div>
        </section>

        {/* ===== COMPARISON ===== */}
        <section id="why" className="max-w-4xl mx-auto px-6 py-20">
          <p className="section-label text-center mb-3">
            ~ the honest comparison ~
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">Inkling vs.</span>
            <br />
            <span className="text-muted">generic content tools</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="comparison-table w-full text-sm">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="text-left text-muted-foreground font-normal py-3 px-4">
                    Feature
                  </th>
                  <th className="text-left font-semibold py-3 px-4">
                    <span className="gradient-text-accent">Inkling</span>
                  </th>
                  <th className="text-left text-muted-foreground font-normal py-3 px-4">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature} className="border-b border-card-border/50">
                    <td className="py-3 px-4 text-muted">{row.feature}</td>
                    <td className="py-3 px-4 text-foreground font-medium">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                        {row.inkling}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <XCircle className="w-3.5 h-3.5 text-danger/60" />
                        {row.others}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="section-label mb-3">
            ~ ready to be heard? ~
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Forge your</span>{" "}
            <span className="gradient-text-accent">narrative</span>
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-8">
            3 minutes of input. A complete strategy war room. Every post, reply,
            and DM ready to copy-paste. Start now.
          </p>

          <Link
            href="/forge"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition glow-accent text-lg"
          >
            <Pen className="w-5 h-5" />
            Start Inkling — Free
          </Link>

          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Target className="w-3 h-3" />
              No signup required
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              60-second generation
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Powered by Gemini AI
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
