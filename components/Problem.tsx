import { BoltIcon, DocumentCheckIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const problems = [
  {
    icon: BoltIcon,
    title: "Agents move fast",
    body: "Agents can now request real business actions: approvals, refunds, payments, orders. No team can review every one by hand.",
  },
  {
    icon: DocumentCheckIcon,
    title: "You need proof",
    body: "Auditors and regulators ask for evidence that each action stayed within the authority you granted. Logs alone don't show that.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Boundaries matter",
    body: "The authorization boundary needs to be structural, not just another layer in your code. It belongs outside the systems it protects.",
  },
];

export default function Problem() {
  return (
    <section className="bg-paper">
      <div className="max-w-container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-[720px]">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">The challenge</p>
          <h2 className="mt-4 text-[30px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            The challenge of agentic systems
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          {problems.map(({ icon: Icon, title, body }) => (
            <div key={title} className="border-t border-border pt-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lavender text-purple-deep ring-1 ring-purple/15">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-ink/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
