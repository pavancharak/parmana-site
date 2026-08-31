export default function AuthorizationGap() {
  return (
    <section
      id="authorization-gap"
      className="bg-bg-light border-y border-border-light"
    >
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] tracking-tight text-text-primary text-center max-w-[800px] mx-auto">
          Your payment system knows what happened. Can you prove what was
          authorized?
        </h2>

        <div className="mt-8 max-w-[720px] mx-auto space-y-5">
          <p className="text-base leading-[1.6] text-text-secondary">
            AI agents and automated systems can initiate payments, refunds,
            transfers, and other financial actions. But giving a system access
            to make payments does not mean every payment it requests should be
            allowed.
          </p>

          <p className="text-base leading-[1.6] text-text-secondary">
            An audit log can tell you what happened after the fact. It can
            show that an agent made a payment. It does not, by itself, prove
            that the payment was authorized under your rules before it
            happened.
          </p>

          <div className="rounded-xl border border-border-light bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">
              The difference
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm font-bold text-text-secondary">
                  After the payment
                </p>
                <p className="mt-1 text-base font-bold text-text-primary">
                  “The agent made this payment.”
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-text-secondary">
                  Before the payment
                </p>
                <p className="mt-1 text-base font-bold text-text-primary">
                  “This payment was authorized under these rules.”
                </p>
              </div>
            </div>
          </div>

          <p className="text-base leading-[1.6] text-text-secondary">
            Parmana checks the requested action against your rules before it
            happens. Parmana uses Ed25519 digital signatures to prove every
            authorization independently, so the system that executes the
            action can verify it without trusting Parmana.
          </p>

          <p className="text-base leading-[1.6] text-text-primary font-bold">
            Allowed means it can proceed. Not allowed means it stops.
          </p>
        </div>
      </div>
    </section>
  );
}