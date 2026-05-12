import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="sketch-card bg-card-pink p-10 sm:p-14 text-center max-w-lg relative">
          {/* Doodle decorations */}
          <span className="absolute top-4 right-6 text-3xl doodle">⭐</span>
          <span className="absolute bottom-4 left-6 text-2xl doodle" style={{ animationDelay: "0.8s" }}>✦</span>

          <p className="text-7xl mb-5">🗺️</p>
          <h1
            className="text-4xl sm:text-5xl text-ink mb-3"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            Lost in the Ecosystem?
          </h1>
          <p className="font-body text-base text-pencil mb-2">
            This strategy doesn&apos;t exist or may have expired.
          </p>
          <p
            className="text-lg text-marker-orange mb-8"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
          >
            But your narrative is still waiting to be forged.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/forge" className="btn-sketch btn-primary-sketch text-lg py-2.5 px-7">
              🚀 Forge a New Strategy
            </Link>
            <Link href="/" className="btn-sketch btn-ghost-sketch text-lg py-2.5 px-7">
              ← Back Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
