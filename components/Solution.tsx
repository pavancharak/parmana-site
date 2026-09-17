export default function Solution() {
  return (
    <section id="solution" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <p className="text-xs font-mono uppercase tracking-wide text-purple-deep text-center">When AI operates business systems</p>
        <h2 className="mt-3 text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          Your business sets the rules. Parmana makes sure the system follows them.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-[340px] space-y-3">
              <div className="rounded-md border border-border bg-white px-5 py-4 text-center">
                <p className="text-sm font-semibold text-ink">
                  The business allows the action
                </p>
              </div>

              <div className="text-center text-xl text-ink/40">↓</div>

              <div className="rounded-md border-2 border-purple bg-lavender px-5 py-5 text-center">
                <p className="text-sm font-bold text-purple-deep">PARMANA</p>
                <p className="mt-2 text-xs leading-[1.6] text-ink/60">
                  Checks the action before it happens
                </p>
              </div>

              <div className="text-center text-xl text-ink/40">↓</div>

              <div className="rounded-md border border-border bg-white px-5 py-4 text-center">
                <p className="text-sm font-semibold text-ink">
                  The business system carries it out
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base leading-[1.65] text-ink/70">
              Parmana checks the action before the business system carries it out.
            </p>

            <p className="text-base leading-[1.65] text-ink/70">
              It checks whether the requested action is allowed by the business rules.
            </p>

            <p className="text-base leading-[1.65] text-ink/70">
              If it is allowed, it can proceed. If it is not allowed, it stops.
            </p>

            <p className="text-base leading-[1.65] font-medium text-purple-deep">
              Parmana also keeps proof of what the business allowed and what the system did.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-md border border-border bg-lavender p-8 md:p-10 text-center max-w-[760px] mx-auto">
          <p className="text-lg md:text-xl font-bold text-ink">
            Parmana does not make the business decision.
          </p>

          <p className="mt-3 text-base leading-[1.65] text-ink/70">
            Your people set the rules. Parmana does not decide what your business should do.
          </p>
        </div>
      </div>
    </section>
  );
}