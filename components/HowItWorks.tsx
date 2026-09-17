import FlowDiagram from "@/components/FlowDiagram";

const steps = [
  { title: "Approve", body: "Your business sets the rule for what can happen." },
  { title: "Check", body: "Parmana checks each requested action against that rule." },
  { title: "Allow or stop", body: "An approved action can proceed. An unapproved action is stopped." },
  { title: "Show what happened", body: "Parmana keeps evidence of the approval and the resulting action." },
];

export default function HowItWorks() {
  return <section id="how-it-works" className="bg-paper border-b border-border"><div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24"><h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">Four simple steps</h2><div className="mt-14"><FlowDiagram /></div><div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[820px] mx-auto">{steps.map((step,i)=><div key={step.title}><p className="text-xs font-mono uppercase tracking-wide text-purple-deep">{String(i+1).padStart(2,"0")}</p><h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3><p className="mt-2 text-sm leading-[1.6] text-ink/70">{step.body}</p></div>)}</div></div></section>;
}
