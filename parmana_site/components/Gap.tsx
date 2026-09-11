const layers = [
  { question: "Who are you?", label: "Identity" },
  { question: "Can you authenticate?", label: "Authentication" },
  { question: "What can you access?", label: "Authorization / access" },
  { question: "What credentials do you have?", label: "Credential management" },
  { question: "Did you follow the policy?", label: "Audit" },
];

export default function Gap() {
  return (
    <section id="gap" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[820px] mx-auto">
          Existing infrastructure answers who can act. The missing layer answers what may execute.
        </h2>

        <div className="mt-14 max-w-[700px] mx-auto space-y-3">
          {layers.map((layer) => (
            <div key={layer.label} className="rounded-md border border-border bg-white px-6 py-4 flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-ink">{layer.question}</span>
              <span className="text-xs font-mono uppercase tracking-wide text-ink/50 shrink-0">{layer.label}</span>
            </div>
          ))}

          <div className="rounded-md border-2 border-dashed border-purple bg-white px-6 py-6 text-center">
            <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">Missing execution authority</p>
            <p className="mt-2 text-lg md:text-xl font-semibold text-ink">
              Is this agent authorized to execute this action, right now, in this context, on behalf of this principal?
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base md:text-lg font-semibold text-ink">Identity tells you who is acting. Authority tells you what they may do.</p>
          <p className="mt-2 text-sm font-mono text-ink/50">Bounded · scoped · time-limited · revocable</p>
        </div>
      </div>
    </section>
  );
}
