const faqs = [
  {
    question: "What problem does Parmana solve?",
    answer:
      "Parmana helps fintech teams keep control when AI agents, applications, or automated systems can initiate financial actions. It checks each important action against your business rules before it happens.",
  },
  {
    question: "What if the agent itself is compromised?",
    answer:
      "Parmana does not need to trust the agent. An agent can be compromised, manipulated, or behave unexpectedly and still only make a request. The request must pass your business rules before execution. The agent does not get direct authority to move money.",
  },
  {
    question: "What if our guardrails fail?",
    answer:
      "Parmana is designed so that an agent's own guardrails are not the final authority. If an agent bypasses, ignores, or misunderstands its safeguards, the request still has to pass the business rules enforced before execution. Your protection does not depend on the agent always behaving correctly.",
  },
  {
    question: "What if a more intelligent frontier model finds a way around the rules?",
    answer:
      "Parmana does not rely on the model being harmless or predictable. A highly capable model can reason creatively or change its approach, but capability does not become authority. The requested action still has to pass your business rules before execution.",
  },
  {
    question: "What if we change AI vendors, switch models, or turn AI off?",
    answer:
      "Your authorization should not depend on which AI model or vendor you use. Parmana sits outside the agent's decision-making and checks the action against your business rules. You can change models, replace an agent, change vendors, or turn AI off without changing the authority that controls what can happen.",
  },
  {
    question: "Does Parmana stop agents from making payments?",
    answer:
      "No. Parmana is designed to help fintechs adopt agentic payment flows safely. If a payment matches the rules you have set, it can proceed. If it does not, the action is refused.",
  },
  {
    question: "What happens if an agent behaves unexpectedly?",
    answer:
      "The payment or other important action is checked before execution. If the request no longer meets the rules, Parmana can stop it rather than allowing the agent to continue.",
  },
  {
    question: "Is Parmana only for AI agents?",
    answer:
      "No. The same approach can be used for requests coming from AI agents, employees, applications, third-party systems, or automated workflows. The source of the request does not change your business rules.",
  },
  {
    question: "How is this different from an audit log?",
    answer:
      "An audit log tells you what happened after an action. Parmana checks authorization before the action happens and records evidence of the decision. This helps your team establish what was authorized at the time.",
  },
  {
    question: "Can Parmana help with auditability and compliance?",
    answer:
      "Yes. Parmana creates verifiable evidence around authorization decisions, so teams can show what was requested, what rules were applied, whether the action was allowed, and what was authorized before execution. Parmana does not replace your compliance program, audit systems, or regulatory obligations. It provides evidence that can support them.",
  },
  {
    question: "How is this different from a kill switch?",
    answer:
      "A kill switch can stop a system or block activity when something goes wrong. Parmana works at the individual action level: it checks whether a specific request is allowed before it happens.",
  },
  {
    question: "Can Parmana run in our cloud or on our own infrastructure?",
    answer:
      "Parmana is designed to support deployment in environments that fit your security and operational requirements, including cloud and infrastructure you control. The deployment model does not change the authorization boundary: your business rules remain in control of what can execute.",
  },
  {
    question: "What if today's cryptography changes tomorrow?",
    answer:
      "Parmana separates authorization from the technology used to prove it. As cryptographic standards evolve, the proof mechanism can evolve without changing the business rules that determine what is allowed.",
  },
  {
    question: "What if Parmana disappears tomorrow?",
    answer:
      "Your business should not lose control because a vendor goes away. Parmana is designed around explicit authorization rules and verifiable evidence rather than making Parmana itself the permanent source of authority. Your authority belongs to your business, not to Parmana.",
  },
  {
    question: "Does Parmana replace our existing payment or authorization systems?",
    answer:
      "No. Parmana is designed to work alongside existing systems. Your existing payment infrastructure and business rules remain in place; Parmana adds a control point before important actions are executed.",
  },
  {
    question: "Can Parmana be used outside payments?",
    answer:
      "Yes. The same approach can protect other important actions such as refunds, transfers, access changes, infrastructure operations, data movement, and automated business workflows.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white border-t border-border-light">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary text-center">
          Questions fintech teams ask
        </h2>

        <p className="mt-4 text-base leading-[1.6] text-text-secondary text-center max-w-[720px] mx-auto">
          Straight answers about keeping control, proving authorization, and
          adopting agentic payment flows.
        </p>

        <div className="mt-10 max-w-[800px] mx-auto divide-y divide-border-light border-y border-border-light">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base md:text-lg font-bold text-text-primary">
                <span>{faq.question}</span>

                <span
                  className="shrink-0 text-2xl font-normal text-text-secondary transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-[720px] text-sm md:text-base leading-[1.6] text-text-secondary">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 max-w-[720px] mx-auto text-center">
          <p className="text-base font-bold leading-[1.6] text-text-primary">
            More intelligence should not mean more authority.
          </p>

          <p className="mt-2 text-sm leading-[1.6] text-text-secondary">
            Your AI can change. Your models can change. Your cryptography can
            change. Your business should still control what can happen.
          </p>
        </div>
      </div>
    </section>
  );
}