export default function Problem() {
  return (
    <section id="problem" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-purple-deep text-center">Why now</p>
        <h2 className="mt-3 text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[820px] mx-auto">
          AI is becoming an actor, not just an assistant.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-5">
            <p className="text-base leading-[1.65] text-ink/70">
              AI agents can initiate transactions, access systems, make decisions and coordinate workflows at machine speed.
            </p>
            <p className="text-base leading-[1.65] text-ink/70">
              Existing identity and access infrastructure answers who a requester is and what they can generally access.
            </p>
            <p className="text-base leading-[1.65] text-ink/70">
              It does not necessarily answer whether <span className="font-medium text-ink">this specific action</span> is authorized right now, under these conditions, on behalf of this principal.
            </p>
            <p className="text-base leading-[1.65] font-semibold text-purple-deep">
              The control point is moving from the model to the authorization boundary around the model.
            </p>
          </div>

          <div className="relative flex items-end justify-center">
            <img src="/parmana-problem-foreground.png" alt="A human and an AI system sitting side by side, representing human authority alongside artificial intelligence." className="w-full max-w-[720px] h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
