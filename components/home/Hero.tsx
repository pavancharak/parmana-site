import { messaging, nav, scheduleUrl } from "@/lib/config";

function ProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]" aria-label="Example: an agent requests a refund, Parmana checks it, and returns a signed record">
      {/* Request */}
      <div className="relative z-10 rounded-xl border border-border bg-paper p-5 shadow-[0_1px_2px_rgba(26,26,26,0.04),0_12px_32px_-12px_rgba(67,56,202,0.25)]">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">Request from refund agent</p>
          <span className="rounded-full bg-lavender px-2 py-0.5 font-mono text-[11px] text-purple-deep">paytm:refund</span>
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
          <dt className="text-ink/50">Order</dt>
          <dd className="text-right font-mono text-ink">ORD-1042</dd>
          <dt className="text-ink/50">Amount</dt>
          <dd className="text-right font-mono text-ink">₹15,000</dd>
          <dt className="text-ink/50">Manager approval</dt>
          <dd className="text-right font-mono text-ink">signed</dd>
        </dl>
      </div>

      {/* Check */}
      <div className="relative z-20 -mt-2 ml-6 mr-[-8px] rounded-xl border border-purple/30 bg-paper p-5 shadow-[0_1px_2px_rgba(26,26,26,0.04),0_24px_48px_-16px_rgba(67,56,202,0.35)] sm:ml-12">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-purple text-white" aria-hidden>
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
              <path d="M5 10.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">Allowed by your rules</p>
            <p className="text-xs text-ink/50">customer-refund 1.2.0, approved through maker checker</p>
          </div>
        </div>
        <ul className="mt-4 space-y-1.5 text-sm text-ink/70">
          {["Caller authenticated", "Rule: refunds need a signed manager approval", "Approval matches this order and amount", "Single use authorization issued"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-purple" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Record */}
      <div className="relative z-10 -mt-2 mr-6 rounded-xl bg-ink p-5 text-white shadow-[0_24px_48px_-20px_rgba(26,26,26,0.5)] sm:mr-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">Signed record</p>
        <pre className="mt-3 overflow-hidden font-mono text-[12px] leading-relaxed text-white/80">
{`{
  "decision": "APPROVED",
  "policy": "customer-refund@1.2.0",
  "signature": { "algorithm": "ed25519" },
  "verify": "offline, with your public key"
}`}
        </pre>
      </div>
      <p className="sr-only">{messaging.heroLine}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background field: token colors at low opacity, no new hues */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-paper via-lavender to-paper" />
      <div aria-hidden className="absolute -top-48 right-[-10%] -z-10 h-[560px] w-[760px] rotate-[-12deg] rounded-[48px] bg-gradient-to-br from-purple/25 via-purple-deep/10 to-transparent blur-2xl" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />

      <div className="max-w-container mx-auto grid items-center gap-14 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.05fr_1fr] lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-purple/20 bg-paper/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-purple-deep">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-purple" />
            Authority infrastructure for autonomous systems
          </p>
          <h1 className="mt-6 text-[44px] font-bold leading-[1.03] tracking-[-0.035em] text-ink sm:text-[60px] lg:text-[72px]">
            {messaging.hero}
          </h1>
          <p className="mt-6 max-w-[560px] text-lg leading-[1.6] text-ink/70 md:text-xl">{messaging.subhead}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={scheduleUrl}
              data-track="cta_schedule_hero"
              className="group inline-flex min-h-[44px] items-center gap-1 rounded-full bg-purple px-6 py-3 text-base font-semibold text-white shadow-md shadow-purple/30 transition-colors hover:bg-purple-deep"
            >
              Request a demo ?
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">›</span>
            </a>
            <a
              href={nav.demo}
              target="_blank"
              rel="noopener noreferrer"
              data-track="cta_docs_hero"
              className="group inline-flex min-h-[44px] items-center gap-1 rounded-full px-5 py-3 text-base font-semibold text-purple-deep transition-colors hover:bg-lavender"
            >
              See it work ?
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">›</span>
            </a>
          </div>
          <p className="mt-8 text-sm text-ink/50">{messaging.heroLine}</p>
        </div>
        <ProductVisual />
      </div>
    </section>
  );
}

