import Link from "next/link";
import { SketchCard, SketchBadge } from "@/components/sketch";
import {
  Compass,
  Clock,
  Map,
  Swords,
  BookOpen,
  Zap,
  Users,
  ArrowRight,
  Pen,
  Sparkles,
  Target,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Feature data
// ---------------------------------------------------------------------------

const features = [
  {
    icon: Compass,
    title: "Narrative Archetype",
    description: "Discover your identity in the Solana ecosystem — Underdog, Infrastructure, Culture Shift, or Pioneer.",
    rotate: -0.8,
    badge: "Identity",
    badgeVariant: "purple" as const,
  },
  {
    icon: Clock,
    title: "Week Zero Kit",
    description: "Hour-by-hour 48hr action plan with copy-paste posts. No more 'what do I post first?'",
    rotate: 0.5,
    badge: "Urgency",
    badgeVariant: "red" as const,
  },
  {
    icon: Map,
    title: "Insertion Points Map",
    description: "3 live Solana debates to join, with pre-written replies, risk levels, and optimal timing.",
    rotate: -0.3,
    badge: "Visibility",
    badgeVariant: "blue" as const,
  },
  {
    icon: Swords,
    title: "Rivalry Radar",
    description: "Know how competitors will position. Get your counter-strategy and unfair narrative advantage.",
    rotate: 0.7,
    badge: "Strategy",
    badgeVariant: "red" as const,
  },
  {
    icon: BookOpen,
    title: "3 Origin Stories",
    description: "Same story in Degen, Builder, and Founder voice. Pick what fits. Copy-paste ready.",
    rotate: -0.5,
    badge: "Voice",
    badgeVariant: "green" as const,
  },
  {
    icon: Zap,
    title: "Viral Thread Pack",
    description: "2 complete 7-tweet threads + 5 standalone posts. Hook-Proof-Pull formula built in.",
    rotate: 0.4,
    badge: "Content",
    badgeVariant: "yellow" as const,
  },
  {
    icon: Users,
    title: "Ecosystem Ally Finder",
    description: "5 builders to collaborate with, cross-promo angles, and non-pitchy approach scripts.",
    rotate: -0.6,
    badge: "Network",
    badgeVariant: "blue" as const,
  },
];

// ---------------------------------------------------------------------------
// Steps data
// ---------------------------------------------------------------------------

const steps = [
  {
    num: "01",
    title: "Fill 7 fields",
    description: "Project name, one-liner, tech stack, target user, team, biggest fear, and your vibe.",
    icon: Pen,
  },
  {
    num: "02",
    title: "AI forges your strategy",
    description: "Inkling analyzes your inputs against live Solana ecosystem intelligence.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "Execute in 48 hours",
    description: "Copy-paste your way to ecosystem visibility. Every post, reply, and DM is ready.",
    icon: Target,
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* ===== HERO ===== */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20 text-center">
        <SketchBadge variant="yellow" className="mb-6">
          For Solana Hackathon Builders
        </SketchBadge>

        <h1 className="font-handwritten text-6xl sm:text-7xl md:text-8xl text-ink leading-tight mb-6">
          You built it.
          <br />
          <span className="text-marker-blue">We&apos;ll ink the story.</span>
        </h1>

        <p className="font-body-hand text-xl sm:text-2xl text-pencil max-w-2xl mx-auto mb-10 leading-relaxed">
          Inkling turns 7 project inputs into a complete narrative war room —
          archetype identity, 48-hour action plan, rivalry radar, viral threads,
          and more. In 3 minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/forge"
            className="font-handwritten text-2xl px-8 py-3.5 bg-marker-yellow text-ink border-2 border-ink rounded-sm sketch-shadow hover:-translate-y-0.5 transition wobble inline-flex items-center gap-2"
          >
            Forge Your Signal
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/#features"
            className="font-handwritten text-xl px-6 py-2.5 text-pencil border-2 border-pencil/40 rounded-sm hover:border-ink hover:text-ink transition wobble"
          >
            See all 7 features
          </Link>
        </div>

        {/* Decorative scribble */}
        <div className="mt-12 flex justify-center">
          <svg width="200" height="20" viewBox="0 0 200 20" className="text-pencil/30">
            <path
              d="M0 10 Q25 2, 50 10 T100 10 T150 10 T200 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="font-handwritten text-4xl sm:text-5xl text-center text-ink mb-4">
          7 Sections. One War Room.
        </h2>
        <p className="font-body-hand text-lg text-pencil text-center max-w-xl mx-auto mb-12">
          Every section is copy-paste ready. No editing required. Just execute.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f) => (
            <SketchCard
              key={f.title}
              rotate={f.rotate}
              tape
              className="hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center bg-paper-shade shrink-0">
                  <f.icon className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <SketchBadge variant={f.badgeVariant} className="text-sm mb-1">
                    {f.badge}
                  </SketchBadge>
                  <h3 className="font-handwritten text-2xl text-ink">
                    {f.title}
                  </h3>
                </div>
              </div>
              <p className="font-body-hand text-base text-pencil leading-relaxed">
                {f.description}
              </p>
            </SketchCard>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="font-handwritten text-4xl sm:text-5xl text-center text-ink mb-12">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="text-center relative">
              {/* Arrow between steps (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8">
                  <svg viewBox="0 0 32 20" className="text-pencil/40 w-full">
                    <path
                      d="M0 10 L24 10 M20 5 L26 10 L20 15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-ink flex items-center justify-center bg-white wobble sketch-shadow-sm">
                <step.icon className="w-7 h-7 text-marker-blue" />
              </div>
              <span className="font-handwritten text-4xl text-marker-blue/40">
                {step.num}
              </span>
              <h3 className="font-handwritten text-2xl text-ink mt-1 mb-2">
                {step.title}
              </h3>
              <p className="font-body-hand text-base text-pencil">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHO IT'S FOR ===== */}
      <section className="max-w-3xl mx-auto px-6 pb-20 text-center">
        <SketchCard rotate={-0.3} shadow className="py-8 px-6">
          <h2 className="font-handwritten text-3xl sm:text-4xl text-ink mb-4">
            Built for builders who shipped great products
            <br />
            <span className="text-marker-red">but nobody knows yet.</span>
          </h2>
          <p className="font-body-hand text-lg text-pencil max-w-lg mx-auto mb-6">
            If you submitted to Colosseum and your next thought was &ldquo;now
            what?&rdquo; — Inkling is your answer.
          </p>
          <Link
            href="/forge"
            className="font-handwritten text-2xl px-8 py-3 bg-marker-yellow text-ink border-2 border-ink rounded-sm sketch-shadow hover:-translate-y-0.5 transition wobble inline-flex items-center gap-2"
          >
            Start in 3 minutes
            <ArrowRight className="w-5 h-5" />
          </Link>
        </SketchCard>
      </section>
    </main>
  );
}
