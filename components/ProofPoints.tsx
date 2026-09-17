const outcomes=[
  ["NOT APPROVED","The action is stopped. It does not continue through the governed path."],
  ["UNCLEAR","The system does not treat an unclear result as approval. The action is held for checking."],
  ["APPROVED","The approved path proceeds and the decision and resulting evidence are preserved."],
];
export default function ProofPoints(){return <section className="bg-paper border-b border-border"><div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24"><h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">The result is clear.</h2><div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">{outcomes.map(([result,body])=><div key={result} className="rounded-md border border-border bg-lavender p-8"><p className="text-xs font-mono uppercase tracking-wide text-purple-deep">{result}</p><p className="mt-2 text-base font-bold text-ink">{result === "APPROVED" ? "The approved action can proceed." : result === "NOT APPROVED" ? "The action does not proceed." : "The action is held."}</p><p className="mt-3 text-sm leading-[1.6] text-ink/70">{body}</p></div>)}</div></div></section>}
