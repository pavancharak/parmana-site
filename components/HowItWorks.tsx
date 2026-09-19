const steps = [
  { title: "Agent proposes", body: "The agent submits the exact action it wants the system to perform." },
  { title: "Rules are evaluated", body: "Business policy is applied deterministically to the request and trusted context." },
  { title: "Decision is made", body: "The request is allowed, refused or held when it cannot be safely evaluated." },
  { title: "Authorization is bound", body: "An allowed request receives scoped, short-lived authorization tied to the exact payload." },
  { title: "Execution is verified", body: "The execution side verifies the authorization again before the action reaches the business system." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[850px] mx-auto">
          Five steps from agent intent to verified execution
        </h2>
        <p className="mt-4 text-base text-ink/70 text-center max-w-[760px] mx-auto">
          Proposal → Policy → Decision → Authorization → Verification
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
      </div>
    </section>
  );
}
