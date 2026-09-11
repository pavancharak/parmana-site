import FlowDiagram from "@/components/FlowDiagram";

const steps = [
  {
    title: "Request",
    body: "The actor, an AI agent, employee, or application, proposes an action.",
  },
  {
    title: "Evaluate",
    body: "Parmana checks the request against existing authorization rules.",
  },
  {
    title: "Decide",
    body: "Parmana issues a decision state: authorized or denied.",
  },
  {
    title: "Execute",
    body: "If authorized, execution proceeds and the decision is signed into verifiable evidence. If denied, execution is blocked.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          The execution authorization flow
        </h2>

        <div className="mt-14">
          <FlowDiagram />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[820px] mx-auto">
          {steps.map((step, i) => (
            <div key={step.title}>
              <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-ink/70">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
