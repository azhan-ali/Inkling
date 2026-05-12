# Inkling

> **You built it. We'll ink the story.**
>
> AI-powered narrative strategy engine for Solana hackathon builders.
> 7 inputs → complete war room in 60 seconds.

Built for the **Colosseum Hackathon · SagaPad Skill Marketplace · Topic 1 — Social Playbook**.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-inkling.vercel.app-ff6b35?style=flat-square)](https://inkling.vercel.app)
[![SagaPad](https://img.shields.io/badge/SagaPad-Colosseum%20Hackathon-ffd60a?style=flat-square)](https://sagapad.com/skills/inkling)
[![GitHub](https://img.shields.io/badge/GitHub-azhan--ali%2FInkling-1a1a2e?style=flat-square)](https://github.com/azhan-ali/Inkling)

---

## What it does

Most hackathon teams ship great products and disappear into noise. Inkling solves that.

Fill 7 fields in 3 minutes. Get a complete narrative war room:

| # | Section | What you get |
|---|---------|-------------|
| 1 | **Narrative Identity** | Archetype + threat assessment + your One Truth + hashtag |
| 2 | **Week Zero Kit** | Hour-by-hour 48hr plan + 3 origin story versions + teaser thread |
| 3 | **4-Week Battle Plan** | Themed weeks with daily post types |
| 4 | **Insertion Points Map** | 3 live debates + pre-written replies + risk levels + timing |
| 5 | **Rivalry Radar** | Competitor positioning + your counter + unfair advantage |
| 6 | **Viral Thread Pack** | 2 complete 7-tweet threads + 5 standalone posts + hashtag |
| 7 | **Ecosystem Ally Finder** | 5 collaborators + cross-promo angles + approach scripts |

Every output is **copy-paste ready**. No editing required.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 + hand-drawn sketch UI (Permanent Marker, Caveat, Patrick Hand fonts) |
| AI Primary | Google Gemini 2.5 Flash (`@google/generative-ai`) |
| AI Fallback | Groq Llama 3.3 70B (`groq-sdk`) |
| Database | Supabase (Postgres) — shareable result URLs |
| Deployment | Vercel |

---

## Local Development

```bash
# 1. Clone
git clone https://github.com/[your-username]/inkling
cd inkling

# 2. Install
npm install

# 3. Set up environment
cp .env.example .env.local
# Fill in: GEMINI_API_KEY, GROQ_API_KEY, NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY

# 4. Set up Supabase table (run once in Supabase SQL Editor)
# See scripts/setup-db.ts for the SQL

# 5. Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `GEMINI_API_KEY` | Google Gemini AI (primary) | ✅ |
| `GROQ_API_KEY` | Groq Llama fallback | ✅ |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | ✅ |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | ✅ |

---

## Project Structure

```
inkling/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── forge/page.tsx              # 7-step input form
│   ├── result/[id]/page.tsx        # Strategy output (7 sections)
│   ├── api/generate/route.ts       # POST: generate + save; GET: fetch by id
│   └── not-found.tsx               # Custom 404
├── components/
│   ├── form/                       # ForgeForm, FormProgress, StylePicker, LoadingOverlay, ReviewStep
│   ├── result/                     # 7 section components + CopyButton + SectionWrapper
│   └── shared/                     # Header, Footer, Toast
├── lib/
│   ├── ai/
│   │   ├── gemini.ts               # Gemini 2.5 Flash client
│   │   ├── groq.ts                 # Groq fallback client
│   │   ├── prompt.ts               # Master system prompt builder
│   │   └── repair.ts               # AI output repair layer
│   ├── ecosystem-data.ts           # Hardcoded Solana ecosystem intelligence
│   ├── generate.ts                 # Gemini → Groq orchestrator
│   ├── rate-limit.ts               # In-memory rate limiter (5 req/hr/IP)
│   ├── schema.ts                   # Zod schemas (input + output)
│   ├── supabase.ts                 # Supabase client
│   └── utils.ts                    # cn() helper
├── types/inkling.ts                # Shared TypeScript types
├── public/
│   ├── favicon.svg                 # Ink drop favicon
│   └── site.webmanifest
├── skill.md                        # SagaPad skill definition
├── .env.example                    # Environment variable template
└── scripts/
    ├── test-prompt.ts              # Phase 1 smoke tests
    └── setup-db.ts                 # Supabase table setup
```

---

## Supabase Setup

Run this SQL once in your Supabase Dashboard → SQL Editor:

```sql
create table if not exists public.generations (
  id text primary key,
  inputs jsonb not null,
  output jsonb not null,
  created_at timestamptz default now() not null
);

alter table public.generations enable row level security;

create policy "Public read by id"
  on public.generations for select using (true);

create policy "API insert only"
  on public.generations for insert with check (true);
```

---

## Submission

| Item | Value |
|------|-------|
| **Skill name** | `inkling` |
| **SagaPad URL** | `sagapad.com/skills/inkling` |
| **GitHub repo** | `github.com/[your-username]/inkling` |
| **Track** | Topic 1 — Hackathon Project Social Playbook Skill |
| **Category** | Colosseum Hackathon |

---

## License

MIT
