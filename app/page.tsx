import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
      <p className="font-body-hand text-pencil text-lg mb-4">
        Phase 0 · scaffold complete
      </p>
      <h1 className="font-handwritten text-6xl md:text-7xl text-ink mb-4">
        Inkling
      </h1>
      <p className="font-body-hand text-2xl text-marker-blue max-w-xl">
        You built it. We&apos;ll ink the story.
      </p>
      <p className="font-body-hand text-pencil mt-6 max-w-lg">
        Landing page arrives in Phase 3. This placeholder confirms fonts, paper
        background, and Tailwind are wired up correctly.
      </p>
      <Link
        href="/forge"
        className="mt-10 inline-block font-handwritten text-2xl px-8 py-3 bg-marker-yellow text-ink sketch-shadow hover:-translate-y-0.5 transition"
      >
        Forge Your Signal →
      </Link>
    </main>
  );
}
