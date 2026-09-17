const policies = [
  "Who can approve a payment and up to what amount",
  "Which vendors are approved",
  "Which changes need another person's approval",
  "Which records must be kept and which may be deleted",
  "Which actions are allowed in production",
];

export default function ExistingInfrastructure() {
  return <section id="policies" className="bg-lavender border-b border-border"><div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24"><h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">You already have the rules.</h2><p className="mt-4 text-base text-ink/70 text-center max-w-[680px] mx-auto">Parmana puts those rules in front of the action.</p><div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"><div className="space-y-3"><p className="text-sm font-semibold text-ink mb-2">Examples of rules a business may already have:</p>{policies.map((policy)=><div key={policy} className="flex gap-3"><span className="text-purple-deep font-bold shrink-0">✓</span><p className="text-sm leading-[1.6] text-ink/70">{policy}</p></div>)}</div><div className="rounded-md border border-border bg-white p-8"><p className="text-lg font-bold text-ink">Parmana follows your rules.</p><p className="mt-3 text-sm leading-[1.6] text-ink/70">It does not decide what your business should do and it does not rewrite your rules.</p></div></div></div></section>;
}
