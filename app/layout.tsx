import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inkling — AI Narrative Engine for Solana Builders",
  description:
    "You built it. We'll ink the story. Inkling turns 7 project inputs into a complete narrative war room — archetype identity, 48-hour action plan, insertion points, rivalry radar, viral threads, and ally map.",
  keywords: ["Solana", "Colosseum", "Hackathon", "SagaPad", "Narrative", "AI"],
  openGraph: {
    title: "Inkling — AI Narrative Engine for Solana Builders",
    description: "You built it. We'll ink the story.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inkling — AI Narrative Engine for Solana Builders",
    description: "You built it. We'll ink the story.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col paper-bg font-body text-ink">

        {/* ── Global background decorations ── */}

        {/* Wavy SVG lines drifting across the page */}
        <svg
          className="bg-wave"
          style={{ top: "10%", left: "-5%", width: "110%", height: "auto" }}
          viewBox="0 0 1200 120"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 60 Q150 20 300 60 T600 60 T900 60 T1200 60"
            stroke="#ff6b35"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <svg
          className="bg-wave"
          style={{ top: "45%", left: "-5%", width: "110%", height: "auto", animationDelay: "7s", animationDirection: "reverse" }}
          viewBox="0 0 1200 120"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 60 Q200 10 400 60 T800 60 T1200 60"
            stroke="#ffd60a"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <svg
          className="bg-wave"
          style={{ top: "75%", left: "-5%", width: "110%", height: "auto", animationDelay: "12s" }}
          viewBox="0 0 1200 120"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 60 Q250 100 500 60 T1000 60 T1200 60"
            stroke="#06d6a0"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Scattered doodle shapes */}
        <div className="bg-doodles" aria-hidden="true">
          {/* Stars */}
          <span className="bg-doodle-item text-5xl" style={{ top: "8%", left: "3%", animationDelay: "0s", animationDuration: "7s" }}>⭐</span>
          <span className="bg-doodle-item text-3xl" style={{ top: "22%", right: "4%", animationDelay: "2s", animationDuration: "9s" }}>✦</span>
          <span className="bg-doodle-item text-4xl" style={{ top: "55%", left: "2%", animationDelay: "4s", animationDuration: "8s" }}>⭐</span>
          <span className="bg-doodle-item text-2xl" style={{ top: "70%", right: "3%", animationDelay: "1s", animationDuration: "11s" }}>✦</span>
          <span className="bg-doodle-item text-5xl" style={{ top: "88%", left: "5%", animationDelay: "3s", animationDuration: "7s" }}>⭐</span>

          {/* Lightning */}
          <span className="bg-doodle-item text-4xl" style={{ top: "15%", right: "8%", animationDelay: "1.5s", animationDuration: "8s" }}>⚡</span>
          <span className="bg-doodle-item text-3xl" style={{ top: "60%", right: "6%", animationDelay: "5s", animationDuration: "10s" }}>⚡</span>

          {/* Hearts */}
          <span className="bg-doodle-item text-3xl" style={{ top: "35%", left: "1.5%", animationDelay: "2.5s", animationDuration: "9s" }}>♥</span>
          <span className="bg-doodle-item text-2xl" style={{ top: "80%", right: "5%", animationDelay: "6s", animationDuration: "8s" }}>♥</span>

          {/* Circles */}
          <span className="bg-doodle-item text-4xl" style={{ top: "42%", right: "2%", animationDelay: "3.5s", animationDuration: "12s", color: "#ff4d8d" }}>◯</span>
          <span className="bg-doodle-item text-3xl" style={{ top: "92%", left: "8%", animationDelay: "0.5s", animationDuration: "10s", color: "#118ab2" }}>◯</span>

          {/* Sparkles */}
          <span className="bg-doodle-item text-3xl" style={{ top: "5%", right: "15%", animationDelay: "4.5s", animationDuration: "7s" }}>✿</span>
          <span className="bg-doodle-item text-2xl" style={{ top: "50%", left: "4%", animationDelay: "1s", animationDuration: "9s" }}>✿</span>
          <span className="bg-doodle-item text-4xl" style={{ top: "75%", right: "10%", animationDelay: "7s", animationDuration: "8s" }}>✿</span>
        </div>

        {/* Page content */}
        {children}
      </body>
    </html>
  );
}
