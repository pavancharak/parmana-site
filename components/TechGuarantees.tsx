const points = [
  ["Deterministic policy", "The final authorization decision is based on explicit rules and supplied facts, not an LLM deciding whether an action feels safe."],
  ["Payload-bound authorization", "The authorization is associated with the exact approved payload. A changed amount or protected field produces a different payload hash."],
  ["Fail-closed boundary", "If required verification cannot be completed, the action is not treated as authorized."],
  ["Independent verification", "The execution side can verify the authorization without giving the agent the signing secret."],
  ["Short-lived scope", "Authorization can be constrained to the intended operation and validity period."],
  ["Business authority stays external", "Parmana does not decide business policy. The business defines what is allowed."],
];

export default function TechGuarantees() {
  return (
    <section id="guarantees" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[850px] mx-auto">
          Built for consequential actions
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map(([title, body]) => (
            <div key={title} className="rounded-md border border-border bg-white p-8">
              <h3 className="text-base font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-ink/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
