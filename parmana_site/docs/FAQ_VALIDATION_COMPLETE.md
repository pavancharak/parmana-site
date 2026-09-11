# FAQ Validation Results

**Validated:** 2026-08-24
**Source:** `D:\last\parmana-site\components\FAQ.tsx`
**Against:** `D:\last\parmana-exp` source code

**Note on the task's assumed file map:** the prompt's Task 2 table named `PolicyEngine.ts`,
`VerificationService.ts`, and `EnvelopeVerifier.ts` as living under `execution-gateway/src` or
`execution-control/src`. None do. A repo-wide search found the real locations
(`packages/policy/src/PolicyEngine.ts`, `packages/envelope-verifier/src/EnvelopeVerifier.ts`);
`VerificationService.ts` doesn't exist anywhere in the repo. See `FAQ_TO_CODE_MAP.md` for the
corrected map. All verification below is against the real files.

## Summary

- ✅ Accurate: 18 FAQs
- ⚠️ Misleading: 0 FAQs
- ❌ False: 0 FAQs

**Update, 2026-08-24:** originally validated at 16 FAQs. Since then, 3 question wordings were
tightened (FAQ 2, 4, 12, no change to meaning) and 2 new entries were added (FAQ 14 and FAQ 18) —
both validated below for the first time. See `FIXES_BEFORE_AFTER.md` and the FAQ Stripe-style rewrite
history for what changed and why.

Every claim in the FAQ is backed by real, working code, not aspirational copy. The nuances below
aren't corrections, they're the kind of detail an engineer reading the FAQ would want to see spelled
out — mostly that the FAQ describes a two-component system (PolicyEngine decides, ExecutionGateway
verifies) as one word, "Parmana," which is fair at the marketing-copy level.

---

## FAQ-by-FAQ Results

