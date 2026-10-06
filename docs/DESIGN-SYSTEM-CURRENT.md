# Current design system (as of 2026-10-06)

Source of truth for tokens: `tailwind.config.ts` and `lib/config.ts`. This file documents intent;
if it and the config disagree, the config wins, but flag the drift.

## Positioning

**Primary positioning (2026-10-06):**

> Make your business ready for autonomy. Ready. Enforced. Proven.

Parmana is authority infrastructure for autonomous systems: it adds an authority layer in front of
the systems a business already runs. It does not replace ERP, CRM, payments, APIs, IAM or AI models.
Not an agent builder, AI safety tool, or governance platform.

Locked items:
- Tagline, verbatim: "Your business decides what autonomous systems are allowed to do." (`messaging.tagline`)
- Framework: Ready. Enforced. Proven. (`messaging.heroLine`, `messaging.footer`)
- Primary CTA everywhere is "Request a demo" (to `/book`); no "Schedule a conversation"
- The ₹50,000 refund limit with a ₹75,000 request is the homepage's worked example
- Never say "AI governance" or "AI safety"; never claim Parmana makes AI safe. Scope claims to
  actions routed through Parmana

Plain-language explanation:

- AI can operate the software a business already uses.
- The business sets the rules for what is allowed.
- Parmana checks important actions before the business system carries them out.
- Parmana keeps proof of what the business allowed and what the system actually did.

Public copy should use simple words. Prefer **business rules**, **allowed**, **authorized**, **action**, **system**, **what happened**, and **proof**. Avoid abstract category language in customer-facing copy.

Parmana does not make the leader decision. The business sets the rules. AI, people, applications, and automated workflows can request actions; Parmana checks those actions before they reach the business system.

## Color tokens (Tailwind)

| Token | Hex | Usage |
|---|---|---|
| `paper` | `#FFFFFF` | Page background |
| `ink` | `#1A1A1A` | Primary text |
| `purple` | `#6366F1` | Primary accent, CTA backgrounds, borders |
| `purple-deep` | `#4338CA` | Accent text/links on white (meets AA contrast), CTA text on white |
| `lavender` | `#F5F3FF` | Subtle section/card backgrounds |
| `border` | `#E5E7EB` | Dividers, card borders |

Don't hardcode hex values in components or improvise new accent colors, consume the tokens.

## Typography

- Sans (headlines and body): Inter, `font-sans` (`--font-inter`)
- Mono (technical labels, eyebrows): JetBrains Mono, `font-mono` (`--font-jetbrains-mono`)
- No serif typeface in the current system (the earlier Fraunces serif is retired)
- Headlines are bold sans (`font-bold`), not a distinct display face

## Components

- Buttons: primary is solid `bg-purple` with white text; secondary is white with `border-purple`
  and `text-purple-deep`; 4-8px radius, 44px min touch target
- Cards: white or `bg-lavender`, `border border-border`, 6-8px radius, no heavy shadows
- Gate glyph (`components/Gate.tsx`): the one recurring illustrative motif, an animated SVG gate
  representing request/check/authorize. Recolored to purple/purple-deep. Don't introduce other
  literal iconography (no robots, no glowing brains, no generic cybersecurity clip art)

## Copy rules

- No em dashes or en dashes anywhere in site copy, use commas or periods instead (hyphens in
  compound words are fine)
- AI, and autonomous systems generally, never "act", "approve", "order", or otherwise appear as the
  authority. AI/agents/autonomous systems/employees/apps "propose" or "request" an action; Parmana
  "evaluates" and "enforces"; execution "proceeds" or is "blocked" as a system outcome, not
  something AI or an autonomous system does on its own authority
- No fabricated customer names, revenue figures, benchmark numbers, or specific currency/day-count
  metrics that are not independently verified. Prefer qualitative descriptions or brief-style
  illustrative examples ("for example, approvals over $10,000 require sign-off") over invented
  specific figures
- Technical claims (Ed25519 signing, ML-DSA/Dilithium3 quantum-readiness, single-use/time-bounded/
  revocable credentials) should track the validated claims in `SITE_CONTENT_VALIDATION.md` where
  they overlap

## Page structure (`components/ParmanaWebsite.tsx`, rebuilt 2026-10-06)

Hero (eyebrow, `messaging.hero`, `messaging.subhead`, a four-step flow visual: ₹75,000 request,
Parmana STOPPED, no execution, verifiable evidence) -> Problem -> Pillars (`#product`, Ready /
Enforce / Prove) -> Architecture (`#how-it-works`, autonomous system, Parmana, ALLOW / STOP,
existing system, independent proof) -> RefundExample (`#example`, interactive slider against a
₹50,000 limit) -> Benefits (four cards) -> WhyParmana (dark band, "Authority should belong to the
business") -> Trust (`#trust`, three cards, evaluate and source links) -> UseCases (`#use-cases`,
links to `/agents?use=`) -> Developers (`#developers`, no code block, docs / playground / verify)
-> ClosingCTA (`#contact`). Header: Product, Use cases, Trust, Docs, GitHub, Request a demo.

Claims follow the Parmana repository: "requests that go through Parmana reach your systems only
when your rules allow them", never an unconditional "nothing reaches your systems". Integrations
named are only the connectors that exist.

Plain-language rule (2026-09-28): write for a busy CFO/CTO. Say "checkpoint outside your systems", not
"structural boundary"; "signed receipt anyone can verify", not "cryptographic attestation". FAQ answers
stay honest: no "can't be compromised"; unreachable Parmana means no signed yes, so nothing runs.

Worked example on the homepage is a ₹50,000 refund rule with a ₹75,000 request (illustrative), always
"your payment processor", never a named processor. No named regulators, firms, or dates on the
homepage unless sourced. CTA clicks carry `data-track="event_name"`, reported by
`components/SiteAnalytics.tsx` (Vercel Web Analytics).

`/agents` is the follow-up landing page for emails:
`/agents?use=refund|payment|approval|procurement|customer|engineering` (data in `lib/useCases.ts`,
unknown values fall back to refund), showing what the system can do, cannot do, what Parmana
enforces and what evidence is produced. "Request a demo" CTAs read `scheduleUrl` in `lib/config.ts`
(`/book`, the Cal.com embed).

Visual bar is Stripe-level polish on the existing tokens: soft purple/lavender gradient fields, pill
buttons, mono eyebrows, product-style cards with layered shadows. Achieved with opacity variants of
the tokens, no new hues.
