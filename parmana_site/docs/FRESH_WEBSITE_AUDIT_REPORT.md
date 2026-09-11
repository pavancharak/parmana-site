# Fresh Website Audit: parmanasystems.com

**Method:** Content below was pulled directly from the live HTML response at `https://parmanasystems.com` (fetched fresh, not from source files or prior audits). All quotes are verbatim. Scored against the 7-standard Stripe documentation rubric.

## Executive Summary

- **Score: 17/25** (Professional SaaS range: 15-20. Stripe standard: 21-25.)
- **Gap:** 4-8 points, driven by three things: zero customer/usage proof anywhere on the page, a real cryptographic mechanism (Ed25519, confirmed live at the linked security demo) that never gets named on the homepage itself, and one outright content duplication.
- **Grift-risk: LOW.** The copy doesn't claim customers, certifications, or results it can't back up. It says plainly "we help fintech teams design and test payment flows," not "trusted by leading banks." That restraint is the single biggest thing keeping this off the grift end of the spectrum.
- **What's already working well:** this is a genuinely well-written page by SaaS standards. Sixteen FAQ entries preemptively answer the exact objections a skeptical fintech buyer would raise (compromised agent, guardrail failure, frontier model workaround, vendor lock-in, crypto obsolescence, vendor disappearing). The flight-booking example is a textbook concrete example. There's almost no jargon.

---

## Verbatim Content Read

**Title:** `Parmana | Institutional Authority Infrastructure`
**Meta description:** "Authorization infrastructure for consequential actions. Any actor, any domain, authority remains yours. Parmana verifies every action before execution."
**OG description:** "Only what you authorize should execute, regardless of the actor."

