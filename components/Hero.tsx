import { founderEmail, messaging, nav } from "@/lib/config";

export default function Hero() {
  return (
    <section className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-20 md:py-28 lg:py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-deep">
          The execution trust layer for agentic commerce
        </p>
        <h1 className="mt-5 text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.02] tracking-tight text-ink max-w-[980px] mx-auto">
          {messaging.hero}
        </h1>
        <p className="mx-auto mt-7 max-w-[800px] text-lg md:text-xl leading-[1.55] text-ink/70">
          {messaging.tagline}
        </p>
        <p className="mx-auto mt-5 max-w-[760px] text-base md:text-lg font-medium text-purple-deep">
          {messaging.corePrinciple}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={nav.demo} className="inline-flex items-center justify-center rounded-md bg-purple px-8 py-3 text-base font-semibold text-white min-h-[44px]">
            See the agentic commerce demo
          </a>
          <a href={`mailto:${founderEmail}?subject=Request%20a%20pilot`} className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-purple-deep border border-purple min-h-[44px]">
            Talk to us
          </a>
        </div>
        <p className="mt-7 text-xs text-ink/50">
          Agent proposes → Parmana checks → Business system executes → Evidence remains
        </p>
      </div>
    </section>
  );
}
