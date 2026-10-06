import { nav, scheduleUrl } from "@/lib/config";

export default function ClosingCTA() {
  return (
    <section id="contact" className="scroll-mt-20 bg-paper px-4 py-20 md:px-6 md:py-28">
      <div className="relative isolate mx-auto max-w-container overflow-hidden rounded-3xl bg-purple-deep px-6 py-16 md:px-16 md:py-24">
        <div
          aria-hidden
          className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-purple opacity-70 blur-3xl"
        />

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[38px] font-bold leading-[1.05] tracking-[-0.035em] text-white md:text-[56px]">
            Make autonomy operational.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Ready your systems. Enforce business authority. Prove consequential actions.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={scheduleUrl}
              data-track="cta_schedule_closing"
              className="inline-flex min-h-[48px] items-center rounded-full bg-white px-6 py-3 text-base font-semibold text-purple-deep hover:bg-lavender transition-colors"
            >
              Request a demo →
            </a>
            <a
              href={nav.demo}
              data-track="cta_demo_closing"
              className="inline-flex min-h-[48px] items-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              See it work →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
