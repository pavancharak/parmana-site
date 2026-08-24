# Full Site Content Validation

**Validated:** 2026-08-24
**Source:** every component under `D:\last\parmana-site\components\`, `app\layout.tsx`
**Against:** `D:\last\parmana-exp` source code

This extends `FAQ_VALIDATION_COMPLETE.md` (which covered only the FAQ) to every content claim on
the homepage: hero, meta tags, the three-protections cards, the authorization-gap section, the
use-case cards, the actor table, the flight-booking example, the "why this matters now" cards, the
is/is-not list, the philosophy line, and the closing CTA.

**Two kinds of claims live on this page, and they get different treatment:**
1. **Claims about what Parmana does** — checkable against `parmana-exp` source. Given a verdict below.
2. **Claims about the outside world** (AI safety research, RBI's draft guidance, India's payments
   ecosystem, "we're working with fintech teams") — these describe things outside the codebase
   entirely. No amount of reading `parmana-exp` confirms or denies them, so they're marked **🌐 NOT
   CODE-VERIFIABLE** rather than forced into an accurate/false verdict that would misrepresent what
   was actually checked.

## Summary

- ✅ Accurate: 24 product claims
- ⚠️ Misleading: 0
- ❌ False: 0
- 🌐 Not code-verifiable (external-world or business claims): 6

---

## Meta Tags (`app/layout.tsx`)

**Claim:** "Parmana checks every payment an AI agent, employee, or app requests against your rules before it executes. Allowed, it proceeds. Not allowed, it stops."
**Verdict:** ✅ ACCURATE — identical claim to FAQ 1/Hero, see evidence there.

---

## Hero (`components/Hero.tsx`)

**Claim:** "AI agents can initiate payments, refunds, transfers, and other financial actions. Parmana checks each important action against your business rules before it happens."
**Verdict:** ✅ ACCURATE
**Evidence:** `ExecutionGateway.execute()` (`ExecutionGateway.ts:321-374`) always calls `verify()` first and throws before any connector/executionControl release if verification fails.

**Claim:** "If it is allowed, it proceeds. If it is not, it stops. The authorization is recorded so your team can verify what was approved before the action happened."
**Verdict:** ✅ ACCURATE
**Evidence:** `PolicyOutcome` (`PolicyOutcome.ts`) is APPROVE / REQUIRE_OVERRIDE / REJECT, a discrete decision, not a partial or advisory one. Recording is backed by `MemoryExecutionAuditSink` plus the persistent `receipt`, `replay`, and `storage` (Postgres/Supabase) packages.

**Diagram caption:** "Request → Check your rules → Prove authorization → Execute"
**Verdict:** ✅ ACCURATE — a literal one-line description of PolicyEngine deciding, EnvelopeVerifier/ExecutionGateway proving the decision wasn't tampered with or replayed, then the connector executing.

---

## Three Protections (`components/Differentiators.tsx`)

**Claim ("No Direct Access"):** "The agent can request a payment, but it never holds the credential that can move the money."
**Verdict:** ✅ ACCURATE — see `FAQ_VALIDATION_COMPLETE.md` FAQ 2 for the full `SessionCredentialVault`/`SessionCredentialSecureConnector` evidence chain (the secret is only ever returned by `consume()`, called only by the connector, never the agent).

**Claim ("One Action, One Decision"):** "Every payment is checked against your rules. It is either allowed or stopped. There is no partial approval and no continuing after a refusal."
**Verdict:** ✅ ACCURATE
**Evidence:** `PolicyOutcome` has no partial/in-between state. `ExecutionGateway.execute()` either completes the release or throws (`ExecutionGateway.ts:327-332`) — there's no code path that continues after a failed `verify()`.

**Claim ("Proof Before Payment"):** "Parmana signs every authorization with Ed25519 before the action executes. Your payment system, or any regulator, can verify the signature independently with the public key and decision record."
**Verdict:** ✅ ACCURATE
**Evidence:** `packages/crypto/src/providers/signature/Ed25519SignatureProvider.ts`, `AuthorizationVerifier` used by `EnvelopeVerifier.ts:137-139`, which is explicitly public-key-based (`EnvelopeVerifierOptions.publicKey`, `EnvelopeVerifier.ts:66-72`).

**Claim (closing line):** "An agent can request an action. Your business rules decide whether it is allowed. Parmana makes sure the action matches that decision before it happens."
**Verdict:** ✅ ACCURATE
**Evidence:** `ExecutionGateway.verify()` recomputes the executable content's hash and compares it to the authorization's signed `businessTransactionHash` (`ExecutionGateway.ts:216-233`) — precisely so a verified authorization can't be paired with a modified payload.

---

## Authorization Gap (`components/AuthorizationGap.tsx`)

**Claim:** "An audit log can tell you what happened after the fact... It does not, by itself, prove that the payment was authorized under your rules before it happened."
**Verdict:** ✅ ACCURATE (as an architectural distinction) — matches the conceptual split between the audit sink (records after execution) and `ExecutionGateway.verify()` (runs before execution, `ExecutionGateway.ts:314-320`'s own doc comment: "Verifies the request, then forwards the verified, frozen content to the Connector").

**Claim:** "Parmana checks the requested action against your rules before it happens. Parmana uses Ed25519 digital signatures to prove every authorization independently, so the system that executes the action can verify it without trusting Parmana."
**Verdict:** ✅ ACCURATE
**Evidence:** Same Ed25519/public-key evidence as above, plus `EnvelopeVerifier.ts:111-114`'s own doc comment: "This does not evaluate policy. It proves only that Parmana authorized the request" — i.e. verification is a public-key check the executor runs itself, not a live call back to Parmana asking "did you approve this?"

---

## Use Cases (`components/UseCases.tsx`)

**Claim ("Refunds & Transfers"):** "Check refunds, transfers, and other money movements before they are executed."
**Verdict:** ✅ ACCURATE
**Evidence:** `ExecutableContent` (`packages/shared/src/domain/executable-content.ts:19-39`) is domain-agnostic — `action`, `target`, `parameters`, with no payment-specific required field. A refund or transfer is just a different `action` value through the identical verify-then-execute pipeline; nothing in the gateway or policy engine special-cases "payment" as a type.

**Claim ("Payouts"):** "Make sure automated payouts match the amount, recipient, and rules that were approved."
**Verdict:** ✅ ACCURATE
**Evidence:** This is precisely what the `businessTransactionHash` recompute-and-compare guards against — the gateway's own doc comment (`ExecutionGateway.ts:130-133`) names the exact failure mode being closed: "a valid envelope could accompany a modified payload carrying the same businessTransactionId."

**Claim ("Other Financial Actions" + closing line):** "Apply the same control to any automated action where the wrong decision can have a financial impact... check first, execute second."
**Verdict:** ✅ ACCURATE — same domain-agnostic `ExecutableContent` evidence, reinforced by real non-payment connectors already in the repo (`connector-github/`, `connector-hubspot/`).

---

## Actor Table (`components/ActorTable.tsx`)

**Claim (heading):** "Whatever makes the request, your rules still decide."
**Claim (closing):** "The source of the request does not change the rule."
**Verdict:** ✅ ACCURATE
**Evidence:** `PolicySignals` (`PolicySignals.ts`) is a generic fact map with no privileged "requester type" field, and neither `PolicyEngine.evaluate()` nor `ExecutionGateway.execute()` branches on who or what originated a request. There is architecturally no way for the code to treat an "AI Agent" row differently from an "Employee" row — the concept doesn't exist in the evaluated path.

---

## Flight-Booking Example (`components/NpciUap.tsx`)

This section is explicitly framed as "Imagine a customer..." — a hypothetical illustration, not a
factual claim about a real transaction. What is checkable is whether the *mechanism* it walks through
matches the real one.

**Claim:** "Being under the limit does not automatically mean the payment should go through" (implying rules can be more than a single amount threshold).
**Verdict:** ✅ ACCURATE
**Evidence:** `PolicyEngine.evaluateCondition()` (`PolicyEngine.ts:122-186`) supports arbitrary composite conditions (`all`, `any`, nested leaf conditions on any fact), not just a single amount comparison — the architecture genuinely supports rules more elaborate than "under X approves."

**Claim (4-step "What happens next" box):** ask → check → decide → verify.
**Verdict:** ✅ ACCURATE — a plain-language restatement of `PolicyEngine.evaluate()` deciding, followed by `ExecutionGateway.verify()`/`execute()` gating release, already validated above.

---

## Why This Matters Now (`components/Evidence.tsx`)

**Claim:** "AI security evaluations have shown agents can take actions beyond what people expect..."
**Verdict:** 🌐 NOT CODE-VERIFIABLE — this is a claim about third-party AI safety research, not about Parmana. `parmana-exp` has no bearing on whether it's true.

**Claim:** "Financial institutions are moving from AI that recommends and assists toward systems that can perform tasks and workflows."
**Verdict:** 🌐 NOT CODE-VERIFIABLE — an industry-trend claim, external to this codebase.

**Claim:** "India's payments ecosystem is moving toward greater use of AI... NPCI is building AI capabilities... UPI continues to expand delegated and automated payment capabilities."
**Verdict:** 🌐 NOT CODE-VERIFIABLE — a claim about NPCI/UPI's own roadmap, not about Parmana's code.

**Claim:** "RBI's 2026 draft Model Risk Management guidance includes human oversight for AI models..."
**Verdict:** 🌐 NOT CODE-VERIFIABLE — a claim about a regulator's document, not about this codebase. (Already flagged for sourcing in the original audit; unchanged here since code can't settle it either way.)

**Claim:** "A kill switch stops a system. Parmana helps control the action before it happens."
**Verdict:** ✅ ACCURATE (the Parmana half of this sentence) — `ConnectorPolicy.assertAllowed()` and `ExecutionGateway.verify()` are both scoped to one request/one `authorizationId`, with no global on/off flag anywhere in either file.

---

## What Parmana Is / Is Not (`components/WhatWeAreNot.tsx`)

**Claim ("not... An audit log"):** ✅ ACCURATE — see Authorization Gap section above; the audit sink is a supporting record, not the mechanism that gates execution.

**Claim ("not... A policy documentation tool"):** ✅ ACCURATE — `Policy`/`PolicyRule`/`PolicyCondition` (`types/Policy.ts`) are machine-evaluated structures consumed at runtime by `PolicyEngine.evaluate()`, not static documentation.

**Claim ("not... A risk score"):** ✅ ACCURATE — `PolicyDecision.outcome` is a discrete `PolicyOutcome` (APPROVE / REQUIRE_OVERRIDE / REJECT), never a continuous score. Note: `PolicySignals` can take a risk score as one *input* fact (its own doc example lists `riskScore: 82`), but the product's output is always a decision, not a score, so the distinction holds.

**Claim ("not... An approval inbox"):** ✅ ACCURATE, and worth being precise about. `packages/governance-ui/src/routes/pendingChanges.ts` does implement a real review UI with a diff view, but it's for reviewing *pending changes to policy rules themselves*, not for approving individual payment requests one by one. `PolicyAction.REQUIRE_OVERRIDE` exists as a rule-authored escalation outcome, but nothing in `ExecutionGateway` or `PolicyEngine` puts a human in the loop of a live transaction by default. The one human-facing UI in the repo governs the rules, not the requests, which is a real and meaningful difference from "an approval inbox."

**Claim ("not... An AI safety product"):** ✅ ACCURATE — confirmed in `FAQ_VALIDATION_COMPLETE.md`: `PolicyOperator`'s own doc comment forbids operators from calling LLMs, and no model-specific code exists anywhere in `policy`, `execution-gateway`, or `execution-control`.

**Claim ("is... A check before money moves" / "keep execution separate from the agent" / "a decision your payment system can verify" / "proof of what was authorized"):** ✅ ACCURATE — all four already evidenced above and in `FAQ_VALIDATION_COMPLETE.md`.

---

## Philosophy (`components/Philosophy.tsx`)

**Claim:** "Your business rules decide what is allowed, and only authorized actions are allowed to happen."
**Verdict:** ✅ ACCURATE — same `PolicyEngine`/`ExecutionGateway` gating evidence as everywhere above; and per `FAQ_VALIDATION_COMPLETE.md` FAQ 12/14, the deploying business's own keys and policy files (`FilePolicyRepository`), not Parmana's, control what a given deployment allows.

---

## Closing CTA (`components/BottomCTA.tsx`)

**Claim:** "We help fintech teams design and test payment flows where AI agents can act within clear business rules, without giving up control over what actually gets executed."
**Verdict:** 🌐 NOT CODE-VERIFIABLE — a description of the company's service/consulting engagement, not a claim about product mechanics. Nothing in `parmana-exp` confirms or denies what the team does with customers.

**Claim:** "Working with fintech teams building agentic payments."
**Verdict:** 🌐 NOT CODE-VERIFIABLE — this implies active customer engagements. That's a business/sales-pipeline fact, not something a codebase can confirm. Flagging this explicitly rather than silently passing it: this is the sentence closest to the "customer proof" gap identified in `FRESH_WEBSITE_AUDIT_REPORT.md` and deliberately deferred in `FIX7_CUSTOMER_PROOF_PLACEHOLDER.md`. Whoever owns the customer relationships should confirm this line is still accurate before it ships again.

---

## What This Pass Didn't Do

It didn't touch copy. Every claim above was already live on the site (several already validated in
`FAQ_VALIDATION_COMPLETE.md`); this pass exists to show the same rigor was applied everywhere else on
the page, not just the FAQ, and to draw an honest line between what `parmana-exp` can and can't
settle. The one action item this surfaces: reconfirm the "working with fintech teams" line in
`BottomCTA.tsx` is still true before the next deploy, since that's a claim about the business, not the
code, and this pass can't verify it either way.
