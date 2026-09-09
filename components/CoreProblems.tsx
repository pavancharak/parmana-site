const problems = [
  {
    number: "01",
    headline: "No proof before execution",
    body: "AI proposes an action, and the only record of whether it stayed inside the rules comes after execution, reconstructed from logs. Disputes get resolved after the fact. Regulators and auditors have nothing independent to check against.",
    close:
      "Every authorization is signed before execution reaches your systems. Proof exists before the action happens, not after.",
  },
  {
    number: "02",
    headline: "Speed and control get treated as a trade-off",
    body: "Teams believe there are only two options: rebuild everything so AI fits your controls, or restrict AI until it can't do anything useful. A rebuild runs 18 months and millions. Restricting AI is safe and defeats the reason you deployed it.",
    close: "Enforcing your existing rules automatically gets you both, in 30 to 60 days.",
  },
  {
    number: "03",
    headline: "Authority logic sits inside the systems it's meant to protect",
    body: "When the authorization check runs inside the same business system AI is requesting against, a flaw in that system can grant authority it was never meant to have. Every new integration and every AI agent you connect widens that exposure.",
    close:
      "The authorization check happens outside your business systems, before execution is reached. A flaw inside them can't grant authority Parmana didn't authorize.",
  },
  {
    number: "04",
    headline: "Oversight requirements are catching up",
    body: "RBI's 2026 draft Model Risk Management guidance calls for human oversight of AI models, including the ability to override, suspend, or deactivate them. That requires proof mechanisms most institutions don't have yet.",
    close: "Cryptographic proof, signed before execution, is exactly the kind of evidence that oversight requires.",
  },
];

export default function CoreProblems() {
  return (
    <section id="problems" className="bg-paper border-b border-divider">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="font-serif text-[26px] md:text-[32px] font-semibold leading-[1.3] tracking-tight text-navy text-center max-w-[760px] mx-auto">
          What&apos;s stopping AI from executing today
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.number}
              className="rounded-md border border-divider p-8 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:border-mint/40 hover:shadow-[0_20px_45px_-20px_rgba(111,227,196,0.35)]"
            >
              <p className="text-xs uppercase tracking-wide text-navy/50 font-mono">
                Problem {problem.number}
              </p>

              <h3 className="font-serif text-xl font-semibold text-navy">
                {problem.headline}
              </h3>

              <p className="text-sm leading-[1.65] text-navy/70">{problem.body}</p>

              <p className="mt-auto pt-4 border-t border-divider text-sm font-medium text-mint-deep">
                {problem.close}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
