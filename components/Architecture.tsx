export default function Architecture() {
  return (
    <section id="architecture" className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep text-center">Architecture</p>
        <h2 className="mt-3 text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-ink text-center max-w-[850px] mx-auto">
          Keep Parmana outside the agent&apos;s authority.
        </h2>
        <p className="mt-4 text-base md:text-lg text-ink/70 text-center max-w-[760px] mx-auto">
          The agent can request an action. The business system only executes after the authorization boundary is satisfied.
        </p>
        <div className="mt-12 max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
          {[
            ["AI agent", "Proposes"],
            ["Parmana", "Checks"],
            ["Authorization", "Binds"],
            ["Execution", "Verifies"],
            ["Business system", "Executes"],
          ].map(([title, body]) => (
            <div key={title} className={`rounded-md border ${title === "Parmana" ? "border-2 border-purple bg-white" : "border-border bg-lavender"} p-6 text-center`}>
              <p className="text-sm font-bold text-ink">{title}</p>
              <p className="mt-2 text-sm text-ink/60">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}