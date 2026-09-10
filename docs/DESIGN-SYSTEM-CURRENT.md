# Current design system (as of 2026-09-10)

Source of truth for tokens: `tailwind.config.ts` and `lib/config.ts`. This file documents intent;
if it and the config disagree, the config wins, but flag the drift.

## Positioning

"Authorization before execution." Parmana is execution authorization infrastructure: it makes a
business's existing authorization rules (approval limits, delegation rules, vendor lists,
compliance rules) enforceable against AI agents and autonomous systems before execution reaches
business systems. Parmana does not invent or change policy, and does not make the authorization
decision itself, it evaluates and enforces existing policy deterministically. Core lines:

- "Your policy decides. Parmana enforces."
- "AI can be intelligent without being in charge."
- "Proof before execution."

This supersedes the earlier navy/mint "your infrastructure is already ready" pyramid framing and
the black-minimalist "Institutional Authority Infrastructure" plan in `NEW-SITE-BUILD-PROMPT.md`
(neither shipped in this form; treat that file as historical only).

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
- AI never "acts", "approves", "orders", or otherwise appears as the authority. AI/agents/employees
  /apps "propose" or "request" an action; Parmana "evaluates" and "enforces"; execution "proceeds"
  or is "blocked" as a system outcome, not something AI does on its own authority
- No fabricated customer names, revenue figures, benchmark numbers, or specific currency/day-count
  metrics that are not independently verified. Prefer qualitative descriptions or brief-style
  illustrative examples ("for example, approvals over $10,000 require sign-off") over invented
  specific figures
- Technical claims (Ed25519 signing, ML-DSA/Dilithium3 quantum-readiness, single-use/time-bounded/
  revocable credentials) should track the validated claims in `SITE_CONTENT_VALIDATION.md` where
  they overlap

## Page structure (`app/page.tsx`)

Hero -> Problem -> Gap -> Solution -> HowItWorks -> ExistingInfrastructure ->
PreventionVsDetection -> Architecture -> TechGuarantees -> UseCases -> Stakeholders -> FAQ ->
BottomCTA, each component in `components/`, wrapped in `<Reveal>` for scroll-in animation except
Hero.
