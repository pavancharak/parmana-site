# FAQ Extraction

**Source:** `D:\last\parmana-site\components\FAQ.tsx` (verbatim, lines 1-82)

FAQ 1: What problem does Parmana solve?
Claim: Parmana helps fintech teams keep control when AI agents, applications, or automated systems can initiate financial actions. It checks each important action against your business rules before it happens.

FAQ 2: What if the agent itself is compromised?
Claim: Parmana does not need to trust the agent. An agent can be compromised, manipulated, or behave unexpectedly and still only make a request. The request must pass your business rules before execution. The agent does not get direct authority to move money.

FAQ 3: What if our guardrails fail?
Claim: Parmana is designed so that an agent's own guardrails are not the final authority. If an agent bypasses, ignores, or misunderstands its safeguards, the request still has to pass the business rules enforced before execution. Your protection does not depend on the agent always behaving correctly.

FAQ 4: What if a more intelligent frontier model finds a way around the rules?
Claim: Parmana does not rely on the model being harmless or predictable. A highly capable model can reason creatively or change its approach, but capability does not become authority. The requested action still has to pass your business rules before execution.

FAQ 5: What if we change AI vendors, switch models, or turn AI off?
Claim: Your authorization should not depend on which AI model or vendor you use. Parmana sits outside the agent's decision-making and checks the action against your business rules. You can change models, replace an agent, change vendors, or turn AI off without changing the authority that controls what can happen.

FAQ 6: Does Parmana stop agents from making payments?
Claim: No. Parmana is designed to help fintechs adopt agentic payment flows safely. If a payment matches the rules you have set, it can proceed. If it does not, the action is refused.

FAQ 7: What happens if an agent behaves unexpectedly?
Claim: The payment or other important action is checked before execution. If the request no longer meets the rules, Parmana can stop it rather than allowing the agent to continue.

FAQ 8: Is Parmana only for AI agents?
Claim: No. The same approach can be used for requests coming from AI agents, employees, applications, third-party systems, or automated workflows. The source of the request does not change your business rules.

FAQ 9: How is this different from an audit log?
Claim: An audit log tells you what happened after an action. Parmana checks authorization before the action happens and records evidence of the decision. This helps your team establish what was authorized at the time.

FAQ 10: Can Parmana help with auditability and compliance?
Claim: Yes. Parmana creates verifiable evidence around authorization decisions, so teams can show what was requested, what rules were applied, whether the action was allowed, and what was authorized before execution. Parmana does not replace your compliance program, audit systems, or regulatory obligations. It provides evidence that can support them.

FAQ 11: How is this different from a kill switch?
Claim: A kill switch can stop a system or block activity when something goes wrong. Parmana works at the individual action level: it checks whether a specific request is allowed before it happens.

FAQ 12: Can Parmana run in our cloud or on our own infrastructure?
Claim: Parmana is designed to support deployment in environments that fit your security and operational requirements, including cloud and infrastructure you control. The deployment model does not change the authorization boundary: your business rules remain in control of what can execute.

FAQ 13: What if today's cryptography changes tomorrow?
Claim: Parmana separates authorization from the technology used to prove it. As cryptographic standards evolve, the proof mechanism can evolve without changing the business rules that determine what is allowed.

FAQ 14: What if Parmana disappears tomorrow?
Claim: Your business should not lose control because a vendor goes away. Parmana is designed around explicit authorization rules and verifiable evidence rather than making Parmana itself the permanent source of authority. Your authority belongs to your business, not to Parmana.

FAQ 15: Does Parmana replace our existing payment or authorization systems?
Claim: No. Parmana is designed to work alongside existing systems. Your existing payment infrastructure and business rules remain in place; Parmana adds a control point before important actions are executed.

FAQ 16: Can Parmana be used outside payments?
Claim: Yes. The same approach can protect other important actions such as refunds, transfers, access changes, infrastructure operations, data movement, and automated business workflows.
