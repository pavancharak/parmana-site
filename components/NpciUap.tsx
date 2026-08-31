export default function NpciUap() {
  return (
    <section className="bg-white">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] tracking-tight text-text-primary text-center max-w-[800px] mx-auto">
          A simple example: an agent booking a flight
        </h2>

        <div className="mt-8 max-w-[720px] mx-auto space-y-5">
          <p className="text-base leading-[1.6] text-text-secondary">
            Imagine a customer allows an AI agent to book a flight to Mumbai
            for up to ₹8,000.
          </p>

          <p className="text-base leading-[1.6] text-text-secondary">
            The agent finds a flight for ₹7,999 and requests the payment.
            Being under the limit does not automatically mean the payment
            should go through.
          </p>

          <p className="text-base leading-[1.6] text-text-secondary">
            Parmana checks the actual payment request against the customer&apos;s
            rules before the payment happens.
          </p>
        </div>

        <div className="mt-10 max-w-[720px] mx-auto rounded-xl bg-bg-light p-6 md:p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            What happens next
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-bold text-text-primary">
                1. The agent asks to pay
              </p>
              <p className="mt-1 text-sm leading-[1.6] text-text-secondary">
                Flight to Mumbai ₹7,999
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-text-primary">
                2. Parmana checks
              </p>
              <p className="mt-1 text-sm leading-[1.6] text-text-secondary">
                Does this payment match the customer&apos;s rules?
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-text-primary">
                3. Parmana decides
              </p>
              <p className="mt-1 text-sm leading-[1.6] text-text-secondary">
                Allowed → continue. Not allowed → stop.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-text-primary">
                4. The payment system verifies
              </p>
              <p className="mt-1 text-sm leading-[1.6] text-text-secondary">
                The payment can proceed only when the authorization is valid.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-[720px] mx-auto text-center">
          <p className="text-base leading-[1.6] text-text-primary font-bold">
            The important question is not only “Did the agent have permission?”
          </p>

          <p className="mt-2 text-lg leading-[1.5] text-text-primary font-bold">
            It is “Was this payment authorized before it happened?”
          </p>
        </div>
      </div>
    </section>
  );
}