export default function NpciUap() {
  return (
    <section className="bg-white">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary text-center max-w-[800px] mx-auto">
          Runtime authorization for agentic payments: NPCI&apos;s UAP and the
          authorization gap
        </h2>

        <div className="mt-8 max-w-[720px] mx-auto space-y-4">
          <p className="text-base leading-[1.6] text-text-secondary">
            India&apos;s National Payments Corporation of India is developing
            the Unified Agent Protocol, a trust and authorization layer that
            will let AI agents make UPI payments within customer defined
            boundaries.
          </p>
          <p className="text-base leading-[1.6] text-text-secondary">
            UAP solves the trust infrastructure problem: identity
            verification, registration, spending limits, auditability.
          </p>
          <p className="text-base leading-[1.6] text-text-secondary">
            It does not solve the runtime problem. Once an agent has authority
            to book flights under a set limit, who verifies that this specific
            transaction is still authorized right before execution?
          </p>
          <p className="text-base font-bold text-text-primary">
            Parmana is the runtime authorization boundary that UAP needs.
          </p>
        </div>

        <div className="mt-10 max-w-[720px] mx-auto rounded-lg bg-bg-light p-6 space-y-3">
          <p className="text-sm leading-[1.6] text-text-secondary">
            Customer authorizes an agent: book flights to Mumbai under ₹8,000.
          </p>
          <p className="text-sm leading-[1.6] text-text-secondary">
            UAP verifies the agent is legitimate and the ₹8,000 spending limit
            is set.
          </p>
          <p className="text-sm leading-[1.6] text-text-secondary">
            The agent books a flight at ₹7,999.
          </p>
          <p className="text-sm leading-[1.6] text-text-secondary">
            Parmana checks: Is this still authorized right now? Has the
            customer revoked access? Does it match the original intent? Has
            the agent already used its authority on a similar transaction
            today?
          </p>
          <p className="text-sm font-bold text-text-primary">
            If every check passes, execute. If not, refuse and record why.
          </p>
        </div>
      </div>
    </section>
  );
}
