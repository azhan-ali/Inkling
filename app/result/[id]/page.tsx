/**
 * /result/[id] — Result display page.
 * Full implementation in Phase 5.
 */
export default async function ResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main className="flex-1 flex items-center justify-center p-8">
      <p className="font-handwritten text-4xl text-ink">
        Result page for <span className="text-marker-blue">{id}</span> — coming
        in Phase 5 🗺️
      </p>
    </main>
  );
}
