# Parmana site

Next.js 14 App Router + TypeScript + Tailwind CSS (no CSS Modules, no component library).
Single-page marketing site. See `docs/DESIGN-SYSTEM-CURRENT.md` for the design system, copy rules,
and positioning this build follows; `docs/NEW-SITE-BUILD-PROMPT.md` is a historical, never-shipped
plan, don't treat it as current.

- Colors and type are governed by the tokens in `tailwind.config.ts` / `lib/config.ts`, don't
  improvise new accent colors or hardcode hex values in components.
- Copy rules in `docs/DESIGN-SYSTEM-CURRENT.md` (no em/en-dashes, AI never "acts" as the authority,
  no fabricated metrics) apply to all site text.
