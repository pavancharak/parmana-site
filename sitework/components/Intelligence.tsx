const signals = [
  ["Customer patterns", "See what customers repeatedly try to do, including requests that are blocked, approved later or abandoned."],
  ["Policy patterns", "Find rules that create repeated exceptions, friction or unexpected outcomes."],
  ["Business outcomes", "Connect decisions to what happened next so leaders can learn from the results of their rules."],
  ["Decision memory", "Keep decisions, evidence and outcomes connected so the organization can learn from its own history."],
];

export default function Intelligence() {
  return <section id="intelligence" className="bg-lavender border-b border-border">
    <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep text-center">From control to learning</p>
      <h2 className="mt-3 text-[28px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink text-center max-w-[860px] mx-auto">Turn every business decision into organizational intelligence.</h2>
      <p className="mt-5 text-base md:text-lg text-ink/70 text-center max-w-[760px] mx-auto">Parmana connects what customers ask for, what the business decides, what the software does and what happens next. That gives leaders a way to learn from decisions instead of losing that knowledge in separate systems.</p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
        {signals.map(([title, body]) => <div key={title} className="rounded-md border border-border bg-white p-7">
          <h3 className="text-base font-bold text-ink">{title}</h3>
          <p className="mt-3 text-sm leading-[1.7] text-ink/70">{body}</p>
        </div>)}
      </div>
      <div className="mt-12 rounded-md border border-purple/30 bg-white p-8 md:p-10 max-w-[900px] mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.12em] font-semibold text-purple-deep">The learning loop</p>
        <p className="mt-4 text-lg md:text-xl font-bold text-ink">Customer → Decision → Execution → Outcome → Learning → Better Decision</p>
        <p className="mt-4 text-sm md:text-base leading-[1.6] text-ink/70">Parmana surfaces evidence and patterns for leaders to review. The business remains responsible for deciding what should change.</p>
      </div>
    </div>
  </section>;
}
