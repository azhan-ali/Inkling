import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default function ResultLoading() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-10">
        {/* Top bar skeleton */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div className="space-y-2">
            <div className="h-6 w-32 bg-paper-grid rounded-full animate-pulse" />
            <div className="h-9 w-56 bg-paper-grid rounded-xl animate-pulse" />
            <div className="h-4 w-72 bg-paper-grid rounded-full animate-pulse" />
          </div>
          <div className="flex gap-2">
            <div className="h-10 w-36 bg-paper-grid rounded-xl animate-pulse" />
            <div className="h-10 w-32 bg-paper-grid rounded-xl animate-pulse" />
          </div>
        </div>

        {/* Quick nav skeleton */}
        <div className="sketch-card bg-card-mint p-4 mb-8">
          <div className="h-3 w-24 bg-paper-grid rounded-full animate-pulse mb-2" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="h-7 w-20 bg-paper-grid rounded-lg animate-pulse" />
            ))}
          </div>
        </div>

        {/* Section skeletons */}
        <div className="space-y-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="sketch-card bg-white p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-4 w-6 bg-paper-grid rounded animate-pulse" />
                <div className="h-6 w-6 bg-paper-grid rounded-full animate-pulse" />
                <div className="h-7 w-48 bg-paper-grid rounded-xl animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-paper-grid rounded animate-pulse" />
                <div className="h-4 w-4/5 bg-paper-grid rounded animate-pulse" />
                <div className="h-4 w-3/5 bg-paper-grid rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
