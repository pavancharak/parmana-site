const layers = [
  { question: "Who is doing it?", label: "Identity" },
  { question: "Can they use the system?", label: "Authentication" },
  { question: "What can they access?", label: "Access" },
  { question: "What are they allowed to do?", label: "Credentials" },
  { question: "What happened?", label: "Audit" },
];

export default function Gap() {
  return (
    <section id="gap" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[820px] mx-auto">Most business systems can tell you who acted and what happened.</h2>
        <p className="mt-4 text-center text-base text-ink/70 max-w-[680px] mx-auto">But there is another question: was the action allowed before it happened?</p>
        <div className="mt-10 max-w-[620px] mx-auto space-y-3">
          {layers.map((layer) => <div key={layer.label} className="rounded-md border border-border bg-white px-6 py-4 flex items-center justify-between gap-4"><span className="text-sm font-medium text-ink">{layer.question}</span><span className="text-xs font-mono uppercase tracking-wide text-ink/50 shrink-0">{layer.label}</span></div>)}
          <div className="rounded-md border-2 border-dashed border-purple bg-white px-6 py-6 text-center">
            <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">The question Parmana answers</p>
            <p className="mt-2 text-lg md:text-xl font-semibold text-ink">Did the business authorize this exact action?</p>
          </div>
        </div>
      </div>
    </section>
  );
}
