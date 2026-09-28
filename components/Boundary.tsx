const steps = [
  { title: "Ask", body: "Your AI sends a request, like a ₹15,000 refund." },
  { title: "Check", body: "Parmana compares it with your rules." },
  { title: "Sign", body: "Parmana signs the decision. Change one word and the signature breaks." },
  { title: "Run", body: "Your system runs it only if the signed decision says yes." },
  { title: "Verify", body: "Anyone can check the receipt later, without asking us." },
];

const noChange = [
  { title: "Same rules", body: "You don't rewrite your policies. Parmana checks requests against the rules you set." },
  { title: "Same systems", body: "You don't rebuild anything. You connect Parmana with an SDK." },
  { title: "One place to change", body: "Update a rule once. The next request is checked against the new one." },
];

export default function Boundary() {
  return (
    <section id="what-we-built" className="scroll-mt-20 bg-lavender/60 border-y border-border">
      <div className="max-w-container mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">What we built</p>
            <h2 className="mt-4 text-[30px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
              A checkpoint that sits outside your systems
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-[1.65] text-ink/70">
            <p>
              Parmana is a separate checkpoint between your AI and the systems that move money. It is not a plugin
              inside those systems. It stands on its own.
            </p>
            <p>
              AI can send thousands of requests a minute. No team can review them all by hand. So the check has to be
              automatic, and it has to be separate from the system it protects.
            </p>
          </div>
        </div>

        <ol className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-border bg-white p-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple font-mono text-xs font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-[15px] leading-[1.6] text-ink/70">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <h3 className="text-[24px] md:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
            Nothing you run today has to change
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            {noChange.map((n) => (
              <div key={n.title} className="border-t border-purple/30 pt-6">
                <h4 className="text-lg font-semibold text-ink">{n.title}</h4>
                <p className="mt-2 text-[15px] leading-[1.65] text-ink/70">{n.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
