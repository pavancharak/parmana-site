const categories = [
  {
    id: "basics",
    label: "Basics",
    faqs: [
      ["What is Parmana?", "Parmana is an execution trust layer for agentic commerce and other consequential actions. It checks requests against business rules before execution and creates verifiable authorization evidence."],
      ["What problem does it solve?", "An AI agent can propose a payment or other action without having the business authority to execute it. Parmana puts a deterministic, verifiable boundary between the proposal and the execution system."],
      ["Does Parmana make business decisions?", "No. Your business defines what is allowed. Parmana evaluates those rules and controls whether the requested action can cross the execution boundary."],
      ["Is Parmana only for AI agents?", "No. The same boundary can protect actions requested by employees, applications, workflows or third-party systems. Agentic commerce is the primary use case highlighted here."],
    ],
  },
  {
    id: "how",
    label: "How it works",
    faqs: [
      ["What is the execution chain?", "Agent proposal → Policy → Decision → Authorization → Verification → Execution. The steps stay connected so the execution side can verify what was authorized."],
      ["What happens when an action is allowed?", "Parmana creates scoped authorization for the exact request. The execution system verifies that authorization before carrying out the action."],
      ["What happens when an action is not allowed?", "No authorization is created for execution. The action is stopped or held according to the workflow."],
      ["What if the approved payload changes?", "The authorization is bound to the approved payload. If a protected field changes, the recomputed payload hash no longer matches the authorized hash and verification fails."],
      ["What if the check cannot be completed?", "The action is not treated as allowed. It is held until the required verification can be completed."],
    ],
  },
  {
    id: "commerce",
    label: "Agentic commerce",
    faqs: [
      ["Can Parmana protect purchases?", "Yes. A purchase can be checked against rules such as amount, currency, merchant, identity, risk conditions and required approvals before execution."],
      ["Can Parmana protect refunds?", "Yes. The refund demo shows an agent proposal being evaluated against explicit policy and then bound to a cryptographic authorization."],
      ["Does Parmana replace payment providers?", "No. Parmana is designed to sit at the authorization and execution boundary around existing payment and business systems."],
      ["Does Parmana slow agents down?", "The goal is to keep agent reasoning and discovery fast while making the consequential execution step deterministic and verifiable."],
    ],
  },
  {
    id: "security",
    label: "Security & proof",
    faqs: [
      ["Does the agent hold the execution secret?", "No. The signing authority is kept outside the agent. The agent submits a request; the execution side verifies the resulting authorization."],
      ["What is payload binding?", "The authorization is tied to the exact action that was approved. Changing a protected field means the submitted action no longer matches the authorized payload."],
      ["Can authorization be independently verified?", "Yes. Parmana's authorization model is designed so the execution side can verify the authorization and associated decision evidence rather than relying only on the agent's claim."],
      ["Is this an audit log?", "It is more than a record after the fact. The authorization boundary is evaluated before execution, while the resulting decision and execution evidence can be retained for later verification and audit."],
    ],
  },
  {
    id: "pilot",
    label: "Pilot",
    faqs: [
      ["How do we start?", "Start with one important agentic commerce action, such as a purchase, refund or vendor payment, and the business rule that should control it."],
      ["Do we need production data?", "No. A pilot can start in a test environment with synthetic or controlled data."],
      ["What does a pilot show?", "It shows whether a real business rule can control a real workflow, whether the exact authorization can be verified, and what evidence is produced around execution."],
    ],
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[32px] font-bold leading-[1.3] tracking-tight text-ink text-center max-w-[800px] mx-auto">Questions teams ask before putting agents on the execution path</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-[900px] mx-auto">
          {categories.map(c => <a key={c.id} href={`#faq-${c.id}`} className="rounded-md border border-border bg-white px-4 py-2 text-xs md:text-sm font-medium text-ink/70">{c.label}</a>)}
        </div>
        <div className="mt-12 max-w-[820px] mx-auto space-y-12">
          {categories.map(c => (
            <div key={c.id} id={`faq-${c.id}`} className="scroll-mt-24">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep mb-2">{c.label}</p>
              <div className="divide-y divide-border border-y border-border">
                {c.faqs.map(([q, a]) => (
                  <details key={q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base md:text-lg font-semibold text-ink">
                      <span>{q}</span>
                      <span className="shrink-0 text-2xl font-normal text-purple-deep group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-4 max-w-[740px] text-sm md:text-base leading-[1.6] text-ink/70">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
