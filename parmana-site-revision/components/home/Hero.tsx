import { messaging, nav, scheduleUrl } from "@/lib/config";

function ProductVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-[520px]"
      aria-label="Autonomous refund request checked against business authority"
    >
      <div className="relative z-10 rounded-2xl border border-border bg-paper p-6 shadow-[0_1px_2px_rgba(26,26,26,0.04),0_16px_40px_-16px_rgba(67,56,202,0.22)]">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
            Autonomous action
          </p>
          <span className="rounded-full bg-lavender px-2.5 py-1 font-mono text-[11px] text-purple-deep">
            REFUND ₹75,000
          </span>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto] gap-3 text-sm">
          <span className="text-ink/50">Business authority</span>
          <span className="font-semibold text-ink">₹50,000 limit</span>
          <span className="text-ink/50">Approval</span>
          <span className="font-semibold text-ink">Required</span>
        </div>
      </div>

      <div className="relative z-20 -mt-3 ml-8 mr-[-8px] rounded-2xl border border-purple/30 bg-paper p-6 shadow-[0_1px_2px_rgba(26,26,26,0.04),0_28px_56px_-20px_rgba(67,56,202,0.34)] sm:ml-14">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-white" aria-hidden>
            ×
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">Stopped before execution</p>
            <p className="text-xs text-ink/50">Outside declared business authority</p>
          </div>
        </div>
        <p className="mt-4 text-sm font-medium text-ink/70">
          The autonomous system can request the action. It cannot exceed the authority you gave it.
        </p>
      </div>

      <div className="relative z-10 -mt-3 mr-8 rounded-2xl bg-ink p-6 text-white sm:mr-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
          Independent evidence
        </p>
        <p className="mt-3 font-mono text-sm text-white/85">
          AUTHORIZED → EXECUTED → PROVABLE
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-paper via-lavender to-paper" />
      <div
        aria-hidden
        className="absolute -top-48 right-[-10%] -z-10 h-[560px] w-[760px] rotate-[-12deg] rounded-[48px] bg-gradient-to-br from-purple/20 via-purple-deep/10 to-transparent blur-2xl"
      />

      <div className="max-w-container mx-auto grid items-center gap-14 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.05fr_1fr] lg:pb-28">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-purple-deep">
            Authority infrastructure for autonomous systems
          </p>

          <h1 className="mt-5 text-[46px] font-bold leading-[1.02] tracking-[-0.04em] text-ink sm:text-[64px] lg:text-[76px]">
            Make your business ready for autonomy.
          </h1>

          <p className="mt-6 max-w-[570px] text-lg leading-[1.55] text-ink/70 md:text-xl">
            {messaging.subhead}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={scheduleUrl}
              data-track="cta_schedule_hero"
              className="inline-flex min-h-[48px] items-center rounded-full bg-purple px-6 py-3 text-base font-semibold text-white shadow-md shadow-purple/25 transition-colors hover:bg-purple-deep"
            >
              Request a demo →
            </a>
            <a
              href={nav.demo}
              data-track="cta_demo_hero"
              className="inline-flex min-h-[48px] items-center rounded-full border border-ink/15 bg-paper/70 px-6 py-3 text-base font-semibold text-ink transition-colors hover:border-purple/30 hover:bg-lavender"
            >
              See it work →
            </a>
          </div>

          <p className="mt-7 text-sm font-medium text-ink/50">{messaging.heroLine}</p>
        </div>

        <ProductVisual />
      </div>
    </section>
  );
}
