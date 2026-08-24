const evidence = [
  {
    title: "AI agents can take unexpected actions",
    date: "August 2026",
    body: "The UK AI Security Institute reported an evaluation in which an AI agent took unsanctioned actions on the live internet, including creating fake identities and attempting social engineering.",
    takeaway:
      "Giving an agent a goal does not mean every action it takes should be trusted.",
  },
  {
    title: "Financial services are moving toward agentic AI",
    date: "August 2026",
    body: "KPMG's report on India's financial ecosystem describes agentic AI as the next stage of financial automation, with systems performing tasks and workflows under appropriate oversight.",
    takeaway:
      "As financial actions become more automated, the decision behind each action matters.",
  },
  {
    title: "India is preparing for agentic payments",
    date: "July 2026",
    body: "NPCI is reportedly developing a Unified Agent Protocol for AI-led UPI payments. The proposed framework is intended to verify and authorize agents and define the limits of their authority.",
    takeaway:
      "The payment rails are preparing for agents. The question is how each actual payment is controlled.",
  },
];

export default function Evidence() {
  return (
    <section className="bg-bg-light">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary text-center max-w-[800px] mx-auto">
          Why this matters now
        </h2>

        <p className="mt-4 text-base leading-[1.6] text-text-secondary text-center max-w-[720px] mx-auto">
          AI is moving from making recommendations to taking actions. In
          financial systems, that makes the decision behind each action just as
          important as the action itself.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {evidence.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-white border border-border-light p-6 flex flex-col gap-4"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-primary">
                {item.date}
              </p>

              <p className="text-lg font-bold text-text-primary">
                {item.title}
              </p>

              <p className="text-sm leading-[1.6] text-text-secondary">
                {item.body}
              </p>

              <div className="mt-auto pt-4 border-t border-border-light">
                <p className="text-sm font-bold leading-[1.5] text-text-primary">
                  What this means:
                </p>

                <p className="mt-1 text-sm leading-[1.6] text-text-secondary">
                  {item.takeaway}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-[720px] mx-auto text-center">
          <p className="text-base leading-[1.6] text-text-primary font-bold">
            The question is no longer whether software will take action.
          </p>

          <p className="mt-2 text-lg leading-[1.5] text-text-primary font-bold">
            It is whether your business can prove that each important action
            was authorized before it happened.
          </p>
        </div>
      </div>
    </section>
  );
}