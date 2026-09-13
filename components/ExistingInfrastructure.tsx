const policies = [
  "Approval limits, for example approvals over $10,000 require CFO approval",
  "Delegation rules, for example managers can approve requests under $5,000",
  "Vendor lists, for example payments only to approved vendors",
  "Compliance rules, for example KYC required before a transaction",
  "Industry policies, for example no international transfers of a given type",
];

export default function ExistingInfrastructure() {
  return (
    <section id="policies" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          Your policies are the source of authority
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-ink mb-2">
              Your organization already has authorization rules.
            </p>
            {policies.map((policy) => (
              <div key={policy} className="flex gap-3">
                <span className="text-purple-deep font-bold shrink-0">✓</span>
                <p className="text-sm leading-[1.6] text-ink/70">{policy}</p>
              </div>
            ))}
          </div>

          <div className="rounded-md border border-border bg-white p-8">
            <p className="text-lg font-bold text-ink">
              Parmana does not invent or change these rules.
            </p>
            <p className="mt-3 text-base leading-[1.65] text-ink/70">
              Parmana enforces them.
            </p>
            <p className="mt-4 text-sm font-medium text-purple-deep">
              Policies stay unchanged. Your authority becomes structural.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
