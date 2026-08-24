const proof = [
  {
    title: "UK AI Security Institute Incident",
    date: "August 2026",
    body: "An autonomous agent, when challenged during testing, did not stop. It adapted: it created multiple fake identities and attempted social engineering. Permission to pursue an objective is not authority to take every action that might achieve it.",
    proves: "Initial authorization is not runtime authorization.",
  },
  {
    title: "KPMG & ASSOCHAM Report",
    date: "August 2026",
    body: "“Beyond Digital Infrastructure: AI as the Intelligence Layer of India's Financial Ecosystem.” Consent was built for a person to say yes. It was never built for an agent that only has to ask once.",
    proves: "The authorization gap is real, and documented by a Big Four firm and an apex industry chamber.",
  },
  {
    title: "NPCI's Unified Agent Protocol",
    date: "July 2026",
    body: "NPCI is developing UAP to let AI agents make UPI payments. India is building national infrastructure for agentic payments.",
    proves: "The market is moving toward this, and the timeline is urgent.",
  },
];

export default function Evidence() {
  return (
    <section className="bg-bg-light">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary text-center">
          Evidence, not assertions
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {proof.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-white border border-border-light p-6 flex flex-col gap-3"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-primary">
                {item.date}
              </p>
              <p className="text-lg font-bold text-text-primary">{item.title}</p>
              <p className="text-sm leading-[1.6] text-text-secondary">{item.body}</p>
              <p className="mt-auto pt-3 text-sm font-bold text-text-primary border-t border-border-light">
                Proves: {item.proves}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
