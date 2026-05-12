<div align="center">

<img src="public/favicon.svg" width="80" height="80" alt="Inkling Logo" />

# ✦ Inkling

### *You built it. We'll ink the story.*

**AI-powered narrative strategy engine for Solana hackathon builders.**
7 inputs → complete war room → 60 seconds.

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-inkling.vercel.app-ff6b35?style=for-the-badge)](https://inkling.vercel.app)
[![SagaPad](https://img.shields.io/badge/📦%20SagaPad-Colosseum%20Hackathon-ffd60a?style=for-the-badge&labelColor=1a1a2e&color=ffd60a)](https://sagapad.com/skills/inkling)
[![GitHub](https://img.shields.io/badge/⭐%20GitHub-azhan--ali%2FInkling-1a1a2e?style=for-the-badge)](https://github.com/azhan-ali/Inkling)

---

*Built for **Colosseum Hackathon × SagaPad Skill Marketplace** · Topic 1 — Social Playbook*

</div>

---

## 🔥 The Problem

> Most hackathon teams ship great products and **disappear into noise.**

You spent weeks building. You submitted to Colosseum. And then... silence.

Not because your product is bad. Because **nobody knows your story.**

Generic content tools give you "post 3x a week" advice. That's useless.

---

## ⚡ The Solution

Inkling is not a content generator. It's a **narrative war room.**

Fill 7 fields in 3 minutes. Get a complete, personalized strategy — ready to execute within hours of submission.

```
7 inputs  →  AI analyzes your ecosystem position  →  Complete war room in 60s
```

---

## 🗺️ What You Get (7 Sections)

| # | Section | What's Inside |
|---|---------|---------------|
| 🎭 | **Narrative Archetype** | Your identity (Underdog / Infrastructure / Culture Shift / Pioneer) + threat assessment + your One Truth |
| ⏰ | **Week Zero Kit** | Hour-by-hour 48hr plan + 3 origin story versions (Degen/Builder/Founder) + teaser thread |
| 📅 | **4-Week Battle Plan** | Themed weeks with daily post types, why/how/proof/future |
| 🗺️ | **Insertion Points Map** | 3 live Solana debates + pre-written replies + risk levels + optimal timing |
| ⚔️ | **Rivalry Radar** | How competitors will position + your counter + your unfair narrative advantage |
| 🧵 | **Viral Thread Pack** | 2 complete 7-tweet threads (Hook-Proof-Pull) + 5 standalone posts + your hashtag |
| 🤝 | **Ecosystem Ally Finder** | 5 collaborators + cross-promo angles + non-pitchy DM scripts |

> **Every word is copy-paste ready. No editing required. Just execute.**

---

## 🎯 The 4 Archetypes

```
🥊 The Underdog          →  Small team, big vision. Emotion: Hope.
⚙️ The Infrastructure    →  Quiet but essential. Emotion: Respect.
⚡ The Culture Shift     →  Challenging the status quo. Emotion: Disruption.
🧭 The Use-Case Pioneer  →  First to solve X for Y. Emotion: Curiosity.
```

---

## 🛠️ Tech Stack

```
Framework   →  Next.js 16 (App Router + TypeScript)
Styling     →  Tailwind CSS v4 + Hand-drawn sketch UI
Fonts       →  Permanent Marker + Caveat + Patrick Hand
AI Primary  →  Google Gemini 2.5 Flash
AI Fallback →  Groq Llama 3.3 70B
Database    →  Supabase (Postgres) — shareable result URLs
Deploy      →  Vercel
```

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/azhan-ali/Inkling
cd Inkling

# 2. Install
npm install

# 3. Environment
cp .env.example .env.local
# Fill in your keys (see below)

# 4. Run
npm run dev
```

Open **http://localhost:3000** ✦

---

## 🔑 Environment Variables

```env
GEMINI_API_KEY=                    # Google Gemini (primary AI)
GROQ_API_KEY=                      # Groq Llama (fallback AI)
NEXT_PUBLIC_SUPABASE_URL=          # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=     # Supabase anon key
```

---

## 🗄️ Supabase Setup

Run this **once** in Supabase Dashboard → SQL Editor:

```sql
create table if not exists public.generations (
  id text primary key,
  inputs jsonb not null,
  output jsonb not null,
  created_at timestamptz default now() not null
);

alter table public.generations enable row level security;
create policy "Public read" on public.generations for select using (true);
create policy "API insert" on public.generations for insert with check (true);
```

---

## 📁 Project Structure

```
inkling/
├── app/
│   ├── page.tsx                 ← Landing page
│   ├── forge/                   ← 7-step input form
│   ├── result/[id]/             ← Strategy output (7 sections)
│   └── api/generate/            ← POST: generate | GET: fetch by id
├── components/
│   ├── form/                    ← ForgeForm, StylePicker, LoadingOverlay
│   ├── result/                  ← 7 section components + CopyButton
│   └── shared/                  ← Header, Footer, Toast, InkCursor
├── lib/
│   ├── ai/                      ← Gemini + Groq + prompt + repair
│   ├── ecosystem-data.ts        ← Hardcoded Solana intelligence
│   ├── schema.ts                ← Zod schemas (input + output)
│   └── generate.ts              ← AI orchestrator
├── skill.md                     ← SagaPad submission file
└── LAUNCH.md                    ← X post + Superteam Earn copy
```

---

## 🏆 Why Inkling Wins

| What Others Build | What Inkling Does |
|-------------------|-------------------|
| Generic content calendar | Personalized war room with rivalry intelligence |
| "Post 3x a week" advice | Hour-by-hour Week Zero Kit |
| Static handle lists | Live insertion points with risk levels |
| One tone option | 3 origin story versions in builder's own voice |
| One-time use tool | Weekly Ally Finder creates retention |
| Template-based output | Archetype-assigned narrative identity |

---

## 📋 Submission

| Item | Value |
|------|-------|
| **Skill name** | `inkling` |
| **Track** | Topic 1 — Hackathon Project Social Playbook |
| **Category** | Colosseum Hackathon |
| **SagaPad** | `sagapad.com/skills/inkling` |
| **GitHub** | `github.com/azhan-ali/Inkling` |

---

<div align="center">

**MIT License**

*Made with ✦ for Solana builders who ship great products and deserve to be heard.* <br>
made by Azhan Ali
</div>
