const steps = ["Define the business rule", "Send the exact requested action", "Evaluate the policy", "Verify the authorization", "Execute and retain evidence"];
const outcomes = [
  ["Works with existing systems", "Keep your payment, commerce and business systems. Put Parmana at the execution boundary."],
  ["Agent remains a proposer", "The agent can request an action without receiving the signing secret or final execution authority."],
  ["Clear result", "Your application gets a deterministic authorization outcome instead of relying on an LLM response."],
  ["Proof of the decision", "The execution side can verify the authorization and connect it to the decision evidence."],
];

export default function SdkIntegrationPath() {
  return (
    <section className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[800px] mx-auto">A simple integration path</h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map(([title, desc]) => (
            <div key={title} className="rounded-md border border-border bg-lavender p-8">
              <h3 className="text-base font-bold text-ink mb-2">{title}</h3>
              <p className="text-sm leading-[1.6] text-ink/70">{desc}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-20 text-xl font-bold text-ink text-center">How it connects</h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s} className="rounded-md border border-border bg-white p-6">
              <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">Step {i + 1}</p>
              <p className="mt-2 text-sm font-bold text-ink">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
