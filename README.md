# Inkling

> **You built it. We'll ink the story.**
>
> An AI-powered narrative strategy engine for Solana hackathon builders.
> Seven inputs → seven sections of a ready-to-execute war room.

Built for the **Colosseum Hackathon · SagaPad Skill Marketplace · Topic 1 (Social Playbook)**.

---

## What it does

Inkling takes a builder's hackathon project and generates:

1. **Narrative Identity** — archetype, threat assessment, your One Truth
2. **Week Zero Kit** — hour-by-hour plan for the first 48 hours, with copy-paste content
3. **4-Week Battle Plan** — themed weeks with daily post types
4. **Insertion Points Map** — 3 live debates to join, with pre-written replies and risk levels
5. **Rivalry Radar** — how competitors will position, your counter, your unfair advantage
6. **Viral Thread Pack** — 2 full threads (Hook-Proof-Pull), 5 standalone posts, your hashtag
7. **Ecosystem Ally Finder** — 5 adjacent builders, cross-promo angles, approach scripts

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 + hand-drawn sketch UI (rough.js, SVG wobble filters, Caveat / Patrick Hand / Kalam fonts)
- **AI:** Google Gemini 2.5 Pro (primary) with Groq Llama 3.3 70B fallback
- **Database:** Supabase (Postgres) for shareable result URLs
- **Deployment:** Vercel

## Local development

```bash
npm install
cp .env.example .env.local    # fill in Gemini + Supabase keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.example` for the full list. Required at runtime:

| Variable | Purpose |
| --- | --- |
| `GEMINI_API_KEY` | Primary AI provider |
| `GROQ_API_KEY` | Fallback AI provider |
| `NEXT_PUBLIC_SUPABASE_URL` | Database for shareable result URLs |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Database public key |

## Project structure

```
inkling/
├── app/                 # App Router pages + API routes
├── components/
│   ├── sketch/          # Reusable hand-drawn primitives
│   ├── sections/        # One component per output section
│   ├── form/            # Input form steps
│   └── shared/          # Header, Footer, CopyButton
├── lib/
│   ├── ai/              # Gemini + Groq clients and master prompt
│   ├── ecosystem-data.ts # Hardcoded Solana ecosystem intelligence
│   ├── schema.ts        # Zod schemas for inputs & output
│   ├── supabase.ts      # DB client
│   └── utils.ts         # cn() helper
├── types/               # Shared TypeScript types
└── public/              # Static assets
```

## Submission links

- **SagaPad:** _coming on launch_
- **GitHub repo:** this repository
- **X launch post:** _coming on launch_

## License

MIT
