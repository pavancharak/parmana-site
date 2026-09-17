const categories=[
 {id:"basics",label:"The basics",faqs:[
  ["What is Parmana?","Parmana makes sure business systems carry out only actions the business allows. It checks the action before it reaches the business system and keeps proof of what happened."],
  ["Does Parmana make leader decisions?","No. The business sets the rules. Parmana checks the request against those rules."],
  ["Does Parmana work only with AI?","No. It can also check actions requested by people, applications and automated workflows."],
  ["Is Parmana just an audit log?","No. An audit log mainly tells you what happened. Parmana checks the request before it happens and proves what was allowed and what happened."],
 ]},
 {id:"how",label:"How it works",faqs:[
  ["What happens when the business allows an action?","The request passes the checks and can continue to the business system. Parmana keeps proof of what was allowed and what happened."],
  ["What happens when the business does not allow an action?","The action is stopped. A missing or failed check is not treated as permission."],
  ["What happens if the check cannot be completed?","If the check cannot be completed, the action is not treated as allowed."],
 ]},
 {id:"business",label:"For businesses",faqs:[
  ["What kinds of actions can Parmana protect?","Examples include payments, refunds, access changes, production changes, data deletion, software releases, contracts and vendor actions."],
  ["Do we need to replace our existing systems?","No. Parmana is designed to sit in front of the systems that already carry out your business actions."],
  ["Who decides what is allowed?","Your business does. Parmana does not decide what your business should allow."],
 ]},
 {id:"pilot",label:"Pilot",faqs:[
  ["How do we start?","Start with one important action and the business rule that should control it. We can then show the check in a test or sandbox environment before expanding the scope."],
  ["Do we need production data?","No. A pilot can start in a test environment."],
  ["What does a pilot prove?","It lets you see whether a real business rule can control a real workflow and whether the resulting evidence is useful to your team."],
 ]},
];
export default function FAQ(){return <section id="faq" className="bg-paper border-b border-border"><div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24"><h2 className="text-[26px] md:text-[32px] font-bold leading-[1.3] tracking-tight text-ink text-center max-w-[760px] mx-auto">Questions teams ask</h2><div className="mt-8 flex flex-wrap justify-center gap-2 max-w-[800px] mx-auto">{categories.map(c=><a key={c.id} href={`#faq-${c.id}`} className="rounded-md border border-border bg-white px-4 py-2 text-xs md:text-sm font-medium text-ink/70 hover:border-purple/50 hover:text-purple-deep">{c.label}</a>)}</div><div className="mt-12 max-w-[800px] mx-auto space-y-12">{categories.map(c=><div key={c.id} id={`faq-${c.id}`} className="scroll-mt-24"><p className="text-xs font-mono uppercase tracking-wide text-purple-deep mb-2">{c.label}</p><div className="divide-y divide-border border-y border-border">{c.faqs.map(([q,a])=><details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base md:text-lg font-semibold text-ink hover:text-purple-deep"><span>{q}</span><span className="shrink-0 text-2xl font-normal text-purple-deep group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-4 max-w-[720px] text-sm md:text-base leading-[1.6] text-ink/70">{a}</p></details>)}</div></div>)}</div></div></section>}
