export default function Solution() {
  return (
    <section id="solution" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          Parmana is the execution authorization layer
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-[340px] space-y-3">
              <div className="rounded-md border border-border bg-white px-5 py-4 text-center">
                <p className="text-sm font-semibold text-ink">
                  AI agents, employees, applications, partners
                </p>
              </div>

              <div className="text-center text-xl text-ink/40">↓</div>

              <div className="rounded-md border-2 border-purple bg-lavender px-5 py-5 text-center">
                <p className="text-sm font-bold text-purple-deep">PARMANA</p>
                <p className="mt-2 text-xs leading-[1.6] text-ink/60">
                  Authority evaluation, deterministic decision, cryptographic
                  evidence
                </p>
              </div>

              <div className="text-center text-xl text-ink/40">↓</div>

              <div className="rounded-md border border-border bg-white px-5 py-4 text-center">
                <p className="text-sm font-semibold text-ink">
                  Business systems: payments, ERP, CRM, banking APIs
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base leading-[1.65] text-ink/70">
              Parmana sits between autonomous actors, AI agents, employees,
              applications, and partners, and business systems.
            </p>
            <p className="text-base leading-[1.65] text-ink/70">
              Before execution reaches your systems, Parmana evaluates the requested action against your existing business rules and the authority delegated to the actor.
            </p>
            <p className="text-base leading-[1.65] text-ink/70">
              If authorized, execution proceeds. If not, execution is
              blocked.
            </p>
            <p className="text-base leading-[1.65] font-medium text-purple-deep">
              Every governed execution produces independently verifiable cryptographic evidence of what was authorized.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-md border border-border bg-lavender p-8 md:p-10 text-center max-w-[760px] mx-auto">
          <p className="text-lg md:text-xl font-bold text-ink">
            Parmana does not make the decision.
          </p>
          <p className="mt-3 text-base leading-[1.65] text-ink/70">
            Your existing policies determine what is authorized. Parmana
            evaluates and enforces those policies deterministically.
          </p>
          <p className="mt-4 text-sm font-mono text-ink/50">
            AI proposes the action. Your policy determines authority. Parmana enforces the boundary.
          </p>
        </div>
      </div>
    </section>
  );
}
