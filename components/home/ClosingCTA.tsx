import { messaging, nav, scheduleUrl } from "@/lib/config";
import { Arrow } from "./Section";

export default function ClosingCTA() {
  return (
    <section id="contact" className="scroll-mt-20 bg-paper px-4 py-24 md:px-6 md:py-32">
      <div className="relative isolate mx-auto max-w-container overflow-hidden rounded-3xl bg-purple-deep px-6 py-20 text-center md:px-16 md:py-28">
        <div aria-hidden className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-purple opacity-70 blur-3xl" />
        <div aria-hidden className="absolute -bottom-40 -left-24 -z-10 h-96 w-96 rounded-full bg-purple opacity-40 blur-3xl" />
        <h2 className="mx-auto max-w-[820px] text-[38px] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[60px]">
          Make autonomy operational.
        </h2>
        <p className="mx-auto mt-6 max-w-[620px] text-lg text-white/80 md:text-xl">{messaging.oneLiner}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={scheduleUrl}
            data-track="cta_demo_closing"
            className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-base font-semibold text-purple-deep transition-colors hover:bg-lavender"
          >
            Request a demo <Arrow />
          </a>
          <a
            href={nav.demo}
            data-track="cta_see_it_work_closing"
            className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            See it work <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
