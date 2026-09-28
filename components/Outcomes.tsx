// The three outcomes are locked positioning: keep titles and order as written.
const outcomes = [
  {
    title: "Deploy Safely",
    body: "Let AI handle real work. Every request it makes is checked against your rules before anything runs, so it can move fast without going past your limits.",
  },
  {
    title: "Prove Compliance",
    body: "Every decision comes with a signed receipt: the request, the rule, and the result. Hand it to an auditor or regulator. It doesn't rely on logs.",
  },
  {
    title: "Protect Systems",
    body: "The check sits outside your business systems, so it doesn't depend on them. Requests you didn't allow never reach them.",
  },
];

export default function Outcomes() {
  return (
    <section className="bg-paper">
      <div className="max-w-container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-[720px]">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">What you get</p>
          <h2 className="mt-4 text-[30px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            Three things you get, without changing how you run
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
