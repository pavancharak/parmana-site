export default function Problem() {
  return (
    <section id="problem" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink text-center max-w-[900px] mx-auto">
          Agentic commerce changes the question from “Can the agent do it?” to “Is the business allowing it?”
        </h2>
        <div className="mt-12 max-w-[780px] mx-auto space-y-5 text-base leading-[1.7] text-ink/70">
          <p>An agent can search products, compare offers, select a payment method and propose a transaction in seconds.</p>
          <p>But payment and commerce systems still need business rules: limits, approvals, identity, currency, merchant constraints, risk checks and exact transaction details.</p>
          <p>The dangerous gap is between an agent&apos;s proposal and the system that actually moves money or changes state.</p>
          <p className="text-xl md:text-2xl font-bold leading-[1.4] text-ink">
            Parmana closes that gap before execution.
          </p>
          <p className="font-medium text-purple-deep">
            The agent remains the proposer. The business remains the authority.
          </p>
        </div>
      </div>
    </section>
  );
}