import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default function ForgePage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center pt-16 p-8">
        <div className="text-center">
          <p className="text-4xl font-bold gradient-text mb-3">
            Form Coming in Phase 4
          </p>
          <p className="text-muted">7-step input form will be built here.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
