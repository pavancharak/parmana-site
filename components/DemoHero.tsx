import Gate from "@/components/Gate";

export default function DemoHero() {
  return (
    <section className="relative overflow-hidden bg-paper border-b border-border">
      <Gate
        state="checking"
        className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 opacity-15 md:h-56 md:w-56"
      />

      <div className="relative max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24 text-center">
        <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">
          Live integration, real transaction
        </p>

        <h1 className="mx-auto mt-4 max-w-[820px] text-[30px] md:text-[42px] font-bold leading-[1.15] tracking-tight text-ink">
          A customer asks an AI agent for a refund. Parmana decides if it is
          authorized.
        </h1>

        <p className="mx-auto mt-6 max-w-[680px] text-lg leading-[1.5] text-ink/70">
          This page walks through a working integration between a Phinite AI
          agent and Parmana: the agent understands a refund request, Parmana
          evaluates and authorizes the transaction, and only an authorized
          path executes it against Paytm.
        </p>
      </div>
    </section>
  );
}
