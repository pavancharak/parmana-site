const questions = [
  "Who or what requested the action?",
  "What exactly is being requested?",
  "Which business rules apply?",
  "Was this exact action authorized?",
  "Can the execution system verify that authorization?",
];

export default function Gap() {
  return (
    <section id="gap" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink text-center max-w-[820px] mx-auto">
          A payment approval is not enough if the payload can change afterwards.
        </h2>
        <p className="mt-4 text-center text-base md:text-lg text-ink/70 max-w-[760px] mx-auto">
          Agentic commerce needs an authorization that is tied to the exact action the business approved.
        </p>
        <div className="mt-10 max-w-[620px] mx-auto space-y-3">
          {questions.map((q) => (
            <div key={q} className="rounded-md border border-border bg-white px-6 py-4">
              <span className="text-sm md:text-base font-medium text-ink">{q}</span>
            </div>
          ))}
          <div className="rounded-md border-2 border-dashed border-purple bg-white px-6 py-7 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-deep">The execution question</p>
            <p className="mt-2 text-xl md:text-2xl font-bold text-ink">Is this exact action allowed?</p>
          </div>
        </div>
      </div>
    </section>
  );
}
