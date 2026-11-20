# Parmana Systems website

The site is a Next.js 15 App Router application for Parmana Systems.

## Positioning

**The Institutional Authority Layer for Autonomous Systems.**

The website serves two audiences with intentionally different language and depth:

- **Business leaders**: delegation, operating limits, approvals, institutional risk and accountability.
- **Engineering leaders**: authorization boundaries, deterministic policy evaluation, request binding, enforcement, cryptographic integrity and independent verification.

## Site map

- `/` — Category, core proposition and audience entry points
- `/business` — Business leader journey in plain institutional language
- `/engineering` — Engineering overview and implementation concepts
- `/architecture` — Detailed technical architecture, contracts, evidence and failure semantics
- `/use-cases` — Refunds, payments, procurement, enterprise records, infrastructure and cross-system workflows
- `/research` — Research papers and discussion drafts
- `/team` — Team
- `/vision` — Company vision
- `/license` — Licensing information

## Development

Requirements: Node.js 20 or later.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

Build for production:

```bash
npm run build
npm run start
```

## Core implementation

- Next.js App Router
- React 19
- TypeScript
- CSS design system in `app/globals.css`
- Shared navigation and page components in `app/components/SiteChrome.tsx`

## Important content boundaries

The site distinguishes an authorization decision from a downstream execution outcome. It also distinguishes evidence integrity from proof that an institutional policy was correct, lawful or completely enforced across every possible route. Illustrative request and decision objects are labelled as schematic examples, not published API schemas.

Primary CTAs currently point to the existing Cal.com booking URL. Developer documentation links to `https://docs.parmanasystems.com`.
