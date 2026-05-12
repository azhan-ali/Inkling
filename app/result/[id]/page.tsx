import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default async function ResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center pt-16 p-8">
        <div className="text-center">
          <p className="text-4xl font-bold gradient-text mb-3">
            Result: {id}
          </p>
          <p className="text-muted">
            7-section strategy output will be displayed here in Phase 5.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
