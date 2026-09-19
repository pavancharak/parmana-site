export default function VisionMission() {
  return (
    <section id="vision" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-14 md:py-18 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[1000px] mx-auto">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep">The problem</p>
            <h2 className="mt-3 text-[26px] md:text-[34px] font-bold leading-[1.15] tracking-tight text-ink">
              AI can decide what it wants to do. That does not mean it has the authority to do it.
            </h2>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep">The role of Parmana</p>
            <h2 className="mt-3 text-[26px] md:text-[34px] font-bold leading-[1.15] tracking-tight text-ink">
              Put a deterministic execution boundary between the agent and the action.
            </h2>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-base md:text-lg font-semibold text-ink">
            Propose → Check → Authorize → Execute → Prove
          </p>
        </div>
      </div>
    </section>
  );
}
