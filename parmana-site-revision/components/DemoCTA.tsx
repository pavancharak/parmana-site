import { scheduleUrl } from "@/lib/config";

export default function DemoCTA() {
  return (
    <section className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-[30px] md:text-[40px] font-bold leading-[1.1] text-ink max-w-[800px] mx-auto">
          Put one consequential workflow behind the boundary.
        </h2>

        <p className="mt-4 text-base md:text-lg text-ink/70 max-w-[720px] mx-auto">
          Bring the action, the business authority and the system that executes it.
        </p>

        <a
          href={scheduleUrl}
          data-track="cta_schedule_demo"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-purple px-8 py-3 text-base font-semibold text-white min-h-[48px] hover:bg-purple-deep transition-colors"
        >
          Request a demo →
        </a>
      </div>
    </section>
  );
}
