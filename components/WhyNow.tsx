const options = [
  "Rebuild everything (18 months, millions, risky)",
  "Lock down AI (slow, safe, pointless)",
  "Enforce authorization automatically (30 to 60 days, your existing rules, proven)",
];

const proofPoints = [
  {
    title: "You're ready",
    body: "Your authorization rules, policies, and approval processes already exist. Your business systems stay in place. Parmana adds the enforcement boundary.",
  },
  {
    title: "Code-validated",
    body: "The authorization check happens outside your business systems, before execution is reached. A security flaw inside those systems cannot grant authority that Parmana did not authorize.",
  },
  {
    title: "Regulatory tailwind",
    body: "Regulatory and market momentum is accelerating around autonomous payments, AI governance, and controlled agentic execution. The opportunity is to apply your existing controls before autonomous systems act.",
  },
];

export default function WhyNow() {
  return (
    <section id="why-now" className="bg-navy border-b border-divider">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="font-serif text-[26px] md:text-[32px] font-semibold leading-[1.3] tracking-tight text-paper text-center max-w-[760px] mx-auto">
          Why you&apos;re already ready right now
        </h2>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-base leading-[1.65] text-paper/70">
              Three ways to deploy AI with your existing authorization.
            </p>

            <ol className="mt-5 space-y-3">
              {options.map((option, i) => (
                <li
                  key={option}
                  className="flex gap-3 text-sm leading-[1.6] text-paper/70"
                >
                  <span className="font-mono text-mint">{i + 1}.</span>
                  <span>{option}</span>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-base leading-[1.65] text-paper/70">
              Your infrastructure already supports option three. You don&apos;t
              need to replace your authorization systems or create a parallel
              policy framework.
            </p>

            <p className="mt-4 text-base leading-[1.65] text-paper/70">
              The opportunity is simple: keep the rules you already trust and
              make them enforceable before autonomous execution.
            </p>
          </div>

          <div className="space-y-6">
            {proofPoints.map((point) => (
              <div key={point.title} className="border-l-2 border-mint pl-5">
                <p className="font-serif text-lg font-semibold text-paper">
                  {point.title}
                </p>
                <p className="mt-2 text-sm leading-[1.6] text-paper/70">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}