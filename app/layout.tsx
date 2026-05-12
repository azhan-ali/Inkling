import type { Metadata } from "next";
import { Caveat, Patrick_Hand, Kalam, Gloria_Hallelujah } from "next/font/google";
import "./globals.css";
import { SketchDefs } from "@/components/sketch/SketchDefs";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const gloria = Gloria_Hallelujah({
  variable: "--font-gloria",
  subsets: ["latin"],
  weight: ["400"],
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
      className={`${caveat.variable} ${patrickHand.variable} ${kalam.variable} ${gloria.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col paper-bg font-body-hand text-ink">
        <SketchDefs />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
