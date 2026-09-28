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
| Headline, subheadline, footer line, tagline | `lib/config.ts` (`messaging`) |
| Nav links, docs/GitHub/blog URLs, section anchors | `lib/config.ts` (`nav`), `components/Header.tsx` |
| Page title, description, share (Open Graph) text | `app/layout.tsx` (`metadata`) |
| Homepage section order | `app/page.tsx` |
| Hero and its three-box flow | `components/Hero.tsx` |
| "What we built" and the five steps | `components/Boundary.tsx` |
| Step-through refund demo | `components/ThreeLayers.tsx` |
| Inside vs. outside comparison | `components/InsideOutside.tsx` |
| Three outcomes (titles are locked) | `components/Outcomes.tsx` |
| Refund example | `components/RefundCase.tsx` |
| Quiz | `components/CategoryCheck.tsx` |
| FAQ | `components/FAQ.tsx` |
| Closing call to action | `components/HomeCTA.tsx` |

Copy rules in short: no em or en dashes, AI only "asks" or "requests" (it never acts or approves),
no named customers, partners, regulators, or dates unless sourced, plain words over jargon.

## Add an FAQ question

Open `components/FAQ.tsx` and add an entry to the `faqs` array:

```ts
{
  q: "Your question?",
  a: "A short, plain answer. Two or three sentences.",
},
```

It appears on the homepage in the order of the array.

## Deploy (Vercel)

The project deploys on Vercel. Pushing to `main` triggers a production deploy if the Git
integration is connected. To deploy by hand:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

Check the preview URL on a phone and a desktop before promoting to production.
