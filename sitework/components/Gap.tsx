const questions = [
  "Who is asking?",
  "Can they use the system?",
  "What can they access?",
  "What are they allowed to do?",
  "What happened?",
];

export default function Gap() {
  return (
    <section id="gap" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-ink text-center max-w-[820px] mx-auto">
          Knowing what happened later is not the same as controlling what happens now.
        </h2>
        <p className="mt-4 text-center text-base md:text-lg text-ink/70 max-w-[720px] mx-auto">
          Your existing tools can show who acted and what happened. But that comes after the action.
          Businesses also need control before an important action happens.
        </p>
        <div className="mt-10 max-w-[620px] mx-auto space-y-3">
          {questions.map((question) => (
            <div key={question} className="rounded-md border border-border bg-white px-6 py-4">
              <span className="text-sm md:text-base font-medium text-ink">{question}</span>
            </div>
          ))}
          <div className="rounded-md border-2 border-dashed border-purple bg-white px-6 py-7 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-deep">The question that matters</p>
            <p className="mt-2 text-xl md:text-2xl font-bold text-ink">
              Was this exact action allowed?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
