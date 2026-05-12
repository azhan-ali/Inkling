import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import {
  Compass, Clock, Map, Swords, BookOpen, Zap, Users,
  ArrowRight, Sparkles, Target, Pen, CheckCircle2, XCircle,
  Rocket,
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
        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 text-center">

          {/* ── The Frame ── */}
          <div className="hero-frame relative">

            {/* ── Floating doodles (inside frame) ── */}
            <span className="float-a absolute top-6 left-6 text-4xl select-none pointer-events-none opacity-60 hidden sm:block">⭐</span>
            <span className="float-b absolute top-10 right-8 text-3xl select-none pointer-events-none opacity-50 hidden sm:block">⚡</span>
            <span className="float-c absolute bottom-16 left-10 text-2xl select-none pointer-events-none opacity-40 hidden sm:block">♥</span>
            <span className="float-a absolute bottom-10 right-6 text-3xl select-none pointer-events-none opacity-50 hidden sm:block" style={{ animationDelay: "1s" }}>✦</span>
            <div className="absolute top-8 right-32 w-10 h-10 rounded-full border-[3px] border-dashed border-marker-pink opacity-25 doodle-spin hidden sm:block" />
            <div className="absolute bottom-20 left-32 w-8 h-8 rounded-full border-2 border-dashed border-marker-blue opacity-20 doodle-spin hidden sm:block" style={{ animationDuration: "20s" }} />

            {/* ── Badge ── */}
            <div className="inline-flex items-center gap-2 sketch-badge bg-card-yellow badge-pulse mb-7 fade-up">
              <Sparkles className="w-4 h-4 text-marker-orange" />
              <span className="font-hand text-sm">Colosseum × SagaPad Hackathon</span>
              <span className="w-2 h-2 rounded-full bg-marker-green animate-pulse" />
            </div>

            {/* ── Main headline ── */}
            <h1 className="hero-title text-ink mb-5 fade-up delay-1 px-2">
              <span className="block text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] leading-[1.08]">
                You Built It.
              </span>
              <span className="block text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] leading-[1.08] mt-1">
                Now{" "}
                <span className="marker-underline marker-underline-blue relative inline-block">
                  Make Noise.
                </span>
              </span>
            </h1>

            {/* ── Sub-headline ── */}
            <p
              className="text-[1.3rem] sm:text-[1.7rem] text-marker-orange mb-4 fade-up delay-2"
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
            >
              Narrative Strategy. Not Just Content.
            </p>

            {/* ── Body copy ── */}
            <p className="font-body text-base sm:text-lg text-pencil max-w-2xl mx-auto mb-9 leading-relaxed fade-up delay-3">
              AI-powered narrative engine for Solana hackathon builders.{" "}
              <span className="highlight font-bold text-ink">7 inputs</span> →{" "}
              complete war room in{" "}
              <span className="highlight-green font-bold text-ink">60 seconds</span>.
              Built on Solana. Powered by Gemini AI.
            </p>

            {/* ── CTAs ── */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 fade-up delay-4">
              <Link
                href="/forge"
                className="btn-sketch btn-primary-sketch text-xl py-3 px-9 group"
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Start Forging
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
              <Link href="/#how" className="btn-sketch btn-ghost-sketch text-xl py-3 px-8">
                See How It Works
              </Link>
            </div>

            {/* ── Trust signals ── */}
            <div className="flex flex-wrap items-center justify-center gap-5 mb-10 fade-up delay-5">
              {[
                { icon: "✓", text: "No signup required" },
                { icon: "✓", text: "Free to use" },
                { icon: "✓", text: "60-second generation" },
              ].map((t) => (
                <span key={t.text} className="inline-flex items-center gap-1.5 font-body text-sm text-pencil">
                  <span className="text-marker-green font-bold text-base">{t.icon}</span>
                  {t.text}
                </span>
              ))}
            </div>

            {/* ── Stats row ── */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10 fade-up delay-5">
              {[
                { val: "7", label: "inputs", bg: "bg-card-yellow" },
                { val: "7", label: "strategy sections", bg: "bg-card-pink" },
                { val: "<60s", label: "generation time", bg: "bg-card-blue" },
                { val: "100%", label: "copy-paste ready", bg: "bg-card-green" },
              ].map((s) => (
                <div key={s.label} className={`stat-card ${s.bg} min-w-[110px]`}>
                  <p
                    className="text-3xl text-ink"
                    style={{ fontFamily: "'Permanent Marker', cursive" }}
                  >
                    {s.val}
                  </p>
                  <p className="font-body text-xs text-pencil mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* ── Preview cards row ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 fade-up delay-5">
              <div className="sketch-card bg-card-purple p-3 sm:p-4 text-left" style={{ transform: "rotate(-1deg)" }}>
                <p className="font-hand text-xs text-pencil mb-1">Your Archetype</p>
                <p className="hero-title text-base text-ink leading-tight">The Use-Case Pioneer 🧭</p>
                <p className="font-body text-xs text-pencil mt-1 opacity-70">&ldquo;Why has nobody done this?&rdquo;</p>
              </div>
              <div className="sketch-card bg-card-yellow p-3 sm:p-4 text-left" style={{ transform: "rotate(1deg)" }}>
                <p className="font-hand text-xs text-pencil mb-1">✦ Your One Truth</p>
                <p className="font-hand text-sm text-ink italic leading-snug">&ldquo;We are building what SWIFT forgot.&rdquo;</p>
              </div>
              <div className="sketch-card bg-card-green p-3 sm:p-4 text-left" style={{ transform: "rotate(-0.5deg)" }}>
                <p className="font-hand text-xs text-pencil mb-1">⏰ Hour 0–6</p>
                <p className="font-body text-xs text-ink">Post your origin story before momentum window closes.</p>
                <span className="sketch-badge bg-white text-xs mt-2 inline-block">Copy-paste ready</span>
              </div>
              <div className="sketch-card bg-card-pink p-3 sm:p-4 text-left" style={{ transform: "rotate(1.5deg)" }}>
                <p className="font-hand text-xs text-pencil mb-1">⚔️ Rivalry Radar</p>
                <p className="font-body text-xs text-ink">
                  <span className="line-through opacity-50">Generic DeFi pitch</span>
                  <br />
                  <span className="text-marker-green font-bold">→ Freelance Infrastructure</span>
                </p>
              </div>
            </div>

          </div>{/* end hero-frame */}

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
