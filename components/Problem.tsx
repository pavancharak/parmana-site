export default function Problem() {
  return (
    <section id="problem" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[760px] mx-auto">
          The authorization problem at agent speed
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="space-y-4">
            <p className="text-base leading-[1.65] text-ink/70">
              AI agents propose actions faster than human-scale authorization
              processes can evaluate them.
            </p>

            <p className="text-base leading-[1.65] text-ink/70">
              Identity and access systems answer who a requester is and what
              they can generally access.
            </p>

            <p className="text-base leading-[1.65] text-ink/70">
              They do not answer whether this specific action is authorized
              right now, in this context.
            </p>

            <p className="text-base leading-[1.65] font-medium text-purple-deep">
              As autonomous execution scales, that gap widens.
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