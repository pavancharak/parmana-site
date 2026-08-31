const faqs = [
  {
    question: "What problem does Parmana solve?",
    answer:
      "It keeps you in control when AI agents, applications, or automated systems can initiate financial actions. Parmana checks every important action against your business rules before that action happens, not after.",
  },
  {
    question: "What if the agent is compromised?",
    answer:
      "Parmana does not need to trust the agent. Say a compromised agent asks to send ₹500,000 to a new account. It can still only make a request, the same request any agent would make. That request is checked against your business rules before execution, the same as any other. The agent never holds the credential that could move the money itself.",
  },
  {
    question: "What if our guardrails fail?",
    answer:
      "An agent's own guardrails are never the final authority. Say a duplicate-refund guardrail fails silently and the agent asks Parmana to issue the same refund twice. Parmana checks that second request against your rules regardless, the same way it checks the first one, and refuses it if it does not match. Your protection does not depend on the agent behaving correctly.",
  },
  {
    question: "What if a smarter frontier model finds a way around the rules?",
    answer:
      "Parmana does not rely on the model being harmless or predictable. A more capable model might phrase a request differently or reach it by a different chain of reasoning, but Parmana only evaluates the request itself, the amount, the recipient, the timing, whatever your rules check, never how the model arrived at it. Capability does not become authority.",
  },
  {
    question: "What if we change AI vendors, switch models, or turn AI off?",
    answer:
      "Your authorization does not depend on which AI model or vendor you use. Parmana sits outside the agent's decision-making and checks the action against your business rules. You can change models, replace an agent, change vendors, or turn AI off without changing the authority that controls what can happen.",
  },
  {
    question: "Does Parmana stop agents from making payments?",
    answer:
      "No. If a payment matches the rules you have set, it proceeds. If it does not, it is refused. Parmana is built to help fintechs adopt agentic payment flows, not to block them.",
  },
  {
    question: "What happens if an agent behaves unexpectedly?",
    answer:
      "Every payment or other important action is checked before execution, every time, not just the first one. If a request no longer meets your rules, Parmana stops it there rather than letting the agent continue.",
  },
  {
    question: "Is Parmana only for AI agents?",
    answer:
      "No. A refund request typed into an internal admin tool by an employee goes through the same check as one an AI agent requests. The source of the request, agent, employee, application, third-party system, or automated workflow, does not change your business rules.",
  },
  {
    question: "How is this different from an audit log?",
    answer:
      "An audit log tells you, after the fact, that an agent sent a payment. Parmana tells you, before it happened, that the payment matched your rules, and records that decision as evidence. One is a record of what occurred. The other is proof of what was allowed to occur.",
  },
  {
    question: "Can Parmana help with auditability and compliance?",
    answer:
      "Yes. Parmana creates verifiable evidence for each authorization decision: what was requested, what rules were applied, whether it was allowed, and what was authorized before execution. It does not replace your compliance program, audit systems, or regulatory obligations. It gives them evidence to work with.",
  },
  {
    question: "How is this different from a kill switch?",
    answer:
      "A kill switch stops a system, or all of it at once, when something goes wrong. Parmana checks one request at a time: it can let 999 out of 1,000 requests through and stop only the one that breaks a rule, without touching the other 999.",
  },
  {
    question: "Can Parmana run in our own cloud or infrastructure?",
    answer:
      "Yes. Parmana runs as a standard container and can be deployed on your own cloud account or infrastructure you control, not only ours. Your business rules and signing keys stay in your deployment, not in ours.",
  },
  {
    question: "What if today's cryptography changes tomorrow?",
    answer:
      "Parmana separates authorization from the technology used to prove it. As cryptographic standards evolve, the proof mechanism can evolve too, without changing the business rules that decide what is allowed.",
  },
  {
    question: "How do I know a signed authorization is real?",
    answer:
      "Parmana signs every authorization with Ed25519. Anyone can verify it independently by checking the signature against the public key and the decision record, no special tools, and no need to take Parmana's word for it.",
  },
  {
    question: "What if Parmana disappears tomorrow?",
    answer:
      "Your business should not lose control because a vendor goes away. Parmana is built around explicit authorization rules and verifiable evidence that live in your deployment, not around Parmana itself being the permanent source of authority. Your authority belongs to your business, not to Parmana.",
  },
  {
    question: "Does Parmana replace our existing payment or authorization systems?",
    answer:
      "No. Your existing payment infrastructure and business rules stay exactly where they are. Parmana adds one control point in front of them, checking important actions before they execute.",
  },
  {
    question: "Can Parmana be used outside payments?",
    answer:
      "Yes. Say an agent requests revoking a user's database access rather than issuing a refund. Parmana checks that request the same way it checks a payment, against your rules, before it happens. The same approach covers refunds, transfers, access changes, infrastructure operations, data movement, and other automated business workflows.",
  },
  {
    question: "How do I know the claims on this page are accurate?",
    answer: (
      <>
        Every technical claim on this page describing how Parmana works was
        checked, one by one, against Parmana&apos;s own implementation before
        publishing, not written by a marketing team and left unverified.{" "}
        <a
          href="https://github.com/pavancharak/parmana-site/blob/main/docs/SITE_CONTENT_VALIDATION.md"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-text-primary"
        >
          Read the validation write-up
        </a>
        . Parmana&apos;s implementation itself is private, so the write-up documents
        what was checked and how, rather than something you can independently
        re-run against the source yourself.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white border-t border-border-light">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] tracking-tight text-text-primary text-center">
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