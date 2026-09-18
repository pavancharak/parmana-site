const signals = [
  ["Control", "Make sure software follows the business decision before an important action happens."],
  ["Proof", "Keep a connected record of the policy, decision, authorization and execution so what happened can be checked later."],
];

export default function Evidence() {
  return (
    <section id="evidence" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep text-center">
          What Parmana gives you
        </p>
        <h2 className="mt-3 text-[28px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink text-center max-w-[820px] mx-auto">
          Control the action. Keep the proof.
        </h2>
        <p className="mt-4 text-base md:text-lg text-ink/70 text-center max-w-[760px] mx-auto">
          Parmana makes the business decision enforceable before execution and keeps evidence of what the system actually did.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {signals.map(([title, body]) => (
            <div key={title} className="rounded-md border border-border bg-lavender p-7">
              <h3 className="text-base font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-ink/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
