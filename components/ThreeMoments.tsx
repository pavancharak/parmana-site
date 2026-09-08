import Gate from "@/components/Gate";
import FlowDiagram from "@/components/FlowDiagram";

const moments = [
  {
    layer: "Your infrastructure",
    state: "closed" as const,
    headline: "You already have what matters",
    body: "Payment approval limits. Compliance policies. Vendor lists. Refund thresholds. These already define what your business allows. They're your infrastructure. They're already ready to govern AI.",
    supporting: "Your rules exist. You don't need new ones.",
  },
  {
    layer: "The enforcement layer",
    state: "checking" as const,
    headline: "We don't make the decision. We enforce yours.",
    body: "AI proposes an action. Your existing policies determine whether it's authorized. Parmana evaluates the request against those rules and enforces the result deterministically. If the request is outside the authorized boundary, execution stops.",
    supporting: "Your policy decides. Parmana enforces.",
  },
  {
    layer: "The proof",
    state: "open" as const,
    headline: "Proof before execution",
    body: "Every authorized action produces cryptographic proof before execution reaches your business systems. The authorization is signed, verifiable, and recorded as an audit trail automatically.",
    supporting: "Authorization is proven before execution.",
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

              <p className="text-sm leading-[1.65] text-paper/70">
                {moment.body}
              </p>

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