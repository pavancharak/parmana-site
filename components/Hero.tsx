import Gate from "@/components/Gate";
import { founderEmail, messaging, nav } from "@/lib/config";

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
            {messaging.hero}
          </h1>

          <p className="mx-auto mt-6 max-w-[680px] text-lg md:text-xl leading-[1.5] text-ink/70">
            {messaging.tagline}
          </p>

          <p className="mt-5 text-base md:text-lg font-medium text-purple-deep">
            {messaging.corePrinciple}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={nav.demo}
              className="inline-flex items-center justify-center rounded-md bg-purple px-8 py-3 text-base font-semibold text-white hover:opacity-90 transition-opacity duration-150 min-h-[44px]"
            >
              Watch a demo
            </a>

            <a
              href={`mailto:${founderEmail}?subject=Request%20a%20pilot`}
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-purple-deep border border-purple hover:bg-lavender transition-colors duration-150 min-h-[44px]"
            >
              Request a pilot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
