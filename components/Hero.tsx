import Gate from "@/components/Gate";
import { founderEmail, nav } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-lavender blur-[120px]"
      />

      <Gate
        state="open"
        className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 opacity-15 md:h-56 md:w-56"
      />

      <div className="relative max-w-container mx-auto px-6 py-16 md:py-20 lg:py-28 text-center">
        <div className="mx-auto max-w-[820px] animate-[fade-in-up_0.6s_ease-out_both]">
          <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold leading-[1.1] tracking-tight text-ink">
            Authorization before execution.
          </h1>

          <p className="mx-auto mt-6 max-w-[680px] text-lg md:text-xl leading-[1.5] text-ink/70">
            Parmana makes your existing authorization rules enforceable for AI
            agents and autonomous systems, before execution reaches your
            business systems.
          </p>

          <p className="mt-5 text-base md:text-lg font-medium text-purple-deep">
            AI can be intelligent without being in charge.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={nav.howItWorks}
              className="inline-flex items-center justify-center rounded-md bg-purple px-8 py-3 text-base font-semibold text-white hover:opacity-90 transition-opacity duration-150 min-h-[44px]"
            >
              See how it works
            </a>

            <a
              href={`mailto:${founderEmail}?subject=Request%20a%20demo`}
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-purple-deep border border-purple hover:bg-lavender transition-colors duration-150 min-h-[44px]"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
