const policies = [
  "Who can approve a payment and up to what amount",
  "Which vendors can be used",
  "Which changes need another person's approval",
  "Which records must be kept or deleted",
  "Which actions are allowed in production",
];

export default function ExistingInfrastructure() {
  return (
    <section id="policies" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink text-center max-w-[800px] mx-auto">
          Your business already has rules.
        </h2>
        <p className="mt-4 text-base md:text-lg text-ink/70 text-center max-w-[700px] mx-auto">
          The challenge is making sure software follows them when it starts acting on its own.
        </p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-ink mb-2">For example:</p>
            {policies.map((policy) => (
              <div key={policy} className="flex gap-3">
                <span className="text-purple-deep font-bold shrink-0">✓</span>
                <p className="text-sm leading-[1.6] text-ink/70">{policy}</p>
              </div>
            ))}
          </div>
          <div className="rounded-md border border-border bg-white p-8">
            <p className="text-xl font-bold text-ink">Parmana checks those rules before action.</p>
            <p className="mt-3 text-sm md:text-base leading-[1.7] text-ink/70">
              You do not hand the decision to AI. Your business sets the rules. Parmana checks whether the requested action follows them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
