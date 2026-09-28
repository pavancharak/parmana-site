import { ArrowPathIcon, KeyIcon, Square2StackIcon } from "@heroicons/react/24/outline";

// Illustrative patterns. Amounts are example rules, not customer data.
const patterns = [
  {
    icon: KeyIcon,
    title: "Access is not approval",
    body: "Your agent has access to your refund system. You meant refunds on recent orders. It requests a refund on a two-year-old order. The access was valid. The request was not what you meant. Nothing caught it.",
  },
  {
    icon: Square2StackIcon,
    title: "Two approvals add up wrong",
    body: "Your limit is ₹10,000. Two refund requests come in for ₹8,000 each. Each one is under the limit, so each one goes through. Total: ₹16,000. Every single check passed. The total never got checked.",
  },
  {
    icon: ArrowPathIcon,
    title: "The rules changed. The agent didn't.",
    body: "You lower a limit this morning. Your agent was set up yesterday with the old one. It keeps requesting against the old rule. You changed the rule. The agent never heard.",
  },
];

export default function Problem() {
  return (
    <section className="bg-paper">
      <div className="max-w-container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-[720px]">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">Already happening</p>
          <h2 className="mt-4 text-[30px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            Three things happening in your systems right now
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          {patterns.map(({ icon: Icon, title, body }) => (
            <div key={title} className="border-t border-border pt-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lavender text-purple-deep ring-1 ring-purple/15">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-ink/70">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 max-w-[820px] border-l-2 border-purple pl-5 text-xl md:text-2xl font-semibold leading-[1.4] text-ink">
          None of this needs a hacker. It happens because nothing checks whether each request matches what you
          actually authorized.
        </p>
      </div>
    </section>
  );
}
