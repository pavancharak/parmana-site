const categories=[
 {id:"basics",label:"The basics",faqs:[
  ["What is Parmana?","Parmana helps businesses make sure that software carries out only the actions the business has approved. It checks the requested action before it reaches the system that carries it out and keeps evidence of what happened."],
  ["Does Parmana make business decisions?","No. The business decides what should happen. Parmana applies the business's existing rules to the requested action."],
  ["Is Parmana only for AI?","No. The same approach can be used when actions come from AI systems, applications, automated workflows or people."],
  ["Is Parmana an audit log?","No. An audit log mainly records what happened. Parmana is designed to check an action before it happens and then preserve evidence of the approval and result."],
 ]},
 {id:"how",label:"How it works",faqs:[
  ["What happens when an action is approved?","The request passes the required checks and can continue to the business system. The decision and related evidence are preserved."],
  ["What happens when an action is not approved?","The governed path stops the action. It does not treat a failed or missing approval as permission."],
  ["What happens if the check cannot be completed?","The system is designed to fail closed: an action is not treated as approved when the required check cannot be completed."],
 ]},
 {id:"business",label:"For businesses",faqs:[
  ["What kinds of actions can Parmana protect?","Examples include payments, refunds, access changes, production changes, data deletion, software releases, contracts and vendor actions."],
  ["Do we need to replace our existing systems?","No. Parmana is designed to sit in front of the systems that already carry out your business actions."],
  ["Who keeps the decision?","Your business does. Parmana is not the owner of your business rules or your authority."],
 ]},
 {id:"pilot",label:"Pilot",faqs:[
  ["How do we start?","Start with one important action and the business rule that should control it. We can then show the check in a test or sandbox environment before expanding the scope."],
  ["Do we need production data?","No. A pilot can start in a test environment."],
  ["What does a pilot prove?","It lets you see whether a real business rule can control a real workflow and whether the resulting evidence is useful to your team."],
 ]},
];
export default function FAQ(){return <section id="faq" className="bg-paper border-b border-border"><div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24"><h2 className="text-[26px] md:text-[32px] font-bold leading-[1.3] tracking-tight text-ink text-center max-w-[760px] mx-auto">Questions teams ask</h2><div className="mt-8 flex flex-wrap justify-center gap-2 max-w-[800px] mx-auto">{categories.map(c=><a key={c.id} href={`#faq-${c.id}`} className="rounded-md border border-border bg-white px-4 py-2 text-xs md:text-sm font-medium text-ink/70 hover:border-purple/50 hover:text-purple-deep">{c.label}</a>)}</div><div className="mt-12 max-w-[800px] mx-auto space-y-12">{categories.map(c=><div key={c.id} id={`faq-${c.id}`} className="scroll-mt-24"><p className="text-xs font-mono uppercase tracking-wide text-purple-deep mb-2">{c.label}</p><div className="divide-y divide-border border-y border-border">{c.faqs.map(([q,a])=><details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base md:text-lg font-semibold text-ink hover:text-purple-deep"><span>{q}</span><span className="shrink-0 text-2xl font-normal text-purple-deep group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-4 max-w-[720px] text-sm md:text-base leading-[1.6] text-ink/70">{a}</p></details>)}</div></div>)}</div></div></section>}
