const options = [
  "Rebuild everything (18 months, millions, risky)",
  "Lock down AI (slow, safe, pointless)",
  "Verify authorization automatically (30 to 60 days, your existing rules, proven)",
];

const proofPoints = [
  {
    title: "You're ready",
    body: "Your authorization rules, policies, and processes exist. No new infrastructure needed.",
  },
  {
    title: "Code-validated",
    body: "The boundary sits outside your business systems, proved through a Sep 8, 2026 code audit. Security vulnerabilities in your systems are orthogonal to our authorization boundary.",
  },
  {
    title: "Regulatory tailwind",
    body: "RBI's Jan 1, 2027 liability framework, the FCA Supercharged Sandbox (Oct to Nov 2026), and NPCI's UAP (Sep 8, 2026) all reward early movers.",
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
            <p className="text-base leading-[1.65] text-paper/80">
              Three ways to deploy AI with your existing policies.
            </p>

            <ol className="mt-5 space-y-3">
              {options.map((option, i) => (
                <li key={option} className="flex gap-3 text-sm leading-[1.6] text-paper/70">
                  <span className="font-mono text-mint">{i + 1}.</span>
                  <span>{option}</span>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-base leading-[1.65] text-paper/80">
              Your infrastructure already supports option three. You don&apos;t need
              to wait. You don&apos;t need to rebuild. You&apos;re ready now.
            </p>

            <p className="mt-4 text-base leading-[1.65] text-paper/80">
              The regulatory window is closing fast, RBI&apos;s Jan 1, 2027
              deadline. The market window is opening now, NPCI&apos;s Sep 8, 2026
              launch. Move while you have the advantage.
            </p>
          </div>

          <div className="space-y-6">
            {proofPoints.map((point) => (
              <div key={point.title} className="border-l-2 border-mint pl-5">
                <p className="font-serif text-lg font-semibold text-paper">{point.title}</p>
                <p className="mt-2 text-sm leading-[1.6] text-paper/70">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
