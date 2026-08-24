export default function AuthorizationGap() {
  return (
    <section className="bg-bg-light border-y border-border-light">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] text-text-primary text-center max-w-[800px] mx-auto">
          The authorization gap: initial permission is not standing authority
        </h2>

        <div className="mt-8 max-w-[720px] mx-auto space-y-4">
          <p className="text-base leading-[1.6] text-text-secondary">
            Your authorization systems were built for momentary approval: a
            human approving one specific action at one specific moment.
            Autonomous systems require standing authority instead, continuous
            permission to act without re-approval for every step.
          </p>
          <p className="text-base leading-[1.6] text-text-secondary">
            When authority is continuous, verification must be continuous too.
          </p>

          <blockquote className="border-l-4 border-primary pl-4 py-2 text-base italic leading-[1.6] text-text-primary">
            &quot;Consent was built for a person to say yes. It was never built
            for an agent that only has to ask once.&quot;
            <p className="mt-2 text-sm not-italic font-bold text-text-secondary">
              Source: KPMG and ASSOCHAM, on AI in India&apos;s financial
              ecosystem
            </p>
          </blockquote>

          <p className="text-base leading-[1.6] text-text-secondary">
            Parmana closes this gap. Every action, not just the initial
            delegation, is verified before execution. No actor can turn
            permission into unauthorized execution.
          </p>
        </div>
      </div>
    </section>
  );
}