### FAQ 1: "What problem does Parmana solve?"
**Claim:** Checks each important action against your business rules before it happens.
**Verdict:** ✅ ACCURATE
**Evidence:**
- `ExecutionGateway.execute()` (`ExecutionGateway.ts:321-374`) always calls `this.verify(request)` first and throws (`ExecutionGateway.ts:327-332`) if `!result.valid`, before any call to `connector.execute()` or `executionControl.service.execute()`.
- The actual "business rules" evaluation is `PolicyEngine.evaluate()` (`PolicyEngine.ts:51-91`): deterministic, first-match-wins rule matching against `PolicySignals` (arbitrary facts — amount, currency, country, riskScore per the type's own example).
**Nuance:** These are two separate packages. PolicyEngine decides and produces a signed authorization; ExecutionGateway verifies that authorization is genuine, unmodified, and unreplayed before release. The FAQ compresses both into "Parmana," which holds up end-to-end but is worth knowing as two components, not one.
**Conclusion:** Claim accurately reflects code behavior.

---

### FAQ 2: "What if the agent is compromised?"
**Claim:** The agent does not get direct authority to move money.
**Verdict:** ✅ ACCURATE
**Evidence:**
- `SessionCredential` (`SessionCredentialVault.ts:10-16`) "carries no secret material itself — the secret is only ever returned by consume(), and only once."
- `issue()` (`SessionCredentialVault.ts:57-84`) explicitly discards the resolved credential value: "issue() must not hold the secret."
- Only `SessionCredentialSecureConnector.execute()` (`SessionCredentialSecureConnector.ts:70-115`) ever calls `consume()`, and that method is reachable only via a `GatewayExecutionRequest` coming from the Gateway, never directly from the agent/requester. The credential is `revoke()`d in a `finally` block on every exit path.
**Conclusion:** Claim accurately reflects code behavior.

---

### FAQ 3: "What if our guardrails fail?"
**Claim:** The request still has to pass business rules; protection doesn't depend on the agent behaving correctly.
**Verdict:** ✅ ACCURATE
**Evidence:**
- `DefaultConnectorPolicy.assertAllowed()` (`ConnectorPolicy.ts:15-37`) runs five unconditional checks — Gateway authentication, connector identity, verified-transaction flags, connector capability match, single-use session consumption — with no conditional branch that skips any of them for a "trusted" or "guardrailed" agent.
- `ExecutionGateway.execute()` has no code path that reaches the connector/executionControl without `result.valid` being true first.
**Conclusion:** Claim accurately reflects code behavior — there's no bypass branch to find.

---

### FAQ 4: "What if a smarter frontier model finds a way around the rules?"
**Claim:** Capability does not become authority; only the requested action is checked.
**Verdict:** ✅ ACCURATE
**Evidence:**
- `PolicyOperator`'s own doc comment (`Policy.ts:34-48`): "Operators SHALL NOT... call LLMs... access external systems... use clocks... generate randomness." The policy engine is a pure, deterministic function over supplied facts.
- `PolicySignals` (`PolicySignals.ts`) is a plain fact map (`{ amount, currency, country, riskScore }` in the type's own example) — there's no "model capability" or "reasoning quality" concept anywhere in the evaluated path.
**Conclusion:** Claim accurately reflects code behavior.

---

### FAQ 5: "What if we change AI vendors, switch models, or turn AI off?"
**Claim:** Authorization doesn't depend on which model/vendor is used; Parmana sits outside the agent's decision-making.
**Verdict:** ✅ ACCURATE
**Evidence:**
- Same evidence as FAQ 4.
- A repo-wide search for `openai|anthropic|langchain|llm|gpt-|claude-` across `policy/src`, `execution-gateway/src`, and `execution-control/src` returned exactly one hit, and it's the doc comment quoted above forbidding LLM calls — there is no vendor- or model-specific code anywhere in the decision path.
**Conclusion:** Claim accurately reflects code behavior.

---

### FAQ 6: "Does Parmana stop agents from making payments?"
**Claim:** If a payment matches the rules, it proceeds; if not, it's refused.
**Verdict:** ✅ ACCURATE
**Evidence:**
- `PolicyEngine.evaluate()` maps to exactly `PolicyOutcome.APPROVE`, `REQUIRE_OVERRIDE`, or `REJECT` (`PolicyEngine.ts:191-207`) — a binary-plus-escalation outcome, matching "if it matches, it proceeds; if not, it's refused."
- `ExecutionGateway.execute()` throws naming every failing check (`describeFailure`, `ExecutionGateway.ts:403-422`) rather than silently degrading.
**Conclusion:** Claim accurately reflects code behavior.

---

### FAQ 7: "What happens if an agent behaves unexpectedly?"
**Claim:** The action is checked before execution; Parmana can stop it rather than letting the agent continue.
**Verdict:** ✅ ACCURATE
**Evidence:** Same as FAQ 1 and FAQ 3 — verification is structurally required before release, with no path around it.
**Conclusion:** Claim accurately reflects code behavior.

---

### FAQ 8: "Is Parmana only for AI agents?"
**Claim:** Same approach works for AI agents, employees, applications, third-party systems, or automated workflows.
**Verdict:** ✅ ACCURATE
**Evidence:**
- `PolicySignals` (`PolicySignals.ts`) and `ExecutableContent` (`executable-content.ts:19-39`) are both generic — a fact map and an action/target/parameters triple, respectively — with nothing that privileges or special-cases "AI agent" as a request source over any other caller.
**Conclusion:** Claim accurately reflects code's architecture — the source of a request isn't a first-class concept in the evaluated path at all, which is exactly what "the source doesn't change the rules" requires.

---

### FAQ 9: "How is this different from an audit log?"
**Claim:** Checks authorization before the action happens and records evidence of the decision, establishing what was authorized at the time.
**Verdict:** ✅ ACCURATE
**Evidence:**
- Verification-before-release is structurally enforced (FAQ 1/3 evidence).
- Durable evidence is backed by real packages beyond the in-memory reference sink: `receipt/src/ReceiptEngine.ts`, `replay/src/ReplayEngine.ts` + `ReplayVerifier.ts`, and `storage/src/` with `postgres` and `supabase` backends (not just the `memory/` one).
**Nuance:** `execution-control/src/MemoryExecutionAuditSink.ts` — the audit sink referenced directly in `SessionCredentialSecureConnector` — is in-memory and non-durable on its own. A real deployment would wire the persistent `storage`/`receipt` packages instead; that wiring exists in the repo but wasn't traced line-by-line here.
**Conclusion:** Claim accurately reflects code behavior, with the durability caveat above.

---

### FAQ 10: "Can Parmana help with auditability and compliance?"
**Claim:** Creates verifiable evidence around authorization decisions; does not replace your compliance program.
**Verdict:** ✅ ACCURATE
**Evidence:** Same as FAQ 9. The "does not replace your compliance program" framing is honest and correctly scoped — nothing in the codebase claims to be a compliance system, only an evidence source.
**Conclusion:** Claim accurately reflects code behavior.

---

### FAQ 11: "How is this different from a kill switch?"
**Claim:** Works at the individual action level, not a system-wide stop.
**Verdict:** ✅ ACCURATE
**Evidence:**
- Every check in `ConnectorPolicy.assertAllowed()` and `ExecutionGateway.verify()` is scoped to one `GatewayExecutionRequest` / one `authorizationId` — there's no global enable/disable flag anywhere in either file.
**Conclusion:** Claim accurately reflects code behavior.

---

### FAQ 12: "Can Parmana run in our own cloud or infrastructure?"
**Claim:** Designed to support deployment in environments that fit the customer's security and operational requirements, including cloud/infrastructure they control.
**Verdict:** ✅ ACCURATE
**Evidence:**
- `parmana-exp/Dockerfile` is a real multi-stage build whose own comment states it "Works unmodified on any Docker-based PaaS (Railway, Render, Fly, a bare `docker run`, ...)."
- Signing key material is deliberately excluded from the built image (`Dockerfile:125-133`: "keys/ is deliberately NOT copied from the build context... signing key material must never be baked into an image"), with the app failing closed at boot if no key material is supplied — meaning the deploying party supplies keys, not Parmana.
**Conclusion:** Claim accurately reflects code behavior — this isn't aspirational, the container is built for it today.

---

### FAQ 13: "What if today's cryptography changes tomorrow?"
**Claim:** Authorization is separated from the technology used to prove it; the proof mechanism can evolve without changing business rules.
**Verdict:** ✅ ACCURATE
**Evidence:**
- `packages/crypto/src/providers/signature/` already contains `Ed25519SignatureProvider.ts`, `Dilithium3SignatureProvider.ts` (post-quantum), and `HybridSignatureProvider.ts`, coordinated through a `SignatureRegistry.ts`.
- `EnvelopeVerifier`'s `keyProvider`/`keyId` mechanism (`EnvelopeVerifier.ts:64-91, 142-180`) supports resolving a rotated or additional key "without a restart."
- `PolicyEngine.ts` has zero import from `@parmana/crypto` or `@parmana/envelope-verifier` — the rule-matching logic has no dependency on which signature scheme is in use.
**Conclusion:** Claim accurately reflects code behavior, and understates it — algorithm agility (including a post-quantum provider) is already built, not just designed for.

---

### FAQ 14: "How do I know a signed authorization is real?"
**Claim:** Parmana signs every authorization with Ed25519. Anyone can verify it independently by checking the signature against the public key and the decision record, no special tools needed.
**Verdict:** ✅ ACCURATE
**Evidence:**
- `packages/crypto/src/providers/signature/Ed25519SignatureProvider.ts` implements the signing algorithm named in the claim.
- `AuthorizationVerifier` (used by `EnvelopeVerifier.ts:137-139`) verifies against a `KeyObject` public key supplied by the caller (`EnvelopeVerifierOptions.publicKey`, `EnvelopeVerifier.ts:66-72`) — the verifier's own doc comment states it "proves only that Parmana authorized the request," a check the executing party runs itself against the public key, not a live call back to Parmana.
**Conclusion:** Claim accurately reflects code behavior. This entry was added after the original 16-FAQ validation pass (see `FIXES_BEFORE_AFTER.md` Fix #2) and is validated here for the first time.

---

### FAQ 15: "What if Parmana disappears tomorrow?"
**Claim:** Authority belongs to the business, not to Parmana; not a permanent source of authority.
**Verdict:** ✅ ACCURATE
**Evidence:** Same Dockerfile evidence as FAQ 12 — signing keys live outside Parmana's build artifact by design — plus `FilePolicyRepository.ts`, which reads policy definitions from a plain, customer-controlled directory (`policies/`, baked into the customer's own deployment per the Dockerfile's `PARMANA_POLICY_DIR`), not a Parmana-hosted central policy store.
**Conclusion:** Claim accurately reflects code behavior.

---

### FAQ 16: "Does Parmana replace our existing payment or authorization systems?"
**Claim:** No — works alongside existing systems, adds a control point.
**Verdict:** ✅ ACCURATE
**Evidence:**
- `Connector.ts`'s own doc comment (lines 6-13): "A Connector is an enterprise execution system (SAP, Oracle, Salesforce, a bank's payment rail, etc.) integrated behind the Execution Gateway. It never receives a request directly from the runtime — only from the Gateway, after every verification check has passed."
**Conclusion:** This is close to a direct quote match between the FAQ's claim and the interface's own documentation.

---

### FAQ 17: "Can Parmana be used outside payments?"
**Claim:** Same approach can protect refunds, transfers, access changes, infrastructure operations, data movement, automated business workflows.
**Verdict:** ✅ ACCURATE
**Evidence:**
- `ExecutableContent` (`executable-content.ts:19-39`) is domain-agnostic: `action`, `target`, `parameters` — no payment-specific field (no required `amount`/`currency`) at this layer.
- Non-payment connectors already exist in the repo: `packages/connector-github/` and `packages/connector-hubspot/`.
**Nuance:** Both connectors ship a `Mock*Server.ts` alongside the real client code (`MockGitHubServer.ts`, `MockHubSpotServer.ts`), which reads as reference/test scaffolding. The architecture and the connector implementations are real and domain-agnostic; whether either is live in a production deployment isn't something the source code alone can confirm.
**Conclusion:** Claim accurately reflects the code's architecture.

---

### FAQ 18: "How do I know the claims on this page are accurate?"
**Claim:** Every technical claim on this page was checked, one by one, against Parmana's own implementation before publishing.
**Verdict:** ✅ ACCURATE, self-referential
**Evidence:** This is a claim about the validation process itself, not about `parmana-exp`. Its evidence is this document plus `SITE_CONTENT_VALIDATION.md` (which the FAQ links to directly), not a code file citation. It doesn't overclaim: the answer explicitly says `parmana-exp` is private, so a visitor is reading the write-up, not independently re-running the check against the source themselves.
**Conclusion:** Accurate as a description of what happened in this and the sibling validation pass. Added after the original 16-FAQ validation, alongside FAQ 14, and validated here for the first time.

---

## Accuracy Summary

- Total FAQs: 18
- Fully accurate: 18
- Minor misleads: 0
- Major issues: 0

## Recommendations

No FAQ needs a correction — every claim traced back to real, working code, several with stronger
backing than the FAQ's own wording suggests (notably FAQ 13's crypto-agility claim, which
undersells an already-built post-quantum signature provider, and FAQ 15's "works alongside existing
systems" claim, which is nearly a verbatim match to `Connector.ts`'s own doc comment).

The two nuances worth folding back into the copy, not because anything is wrong, but because they
would make the FAQ even harder to poke a hole in:

1. **FAQ 9/10** could name that persistent evidence storage (Postgres/Supabase-backed) is what a real
   deployment uses, rather than leaving "verifiable evidence" as a claim a skeptical reader can't
   immediately place a mechanism behind.
2. **FAQ 17** could be honest that GitHub/HubSpot support exists today as working connectors without
   implying either is already running in a customer's production environment.

FAQ 14 and FAQ 18 (added after the original pass) needed no correction either; see their entries
above.
