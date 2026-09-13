# Current design system (as of 2026-09-13)

Source of truth for tokens: `tailwind.config.ts` and `lib/config.ts`. This file documents intent;
if it and the config disagree, the config wins, but flag the drift.

## Positioning

"Human authority infrastructure for autonomous systems." Parmana preserves human authority over
autonomous systems: it makes a business's existing policy (approval limits, delegation rules,
vendor lists, compliance rules) structurally enforceable against autonomous agents and other
autonomous systems before execution reaches business systems. Parmana does not invent or change
policy, and does not make the authorization decision itself, it evaluates and enforces existing
policy deterministically. Locked phrases, reuse verbatim (see `messaging` in `lib/config.ts`):

- "Your policies. Your control. Autonomous systems execute within your authority."
- "Autonomous systems propose. Your policy decides. Parmana enforces."
- "Humans stay in control while benefiting from autonomous capability."
- "Structural authority, verified by cryptographic proof."

Terminology preference: "autonomous systems" over "AI agents" alone, Parmana is actor-agnostic
(agents, algorithms, workflows, compromised systems all pass through the same boundary). "AI
agent" is still fine when describing a specific real system by name (for example the Phinite demo
integration), but general positioning copy should default to "autonomous systems."

This supersedes the "Authorization before execution" framing (documented here 2026-09-10), the
earlier navy/mint "your infrastructure is already ready" pyramid framing, and the black-minimalist
"Institutional Authority Infrastructure" plan in `NEW-SITE-BUILD-PROMPT.md` (neither of the latter
two shipped in that form; treat that file as historical only). The repositioning is copy and
terminology only, not a design system change: colors, typography, page structure, and nav below
are unchanged.

An "Evidence" section (`components/Evidence.tsx`) cites third-party validation: real, independently
verified sources only, each with an outbound link to the primary source (NPCI, FCA, KPMG, RBI,
OpenAI, UK AISI, HCLTech). Two claims from an earlier draft of this section (a Razorpay "misconfigured
agents" incident, an Infosys architecture diagram naming Parmana) could not be verified against any
real source and were dropped rather than published. Before adding a new item to this section,
verify it against a primary or clearly reputable source the same way, do not add a claim on the
strength of a pasted brief alone.

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

## Page structure (`app/page.tsx`)

Hero -> Problem -> Gap -> Solution -> HowItWorks -> ExistingInfrastructure ->
PreventionVsDetection -> Evidence -> Architecture -> TechGuarantees -> UseCases -> DemoTeaser ->
Stakeholders -> FAQ -> BottomCTA, each component in `components/`, wrapped in `<Reveal>` for
scroll-in animation except Hero.
