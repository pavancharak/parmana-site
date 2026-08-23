import { founderEmail } from "@/lib/config";

export default function BottomCTA() {
  return (
    <section id="security" className="border-t border-border-light">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20 text-center">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary">
          AI is ready to operate. Make sure it operates within your rules.
        </h2>
        <p className="mt-4 text-base leading-[1.6] text-text-secondary max-w-[600px] mx-auto">
          If you&apos;re deploying AI agents and want them switched on rather than stuck in
          pilot, write to us: {founderEmail}
        </p>
        <a
          href={`mailto:${founderEmail}`}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-bold text-white hover:bg-primary-dark transition-colors min-h-[48px]"
        >
          Write to us
        </a>
      </div>
    </section>
  );
}
