const responses = [
  ["Deploy safely", "The agent's attempt above the limit never executed. The boundary stopped it before it reached the payment platform."],
  ["Prove compliance", "Cryptographic proof shows exactly what was attempted, what was authorized and what executed."],
  ["Protect systems", "The boundary enforced this independently of the payment platform's own systems or code."],
  ["Nothing changes", "The merchant's existing ₹10,000 policy became the enforcement bound. No new policy, no workflow change."],
];

export default function Problem() {
  return (
    <section id="problem" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink text-center max-w-[900px] mx-auto">
          When you need all four together
        </h2>
        <p className="mt-6 text-base md:text-lg leading-[1.7] text-ink/70 text-center max-w-[780px] mx-auto">
          Deploy safely so agents do not overstep. Prove it so anyone who asks sees the proof.
          Protect systems so unauthorized execution is not possible. Do it without disrupting what
          you already run.
        </p>

        <div className="mt-14 rounded-md border border-border bg-lavender p-8 md:p-10 max-w-[820px] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep text-center">
            Illustrative example: a refund dispute
          </p>
          <p className="mt-4 text-sm font-mono uppercase tracking-wide text-ink/50 text-center">
            The rule: refunds up to ₹10,000 per transaction
          </p>
          <ol className="mt-8 space-y-3 text-sm md:text-base leading-[1.6] text-ink/80">
            <li>1. A merchant authorizes an agent to issue refunds up to ₹10,000 per transaction.</li>
            <li>2. The agent attempts a ₹15,000 refund.</li>
            <li>3. Parmana checks the attempt against the rule and blocks execution above the authorized amount.</li>
            <li>4. The refund proceeds at the authorized ₹10,000, with proof attached.</li>
            <li>5. The customer disputes the outcome and expects the full amount.</li>
            <li>6. The payment platform asks the merchant to show the agent stayed within its authorized bounds.</li>
            <li>7. The merchant shows the Parmana proof. The dispute is resolved in the merchant&apos;s favor.</li>
          </ol>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {responses.map(([title, body]) => (
              <div key={title} className="rounded-md border border-border bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-deep">{title}</p>
                <p className="mt-2 text-sm leading-[1.6] text-ink/70">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 font-medium text-purple-deep text-center">
          The agent remains the proposer. Your rule remains the authority.
        </p>
      </div>
    </section>
  );
}
