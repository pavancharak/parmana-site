import { founderEmail } from "@/lib/config";

export default function DemoCTA() {
  return (
    <section className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-[26px] md:text-[34px] font-bold leading-[1.2] text-ink max-w-[800px] mx-auto">Start with one consequential agent action.</h2>
        <p className="mt-4 text-base md:text-lg text-ink/70 max-w-[720px] mx-auto">
          Show us the action, the business rule and the system that executes it. A pilot can start with a test workflow before production.
        </p>
        <a href={`mailto:${founderEmail}?subject=Agentic%20commerce%20pilot`} className="mt-8 inline-flex items-center justify-center rounded-md bg-purple px-8 py-3 text-base font-semibold text-white min-h-[44px]">Talk to us</a>
      </div>
    </section>
  );
}
