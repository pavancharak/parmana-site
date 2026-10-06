import { scheduleUrl } from "@/lib/config";

export default function DemoCTA() {
  return (
    <section className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-[26px] md:text-[34px] font-bold leading-[1.2] text-ink max-w-[800px] mx-auto">Start with one consequential agent action.</h2>
        <p className="mt-4 text-base md:text-lg text-ink/70 max-w-[720px] mx-auto">
          Show us the action, the business rule and the system that executes it. A pilot can start with a test workflow before production.
        </p>
        <a href={scheduleUrl} data-track="cta_demo_demopage" className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-purple px-8 py-3 text-base font-semibold text-white shadow-md shadow-purple/30 transition-colors hover:bg-purple-deep">
          Request a real workflow demo <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </section>
  );
}
