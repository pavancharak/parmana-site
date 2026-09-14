const steps = [
  {
    step: "1",
    title: "Write a policy",
    desc: "Define the rules an action must satisfy: approval limits, vendor allowlists, delegation rules, whatever your existing policy already says.",
  },
  {
    step: "2",
    title: "Propose an action through the SDK",
    desc: "Your autonomous system submits a Business Transaction: the action, its target, and the parameters, through the client.",
  },
  {
    step: "3",
    title: "Parmana evaluates and enforces",
    desc: "The policy decides, deterministically. An approved action proceeds within your authority. A blocked action never reaches execution.",
  },
  {
    step: "4",
    title: "Verify the signed result independently",
    desc: "Every decision produces a signed execution trust record you can verify offline, without trusting Parmana's runtime or database.",
  },
];

const outcomes = [
  {
    title: "Structural enforcement, not a code review",
    desc: "Policy is enforced at the boundary before execution, not left to an autonomous system to interpret and follow on its own.",
  },
  {
    title: "One SDK surface for every autonomous system",
    desc: "The same client library works whether the caller is an AI agent, a script, or a workflow engine.",
  },
  {
    title: "Cryptographic proof of what happened",
    desc: "Ed25519 signing, with hybrid ML-DSA signatures available for cryptographic agility and quantum readiness.",
  },
  {
    title: "Language parity",
    desc: "TypeScript and Python cover the same domain models and error taxonomy, so a team split across both isn't split on behavior.",
  },
];

export default function SdkIntegrationPath() {
  return (
    <section className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          What integrating gets you
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="rounded-md border border-border bg-lavender p-8"
            >
              <h3 className="text-base font-bold text-ink mb-2">{o.title}</h3>
              <p className="text-sm leading-[1.6] text-ink/70">{o.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-20 text-xl font-bold text-ink text-center">
          The integration path
        </h3>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="rounded-md border border-border bg-white p-6">
              <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">
                Step {s.step}
              </p>
              <h4 className="mt-2 text-sm font-bold text-ink">{s.title}</h4>
              <p className="mt-2 text-sm leading-[1.6] text-ink/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink/70">
          Full walkthrough with real captured output:{" "}
          <a
            href="https://docs.parmanasystems.com/quickstart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-deep font-medium hover:underline"
          >
            Quickstart
          </a>
        </p>
      </div>
    </section>
  );
}
