# FAQ Extraction

**Source:** `D:\last\parmana-site\components\FAQ.tsx` (verbatim, current as of 2026-08-24)

**Note:** this replaces an earlier version of this file that only captured the original 16 entries'
pre-rewrite wording. The FAQ has since been through a Stripe-style rewrite of all 16 original answers
and 3 of the questions (`FAQ_VALIDATION_COMPLETE.md` covers why), plus two new entries were added
(17, Ed25519 verification; 18, this validation trail itself). This version reflects the file as it
stands now, all 18 entries.

FAQ 1: What problem does Parmana solve?
Claim: It keeps you in control when AI agents, applications, or automated systems can initiate financial actions. Parmana checks every important action against your business rules before that action happens, not after.

FAQ 2: What if the agent is compromised?
Claim: Parmana does not need to trust the agent. Say a compromised agent asks to send ₹500,000 to a new account. It can still only make a request, the same request any agent would make. That request is checked against your business rules before execution, the same as any other. The agent never holds the credential that could move the money itself.

FAQ 3: What if our guardrails fail?
Claim: An agent's own guardrails are never the final authority. Say a duplicate-refund guardrail fails silently and the agent asks Parmana to issue the same refund twice. Parmana checks that second request against your rules regardless, the same way it checks the first one, and refuses it if it does not match. Your protection does not depend on the agent behaving correctly.

FAQ 4: What if a smarter frontier model finds a way around the rules?
Claim: Parmana does not rely on the model being harmless or predictable. A more capable model might phrase a request differently or reach it by a different chain of reasoning, but Parmana only evaluates the request itself, the amount, the recipient, the timing, whatever your rules check, never how the model arrived at it. Capability does not become authority.

FAQ 5: What if we change AI vendors, switch models, or turn AI off?
Claim: Your authorization does not depend on which AI model or vendor you use. Parmana sits outside the agent's decision-making and checks the action against your business rules. You can change models, replace an agent, change vendors, or turn AI off without changing the authority that controls what can happen.

FAQ 6: Does Parmana stop agents from making payments?
Claim: No. If a payment matches the rules you have set, it proceeds. If it does not, it is refused. Parmana is built to help fintechs adopt agentic payment flows, not to block them.

FAQ 7: What happens if an agent behaves unexpectedly?
Claim: Every payment or other important action is checked before execution, every time, not just the first one. If a request no longer meets your rules, Parmana stops it there rather than letting the agent continue.

FAQ 8: Is Parmana only for AI agents?
Claim: No. A refund request typed into an internal admin tool by an employee goes through the same check as one an AI agent requests. The source of the request, agent, employee, application, third-party system, or automated workflow, does not change your business rules.

FAQ 9: How is this different from an audit log?
Claim: An audit log tells you, after the fact, that an agent sent a payment. Parmana tells you, before it happened, that the payment matched your rules, and records that decision as evidence. One is a record of what occurred. The other is proof of what was allowed to occur.

FAQ 10: Can Parmana help with auditability and compliance?
Claim: Yes. Parmana creates verifiable evidence for each authorization decision: what was requested, what rules were applied, whether it was allowed, and what was authorized before execution. It does not replace your compliance program, audit systems, or regulatory obligations. It gives them evidence to work with.

FAQ 11: How is this different from a kill switch?
Claim: A kill switch stops a system, or all of it at once, when something goes wrong. Parmana checks one request at a time: it can let 999 out of 1,000 requests through and stop only the one that breaks a rule, without touching the other 999.

FAQ 12: Can Parmana run in our own cloud or infrastructure?
Claim: Yes. Parmana runs as a standard container and can be deployed on your own cloud account or infrastructure you control, not only ours. Your business rules and signing keys stay in your deployment, not in ours.

FAQ 13: What if today's cryptography changes tomorrow?
Claim: Parmana separates authorization from the technology used to prove it. As cryptographic standards evolve, the proof mechanism can evolve too, without changing the business rules that decide what is allowed.

FAQ 14: How do I know a signed authorization is real?
Claim: Parmana signs every authorization with Ed25519. Anyone can verify it independently by checking the signature against the public key and the decision record, no special tools, and no need to take Parmana's word for it.

FAQ 15: What if Parmana disappears tomorrow?
Claim: Your business should not lose control because a vendor goes away. Parmana is built around explicit authorization rules and verifiable evidence that live in your deployment, not around Parmana itself being the permanent source of authority. Your authority belongs to your business, not to Parmana.

FAQ 16: Does Parmana replace our existing payment or authorization systems?
Claim: No. Your existing payment infrastructure and business rules stay exactly where they are. Parmana adds one control point in front of them, checking important actions before they execute.

FAQ 17: Can Parmana be used outside payments?
Claim: Yes. Say an agent requests revoking a user's database access rather than issuing a refund. Parmana checks that request the same way it checks a payment, against your rules, before it happens. The same approach covers refunds, transfers, access changes, infrastructure operations, data movement, and other automated business workflows.

FAQ 18: How do I know the claims on this page are accurate?
Claim: Every technical claim on this page describing how Parmana works was checked, one by one, against Parmana's own implementation before publishing, not written by a marketing team and left unverified. [Links to: "Read the validation write-up" → github.com/pavancharak/parmana-site/blob/main/docs/SITE_CONTENT_VALIDATION.md] Parmana's implementation itself is private, so the write-up documents what was checked and how, rather than something you can independently re-run against the source yourself.
