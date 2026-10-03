import { messaging, nav, scheduleUrl } from "@/lib/config";

export default function ClosingCTA() {
  return (
    <section id="contact" className="scroll-mt-20 bg-paper px-4 py-20 md:px-6 md:py-28">
      <div className="relative isolate mx-auto max-w-container overflow-hidden rounded-3xl bg-purple-deep px-6 py-16 md:px-16 md:py-24">
        <div aria-hidden className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-purple opacity-70 blur-3xl" />
        <div aria-hidden className="absolute -bottom-40 -left-24 -z-10 h-96 w-96 rounded-full bg-purple opacity-40 blur-3xl" />
        <div className="grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-[32px] font-bold leading-[1.08] tracking-[-0.03em] text-white md:text-[48px]">
              Start with one workflow.
            </h2>
            <p className="mt-4 max-w-[560px] text-lg text-white/80">{messaging.oneLiner}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href={scheduleUrl}
              data-track="cta_schedule_closing"
              className="group inline-flex min-h-[44px] items-center gap-1 rounded-full bg-white px-6 py-3 text-base font-semibold text-purple-deep transition-colors hover:bg-lavender"
            >
              Schedule a conversation
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">›</span>
            </a>
            <a
              href={nav.evaluate}
              target="_blank"
              rel="noopener noreferrer"
              data-track="cta_evaluate_closing"
              className="inline-flex min-h-[44px] items-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Evaluate it yourself
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
