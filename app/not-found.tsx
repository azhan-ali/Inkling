import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="sketch-card bg-card-pink p-10 text-center max-w-md">
          <p className="text-6xl mb-4">🗺️</p>
          <h1 className="font-comic text-4xl text-ink mb-2">Page Not Found</h1>
          <p className="font-body text-sm text-pencil mb-6">
            This strategy doesn&apos;t exist or may have expired.
          </p>
          <Link href="/forge" className="btn-sketch btn-primary-sketch text-base py-2 px-6">
            Generate a New Strategy →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
