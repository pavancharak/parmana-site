import Gate from "@/components/Gate";
import { founderEmail, messaging, nav } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper border-b border-border">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-lavender blur-[120px]" />
      <Gate state="open" className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 opacity-15 md:h-56 md:w-56" />
      <div className="relative max-w-container mx-auto px-6 py-20 md:py-28 lg:py-32 text-center">
        <div className="mx-auto max-w-[900px]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-deep">
            The agentic era
          </p>
          <h1 className="mt-5 text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.02] tracking-tight text-ink">
            {messaging.hero}
          </h1>
          <p className="mx-auto mt-7 max-w-[760px] text-lg md:text-xl leading-[1.55] text-ink/70">
            {messaging.tagline}
          </p>
          <p className="mx-auto mt-5 max-w-[680px] text-base md:text-lg font-medium text-purple-deep">
            {messaging.corePrinciple}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={nav.demo} className="inline-flex items-center justify-center rounded-md bg-purple px-8 py-3 text-base font-semibold text-white hover:opacity-90 transition-opacity min-h-[44px]">
              See how it works
            </a>
            <a href={`mailto:${founderEmail}?subject=Request%20a%20pilot`} className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-purple-deep border border-purple hover:bg-lavender transition-colors min-h-[44px]">
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
