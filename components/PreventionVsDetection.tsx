const behavioral = ["Logs", "Tracing", "Monitoring", "Audit after the fact", "Reconstruction"];
const structural = [
  "Policy evaluation",
  "Decision state",
  "Fails closed by default",
  "Cryptographic proof",
  "Execution boundary",
];

export default function PreventionVsDetection() {
  return (
    <section className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <div className="text-center mb-14 max-w-[760px] mx-auto">
          <h2 className="text-[24px] md:text-[32px] font-bold leading-[1.3] tracking-tight text-ink">
            Monitoring tells you what happened.
          </h2>
          <h2 className="mt-2 text-[24px] md:text-[32px] font-bold leading-[1.3] tracking-tight text-purple-deep">
            Structural authority determines what is allowed to happen.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-md border border-border bg-lavender p-8">
            <h3 className="text-lg font-bold text-ink mb-5">Behavioral governance</h3>
            <ul className="space-y-2 mb-8">
              {behavioral.map((item) => (
                <li key={item} className="text-sm text-ink/70 flex gap-2">
                  <span className="text-ink/40">·</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-ink border-t border-border pt-4">
              Detects a violation after it happens.
            </p>
          </div>

          <div className="rounded-md border border-border bg-lavender p-8">
            <h3 className="text-lg font-bold text-purple-deep mb-5">Structural authority</h3>
            <ul className="space-y-2 mb-8">
              {structural.map((item) => (
                <li key={item} className="text-sm text-ink/70 flex gap-2">
                  <span className="text-purple-deep">·</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-ink border-t border-border pt-4">
              Prevents an unauthorized action before execution, by design.
            </p>
          </div>
        </div>

        <p className="mt-8 text-sm text-ink/50 text-center max-w-[640px] mx-auto">
          These are complementary layers, not competing ones. Audit is a
          byproduct of structural authority, not the primary product.
        </p>
      </div>
    </section>
  );
}
