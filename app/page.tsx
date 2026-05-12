import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import {
  Compass, Clock, Map, Swords, BookOpen, Zap, Users,
  ArrowRight, Sparkles, Target, Pen, CheckCircle2, XCircle,
  Rocket, Star, Zap as Lightning,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Feature cards — pastel colors like SaathPay                        */
/* ------------------------------------------------------------------ */
const features = [
  {
    icon: Compass,
    title: "Narrative Archetype",
    desc: "Assigns your identity — Underdog, Infrastructure, Culture Shift, or Pioneer. Includes threat assessment and your One Truth.",
    bg: "bg-card-yellow",
    iconBg: "bg-marker-yellow",
  },
  {
    icon: Clock,
    title: "Week Zero Kit",
    desc: "Hour-by-hour 48hr action plan with copy-paste posts. Execute before momentum dies.",
    bg: "bg-card-pink",
    iconBg: "bg-marker-pink",
  },
  {
    icon: Map,
    title: "Insertion Points Map",
    desc: "3 live Solana debates + pre-written replies + risk levels + optimal timing windows.",
    bg: "bg-card-blue",
    iconBg: "bg-marker-blue",
  },
  {
    icon: Swords,
    title: "Rivalry Radar",
    desc: "How competitors will position. Your counter-strategy. Your unfair narrative advantage.",
    bg: "bg-card-orange",
    iconBg: "bg-marker-orange",
  },
  {
    icon: BookOpen,
    title: "3 Origin Stories",
    desc: "Same story in Degen, Builder, and Founder voice. Pick what fits. Ready to post.",
    bg: "bg-card-purple",
    iconBg: "bg-marker-purple",
  },
  {
    icon: Zap,
    title: "Viral Thread Pack",
    desc: "2 complete 7-tweet threads (Hook-Proof-Pull) + 5 standalone posts + your hashtag.",
    bg: "bg-card-green",
    iconBg: "bg-marker-green",
  },
  {
    icon: Users,
    title: "Ecosystem Ally Finder",
    desc: "5 builders to collaborate with, cross-promo angles, and non-pitchy approach scripts.",
    bg: "bg-card-mint",
    iconBg: "bg-marker-teal",
  },
];

/* ------------------------------------------------------------------ */
/*  Steps                                                              */
/* ------------------------------------------------------------------ */
const steps = [
  { num: 1, emoji: "📝", title: "Fill 7 Fields", desc: "Project name, one-liner, tech stack, target user, team, fear, and style. 3 minutes." },
  { num: 2, emoji: "🧠", title: "AI Analyzes", desc: "Archetype scoring, ecosystem mapping, rivalry detection, tone calibration." },
  { num: 3, emoji: "⚡", title: "Strategy Generated", desc: "Complete 7-section war room in under 60 seconds." },
  { num: 4, emoji: "🎯", title: "Post Origin Story", desc: "Hour 0–6: Your story goes live before the momentum window closes." },
  { num: 5, emoji: "💬", title: "Insert Into Debates", desc: "Pre-written replies hit targeted accounts at optimal times." },
  { num: 6, emoji: "🚀", title: "Compound Your Signal", desc: "4-week battle plan. Every post builds on the last. Audience compounds." },
];

/* ------------------------------------------------------------------ */
/*  Comparison                                                         */
/* ------------------------------------------------------------------ */
const comparisons = [
  { feature: "Strategy type",       inkling: "Personalized war room",  others: "Generic content calendar" },
  { feature: "Time to first post",  inkling: "< 6 hours",              others: "Days of planning" },
  { feature: "Competitor awareness",inkling: "Rivalry Radar built-in", others: "None" },
  { feature: "Ecosystem data",      inkling: "Live Solana intelligence",others: "Generic advice" },
  { feature: "Content quality",     inkling: "Copy-paste ready",       others: "Templates only" },
  { feature: "Insertion strategy",  inkling: "3 debates + replies",    others: "Post 3x a week" },
  { feature: "Retention",           inkling: "Weekly Ally Refresh",    others: "One-time use" },
  { feature: "Built for Solana",    inkling: "Native ecosystem data",  others: "Generic tool" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1 relative z-10">

        {/* ===== HERO ===== */}
        <section className="relative max-w-5xl mx-auto px-6 pt-16 pb-20 text-center overflow-hidden">

          {/* Floating doodles */}
          <span className="doodle absolute top-8 left-8 text-4xl" style={{ animationDelay: "0s" }}>⭐</span>
          <span className="doodle absolute top-16 right-12 text-3xl" style={{ animationDelay: "0.8s" }}>✦</span>
          <span className="doodle absolute bottom-12 left-16 text-2xl" style={{ animationDelay: "1.2s" }}>♥</span>
          <span className="doodle absolute top-24 right-6 text-5xl" style={{ animationDelay: "0.4s" }}>⚡</span>
          <span className="doodle absolute bottom-8 right-20 text-3xl" style={{ animationDelay: "1.6s" }}>✿</span>

          {/* Decorative circles */}
          <div className="absolute top-10 right-24 w-12 h-12 rounded-full border-3 border-dashed border-marker-pink opacity-40 doodle-spin" />
          <div className="absolute bottom-16 left-24 w-8 h-8 rounded-full border-2 border-dashed border-marker-blue opacity-30 doodle-spin" style={{ animationDuration: "18s" }} />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 sketch-badge bg-card-yellow mb-8 fade-up">
            <Sparkles className="w-4 h-4 text-marker-orange" />
            <span>Built for Colosseum × SagaPad Hackathon</span>
          </div>

          {/* Headline */}
          <h1 className="font-comic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink leading-tight mb-4 fade-up delay-1">
            You Built It.
            <br />
            <span className="squiggle squiggle-yellow">We&apos;ll Ink</span>{" "}
            The Story.
          </h1>

          {/* Subheadline */}
          <p className="font-hand text-xl sm:text-2xl text-marker-orange mb-3 fade-up delay-2">
            Narrative Strategy. Not Just Content.
          </p>

          <p className="font-body text-base sm:text-lg text-pencil max-w-2xl mx-auto mb-10 leading-relaxed fade-up delay-3">
            AI-powered narrative engine for Solana hackathon builders.{" "}
            <span className="highlight">7 inputs</span> →{" "}
            complete war room in 60 seconds.{" "}
            Built on Solana. Powered by Gemini AI.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 fade-up delay-4">
            <Link href="/forge" className="btn-sketch btn-primary-sketch text-xl py-3 px-8">
              <Rocket className="w-5 h-5" />
              Start Forging →
            </Link>
            <Link href="/#how" className="btn-sketch btn-ghost-sketch text-xl py-3 px-8">
              See How It Works
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-4 fade-up delay-5">
            {[
              { val: "7", label: "inputs", bg: "bg-card-yellow" },
              { val: "7", label: "strategy sections", bg: "bg-card-pink" },
              { val: "<60s", label: "generation time", bg: "bg-card-blue" },
              { val: "100%", label: "copy-paste ready", bg: "bg-card-green" },
            ].map((s) => (
              <div key={s.label} className={`stat-card ${s.bg} min-w-[110px]`}>
                <p className="font-comic text-3xl text-ink">{s.val}</p>
                <p className="font-body text-xs text-pencil mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="font-hand text-pencil text-sm mt-10 bounce-slow inline-block">
            scroll down ↓
          </p>
        </section>

        {/* ===== FEATURES ===== */}
        <section id="features" className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="section-label mb-2">~ what makes us different ~</p>
            <h2 className="font-comic text-4xl sm:text-5xl md:text-6xl text-ink mb-3">
              Everything You Need.{" "}
              <span className="highlight-pink">Nothing You Don&apos;t.</span>
            </h2>
            <p className="font-body text-base text-pencil max-w-xl mx-auto">
              7 sections designed to take you from invisible to unmissable in the Solana ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`sketch-card ${f.bg} p-6 fade-up`}
                style={{ animationDelay: `${0.05 * i}s`, transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}
              >
                <div className={`w-11 h-11 rounded-full ${f.iconBg} border-2 border-ink flex items-center justify-center mb-4 sketch-shadow-sm`}>
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-comic text-xl text-ink mb-2">{f.title}</h3>
                <p className="font-body text-sm text-ink-soft leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section id="how" className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="section-label mb-2">~ how it works ~</p>
            <h2 className="font-comic text-4xl sm:text-5xl md:text-6xl text-ink">
              Six Steps.{" "}
              <span className="squiggle">Zero Headaches.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`sketch-card bg-white p-5 flex items-center gap-5 fade-up`}
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-comic text-pencil text-sm w-5">{step.num}</span>
                  <span className="text-2xl">{step.emoji}</span>
                </div>
                <div>
                  <h3 className="font-comic text-xl text-ink mb-0.5">{step.title}</h3>
                  <p className="font-body text-sm text-pencil">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/forge" className="btn-sketch btn-secondary-sketch text-lg py-2.5 px-7">
              Try it yourself <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ===== COMPARISON ===== */}
        <section id="why" className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="section-label mb-2">~ the honest comparison ~</p>
            <h2 className="font-comic text-4xl sm:text-5xl md:text-6xl text-ink">
              Inkling vs.{" "}
              <span className="highlight">The Old Way</span>
            </h2>
          </div>

          <div className="sketch-card bg-white overflow-hidden p-0">
            <div className="overflow-x-auto">
              <table className="sketch-table">
                <thead>
                  <tr className="bg-card-yellow">
                    <th className="text-left font-comic text-lg text-ink py-4 px-5">Feature</th>
                    <th className="text-left font-comic text-lg text-marker-orange py-4 px-5">Inkling ✦</th>
                    <th className="text-left font-comic text-lg text-pencil py-4 px-5">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-paper"}>
                      <td className="py-3.5 px-5 font-body text-sm text-pencil">{row.feature}</td>
                      <td className="py-3.5 px-5 font-body text-sm text-ink font-medium">
                        <span className="inline-flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-marker-green shrink-0" />
                          {row.inkling}
                        </span>
                      </td>
                      <td className="py-3.5 px-5 font-body text-sm text-pencil">
                        <span className="inline-flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-marker-pink/60 shrink-0" />
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
        <section className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="sketch-card bg-card-yellow p-10 sm:p-14 relative tape">
            {/* Doodles inside CTA */}
            <span className="doodle absolute top-4 right-6 text-3xl">⭐</span>
            <span className="doodle absolute bottom-4 left-6 text-2xl">✦</span>

            <p className="section-label mb-3">~ ready to be heard? ~</p>
            <h2 className="font-comic text-4xl sm:text-5xl md:text-6xl text-ink mb-4">
              Forge Your{" "}
              <span className="squiggle squiggle-yellow">Narrative</span>
            </h2>
            <p className="font-body text-base text-pencil max-w-lg mx-auto mb-8">
              3 minutes of input. A complete strategy war room. Every post, reply,
              and DM ready to copy-paste. Start now.
            </p>

            <Link href="/forge" className="btn-sketch btn-primary-sketch text-xl py-3.5 px-10">
              <Pen className="w-5 h-5" />
              Start Inkling — Free
            </Link>

            <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
              {[
                { icon: Target, text: "No signup required" },
                { icon: Clock, text: "60-second generation" },
                { icon: Sparkles, text: "Powered by Gemini AI" },
              ].map((item) => (
                <span key={item.text} className="inline-flex items-center gap-1.5 font-body text-xs text-pencil">
                  <item.icon className="w-3.5 h-3.5 text-marker-orange" />
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
