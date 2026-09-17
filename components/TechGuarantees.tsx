const guarantees = [
  ["Checked before action", "The requested action is checked before it reaches the target system."],
  ["Stopped when not allowed", "An action that is not allowed does not proceed."],
  ["Limited permission", "Permission can be limited to the particular action and its conditions."],
  ["Time-limited", "An approval can expire instead of remaining valid forever."],
  ["Can be withdrawn", "Permission can be withdrawn when the business requires it."],
  ["Signed records", "Important records can be signed so they can be checked later."],
  ["Proof of what happened", "The system keeps proof connecting what was allowed to what happened."],
  ["Changes can be found", "The record is designed so later changes can be found."],
  ["Can be checked separately", "The record can be checked separately from the application that did the work."],
];
export default function TechGuarantees(){return <section id="guarantees" className="bg-paper border-b border-border"><div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24"><h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">Built for control and proof</h2><p className="mt-4 text-center text-base text-ink/70 max-w-[680px] mx-auto">Parmana is built around a simple rule: important actions should be checked, not taken on trust.</p><div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">{guarantees.map(([title,desc])=><div key={title} className="rounded-md border border-border bg-lavender p-8"><h3 className="text-base font-bold text-ink mb-2">{title}</h3><p className="text-sm leading-[1.6] text-ink/70">{desc}</p></div>)}</div></div></section>}
