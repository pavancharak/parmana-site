export default function Problem() {
  return (
    <section id="problem" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          Why autonomous systems need human authority
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="space-y-4">
            <p className="text-base leading-[1.65] text-ink/70">
              Autonomous systems can now understand requests, reason about
              actions, and propose execution. They are becoming genuinely
              capable.
            </p>

            <p className="text-base leading-[1.65] text-ink/70">
              But being able to do something and being allowed to do
              something are different. Capability is not authority.
            </p>

            <p className="text-base leading-[1.65] text-ink/70">
              Monitoring catches a violation after it happens. It does not
              stop it from happening.
            </p>

            <p className="text-base leading-[1.65] font-medium text-purple-deep">
              As autonomous systems get more capable, that authority gap
              widens.
            </p>
          </div>

          {/* Human + AI visual */}
          <div className="relative flex items-end justify-center">
            <img
              src="/parmana-problem-foreground.png"
              alt="A human and an AI system sitting side by side, representing human authority alongside artificial intelligence."
              className="w-full max-w-[720px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}