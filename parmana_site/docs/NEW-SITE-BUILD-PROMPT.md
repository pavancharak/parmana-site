# parmana-site Rebuild Prompt, Apply Locked Positioning Along Existing Lines

**Status:** Ready to execute. Produced by a scoping-only session on 2026-08-09 that inspected
the live `parmana-site` repo but made no code changes. Everything below reflects the actual
repo state as of commit `6d06133` on `main`.

**How to use this document:** paste it as the instruction to a future Claude Code session (or
hand it to whatever tool does the actual rebuild). It is self-contained, the executing session
does not need to re-derive the inventory in Part 1, only verify nothing has drifted since this
was written.

---

## Part 0, What this task is and isn't

- **Is:** rewrite existing pages' copy/framing to match the locked positioning below, retire or
  fold in orphaned/dead files, and align every "AI-only" claim to the technology-agnostic
  authority-protection thesis.
- **Isn't:** a redesign. Keep the existing route list, the existing `Section` component pattern,
  the existing two visual dialects (see Part 3), and the existing nav. Don't introduce a new
  design system, new routes beyond what's listed, or new component conventions.
- **Isn't:** a chance to revisit the positioning itself. It's locked (Part 2). Apply it; don't
  argue with it.

---

## Part 1, Inventory of the current site (as found, 2026-08-09)

### Routes (`app/`)

| Route | File | Purpose | Current framing status |
|---|---|---|---|
| `/` | `app/page.tsx` → `components/hero.tsx` | Landing page, hero + interactive quiz | **Stale.** Eyebrow reads "EXECUTION AUTHORIZATION INFRASTRUCTURE"; H1 is "AI can execute. You remain accountable."; the 5-question "Test Your Authority Over AI Execution" quiz is still live and every question/option is AI-specific (e.g. "Who remains accountable when an AI agent changes your business system?"). No trace of "We Are Not in the AI Race," no proof points, no closing tagline. |
| `/why` | `app/why/page.tsx` (uses `components/section.tsx`) | Problem framing: why execution needs authorization | **Stale.** Opens with "AI agents are transforming software..."; every section is AI-triggered ("You Don't Have To Deploy AI Agents," "AI-driven execution is becoming part of every connected business"). The underlying argument (any execution source, not just AI, needs authorization) is *already present in the Risk section* ("It doesn't matter whether the request comes from an AI agent, a human, an application, or an attacker"), so this page is closer to salvageable-by-copy-edit than a rebuild. |
| `/execution` | `app/execution/page.tsx` | What "execution" means and why it needs a decision | **Stale.** "The Shift" section is framed entirely as an AI capability change. Closing line: *"Parmana ensures institutions don't lose authority to AI agents."* (see the repeated-line note below). |
| `/architecture` | `app/architecture/page.tsx` (250 lines, self-contained, see dead-code note below) | Visual diagram: execution sources → Parmana → systems of record | **Closest to already-aligned.** This is the one page whose *structure* already matches the final positioning: it lists **AI Agent, Human, Application, Attacker** as four equal "execution sources," tags Parmana "Human Authority Infrastructure" and "Vendor & Model Agnostic." Needs copy/proof-point additions, not a rebuild, treat this page's structure as the template for how "any source, not just AI" should read elsewhere. |
| `/faq` | `app/faq/page.tsx` | 23-question FAQ | **Stale, most AI-saturated page on the site.** Title: "Questions About Institutional Authority"; subtitle: "...when AI agents initiate execution." Every single answer is phrased AI-first (e.g. "Does Parmana give AI agents authority?", "Can Parmana protect against rogue or jailbroken AI agents?", "Is Parmana tied to a specific AI model?"). The Q&A *format* is good and should stay, but nearly every question needs reframing to "any execution source" language, and new questions need adding for the proof points in Part 2 (TRL 7, the four validation passes, PQC, open-core SDK). |
| `/company` | `app/company/page.tsx` → `components/company.tsx` | Mission, vision, principles, "who we build for" | **Stale.** Mission statement: *"...as AI systems increasingly initiate business actions."* Commitment closer: *"Parmana ensures institutions don't lose authority to AI agents."* The `Principles` block (Authority, Determinism, Integrity, Accountability) is already technology-agnostic and can stay as-is, only the mission/vision/commitment prose needs rewriting. |
| `/contact` | `app/contact/page.tsx` → `components/contact.tsx` | Contact form/links, leadership | **Effectively neutral already.** Copy talks about "institutional authorization" and "execution governance" generically, no AI-specific claims to fix. Light touch only: confirm nothing here regresses once other pages change tone. |
| `/deterministic` | `app/deterministic/page.tsx` | Determinism argument (authorized/unauthorized, no in-between) | **Stale, and orphaned.** Not linked from `navbar.tsx` or `footer.tsx`, reachable only by direct URL. Content is AI-framed throughout ("As AI agents become capable of autonomous execution..."). Decide explicitly (Part 4) whether to fold its argument into `/why` or `/architecture`, or keep it standalone, relink it in nav, and rewrite it, don't leave it orphaned *and* stale. |

