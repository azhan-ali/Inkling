import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
