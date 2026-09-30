# Current design system (as of 2026-09-23)

> **Homepage override (2026-09-30):** the homepage (`app/page.tsx`) now renders
> `components/ParmanaWebsite.tsx`, a self-contained dark/mint build with inline styles and no Tailwind.
> Palette: dark `#0A0D10`, light `#F5F3F0`, green `#6FE3C4`, border `#1B2126`. Type: Fraunces 600
> headings, Public Sans body, IBM Plex Mono labels. Lead line: "Your rules. Your control. That's it."
> It carries its own nav and footer. Inner pages (`app/(site)/`: /book, /demo, /agents)
> still use the white/purple Tailwind system documented below. The copy rules below (no dashes,
> AI never acts, no fabricated metrics) apply to both.

Source of truth for tokens: `tailwind.config.ts` and `lib/config.ts`. This file documents intent;
if it and the config disagree, the config wins, but flag the drift.

## Positioning

**Primary positioning (2026-09-23):**

> You authorize. We ensure.

Parmana is authorization infrastructure for agentic systems: it sits between your agents and your
systems. Not an agent builder, AI safety tool, or governance platform.

Locked items:
- Tagline, verbatim: "Your policies don't change. Agents prove they follow them." (`messaging.tagline`)
- Three outcomes, titles and order fixed: Deploy Safely, Prove Compliance, Protect Systems
- The refund example is the only concrete example on the homepage
- One-liner (2026-09-26): "You set rules. Parmana checks them. You get proof."
- Never say "AI governance" or "AI safety"; don't lead with preventing bad outcomes

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

## Page structure (`app/page.tsx`, rebuilt 2026-09-28)

Hero ("Your rules. Your control." + "AI asks. Parmana checks. Only what you allowed goes through.", with a
three-box AI -> Parmana -> your system flow) -> Problem -> Boundary (`#what-we-built`, "a checkpoint that
sits outside your systems", five steps ask/check/sign/run/verify, "nothing you run today has to change")
-> ThreeLayers (`#how-it-works`) -> InsideOutside (`#why-outside`, built-in check vs. outside check, no
competitor named) -> Outcomes (locked three) -> RefundCase (`#proof`) -> CategoryCheck (`#check`) -> FAQ
(`#faq`, add questions in `components/FAQ.tsx`) -> Developers -> HomeCTA (`#contact`). WhyNow and
CompanyOutcomes are no longer on the homepage (files kept).

Plain-language rule (2026-09-28): write for a busy CFO/CTO. Say "checkpoint outside your systems", not
"structural boundary"; "signed receipt anyone can verify", not "cryptographic attestation". FAQ answers
stay honest: no "can't be compromised"; unreachable Parmana means no signed yes, so nothing runs.

Worked example on the homepage is a ₹10,000 refund rule with ₹8,000 / ₹15,000 requests, always
"your payment processor", never a named processor. No named regulators, firms, or dates on the
homepage unless sourced. CTA clicks carry `data-track="event_name"`, reported by
`components/SiteAnalytics.tsx` (Vercel Web Analytics).

`/agents` is the follow-up landing page for emails: `/agents?use=refund|payment|approval|procurement`
(data in `lib/useCases.ts`, unknown values fall back to refund). "Schedule a conversation" CTAs read
`scheduleUrl` in `lib/config.ts`, currently a mailto until a calendar link exists.

Visual bar is Stripe-level polish on the existing tokens: soft purple/lavender gradient fields, pill
buttons, mono eyebrows, product-style cards with layered shadows. Achieved with opacity variants of
the tokens, no new hues.
