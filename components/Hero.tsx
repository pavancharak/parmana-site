import Diagram from "@/components/Diagram";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-bg-light to-white">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-[fade-in-up_0.6s_ease-out_both]">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            For fintech teams building agentic payments
          </p>

          <h1 className="mt-3 text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] text-text-primary">
            Adopt agentic payments without losing control.
          </h1>

          <p className="mt-5 text-xl md:text-2xl font-bold leading-[1.35] text-text-primary max-w-[560px]">
            Let agents request payments. Your business decides what can happen.
          </p>

          <p className="mt-6 text-base md:text-lg leading-[1.6] text-text-secondary max-w-[560px]">
            AI agents can initiate payments, refunds, transfers, and other
            financial actions. Parmana checks each important action against
            your business rules before it happens.
          </p>

          <p className="mt-4 text-base leading-[1.6] text-text-secondary max-w-[560px]">
            If it is allowed, it proceeds. If it is not, it stops. The
            authorization is recorded so your team can verify what was
            approved before the action happened.
          </p>

          <a
            href="#authorization-gap"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-bold text-white hover:bg-primary-dark transition-colors min-h-[48px]"
          >
            See how it works
          </a>
        </div>

        <div className="animate-[fade-in-up_0.6s_ease-out_0.15s_both]">
          <Diagram compact />
        </div>
      </div>
    </section>
  );
}