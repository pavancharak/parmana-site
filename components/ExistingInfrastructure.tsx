const rules = [
  "Who can initiate a payment and up to what amount",
  "Which merchants, vendors or accounts can be used",
  "Which transactions require another person's approval",
  "Which currencies and payment operations are allowed",
  "Which risk conditions must be satisfied before execution",
  "Which actions require a fresh authorization",
];

export default function ExistingInfrastructure() {
  return (
    <section id="policies" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink text-center max-w-[820px] mx-auto">
          Use the rules your business already has.
        </h2>
        <p className="mt-4 text-base md:text-lg text-ink/70 text-center max-w-[760px] mx-auto">
          Parmana does not decide what your business should allow. It provides the enforcement and verification layer around the decisions you already make.
        </p>
        <div className="mt-12 max-w-[760px] mx-auto grid gap-3">
          {rules.map((r) => (
            <div key={r} className="rounded-md border border-border bg-white px-6 py-4 text-sm md:text-base font-medium text-ink">{r}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
