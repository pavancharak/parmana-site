import { founderEmail } from "@/lib/config";

export default function BottomCTA() {
  return (
    <section id="security" className="border-t border-border-light">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20 text-center">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary max-w-[800px] mx-auto">
          Adopt agentic payment flows without losing control.
        </h2>

        <p className="mt-4 text-base leading-[1.6] text-text-secondary max-w-[680px] mx-auto">
          We help fintech teams design and test payment flows where AI agents
          can act within clear business rules, without giving up control over
          what actually gets executed.
        </p>

        <a
          href={`mailto:${founderEmail}?subject=Agentic%20Payment%20Flow`}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-bold text-white hover:bg-primary-dark transition-colors min-h-[48px]"
        >
          Talk through your payment flow
        </a>

        <p className="mt-4 text-sm text-text-secondary">
          Working with fintech teams building agentic payments.
        </p>
      </div>
    </section>
  );
}