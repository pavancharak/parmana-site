import Gate from "@/components/Gate";
import { founderEmail, nav } from "@/lib/config";

export default function DemoCTA() {
  return (
    <section className="relative overflow-hidden bg-purple">
      <Gate
        state="open"
        dark
        className="pointer-events-none absolute -left-8 -bottom-8 h-48 w-48 opacity-15"
      />

      <div className="relative max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24 text-center">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-white max-w-[760px] mx-auto">
          This is a working integration, not a mockup.
        </h2>

        <p className="mt-6 text-base leading-[1.65] text-white/80 max-w-[640px] mx-auto">
          Read the full Phinite integration, including the tool contract,
          capability configuration, and the failure cases we hit along the
          way. Or talk to us about running a pilot on your own agentic
          workflow.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`mailto:${founderEmail}?subject=Request%20a%20pilot`}
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-purple-deep hover:opacity-90 transition-opacity duration-150 min-h-[44px]"
          >
            Request a pilot
          </a>

          <a
            href={nav.demoRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-150 min-h-[44px]"
          >
            Read the integration on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
