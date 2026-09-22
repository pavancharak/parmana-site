const points = [
  ["No disruption", "Your agent stays the same. Your infrastructure stays the same. Your rules stay the same. You add one API call."],
  ["No policy rewrite", "Your existing rule works as it is. No translation into a new syntax, no policy framework to learn first."],
  ["Deploy fast", "Weeks, not months. One integration, no infrastructure replacement."],
  ["Proof that protects", "Cryptographic proof a bank, a partner or a regulator can verify independently, not just your word for it."],
];

export default function TechGuarantees() {
  return (
    <section id="why-parmana" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[850px] mx-auto">
          Why Parmana
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map(([title, body]) => (
            <div key={title} className="rounded-md border border-border bg-white p-8">
              <h3 className="text-base font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-ink/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
