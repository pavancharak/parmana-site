# Parmana site

Marketing site for parmanasystems.com. Next.js 14 (App Router), TypeScript, Tailwind CSS.

Before changing copy or design, read `docs/DESIGN-SYSTEM-CURRENT.md` (positioning, colors, copy rules).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build, run before pushing
```

## Where the copy lives

| What | File |
|---|---|
| Headline, subheadline, one-liner, footer line, tagline | `lib/config.ts` (`messaging`) |
| Links (docs, GitHub, evaluation pages, section anchors) | `lib/config.ts` (`nav`) |
| Page title, description, share (Open Graph) text | `app/layout.tsx` (`metadata`) |
| Homepage section order | `components/ParmanaWebsite.tsx` |
| Header and footer | `components/Header.tsx`, `components/Footer.tsx` |
| Hero and its request, check, record visual | `components/home/Hero.tsx` |
| Fact strip and the four steps | `components/home/HowItWorks.tsx` |
| Interactive refund example | `components/home/RefundExample.tsx` |
| Three outcomes (titles are locked) and integrations | `components/home/Outcomes.tsx` |
| Developer section and SDK sample | `components/home/Developers.tsx` |
| Trust section and evaluation links | `components/home/Trust.tsx` |
| Closing call to action | `components/home/ClosingCTA.tsx` |
| Shared section heading, eyebrow and card styles | `components/home/Section.tsx` |

Copy rules in short: no em or en dashes, AI only "asks" or "requests" (it never acts or approves),
no named customers, partners, regulators, or dates unless sourced, plain words over jargon. Every
product claim should match the claims in the Parmana repository (`docs/CLAIMS.md`).

## Deploy (Vercel)

The project deploys on Vercel. Pushing to `main` triggers a production deploy if the Git
integration is connected. To deploy by hand:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

Check the preview URL on a phone and a desktop before promoting to production.
