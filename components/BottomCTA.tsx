import Gate from "@/components/Gate";
import { founderEmail, nav } from "@/lib/config";

export default function BottomCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy">
      <Gate
        state="open"
        className="pointer-events-none absolute -left-8 -bottom-8 h-48 w-48 opacity-10"
      />

      <div className="relative max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24 text-center">
        <h2 className="font-serif text-[26px] md:text-[32px] lg:text-[36px] font-semibold leading-[1.3] tracking-tight text-paper max-w-[820px] mx-auto">
          Your authorization infrastructure is already ready.
        </h2>

        <p className="mt-6 text-base leading-[1.65] text-paper/70 max-w-[720px] mx-auto">
          You have the rules. You have the policies. You have the approval
          processes. Parmana makes them enforceable for AI and autonomous
          systems before execution.
          <br />
          <br />
          No rebuild. No new rulebook. No new authority granted to AI.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <div>
            <a
              href={`mailto:${founderEmail}?subject=Request%20a%20demo`}
              className="inline-flex items-center justify-center rounded-md bg-mint px-8 py-3 text-base font-semibold text-navy shadow-sm hover:bg-paper hover:shadow-lg hover:shadow-mint/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 min-h-[48px]"
            >
              Request a demo
            </a>

            <p className="mt-2 text-xs text-paper/50">
              See your existing authorization infrastructure controlling an AI
              agent in 30 minutes.
            </p>
          </div>

          <div>
            <a
              href={nav.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-mint px-8 py-3 text-base font-semibold text-mint hover:bg-mint hover:text-navy hover:shadow-lg hover:shadow-mint/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 min-h-[48px]"
            >
              Read the technical validation
            </a>

            <p className="mt-2 text-xs text-paper/50">
              See the code audit proving the enforcement boundary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}