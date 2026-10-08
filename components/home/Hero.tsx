import { messaging, nav, scheduleUrl } from "@/lib/config";
import { Arrow, primaryButton, secondaryButton } from "./Section";

function Connector() {
  return (
    <div aria-hidden className="flex justify-center py-1.5">
      <svg viewBox="0 0 12 28" className="h-7 w-3 text-purple/50" fill="none">
        <path d="M6 0v24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M2 21l4 5 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`font-mono text-[11px] uppercase tracking-[0.16em] ${light ? "text-white/60" : "text-ink/50"}`}>
      {children}
    </p>
  );
}

function FlowVisual() {
  return (
    <figure className="relative mx-auto w-full max-w-[440px]">
      <figcaption className="sr-only">
        People set a ₹50,000 refund limit. An autonomous system requests a ₹75,000 refund.
        Parmana stops it before the payment system can execute it and records what happened.
      </figcaption>

      <div aria-hidden>
        <div className="rounded-2xl border border-border bg-paper p-5 shadow-[0_1px_2px_rgba(26,26,26,0.04),0_12px_32px_-12px_rgba(67,56,202,0.25)]">
          <Label>People set</Label>
          <div className="mt-3 flex items-baseline justify-between gap-4">
            <p className="text-lg font-semibold text-ink">Refund limit</p>
            <p className="font-mono text-2xl font-semibold text-ink">₹50,000</p>
          </div>
          <p className="mt-1 text-sm text-ink/60">
            The autonomous system may request refunds within this limit.
          </p>
        </div>

        <Connector />

        <div className="rounded-2xl border border-border bg-paper p-5 shadow-[0_1px_2px_rgba(26,26,26,0.04),0_12px_32px_-12px_rgba(67,56,202,0.18)]">
          <Label>Autonomous request</Label>
          <div className="mt-3 flex items-baseline justify-between gap-4">
            <p className="text-lg font-semibold text-ink">Refund</p>
            <p className="font-mono text-2xl font-semibold text-ink">₹75,000</p>
          </div>
        </div>

        <Connector />

        <div className="rounded-2xl bg-ink p-5 text-white shadow-[0_24px_48px_-16px_rgba(26,26,26,0.45)]">
          <div className="flex items-center justify-between">
            <Label light>Parmana</Label>
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[11px] text-white/70">
              checked before execution
            </span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-white/80">
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <p className="text-2xl font-bold tracking-tight">STOPPED</p>
              <p className="text-sm text-white/70">The request is outside the limit.</p>
            </div>
          </div>
        </div>

        <Connector />

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-border bg-paper p-4">
            <Label>Existing system</Label>
            <p className="mt-2 text-base font-semibold text-ink">No execution</p>
          </div>
          <div className="rounded-2xl border border-purple/30 bg-lavender p-4">
            <Label>What remains</Label>
            <p className="mt-2 text-base font-semibold text-purple-deep">A record of the decision</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-paper via-lavender to-paper" />
      <div aria-hidden className="absolute -top-48 right-[-10%] -z-10 h-[560px] w-[760px] rotate-[-12deg] rounded-[48px] bg-gradient-to-br from-purple/25 via-purple-deep/10 to-transparent blur-2xl" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />

      <div className="max-w-container mx-auto grid items-center gap-16 px-6 pb-24 pt-16 md:pt-24 lg:grid-cols-[1.15fr_1fr] lg:pb-32">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-purple/20 bg-paper/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-purple-deep">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-purple" />
            {messaging.eyebrow}
          </p>

          <h1 className="mt-6 text-[46px] font-bold leading-[1.02] tracking-[-0.035em] text-ink sm:text-[64px] lg:text-[80px]">
            {messaging.hero}
          </h1>

          <p className="mt-7 max-w-[580px] text-lg leading-[1.6] text-ink/70 md:text-xl">
            {messaging.subhead}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={scheduleUrl} data-track="cta_demo_hero" className={primaryButton}>
              Request a demo <Arrow />
            </a>
            <a href={nav.demo} data-track="cta_see_it_work_hero" className={secondaryButton}>
              See it work <Arrow />
            </a>
          </div>

          <p className="mt-10 max-w-[620px] text-base font-semibold leading-relaxed text-ink/60">
            {messaging.heroLine}
          </p>
        </div>

        <FlowVisual />
      </div>
    </section>
  );
}
