const steps = [
  ["Agent proposal", "An AI agent proposes a specific commerce or payment action."],
  ["Business policy", "The business defines the rules and authority that apply."],
  ["Deterministic decision", "Parmana evaluates the exact request against those rules."],
  ["Scoped authorization", "If allowed, Parmana creates authorization bound to the exact payload."],
  ["Verified execution", "The execution system verifies authorization before carrying out the action."],
];

export default function Solution() {
  return (
    <section id="solution" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep text-center">The execution trust layer</p>
        <h2 className="mt-3 text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[850px] mx-auto">
          Keep the agent fast without giving the agent the authority.
        </h2>
        <p className="mt-4 text-base md:text-lg text-ink/70 text-center max-w-[780px] mx-auto">
          Parmana sits between the agent and the system that executes the transaction. It turns business policy into a deterministic authorization boundary.
        </p>
        <div className="mt-12 max-w-[820px] mx-auto space-y-3">
          {steps.map(([title, body], i) => (
            <div key={title} className="rounded-md border border-border bg-lavender p-5 md:p-6 flex gap-5 items-start">
              <div className="shrink-0 h-8 w-8 rounded-full bg-purple text-white text-sm font-bold flex items-center justify-center">{i + 1}</div>
              <div>
                <h3 className="text-base font-bold text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-[1.6] text-ink/70">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-md border border-border bg-white p-8 md:p-10 text-center max-w-[820px] mx-auto">
          <p className="text-lg md:text-xl font-bold text-ink">
            AI can propose the transaction. Parmana makes sure only what the business allowed can execute.
          </p>
        </div>
      </div>
    </section>
  );
}
