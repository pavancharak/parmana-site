const outcomes = [
  ["NOT ALLOWED", "The action is stopped before it reaches the execution system."],
  ["NEEDS CHECKING", "If required facts or verification are missing, the action is held rather than treated as allowed."],
  ["ALLOWED", "The exact action receives scoped authorization and the decision can be verified by the execution side."],
];

export default function ProofPoints() {
  return (
    <section className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[800px] mx-auto">The boundary is simple.</h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map(([result, body]) => (
            <div key={result} className="rounded-md border border-border bg-lavender p-8">
              <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">{result}</p>
              <p className="mt-2 text-base font-bold text-ink">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
