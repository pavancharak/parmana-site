import Gate from "@/components/Gate";
import FlowDiagram from "@/components/FlowDiagram";

const moments = [
  {
    layer: "Your infrastructure",
    state: "closed" as const,
    headline: "You already have what matters",
    body: "Payment approval limits. Compliance policies. Vendor lists. Refund thresholds. These define what's authorized. They work for your team. They're your infrastructure. And they're already ready for AI.",
    supporting: "Your rules exist. You don't need new ones.",
  },
  {
    layer: "The application",
    state: "checking" as const,
    headline: "We apply your rules automatically",
    body: "AI proposes. You define the policies. Parmana ensures the decision executes exactly the way your business systems already execute decisions. Purely deterministic. Either your rules are followed, or nothing executes beyond your policy. No exceptions.",
    supporting: "Full control over every AI agent. Instant enforcement.",
  },
  {
    layer: "The proof",
    state: "open" as const,
    headline: "Proof before execution",
    body: "Every time an AI requests an action, we prove authorization happened first. Cryptographic signature. Audit trail. Before execution reached your systems. You have the proof. Regulators have the proof. It's automatic.",
    supporting: "Execution stays within bounds. Every time.",
  },
];

export default function ThreeMoments() {
  return (
    <section id="product" className="bg-navy border-b border-divider">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="font-serif text-[26px] md:text-[32px] font-semibold leading-[1.3] tracking-tight text-paper text-center max-w-[760px] mx-auto">
          Why your infrastructure is already ready
        </h2>

        <div className="mt-10">
          <FlowDiagram />
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {moments.map((moment) => (
            <div
              key={moment.headline}
              className="rounded-md border border-divider p-8 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:border-mint/40 hover:shadow-[0_20px_45px_-20px_rgba(111,227,196,0.35)]"
            >
              <Gate state={moment.state} className="h-12 w-12" />

              <h3 className="font-serif text-xl font-semibold text-paper">
                {moment.headline}
              </h3>

              <p className="text-sm leading-[1.65] text-paper/70">{moment.body}</p>

              <p className="mt-auto pt-4 border-t border-divider text-sm font-medium text-mint">
                {moment.supporting}
              </p>

              <p className="text-xs uppercase tracking-wide text-paper/50 font-mono">
                {moment.layer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
