import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/shared/Toast";
import { InkCursor } from "@/components/shared/InkCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://inkling.vercel.app"),
  title: {
    default: "Inkling — AI Narrative Engine for Solana Builders",
    template: "%s | Inkling",
  },
  description:
    "You built it. We'll ink the story. Inkling turns 7 project inputs into a complete narrative war room — archetype identity, 48-hour action plan, insertion points, rivalry radar, viral threads, and ally map. Built for Colosseum × SagaPad Hackathon.",
  keywords: [
    "Solana",
    "Colosseum",
    "Hackathon",
    "SagaPad",
    "Narrative Strategy",
    "AI Content",
    "Solana Builder",
    "Web3 Marketing",
    "Inkling",
  ],
  authors: [{ name: "Inkling" }],
  creator: "Inkling",
  openGraph: {
    title: "Inkling — AI Narrative Engine for Solana Builders",
    description:
      "You built it. We'll ink the story. 7 inputs → complete war room in 60 seconds.",
    type: "website",
    url: "https://inkling.vercel.app",
    siteName: "Inkling",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Inkling — AI Narrative Engine for Solana Builders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inkling — AI Narrative Engine for Solana Builders",
    description:
      "You built it. We'll ink the story. 7 inputs → complete war room in 60 seconds.",
    images: ["/og-image.png"],
    creator: "@inkling_sol",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col paper-bg font-body text-ink">
        <InkCursor />
        <ToastProvider>

          {/* ── Global background decorations ── */}
          <svg
            className="bg-wave"
            style={{ top: "10%", left: "-5%", width: "110%", height: "auto" }}
            viewBox="0 0 1200 120"
            fill="none"
            aria-hidden="true"
          >
            <path d="M0 60 Q150 20 300 60 T600 60 T900 60 T1200 60" stroke="#ff6b35" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>

          <svg
            className="bg-wave"
            style={{ top: "45%", left: "-5%", width: "110%", height: "auto", animationDelay: "7s", animationDirection: "reverse" }}
            viewBox="0 0 1200 120"
            fill="none"
            aria-hidden="true"
          >
            <path d="M0 60 Q200 10 400 60 T800 60 T1200 60" stroke="#ffd60a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>

          <svg
            className="bg-wave"
            style={{ top: "75%", left: "-5%", width: "110%", height: "auto", animationDelay: "12s" }}
            viewBox="0 0 1200 120"
            fill="none"
            aria-hidden="true"
          >
            <path d="M0 60 Q250 100 500 60 T1000 60 T1200 60" stroke="#06d6a0" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>

          <div className="bg-doodles" aria-hidden="true">
            <span className="bg-doodle-item text-5xl" style={{ top: "8%", left: "3%", animationDelay: "0s", animationDuration: "7s" }}>⭐</span>
            <span className="bg-doodle-item text-3xl" style={{ top: "22%", right: "4%", animationDelay: "2s", animationDuration: "9s" }}>✦</span>
            <span className="bg-doodle-item text-4xl" style={{ top: "55%", left: "2%", animationDelay: "4s", animationDuration: "8s" }}>⭐</span>
            <span className="bg-doodle-item text-2xl" style={{ top: "70%", right: "3%", animationDelay: "1s", animationDuration: "11s" }}>✦</span>
            <span className="bg-doodle-item text-5xl" style={{ top: "88%", left: "5%", animationDelay: "3s", animationDuration: "7s" }}>⭐</span>
            <span className="bg-doodle-item text-4xl" style={{ top: "15%", right: "8%", animationDelay: "1.5s", animationDuration: "8s" }}>⚡</span>
            <span className="bg-doodle-item text-3xl" style={{ top: "60%", right: "6%", animationDelay: "5s", animationDuration: "10s" }}>⚡</span>
            <span className="bg-doodle-item text-3xl" style={{ top: "35%", left: "1.5%", animationDelay: "2.5s", animationDuration: "9s" }}>♥</span>
            <span className="bg-doodle-item text-2xl" style={{ top: "80%", right: "5%", animationDelay: "6s", animationDuration: "8s" }}>♥</span>
            <span className="bg-doodle-item text-4xl" style={{ top: "42%", right: "2%", animationDelay: "3.5s", animationDuration: "12s", color: "#ff4d8d" }}>◯</span>
            <span className="bg-doodle-item text-3xl" style={{ top: "92%", left: "8%", animationDelay: "0.5s", animationDuration: "10s", color: "#118ab2" }}>◯</span>
            <span className="bg-doodle-item text-3xl" style={{ top: "5%", right: "15%", animationDelay: "4.5s", animationDuration: "7s" }}>✿</span>
            <span className="bg-doodle-item text-2xl" style={{ top: "50%", left: "4%", animationDelay: "1s", animationDuration: "9s" }}>✿</span>
            <span className="bg-doodle-item text-4xl" style={{ top: "75%", right: "10%", animationDelay: "7s", animationDuration: "8s" }}>✿</span>
          </div>

          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
