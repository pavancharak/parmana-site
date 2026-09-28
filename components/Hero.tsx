import { Fragment } from "react";
import { messaging, nav, scheduleUrl } from "@/lib/config";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const flow = [
  { label: "Your AI", title: "Asks", body: "Requests a refund, payout, or approval." },
  {
    label: "Parmana, outside your systems",
    title: "Checks your rules",
    body: "Allows or blocks it, and signs a receipt either way.",
    highlight: true,
  },
  { label: "Your system", title: "Runs what passed", body: "Only acts on a signed yes." },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Soft gradient field, clipped on a slant like a Stripe hero */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0 [clip-path:polygon(0_0,100%_0,100%_78%,0_100%)] bg-gradient-to-br from-lavender via-paper to-lavender"
      >
        <div className="absolute -top-32 -left-24 h-[480px] w-[480px] rounded-full bg-purple/20 blur-3xl" />
        <div className="absolute top-10 right-[-120px] h-[420px] w-[420px] rounded-full bg-purple-deep/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(99_102_241/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(99_102_241/0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative max-w-container mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36 lg:pt-32 lg:pb-40 text-center animate-[fade-in-up_0.7s_ease-out_both]">
        <p className="inline-flex items-center gap-2 rounded-full border border-purple/30 bg-white/70 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-purple-deep backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-purple" />
          Authorization for AI in payments
        </p>
        <h1 className="mx-auto mt-8 max-w-[900px] text-[38px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.035em] text-ink">
          {messaging.hero}
          <span className="mt-2 block text-[26px] sm:text-[34px] lg:text-[42px] leading-[1.15] bg-gradient-to-r from-purple-deep to-purple bg-clip-text text-transparent">
            {messaging.heroLine}
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-lg md:text-xl leading-[1.6] text-ink/70">
          {messaging.subhead}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={nav.howItWorks}
            data-track="cta_see_how_it_works"
            className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-purple px-7 py-3 text-base font-semibold text-white min-h-[44px] shadow-[0_8px_24px_-8px_rgb(99_102_241/0.6)] transition hover:bg-purple-deep"
          >
            See how it works
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={scheduleUrl}
            data-track="cta_schedule_hero"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-purple-deep border border-purple/40 min-h-[44px] transition hover:border-purple"
          >
            Schedule a conversation
          </a>
        </div>

        {/* Simple picture of the product: request, outside check, system */}
        <ol
          aria-label="How a request flows: your AI asks, Parmana checks it against your rules outside your systems, your system runs only what passed"
          className="mx-auto mt-16 grid max-w-[880px] grid-cols-1 md:grid-cols-[1fr_auto_1.2fr_auto_1fr] items-stretch gap-3 text-left"
        >
          {flow.map((f, i) => (
            <Fragment key={f.label}>
              {i > 0 && (
                <li aria-hidden className="flex items-center justify-center text-purple">
                  <ArrowRightIcon className="h-5 w-5 rotate-90 md:rotate-0" />
                </li>
              )}
              <li
                className={`rounded-2xl border p-5 ${
                  f.highlight
                    ? "border-purple/50 bg-white shadow-[0_24px_48px_-24px_rgb(67_56_202/0.45)]"
                    : "border-border bg-white/80 backdrop-blur"
                }`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-purple-deep">{f.label}</p>
                <p className="mt-2 text-[15px] font-semibold text-ink">{f.title}</p>
                <p className="mt-1 text-sm leading-[1.55] text-ink/60">{f.body}</p>
              </li>
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}
