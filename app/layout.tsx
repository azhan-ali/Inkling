import type { Metadata } from "next";
import { Space_Grotesk, Orbitron, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inkling — AI Narrative Engine for Solana Builders",
  description:
    "You built it. We'll ink the story. Inkling turns 7 project inputs into a complete narrative war room — archetype identity, 48-hour action plan, insertion points, rivalry radar, viral threads, and ally map.",
  keywords: [
    "Solana",
    "Colosseum",
    "Hackathon",
    "SagaPad",
    "Narrative",
    "AI",
    "Content Strategy",
  ],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${orbitron.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col cosmic-bg font-sans text-foreground">
        {/* Animated background layers */}
        <div className="particles" aria-hidden="true">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${8 + Math.random() * 12}s`,
                animationDelay: `${Math.random() * 8}s`,
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                background: i % 3 === 0
                  ? "rgba(6, 182, 212, 0.4)"
                  : i % 3 === 1
                  ? "rgba(236, 72, 153, 0.3)"
                  : "rgba(167, 139, 250, 0.4)",
              }}
            />
          ))}
        </div>
        <div className="grid-overlay" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
