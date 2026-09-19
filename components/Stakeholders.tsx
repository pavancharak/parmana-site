const stakeholders = [
  ["Commerce & Payments", "Control the actions agents can take across purchases, refunds, payouts and vendor payments."],
  ["Risk & Compliance", "See which rules allowed or blocked a transaction and retain evidence of the authorization decision."],
  ["Technology", "Put a deterministic execution boundary in front of existing payment and business systems without replacing them."],
  ["Security", "Keep signing authority outside the agent and verify the authorization before the action reaches the system."],
  ["Product & Operations", "Turn agentic workflows into controlled business processes instead of relying only on prompts and agent guardrails."],
  ["Business leaders", "Define the authority and limits while allowing agents to operate at machine speed."],
];

export default function Stakeholders() {
  return (
    <section id="stakeholders" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[850px] mx-auto">
          Built for the teams responsible for what AI is allowed to do.
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {stakeholders.map(([role, value]) => (
            <div key={role} className="rounded-md border border-border bg-lavender p-8">
              <h3 className="text-base font-bold text-purple-deep mb-2">{role}</h3>
              <p className="text-sm leading-[1.6] text-ink/70">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
