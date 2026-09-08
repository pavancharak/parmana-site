import Gate from "@/components/Gate";
import { founderEmail, nav } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy border-b border-divider">
      <Gate
        state="open"
        className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 opacity-20 md:h-56 md:w-56"
      />

      <div className="relative max-w-container mx-auto px-6 py-16 md:py-20 lg:py-28">
        <div className="max-w-[760px] animate-[fade-in-up_0.6s_ease-out_both]">
          <h1 className="font-serif text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.15] tracking-tight text-paper">
            Your existing infrastructure is already ready for the agentic era.
          </h1>

          <div className="mt-8 space-y-5 text-lg md:text-xl leading-[1.55] text-paper/80 max-w-[620px]">
            <p>
              You have authorization rules. Policies. Approval processes. Built to
              define what&apos;s allowed. They work for humans. They work for AI
              too.
            </p>
            <p>
              You&apos;re not creating new rules. You&apos;re applying your existing
              rules to AI, automatically.
            </p>
            <p className="text-mint font-medium">
              Execution stays within the bounds you set. No matter how fast it
              moves.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={nav.product}
              className="inline-flex items-center justify-center rounded-sm bg-paper px-8 py-3 text-base font-semibold text-mint hover:bg-mint hover:text-navy transition-colors min-h-[48px]"
            >
              See how it works
            </a>
            <a
              href={`mailto:${founderEmail}?subject=Request%20a%20demo`}
              className="inline-flex items-center justify-center rounded-sm bg-mint px-8 py-3 text-base font-semibold text-navy hover:bg-paper transition-colors min-h-[48px]"
            >
              Request demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
