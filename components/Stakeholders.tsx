const stakeholders = [
  ["Finance", "Know that payments and other financial actions follow the approval limits already set by the business."],
  ["Risk & Compliance", "Get evidence showing what was approved and what the system actually did."],
  ["Technology", "Add a check in front of existing systems instead of replacing them."],
  ["Security", "Stop an unapproved action before it reaches a protected system."],
  ["Engineering", "Use one clear way to apply business rules to automated actions."],
  ["Business leaders", "Keep the decision with the business while allowing software and AI to do more work."],
];
export default function Stakeholders(){return <section id="stakeholders" className="bg-paper border-b border-border"><div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24"><h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">One problem. Different teams care about different parts of it.</h2><div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">{stakeholders.map(([role,value])=><div key={role} className="rounded-md border border-border bg-lavender p-8"><h3 className="text-base font-bold text-purple-deep mb-2">{role}</h3><p className="text-sm leading-[1.6] text-ink/70">{value}</p></div>)}</div></div></section>}
