# Inkling — Vercel Deployment Guide

## Step 1 — Connect GitHub to Vercel

1. Go to **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Select **`azhan-ali/Inkling`**
4. Framework: **Next.js** (auto-detected)
5. Root directory: leave as `/` (default)

## Step 2 — Add Environment Variables

In the Vercel project settings, add these 4 environment variables:

| Name | Value |
|------|-------|
| `GEMINI_API_KEY` | Your Gemini API key |
| `GROQ_API_KEY` | Your Groq API key |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key |

## Step 3 — Deploy

Click **"Deploy"**. Vercel will:
- Install dependencies
- Run `npm run build`
- Deploy to `inkling.vercel.app` (or your custom domain)

## Step 4 — Verify

After deploy, test:
- `https://inkling.vercel.app/` — landing page loads
- `https://inkling.vercel.app/forge` — form loads
- `https://inkling.vercel.app/api/generate` — returns 400 (expected, no body)

## Step 5 — Update URLs

After deploy, update these in the repo:
- `skill.md` — replace `https://inkling.vercel.app` with your actual Vercel URL
- `LAUNCH.md` — replace `[SAGAPAD_LINK]` with your SagaPad skill URL

## Custom Domain (optional)

In Vercel project → Settings → Domains → Add your domain.
