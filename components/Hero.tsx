import Diagram from "@/components/Diagram";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-bg-light to-white">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            Institutional Authority Infrastructure
          </p>
          <h1 className="mt-3 text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] text-text-primary">
            AI may decide. You decide what becomes real.
          </h1>
          <p className="mt-4 text-lg font-bold leading-[1.4] text-text-primary max-w-[560px]">
            Authorization infrastructure for consequential actions. Any actor. Any
            domain. Authority remains yours.
          </p>
          <p className="mt-6 text-base leading-[1.6] text-text-secondary max-w-[560px]">
            Any actor can attempt to take action inside your systems: an AI
            agent, a fraudster, a compromised system, or a third party app.
            Parmana verifies each request against your authorization rules the
            moment before it executes. A request generates an intent only, the
            actual execution credential stays isolated. What you authorize
            becomes real. Nothing else does.
          </p>
          <a
            href="#differentiators"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-bold text-white hover:bg-primary-dark transition-colors min-h-[48px]"
          >
            See how it works
          </a>
        </div>

        <div>
          <Diagram compact />
        </div>
      </div>
    </section>
  );
}
