// The three outcomes are locked positioning: keep titles and order as written.
const outcomes = [
  {
    title: "Deploy Safely",
    body: "Every action your agents request stays within bounds. The authorization boundary is structural, not aspirational. Your agents can move fast without bypassing rules.",
  },
  {
    title: "Prove Compliance",
    body: "Cryptographic proof that what executed was what was authorized. Evidence built for auditors and regulators. Proof doesn't depend on logs.",
  },
  {
    title: "Protect Systems",
    body: "The authorization boundary sits outside your business systems, so it doesn't depend on them staying intact. Your rules stay separate from the code they govern.",
  },
];

export default function Outcomes() {
  return (
    <section className="bg-paper">
      <div className="max-w-container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-[720px]">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">Outcomes</p>
          <h2 className="mt-4 text-[30px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            What you get when authorization is structural
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((o, i) => (
            <div
              key={o.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-purple/40 hover:shadow-[0_24px_48px_-24px_rgb(67_56_202/0.35)]"
            >
              <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple to-purple-deep opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="font-mono text-xs text-purple-deep">0{i + 1}</p>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.02em] text-ink">{o.title}</h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-ink/70">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
