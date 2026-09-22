const steps = [
  { title: "Agent proposes", body: "Your agent submits the exact action it wants to take, unchanged from how it works today." },
  { title: "Parmana checks the rule", body: "Your existing rule is evaluated against the request. No new policy language to learn." },
  { title: "Proof is issued", body: "If the rule is followed, Parmana issues cryptographic proof bound to that exact action." },
  { title: "Action proceeds", body: "The action executes in your system, with proof attached to it." },
  { title: "You show the proof", body: "If a dispute comes, you show the proof instead of arguing the case from scratch." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep text-center">How it works</p>
        <h2 className="mt-3 text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[850px] mx-auto">
          Your agent, your rule, nothing to migrate.
        </h2>
        <p className="mt-4 text-base md:text-lg text-ink/70 text-center max-w-[780px] mx-auto">
          Parmana sits between your agent and the system that executes the action. It checks your
          existing rule and proves the outcome, it does not replace either one.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-md border border-border bg-lavender p-6">
              <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">Step {i + 1}</p>
              <h3 className="mt-2 text-base font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-ink/70">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-md border border-border bg-lavender p-8 md:p-10 text-center max-w-[820px] mx-auto">
          <p className="text-lg md:text-xl font-bold text-ink">
            Your agent works today. Parmana proves it followed your rule.
          </p>
        </div>
      </div>
    </section>
  );
}
