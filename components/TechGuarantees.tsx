const guarantees = [
  ["Checked before it happens", "The request is checked before it reaches the system that will carry it out."],
  ["Stopped when not allowed", "An action that is not allowed does not proceed."],
  ["Only what the business allows", "The business can decide exactly what is allowed and under which conditions."],
  ["Can expire", "An allowed action can have a time limit."],
  ["Can be stopped", "The business can stop an action when it is no longer allowed."],
  ["Proof can be checked", "Important records can be protected so they can be checked later."],
  ["Proof of the action", "Parmana keeps proof connecting what the business allowed to what the system did."],
  ["Changes can be found", "The record makes later changes visible."],
  ["Can be checked independently", "The proof can be checked separately from the application that did the work."],
];
export default function TechGuarantees(){return <section id="guarantees" className="bg-paper border-b border-border"><div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24"><h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">Built to check and prove</h2><p className="mt-4 text-center text-base text-ink/70 max-w-[680px] mx-auto">Important actions should be checked before they happen, and what happened should be provable later.</p><div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">{guarantees.map(([title,desc])=><div key={title} className="rounded-md border border-border bg-lavender p-8"><h3 className="text-base font-bold text-ink mb-2">{title}</h3><p className="text-sm leading-[1.6] text-ink/70">{desc}</p></div>)}</div></div></section>}
