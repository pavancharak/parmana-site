export default function Problem() {
  return (
    <section id="problem" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink text-center max-w-[900px] mx-auto">
          Agents are deploying. Without proof they followed the rule, disputes cost you money.
        </h2>
        <p className="mt-6 text-base md:text-lg leading-[1.7] text-ink/70 text-center max-w-[780px] mx-auto">
          When a customer or a regulator disputes an action, the question is simple: did the agent
          follow the rule. Without proof, you lose the dispute by default. With proof, you win it.
        </p>

        <div className="mt-14 rounded-md border border-border bg-lavender p-8 md:p-10 max-w-[820px] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep text-center">
            Illustrative example: a refund dispute
          </p>
          <p className="mt-4 text-sm font-mono uppercase tracking-wide text-ink/50 text-center">
            The rule: refund under ₹1,000 if it is the customer&apos;s first dispute
          </p>
          <ol className="mt-8 space-y-3 text-sm md:text-base leading-[1.6] text-ink/80">
            <li>1. A customer disputes a ₹450 order.</li>
            <li>2. The agent proposes a refund.</li>
            <li>3. Parmana checks the rule: is this the first dispute, is the amount under ₹1,000.</li>
            <li>4. The rule is satisfied, so proof is issued and the refund proceeds.</li>
            <li>5. The seller contests the refund. The bank asks for proof the rule was followed.</li>
            <li>6. You show the Parmana proof. The chargeback is denied.</li>
          </ol>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-md border border-border bg-white p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Without proof</p>
              <p className="mt-2 text-2xl font-bold text-ink">₹650 loss</p>
              <p className="mt-1 text-xs text-ink/50">refund plus chargeback fee</p>
            </div>
            <div className="rounded-md border border-purple bg-white p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple-deep">With proof</p>
              <p className="mt-2 text-2xl font-bold text-ink">₹0 loss</p>
              <p className="mt-1 text-xs text-ink/50">proof stops the chargeback</p>
            </div>
          </div>
        </div>

        <p className="mt-10 font-medium text-purple-deep text-center">
          The agent remains the proposer. Your rule remains the authority.
        </p>
      </div>
    </section>
  );
}
