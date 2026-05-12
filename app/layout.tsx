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
        {children}
      </body>
    </html>
  );
}