### Global chrome

| File | Status |
|---|---|
| `app/layout.tsx` | `metadata.description` is `"Execution Authorization Infrastructure"`, not the fully banned phrase (no "for AI systems") but adjacent to it and worth updating to reflect the authority-protection framing. |
| `components/navbar.tsx` | Structurally fine, preserve as-is. Links: Why / Execution / Architecture / FAQ / Company / external blog, plus a Contact CTA. |
| `components/footer.tsx` | Tagline: *"Parmana ensures institutions don't lose authority to AI agents."*, see repeated-line note below. |

**Repeated stale line:** the exact sentence *"Parmana ensures institutions don't lose authority to AI agents"* (or a one-word variant) appears **verbatim in at least four places**, `footer.tsx`, `execution/page.tsx`'s closer, `company.tsx`'s mission and its commitment block, and is paraphrased as the FAQ's "What is Parmana?" answer. This is the single highest-leverage line to fix: replacing it once conceptually (e.g. toward "...don't lose authority over what becomes real") and propagating that replacement to all four spots will fix a large share of the site's stale-framing surface area.

### Dead / unused code (cleanup candidates, not content-rewrite candidates)

Confirmed via grep, **none of these are imported anywhere** in `app/` or `components/`:

- `components/architecture.tsx`, 0 bytes, empty.
- `components/solution.tsx`, empty.
- `components/independence.tsx`, empty.
- `components/problem.tsx`, has real content (an early draft of the "every AI agent can become an execution endpoint" argument, later superseded by what's now inline in `/why`), but orphaned.
- `components/exposure.tsx`, `components/enterprise-shift.tsx`, `components/why-not-enough.tsx`, not individually content-reviewed in this pass, but confirmed unimported.
- `components/architecture-diagram.tsx` (128 lines), a near-duplicate of the diagram now living inline in `app/architecture/page.tsx` (250 lines). `page.tsx` does **not** import this component; it has its own copy of the same JSX. This is a maintenance hazard as much as dead code, two divergent copies of the same diagram exist.

**Decision needed in the new build (Part 4):** delete the unused empty files outright; either delete `problem.tsx`/`exposure.tsx`/`enterprise-shift.tsx`/`why-not-enough.tsx` or confirm none contain content worth reviving before deleting; and collapse `architecture-diagram.tsx` into the one used by `app/architecture/page.tsx` (or vice versa) so there's a single source of truth for that diagram.

### Cross-reference against prior positioning-fix passes

Git history shows ~24 commits titled "refine institutional authority positioning" (most recent: `6d06133`). Spot-checking several of these (`6d06133`, `72db888`, `3d4b4b0`, `0045f43`, `6a312a1`) shows they are either cosmetic (one sampled commit only removed em-dashes from a single sentence in `hero.tsx`) or empty diffs, consistent with the auto-generated-AGENTS.md-block re-add mechanism this repo's `AGENTS.md` documents (`next dev` re-adds an instructional block; committing it "keeps the tree clean" but carries no content change). **No commit in this repo's history performs a substantive rewrite toward the "We Are Not in the AI Race" positioning.** Every stale-framing item listed above is still fully open, there is no prior fix to avoid regressing on `parmana-site` itself. (The positioning *validation* work referenced in Part 2 lives in the separate `parmana-exp` repo and concerns the product's implementation, not this site's copy.)

### Design system / component conventions

Two visual dialects currently coexist, both are legitimate "existing lines," not a bug to fix, but the new build should either converge them deliberately or keep the split intentional (decide in Part 4, don't leave it accidental):

1. **Neutral/black minimalist pattern**, used by `/why`, `/execution`, `/faq`, `/deterministic` via the shared `components/section.tsx`: a `.label` eyebrow, `.heading-lg`/`.heading-xl` (from `app/globals.css`), `.body`/`.highlight` prose classes, black CTAs, generous whitespace (`.section` = 8rem vertical padding).
2. **Blue-accent card pattern**, used by `/company`, `/contact`, and the inline `/architecture` diagram: `blue-600`/`#2563EB` accents, `rounded-2xl`/`rounded-3xl` bordered cards, Lucide icons in tinted circles, gray-50 backgrounds.

Shared foundation regardless of dialect: Tailwind v4 (`@import "tailwindcss"` in `globals.css`), IBM Plex Sans (`next/font/google`, configured in `app/layout.tsx`), `lucide-react` for icons, `next/link` for internal nav.

---

## Part 2, Positioning source of truth (locked, apply, do not revisit)

> Parmana will not compete in the AI race. Parmana is technology-agnostic. Its purpose is to
> protect institutional authority over what is allowed to become real-world execution. AI agents
> are one source of execution risk, but they are not the only source.
>
> **Only what you authorize should become real.**
>
> Supporting language (available, not mandatory verbatim on every page): *"AI does not have a
> governance problem, it has an authority problem."*

### Locked hero copy (non-negotiable, confirmed final call)

This supersedes any hero wording implied elsewhere in this document. If Part 4's page-by-page
plan reads as suggesting different hero wording, this is the reconciled, final version:

> **Hero line:** "We are building authority infrastructure for institutions."
>
> **Subhead, immediately below it:** "Only what you authorize should become real."

Use this verbatim in the `/` hero (see Part 4). If a genuine layout constraint forces a minimal
adjustment (character-count overflow, line-wrap collision), flag the deviation explicitly in the
rebuild session's output rather than silently changing the wording.

### Locked category term (non-negotiable)

Wherever the site names its category, `layout.tsx` metadata description, footer, any "what is
Parmana" one-liner on `/company` or `/faq`, use:

> **Institutional Authority Infrastructure**

This replaces "Execution Layer for AI," "Execution Authorization Infrastructure for AI systems,"
and the current bare "Execution Authorization Infrastructure" in `layout.tsx` metadata (see
Part 1's global-chrome inventory). Apply it consistently everywhere the category is named, not
just in `layout.tsx`.

Every page in Part 1 marked "Stale" should be rewritten so its argument generalizes from "AI
agents" to "any execution source, AI agents, humans, applications, or attackers", mirroring
the pattern `/architecture` and the Risk section of `/why` already use. Don't delete the AI
framing entirely (AI agents are the reason this is urgent *now*, that's legitimate context),
subordinate it to the broader authority claim instead of letting it *be* the claim.

### Proof points now available to feature (current and accurate as of 2026-08-09)

Cross-checked against `parmana-exp/docs/` (CLAIMS.md, VERIFICATION-GAPS.md,
`docs/architecture/strategic-positioning-validation.md`, `docs/site/trust-and-claims/`,
`docs/rfcs/RFC-0021-Refusal-Record.md`, `docs/architecture/post-quantum-cryptography.md`),
all six are independently corroborated in that repo's own documentation, not just asserted here:

1. **TRL 7**, a real, live-money Razorpay refund executed on production infrastructure.
2. **Four independent, adversarial source-code validation passes** on the core authorization
   claim ("only institutionally authorized actions become execution"), ending in a verified
   **YES**, the first three passes returned PARTIALLY SUPPORTED; the fourth, run fresh after
   the one open gap (`payments:execute`) was removed from the codebase entirely, confirmed no
   exception remains. This progression, found a gap, disclosed it, closed it, re-verified
   independently, is a strong trust asset and worth an actual featured story/page treatment,
   not just a line item: "we didn't just claim it, we independently checked it four times,
   found the one gap, and fixed it."
3. **Credential isolation, atomic execution, verifiable enforcement**, both approvals and
   refusals are independently verifiable (Refusal Records + signed audit-sink events).
4. **The G-24 incident**, found, fixed, and disclosed rather than hidden.
5. **Native post-quantum signature support (ML-DSA-65)**, built and tested.
6. **Open-core SDK extraction (Apache 2.0)** with Scorecard/SLSA/Sigstore hardening.

### What must NOT appear anywhere in the rebuilt site

- "Execution Layer for AI" or "Execution Authorization Infrastructure for AI systems" as
  category terms (the current `layout.tsx` metadata, `"Execution Authorization Infrastructure"`
 , is adjacent to this and should be updated, though it's not the fully banned phrase verbatim).
  The locked replacement category term is **"Institutional Authority Infrastructure"**, see the
  "Locked category term" subsection above.
- "AI never decides" language, or any claim that Parmana controls AI reasoning/behavior (the FAQ
  already correctly avoids this in a few answers, e.g. "Parmana does not control the AI's
  reasoning", preserve that distinction, just generalize the surrounding frame).
- Any restatement of "Parmana ensures institutions don't lose authority **to AI agents**", replace
  every instance (4+ locations, see Part 1) with authority-over-execution language that doesn't
  name AI as the sole threat.
- Nothing was found in this repo's history that already fixed positioning and could be
  regressed, see the git-history cross-reference in Part 1. There is no prior state to protect;
  every stale item above is still live.

---

## Part 3, What "along existing lines" means concretely

Preserve:
- **Route list**: `/`, `/why`, `/execution`, `/architecture`, `/faq`, `/company`, `/contact`.
  Resolve `/deterministic`'s orphan status explicitly (see Part 4) rather than silently dropping
  or silently keeping it unlinked.
- **Nav structure**: `navbar.tsx`'s link set and the Contact CTA pattern; `footer.tsx`'s
  Learn/Company column layout.
- **The `Section` component contract** (`label`/`title`/`background`/`children`) for the four
  pages that use it (`/why`, `/execution`, `/faq`'s hero block, `/deterministic`), don't
  introduce a competing section primitive.
- **Both visual dialects**, unless Part 4 makes a deliberate call to converge them, don't
  silently drift `/company`/`/contact` toward the black-minimalist pattern or vice versa.
- **`/architecture`'s "four equal execution sources" diagram structure**, this is the visual
  template for "AI is one source among several," reuse its framing logic (not necessarily its
  exact JSX) when other pages need to make the same point.
- **`/faq`'s Q&A format and its already-correct answers** (e.g. "Parmana does not control the
  AI's reasoning," "No. Parmana does not require an institution to replace its existing security
  controls"), these don't contradict the locked positioning and don't need rewriting, only
  reframing of the surrounding AI-exclusive language.

Don't salvage by copy-edit alone, this page's *entire premise* is AI-specific in a way the
others aren't:
- None found. Every existing page's core argument (execution needs authorization, regardless of
  source) is compatible with the locked positioning once AI is subordinated from "the reason" to
  "one reason." `/deterministic` is the closest candidate for restructuring rather than pure
  copy-edit, because its premise ("AI behavior is probabilistic, therefore...") is more
  AI-coupled than the others, but the underlying determinism argument itself is source-agnostic
  and worth keeping in some form.

---

## Part 4, Explicit preserve-vs-rewrite plan, per page

| Page | Action | Specifics |
|---|---|---|
| `/` (hero) | **Rewrite copy, decide fate of quiz** | Replace eyebrow/H1/subhead with the **locked hero copy** ("Locked hero copy" subsection in Part 2), H1 "We are building authority infrastructure for institutions.", subhead "Only what you authorize should become real." immediately below it, this is a confirmed final call, not a suggestion to riff on. The quiz is a genuinely good interactive device, either rewrite all 5 questions to be source-agnostic ("Can *any unauthorized actor* change a record..." rather than "Can an AI agent...") or repurpose it as a proof-point-driven interaction (e.g. testing understanding of the authority-vs-authority boundary generally). Don't delete it without considering the rewrite first, it's the most distinctive piece of the current site. |
| `/why` | **Copy-edit, not rebuild** | Generalize "AI agents are transforming software..." opening and the "Exposure" section to lead with the authority-protection thesis; the existing Risk section's "AI agent, a human, an application, or an attacker" line is already correct, use it as the model for the rest of the page. |
| `/execution` | **Copy-edit** | Same pattern, reframe "The Shift" section, replace the closing "don't lose authority to AI agents" line site-wide per Part 2. |
| `/architecture` | **Light touch, add proof points, don't restructure** | Already the best-aligned page. Add a proof-points strip or footnote referencing TRL 7 / the four validation passes / PQC support. Also resolve the dead-code duplication with `architecture-diagram.tsx` (Part 1) as part of this pass. |
| `/faq` | **Full reframe of every answer, format stays** | Rewrite the title/subtitle to drop "when AI agents initiate execution" as the sole trigger. Reframe each AI-specific question to source-agnostic phrasing where the underlying answer already generalizes (most do). Add new FAQ entries for the six proof points in Part 2, especially the four-pass validation story and TRL 7. |
| `/company` | **Rewrite Mission/Vision/Commitment; keep Principles** | The `Principles` grid (Authority, Determinism, Integrity, Accountability) already reads technology-agnostic, leave it. Rewrite the Mission/Vision prose and the "Our Commitment" closing block per Part 2. |
| `/contact` | **Verify only** | No rewrite expected; confirm tone consistency once other pages change. |
| `/deterministic` | **Decide: relink + rewrite, or fold into `/why`/`/architecture`** | It's currently orphaned from nav and fully AI-framed. Recommend folding its core argument (deterministic authorize/block, no in-between) into `/architecture` as a supporting section, since that page is already the "how it works" page, but if kept standalone, it must be (a) relinked in `navbar.tsx`/`footer.tsx` and (b) rewritten per the same source-agnostic pattern as `/why`/`/execution`. Don't leave it orphaned *and* stale in the rebuilt site either way. |
| Global (`layout.tsx`, `footer.tsx`) | **Rewrite** | Update `metadata.description` to use the locked category term "Institutional Authority Infrastructure"; replace the repeated "don't lose authority to AI agents" tagline everywhere it appears (4+ locations cataloged in Part 1) with one consistent authority-over-execution line. Do not use "AI may decide. You decide what becomes real.", that line has been retired from site copy. |
| Dead files (`architecture.tsx`, `solution.tsx`, `independence.tsx`, `problem.tsx`, `exposure.tsx`, `enterprise-shift.tsx`, `why-not-enough.tsx`) | **Delete, after a final import-grep confirms still-unused** | These carry no positioning debt of their own since nothing renders them, but they're dead weight and a source of confusion (e.g. `problem.tsx`'s superseded framing). Delete rather than rewrite. |

---

## Part 5, Acceptance checklist for the executing session

- [ ] Every occurrence of "Parmana ensures institutions don't lose authority to AI agents" (or
      close variants) replaced consistently.
- [ ] "Execution Authorization Infrastructure" (bare, in `layout.tsx` metadata) updated.
- [ ] No page's *sole* framing device is "AI agents", each names AI as one source among several
      (human, application, attacker/unauthorized actor), consistent with `/architecture` and
      `/why`'s Risk section.
- [ ] Hero (`/`) uses the locked hero line "We are building authority infrastructure for
      institutions." and subhead "Only what you authorize should become real." verbatim, or a
      minimally-adjusted version with the deviation explicitly flagged.
- [ ] "AI may decide. You decide what becomes real." does not appear anywhere on the site, this
      line has been retired from site copy.
- [ ] "Institutional Authority Infrastructure" is the category term used consistently wherever
      the site names its category (metadata description, footer, "what is Parmana" one-liners),
      replacing any lingering "Execution Layer for AI" / "Execution Authorization Infrastructure"
      language.
- [ ] At least one of the six proof points in Part 2 is featured with real specificity (not just
      a vague "we're verified" claim), the four-pass validation story is the strongest
      candidate for a dedicated treatment.
- [ ] `/deterministic`'s orphan status resolved one way or the other, not left as-is.
- [ ] Dead files removed; `architecture-diagram.tsx`/`app/architecture/page.tsx` duplication
      resolved.
- [ ] Nav (`navbar.tsx`, `footer.tsx`) still reflects the actual route list after any page
      merges (e.g. if `/deterministic` is folded into `/architecture`, remove any newly-dead
      links).
- [ ] Both visual dialects (Part 1) either preserved deliberately or converged deliberately,
      not drifted accidentally page-by-page.
