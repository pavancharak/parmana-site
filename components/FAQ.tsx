const faqs = [
  {
    question: "Is Parmana AI powered?",
    answer:
      "No, deliberately not. The check that decides whether an action executes is a deterministic rule evaluation, not a model. AI can be the thing making the request, but it is never the thing deciding whether the request is authorized. That is what makes the result provable rather than probabilistic.",
  },
  {
    question: "Do we need to rebuild our authorization rules?",
    answer:
      "No. Your existing approval limits, compliance policies, and vendor lists are what Parmana checks against. There is no new policy framework to design or new governance process to adopt, we apply the rules you already have.",
  },
  {
    question: "Does Parmana stop AI agents from acting?",
    answer:
      "No. If a request follows the rules you have set, it clears automatically. If it does not, it is refused. Parmana is built to help you adopt agentic execution with control, not to block it.",
  },
  {
    question: "What if the AI agent itself is compromised?",
    answer:
      "Parmana does not need to trust the agent. A compromised agent can still only make a request, the same request any agent would make. That request is checked against your rules before execution, the same as any other. The agent never holds the authority to execute on its own.",
  },
  {
    question: "How is this different from an audit log?",
    answer:
      "An audit log tells you, after the fact, that an action happened. Parmana tells you, before it happened, that the action was allowed under your rules, and records that decision as proof. One is a record of what occurred. The other is evidence of what was allowed to occur.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-navy border-b border-divider">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="font-serif text-[26px] md:text-[32px] font-semibold leading-[1.3] tracking-tight text-paper text-center max-w-[760px] mx-auto">
          Questions teams ask
        </h2>

        <div className="mt-12 max-w-[800px] mx-auto divide-y divide-divider border-y border-divider">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base md:text-lg font-semibold text-paper transition-colors duration-200 hover:text-mint">
                <span>{faq.question}</span>
                <span
                  className="shrink-0 text-2xl font-normal text-mint transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-[720px] text-sm md:text-base leading-[1.6] text-paper/70">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
