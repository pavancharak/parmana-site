function GapDiagram() {
  return (
    <div
      role="img"
      aria-label="Human speed authorization moves through a manual review process, while agent speed requests arrive continuously, widening the gap between the two"
      className="mx-auto flex max-w-[420px] flex-col gap-6 rounded-md border border-border bg-lavender p-8"
    >
      <div>
        <p className="text-xs font-mono uppercase tracking-wide text-ink/50">
          Human speed authorization
        </p>
        <div className="mt-2 flex gap-2">
          <div className="h-3 flex-1 rounded-full bg-white border border-border" />
          <div className="h-3 flex-1 rounded-full bg-white border border-border" />
          <div className="h-3 flex-1 rounded-full bg-white border border-border" />
        </div>
        <p className="mt-2 text-xs text-ink/50">Request, review, approval</p>
      </div>

      <div>
        <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">
          Agent speed execution
        </p>
        <div className="mt-2 flex gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-3 flex-1 rounded-full bg-purple" />
          ))}
        </div>
        <p className="mt-2 text-xs text-purple-deep">
          Continuous requests, no review step
        </p>
      </div>
    </div>
  );
}

export default function Problem() {
  return (
    <section id="problem" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          The authorization problem at agent speed
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-base leading-[1.65] text-ink/70">
              AI agents propose actions faster than human scale authorization
              processes can evaluate them.
            </p>
            <p className="text-base leading-[1.65] text-ink/70">
              Identity and access systems answer who a requester is and what
              they can generally access.
            </p>
            <p className="text-base leading-[1.65] text-ink/70">
              They do not answer whether this specific action is authorized
              right now, in this context.
            </p>
            <p className="text-base leading-[1.65] font-medium text-purple-deep">
              As autonomous execution scales, that gap widens.
            </p>
          </div>

          <GapDiagram />
        </div>
      </div>
    </section>
  );
}
