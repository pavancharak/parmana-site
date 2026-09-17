# Website Fixes: Before/After Comparison

Applied directly to the real source files (git-tracked; `git diff` is the authoritative before/after
record). This document is the human-readable summary. Score: 17/25 → target 21/25.

## Fix 1: Title/Meta Tags

**File:** `app/layout.tsx`

**BEFORE:**
- Title: `Parmana | Institutional Authority Infrastructure`
- Description: `Authorization infrastructure for consequential actions. Any actor, any domain, authority remains yours. Parmana verifies every action before execution.`
- OG/Twitter description: `Only what you authorize should execute, regardless of the actor.`

**AFTER:**
- Title: `Parmana | Authorization Before Execution`
- Description: `Parmana checks every payment an AI agent, employee, or app requests against your rules before it executes. Allowed, it proceeds. Not allowed, it stops.`
- OG/Twitter description: `Let AI agents request payments. Your rules decide what actually happens.`

**Why:** This is the text a prospect sees first, in a Google result or a link preview, before ever reaching the clear on-page hero. The old copy was more abstract than the page it introduces.

---

## Fix 2: Name the Ed25519 Mechanism

**Files:** `components/Differentiators.tsx`, `components/AuthorizationGap.tsx`, `components/FAQ.tsx`

**BEFORE (Differentiators, "Proof Before Payment" card):**
> "Parmana creates signed proof of the authorization before the action is executed. The decision can be independently verified."

**AFTER:**
> "Parmana signs every authorization with Ed25519 before the action executes. Your payment system, or any regulator, can verify the signature independently with the public key and decision record."

**BEFORE (AuthorizationGap):**
> "Parmana checks the requested action against your rules before it happens. The authorization decision is signed and can be verified by the system that executes the action."

**AFTER:**
> "Parmana checks the requested action against your rules before it happens. Parmana uses Ed25519 digital signatures to prove every authorization independently, so the system that executes the action can verify it without trusting Parmana."

**AFTER (new FAQ entry added, right after the cryptography-evolution question):**
> Q: "How do I know a signed authorization is real?"
> A: "Parmana signs every authorization with Ed25519. Anyone can verify it independently by checking the signature against the public key and the decision record, no special tools and no need to trust Parmana's word for it."

**Why:** "Signed" and "verified" stayed abstract everywhere on the page. Ed25519 is real (it's what the nav's existing Security link demos live), naming it turns a marketing claim into a checkable fact.

**Scope note:** did not add an inline "See how verification works →" link inside the two card/section bodies — both render from plain-string data arrays, and turning one entry into JSX to hold a link was more surface area than the fix needed. The nav's "Security" link (fixed in Fix 4 below) already points to the live demo from every page, so the pathway to verify already exists without duplicating it inline.

---

## Fix 3: Remove Duplicate Diagram

**File:** `app/page.tsx`

**BEFORE:** `<Diagram />` (non-compact) rendered a second time between `AuthorizationGap` and `UseCases`, reproducing the exact same 4-box diagram and caption already shown via `<Diagram compact />` inside `Hero`, plus a redundant "Before the payment happens" heading.

**AFTER:** The second `<Diagram />` render and its import removed from `app/page.tsx`. The diagram now appears exactly once, in the hero.

**Why:** A reader who saw this 400px earlier gained nothing from seeing it again — it read as unedited padding.

**Verified:** built static HTML contains exactly 1 occurrence of "Payment Request" (was 2).

---

## Fix 4: Fix Security Links

**Files:** `lib/config.ts`, `components/Header.tsx`, `components/BottomCTA.tsx`

**BEFORE:**
- `lib/config.ts`: `nav.security = "#security"` (used by Footer)
- `components/Header.tsx`: nav hardcoded `"https://parmana.fly.dev/"` directly instead of using `nav.security`
- `components/BottomCTA.tsx`: `<section id="security">` — this is actually the closing contact CTA, not security content

**AFTER:**
- `lib/config.ts`: `nav.security = "https://parmana.fly.dev/"` — single source of truth
- `components/Header.tsx`: now references `nav.security` instead of a second hardcoded string
- `components/BottomCTA.tsx`: `<section id="contact">` — accurately named, and safe to rename since nothing else in source referenced `#security` (confirmed by a repo-wide grep before renaming)

**Why:** Same label, two different destinations, and the footer one didn't lead to any security content. Small inconsistencies like this undercut the bigger verifiability claims elsewhere on the page.

**Verified:** built static HTML shows 2 occurrences of `href="https://parmana.fly.dev/"` (nav + footer, matching), `id="contact"` present, `id="security"` gone.

---

## Fix 5: Source/Soften Uncited Claims + Remove Em Dash

**File:** `components/Evidence.tsx`

**BEFORE:**
> "Recent AI security evaluations have shown that agents can take actions beyond what people expect when pursuing a goal."
> "RBI's 2026 draft Model Risk Management guidance includes human oversight for AI models, including mechanisms to override, suspend or deactivate models — explicitly including kill-switch arrangements."

**AFTER:**
> "AI security evaluations have shown agents can take actions beyond what people expect when pursuing a goal."
> "RBI's 2026 draft Model Risk Management guidance includes human oversight for AI models, including mechanisms to override, suspend, or deactivate models. This explicitly includes kill-switch arrangements."

**Why softened rather than linked:** there's no real, verified source URL for the "AI security evaluations" claim available to cite, and inventing a link would trade one problem (an unverifiable claim) for a worse one (a fabricated or dead link in production copy). Dropped "Recent" (the word doing the unverifiable-specificity work) rather than link to nothing, per the fallback the task itself specified when no link is available. The RBI sentence is a real, specific, named regulator and document, so it only needed the em dash fixed (split into two sentences) — no softening needed.

**Verified:** 0 em dashes anywhere in `components/`, `app/`, or `lib/`.

---

## Fix 6: Tighten Self-Hosting FAQ Answer

**File:** `components/FAQ.tsx`

**BEFORE:**
> "Parmana is designed to support deployment in environments that fit your security and operational requirements, including cloud and infrastructure you control. The deployment model does not change the authorization boundary: your business rules remain in control of what can execute."

**AFTER:**
> "Yes. Parmana runs as a standard container and can be deployed on your own cloud account or infrastructure you control, not only ours. Your business rules and signing keys stay in your deployment, not in ours."

**Why:** the old answer hedged ("environments that fit your requirements") instead of answering. The new one leads with "Yes," and the "container" / "signing keys stay in your deployment" claims are grounded in the real Dockerfile in `parmana-exp` (multi-stage build explicitly designed to run on any Docker host, with signing key material deliberately excluded from the built image).

**Scope note:** did not link to a "deployment details" page, since none exists yet, and the FAQ's existing 16 entries are all plain text with no inline links — adding one bracketed pseudo-link would have rendered as literal, broken-looking text rather than a real link.

---

## Fix 7: Customer Proof

**Status:** Not implemented — correctly deferred. See `FIX7_CUSTOMER_PROOF_PLACEHOLDER.md`.

The current restraint (no fabricated logos, no invented customer names) is the right call and is what keeps this site's grift-risk LOW. This gap closes with a real design partner, not a copy trick.

---

## Unplanned Fix: Pre-existing Build-Breaking Corruption

**File:** `components/Diagram.tsx`

Line 1 read `2"use client";` — a stray leading `2` character before the directive, unrelated to any of
the 6 audit fixes. This broke `npm run build` outright (a syntax error, not a lint warning). Fixed to
`"use client";` so the build could complete and the fixes above could be verified in real output.
