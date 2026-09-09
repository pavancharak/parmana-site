const points = [
  {
    label: "Humans have authorization rules",
    example: "Finance can approve vendor payments up to ₹50 lakhs.",
  },
  {
    label: "Parmana applies the same rule to AI",
    example: "AI requests the same payment. The same ₹50 lakh threshold applies, automatically.",
  },
  {
    label: "Proof before execution",
    example: "Every authorization is signed and verified before execution reaches your systems.",
  },
];

export default function CoreMessage() {
  return (
    <section className="bg-paper border-b border-divider">
      <div className="max-w-container mx-auto px-6 py-14 md:py-16">
        <h2 className="font-serif text-2xl md:text-[28px] font-semibold leading-[1.3] tracking-tight text-navy text-center">
          Same rule. Same bound. Same enforcement.
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-divider">
          {points.map((point, i) => (
            <div
              key={point.label}
              className="px-0 md:px-8 py-6 md:py-0 first:pt-0 first:pl-0 last:pb-0 last:pr-0"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-mint-deep">
                {String(i + 1).padStart(2, "0")}
              </p>

              <p className="mt-3 font-serif text-lg font-semibold text-navy">
                {point.label}
              </p>

              <p className="mt-2 text-sm leading-[1.6] text-navy/70">
                {point.example}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
