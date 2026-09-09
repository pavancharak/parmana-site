import Gate from "@/components/Gate";
import { founderEmail, nav } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper border-b border-divider">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-mint/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[360px] w-[360px] rounded-full bg-gold/15 blur-[120px]"
      />

      <Gate
        state="open"
        className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 opacity-20 drop-shadow-[0_0_50px_rgba(111,227,196,0.25)] md:h-56 md:w-56"
      />

      <div className="relative max-w-container mx-auto px-6 py-16 md:py-20 lg:py-28">
        <div className="max-w-[760px] animate-[fade-in-up_0.6s_ease-out_both]">
          <h1 className="font-serif text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.15] tracking-tight md:tracking-[-0.03em] lg:tracking-[-0.035em] text-navy">
            Your existing infrastructure is already ready for the agentic era.
          </h1>

          <div className="mt-8 space-y-5 text-lg md:text-xl leading-[1.55] text-navy/70 max-w-[620px]">
            <p>
              You already have authorization rules, policies, and approval
              processes. They define what your business allows.
            </p>

            <p>
              They were built for humans. Parmana makes them enforceable for AI.
            </p>

            <p>
              You&apos;re not creating new rules for AI. You&apos;re applying
              your existing rules to autonomous execution, automatically.
            </p>

            <p className="text-mint-deep font-medium">
              Execution stays within the bounds you set. No matter how fast it
              moves.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={nav.product}
              className="inline-flex items-center justify-center rounded-md border-2 border-navy px-8 py-3 text-base font-semibold text-navy hover:bg-navy hover:text-paper hover:shadow-lg hover:shadow-navy/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 min-h-[48px]"
            >
              See how it works
            </a>

            <a
              href={`mailto:${founderEmail}?subject=Request%20a%20demo`}
              className="inline-flex items-center justify-center rounded-md bg-mint px-8 py-3 text-base font-semibold text-navy shadow-sm hover:bg-navy hover:text-paper hover:shadow-lg hover:shadow-mint/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 min-h-[48px]"
            >
              Request demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}