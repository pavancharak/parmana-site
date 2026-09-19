export default function FlowDiagram() {
  const steps = ["Agent proposal", "Policy check", "Decision", "Authorization", "Verification", "Execution"];
  return (
    <div className="mx-auto max-w-[900px] py-4">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
        {steps.map((step, i) => (
          <div key={step} className="rounded-md border border-border bg-lavender p-5 text-center">
            <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">Step {i + 1}</p>
            <p className="mt-2 text-sm font-bold text-ink">{step}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm md:text-base leading-[1.7] text-ink/70">The agent can propose. Parmana decides whether the exact action is authorized. The execution system verifies that authorization before acting.</p>
    </div>
  );
}
