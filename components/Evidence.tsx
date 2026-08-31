const proof = [
  {
    title: "AI agents can take unexpected actions",
    date: "AUGUST 2026",
    body: "AI security evaluations have shown agents can take actions beyond what people expect when pursuing a goal. An agent may find its own way to achieve an objective, including actions that were never explicitly approved.",
    proves:
      "Giving an agent a goal does not mean every action it takes should be trusted.",
  },
  {
    title: "Financial services are moving toward agentic AI",
    date: "2026",
    body: "Financial institutions are moving from AI that recommends and assists toward systems that can perform tasks and workflows. As financial actions become more automated, controlling the action becomes as important as making the decision.",
    proves:
      "The question is no longer only what AI recommends, but what it is allowed to do.",
  },
  {
    title: "India is preparing for agentic payments",
    date: "2026",
    body: "India's payments ecosystem is moving toward greater use of AI and automated payment experiences. NPCI is building AI capabilities for the payments ecosystem while UPI continues to expand delegated and automated payment capabilities.",
    proves:
      "AI is moving closer to real payment workflows in India's financial system.",
  },
  {
    title: "RBI is putting stronger controls around AI",
    date: "JULY 2026",
    body: "RBI's 2026 draft Model Risk Management guidance includes human oversight for AI models, including mechanisms to override, suspend, or deactivate models. This explicitly includes kill-switch arrangements.",
    proves:
      "Financial institutions need the ability to intervene when an AI system behaves unexpectedly.",
  },
];

export default function Evidence() {
  return (
    <section className="bg-bg-light">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] tracking-tight text-text-primary text-center">
          Why this matters now
        </h2>

        <p className="mt-4 text-base leading-[1.6] text-text-secondary text-center max-w-[800px] mx-auto">
          AI is moving from making recommendations to taking actions. In
          financial systems, that makes controlling each action just as
          important as making the decision.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {proof.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white border border-border-light p-6 flex flex-col gap-3 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-black/5"
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
                <p className="text-sm font-bold text-text-primary">
                  What this means:
                </p>

                <p className="mt-1 text-sm leading-[1.6] text-text-secondary">
                  {item.proves}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-[800px] mx-auto text-center">
          <p className="text-base font-bold leading-[1.6] text-text-primary">
            A kill switch stops a system. Parmana helps control the action
            before it happens.
          </p>

          <p className="mt-2 text-sm leading-[1.6] text-text-secondary">
            The goal is not to stop agentic payments. It is to let fintech
            teams adopt them without losing control.
          </p>
        </div>
      </div>
    </section>
  );
}