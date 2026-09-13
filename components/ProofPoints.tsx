const outcomes = [
  {
    label: "DENIED",
    result: "Stop",
    body: "Execution does not proceed. The agent cannot retry with altered parameters, fabricate trusted signals, or call the provider directly.",
  },
  {
    label: "AMBIGUOUS",
    result: "Verify",
    body: "The final execution state cannot be established yet. The transaction is held for verification instead of being reported as success or failure.",
  },
  {
    label: "APPROVED",
    result: "Execute",
    body: "The authorized path proceeds and the execution is preserved as verifiable evidence.",
  },
];

export default function ProofPoints() {
  return (
    <section className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          Every request resolves to one of three outcomes
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {outcomes.map((outcome) => (
            <div
              key={outcome.label}
              className="rounded-md border border-border bg-white p-6"
            >
              <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">
                {outcome.label}
              </p>
              <p className="mt-2 text-lg font-bold text-ink">{outcome.result}</p>
              <p className="mt-3 text-sm leading-[1.6] text-ink/70">{outcome.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-md border border-border bg-lavender p-8 max-w-[720px] mx-auto">
          <p className="text-sm font-semibold text-ink">
            A real transaction from this integration
          </p>
          <dl className="mt-4 space-y-2 font-mono text-xs text-ink/70">
            <div className="flex flex-wrap justify-between gap-x-4">
              <dt>Decision</dt>
              <dd className="font-semibold text-purple-deep">APPROVED</dd>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4">
              <dt>Authorization ID</dt>
              <dd>69abe6c1-48af-483a-8774-4783cb2ca31d</dd>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4">
              <dt>Business transaction</dt>
              <dd>e8a7d9ed-7942-4a73-897d-d1b3577347ef</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-[1.6] text-ink/50">
            Parmana authorized this transaction. Provider side settlement is
            confirmed separately through provider evidence, Parmana does not
            claim it on the provider&apos;s behalf.
          </p>
        </div>
      </div>
    </section>
  );
}