**Nav:** Parmana (home) · Research (→ Substack) · Security (→ external `parmana.fly.dev` app) · Questions? (→ #faq button)

**Hero:**
> "For fintech teams building agentic payments"
> "Adopt agentic payments without losing control."
> "Let agents request payments. Your business decides what can happen."
> "AI agents can initiate payments, refunds, transfers, and other financial actions. Parmana checks each important action against your business rules before it happens."
> "If it is allowed, it proceeds. If it is not, it stops. The authorization is recorded so your team can verify what was approved before the action happened."
> CTA: "See how it works" (anchors to #authorization-gap)

Plus a 4-box diagram: Payment Request → Parmana → Proof of Authorization → Payment System, captioned "Request → Check your rules → Prove authorization → Execute."

**"Before money moves, three things happen."** — three cards:
1. No Direct Access: "The agent can request a payment, but it never holds the credential that can move the money. The ability to execute stays separate from the agent."
2. One Action, One Decision: "Every payment is checked against your rules. It is either allowed or stopped. There is no partial approval and no continuing after a refusal."
3. Proof Before Payment: "Parmana creates signed proof of the authorization before the action is executed. The decision can be independently verified."

**"Your payment system knows what happened. Can you prove what was authorized?"** — the authorization-gap section. Contrast box:
- After the payment: "The agent made this payment."
- Before the payment: "This payment was authorized under these rules."
> "Allowed means it can proceed. Not allowed means it stops."

**"Before the payment happens"** — the *exact same* 4-box diagram and caption from the hero, repeated verbatim.

**"Start with the actions that move money."** — four cards: Agentic Payments, Refunds & Transfers, Payouts, Other Financial Actions.

**"Whatever makes the request, your rules still decide."** — a table (Who is making the request? / What can go wrong? / What Parmana does) covering AI Agent, Employee, Third-Party App, Automated System, Fraudulent Request. Closing line: "The source of the request does not change the rule."

**"A simple example: an agent booking a flight"** — customer allows an agent to book a Mumbai flight up to ₹8,000; agent requests ₹7,999; four-step "What happens next" box (ask → check → decide → verify); closes with "The important question is not only 'Did the agent have permission?' It is 'Was this payment authorized before it happened?'"

**"Why this matters now"** — four dated cards: "AI agents can take unexpected actions" (August 2026), "Financial services are moving toward agentic AI" (2026), "India is preparing for agentic payments" (2026, cites NPCI/UPI), "RBI is putting stronger controls around AI" (July 2026, cites RBI's 2026 draft Model Risk Management guidance, "explicitly including kill-switch arrangements" — note the em dash before this clause). Closer: "A kill switch stops a system. Parmana helps control the action before it happens."

**"Parmana does one important thing"** — Is-not list (AI safety product, policy documentation tool, audit log, risk score, approval inbox) vs. Is list (a check before money moves, a way to keep execution separate from the agent, a decision your payment system can verify, proof of what was authorized).

**"Control stays with your business."** — one-paragraph restatement section.

**FAQ ("Questions fintech teams ask")** — 16 accordion entries, full text captured verbatim in the working file; covers compromised agents, guardrail failure, frontier-model workarounds, vendor/model switching, "does Parmana stop agents from paying," source-agnosticism, audit-log comparison, compliance support, kill-switch comparison, self-hosted deployment, crypto obsolescence, vendor disappearing, coexistence with existing systems, and non-payment use cases.

**Closing CTA:** "Adopt agentic payment flows without losing control." / "We help fintech teams design and test payment flows where AI agents can act within clear business rules, without giving up control over what actually gets executed." / mailto CTA: "Talk through your payment flow" / "Working with fintech teams building agentic payments."

**Footer:** "© 2026 Parmana Systems" · Docs (→ docs.parmanasystems.com) · Blog (→ Substack) · Security (→ `#security`, which is actually the closing CTA section above, not the nav's Security link).

---

## Section Scorecard

| Section | Clear language | Explains HOW | Concrete example | Scannable | Transparent | Progressive disclosure | Proof |
|---|---|---|---|---|---|---|---|
| Title/meta | ✗ jargon | n/a | n/a | n/a | ✗ | n/a | n/a |
| Hero | ✓ | partial | ✗ | ✓ | partial | ✓ | ✗ |
| Three protections | ✓ | ✓ | ✗ | ✓ | partial | ✓ | ✗ |
| Authorization gap | ✓ | ✓ | partial | ✓ | partial | ✓ | ✗ |
| Duplicate diagram | ✓ | ✓ | ✗ | ✗ (redundant) | partial | ✗ | ✗ |
| Supported actions | ✓ | partial | ✗ | ✓ | n/a | ✓ | ✗ |
| Request-source table | ✓ | ✓ | partial | ✓ | ✓ | ✓ | ✗ |
| Flight-booking example | ✓ | ✓ | **✓ (best on site)** | ✓ | partial | ✓ | ✗ |
| Why this matters now | ✓ | n/a | partial (uncited) | ✓ | ✗ (no source links) | ✓ | ✗ |
| Is / Is-not | ✓ | n/a | ✗ | ✓ | ✓ | n/a | ✗ |
| FAQ | ✓ | ✓ | partial | ✓ | partial | ✓ | ✗ |
| Closing CTA | ✓ | n/a | n/a | ✓ | ✓ (honest, no overselling) | n/a | ✗ |
| Footer | ✓ | n/a | n/a | ✓ | ✗ (Security link mismatch) | n/a | ✗ |

The row that repeats across *every single section* is the last column: there is no customer name, logo, usage figure, or case study anywhere on the page.

---

## Violations and Fixes

### 1. Title/meta description use jargon the on-page copy has already outgrown

**Current:**
> Title: "Parmana | Institutional Authority Infrastructure"
> Description: "Authorization infrastructure for consequential actions. Any actor, any domain, authority remains yours. Parmana verifies every action before execution."
> OG description: "Only what you authorize should execute, regardless of the actor."

**Problem:** This is the text a prospect sees first, in a Google result or a Slack link preview, before ever reaching the clear hero copy. "Consequential actions," "any actor, any domain," and "the actor" are exactly the abstract register Stripe Standard #1 flags. It reads like older positioning that wasn't updated when the on-page hero was rewritten to plain language.

**Fix:**
> Description: "Parmana checks every payment an AI agent, employee, or app requests against your rules before it executes. Allowed, it proceeds. Not allowed, it stops."
> OG description: "Let AI agents request payments. Your rules decide what actually happens."

### 2. The real cryptographic mechanism never gets named on the homepage

**Current (appears three times, in slightly different words):**
> "Parmana creates signed proof of the authorization before the action is executed. The decision can be independently verified."
> "The authorization decision is signed and can be verified by the system that executes the action."
> "Parmana separates authorization from the technology used to prove it."

**Problem:** "Signed," "cryptography," and "verified" stay generic throughout. Standard #5's own bad example is "enterprise-grade security"; this copy is better than that, but it never crosses into the good example ("Ed25519 cryptographic signatures... your regulator can verify independently"). The site's own linked security demo (`parmana.fly.dev`, reachable from the nav's "Security" link) actually names Ed25519 and public-key verification directly in its interface — the mechanism exists and is real, it just isn't surfaced on the marketing page a buyer reads first.

**Fix:** In the "Proof Before Payment" card:
> "Parmana signs every authorization with Ed25519 before the action executes. Anyone can verify the signature independently with the public key and the decision record. [See how verification works →]"

### 3. The hero diagram is repeated verbatim later on the page

**Current:** The exact 4-box diagram (Payment Request → Parmana → Proof of Authorization → Payment System) and its caption ("Request → Check your rules → Prove authorization → Execute") appear once in the hero, then again under the heading "Before the payment happens," immediately after the three-protections section — same boxes, same icons, same copy, same caption.

**Problem:** A reader who saw this 400 pixels earlier gets nothing new from seeing it again. It reads as unedited padding and works against Standard #4 (structure should earn its place, not repeat).

**Fix:** Delete the second occurrence. If a second diagram is wanted at that point in the page, make it the flight-booking example instead — a diagram of a real transaction is more valuable there than a repeat of the generic one.

### 4. Two "Security" links on the same page point to two different places

**Current:** The nav's "Security" link goes to `https://parmana.fly.dev/`, an external interactive demo. The footer's "Security" link goes to `#security`, an anchor on the same page that lands on the closing CTA section ("Adopt agentic payment flows without losing control" + mailto button) — which has nothing to do with security.

**Problem:** Same label, two different destinations, and the second one is mislabeled — it doesn't lead to any security content at all. Small inconsistencies like this are exactly what undermines trust in the bigger verifiability claims elsewhere on the page.

**Fix:** Rename the `id="security"` section to something accurate (it's the contact/CTA section), and either point the footer's "Security" link to the same external demo the nav uses, or drop the footer link.

### 5. Two dated claims in "Why this matters now" have no source

**Current:**
> "Recent AI security evaluations have shown that agents can take actions beyond what people expect when pursuing a goal."
> "RBI's 2026 draft Model Risk Management guidance includes human oversight for AI models, including mechanisms to override, suspend or deactivate models — explicitly including kill-switch arrangements."

**Problem:** Which evaluations? Whose? No link, no named report. This is precisely the Standard #5 test failing: a reader can't check the claim. (The RBI reference is more specific and plausibly real, but still has no link to the actual draft guidance.) The em dash in the second sentence also breaks this project's own copy rule (no em/en-dashes, per `AGENTS.md`).

**Fix:**
> "AI security evaluations have shown agents can take actions beyond what people expect when pursuing a goal. [See the research →]"
> "RBI's 2026 draft Model Risk Management guidance includes human oversight for AI models, including mechanisms to override, suspend, or deactivate models. This explicitly includes kill-switch arrangements. [Read the draft guidance →]"

If no link is available yet, soften to what the page can actually stand behind rather than leaving an uncited claim in place.

### 6. The self-hosting FAQ answer restates the question instead of answering it

**Current:**
> "Parmana is designed to support deployment in environments that fit your security and operational requirements, including cloud and infrastructure you control."

**Problem:** "Environments that fit your security and operational requirements" is a hedge; it doesn't say anything the question didn't already imply. Fails Standard #2 (HOW).

**Fix:**
> "Yes. Parmana can run in your own cloud account or on infrastructure you control, not only ours. [Ask about your deployment.]"

### 7. Zero proof anywhere on the page

**Current:** No customer name, logo, usage number, or case study appears in any section.

**Problem:** This is the one violation that repeats in every row of the scorecard. It's the largest gap between this page and the Stripe standard.

**Assessment, not just a fix:** the copy is honest about this — it never claims customers it doesn't have, and the CTA is a direct "talk through your payment flow" conversation rather than a fake self-serve "book a demo" widget. That honesty is why grift-risk is LOW rather than the jargon alone would suggest. The fix here isn't a copy trick, it's a real design partner or pilot to name, added when there is one. Until then, the current restraint is the right call over adding vague "trusted by teams like yours" filler.

---

## Positioning vs. Grifts

1. **Could this be confused with an "AI Governance" grift?** SOMEWHAT. The category label "Institutional Authority Infrastructure" and the meta description's "consequential actions" sit in the same abstract register that governance-theater vendors use. Once a visitor reads past the title into the hero and FAQ, the concrete flight example and specific objection-handling clearly differentiate it. The fix in Violation #1 closes this gap at the point of first contact.
2. **Is customer proof visible?** NO. See Violation #7.
3. **Is transparency clear?** SOMEWHAT. The mechanism is real (Ed25519 signing, confirmed live in the linked security demo) but it's never named on the homepage itself (Violation #2).
4. **Could a regulator audit the claims?** SOMEWHAT. The "signed," "verifiable" language implies yes, and a real interactive proof-of-concept exists one click away, but the marketing page never walks through the actual verification steps a regulator or auditor would follow.

## Result

Current score: **17/25**. The gap to Stripe standard is concentrated in a handful of fixable spots, not a rewrite of the whole page: align the title/meta with the on-page clarity, name the real signing mechanism once, cut the duplicated diagram, fix the mismatched Security links, source the two uncited claims, tighten the self-hosting FAQ answer, and add real proof the day there's a design partner willing to be named.
