const faqs = [
  {
    question: "Is Parmana AI powered?",
    answer:
      "No, deliberately not. The decision that determines whether an action executes is a deterministic rule evaluation, not a model. AI can make the request, but it is never the authority deciding whether that request is authorized. That makes the result provable rather than probabilistic.",
  },
  {
    question: "Do we need to rebuild our authorization rules?",
    answer:
      "No. Your existing approval limits, compliance policies, vendor lists, and other authorization rules are what Parmana checks against. Your business systems and policies stay in place. Parmana adds the enforcement boundary.",
  },
  {
    question: "Does Parmana stop AI agents from acting?",
    answer:
      "No. Authorized requests proceed. Requests that fall outside your existing rules are refused. Parmana is designed to enable autonomous execution without giving the AI authority of its own.",
  },
  {
    question: "What if the AI agent itself is compromised?",
    answer:
      "Parmana does not need to trust the agent. A compromised agent can submit requests, but it cannot manufacture authorization. Every request is checked against your rules before execution, and the agent never holds the authority to execute on its own.",
  },
  {
    question: "How is this different from an audit log?",
    answer:
      "An audit log records what happened after the fact. Parmana verifies whether an action is authorized before it happens and records cryptographic proof of that authorization. One records an event. The other enforces the boundary before execution.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-paper border-b border-divider">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="font-serif text-[26px] md:text-[32px] font-semibold leading-[1.3] tracking-tight text-navy text-center max-w-[760px] mx-auto">
          Questions teams ask
        </h2>

        <div className="mt-12 max-w-[800px] mx-auto divide-y divide-divider border-y border-divider">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base md:text-lg font-semibold text-navy transition-colors duration-200 hover:text-mint-deep">
                <span>{faq.question}</span>

                <span
                  className="shrink-0 text-2xl font-normal text-mint-deep transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-[720px] text-sm md:text-base leading-[1.6] text-navy/70">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}