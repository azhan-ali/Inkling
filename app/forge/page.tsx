import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default function ForgePage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="sketch-card bg-card-yellow p-10 text-center max-w-md">
          <p className="text-4xl mb-3">✏️</p>
          <h1 className="font-comic text-4xl text-ink mb-2">Form Coming Soon</h1>
          <p className="font-body text-pencil">7-step input form will be built in Phase 4.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
