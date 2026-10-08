import { messaging, nav, scheduleUrl } from "@/lib/config";
import { Arrow, primaryButton, secondaryButton } from "./Section";

function HeroVideo() {
  return (
    <figure className="relative mx-auto w-full max-w-[640px]">
      <div className="overflow-hidden rounded-3xl border border-border bg-ink shadow-[0_24px_64px_-20px_rgba(26,26,26,0.35)]">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/_PozOr33sxI"
            title="Parmana product video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <figcaption className="mt-4 text-center text-sm text-ink/50">
        See how Parmana enforces business authority before consequential execution.
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-paper via-lavender to-paper"
      />

      <div
        aria-hidden
        className="absolute -top-48 right-[-10%] -z-10 h-[560px] w-[760px] rotate-[-12deg] rounded-[48px] bg-gradient-to-br from-purple/25 via-purple-deep/10 to-transparent blur-2xl"
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />

      <div className="max-w-container mx-auto grid items-center gap-16 px-6 pb-24 pt-16 md:pt-24 lg:grid-cols-[1.15fr_1fr] lg:pb-32">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-purple/20 bg-paper/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-purple-deep">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-purple"
            />
            {messaging.eyebrow}
          </p>

          <h1 className="mt-6 text-[46px] font-bold leading-[1.02] tracking-[-0.035em] text-ink sm:text-[64px] lg:text-[80px]">
            {messaging.hero}
          </h1>

          <p className="mt-7 max-w-[580px] text-lg leading-[1.6] text-ink/70 md:text-xl">
            {messaging.subhead}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={scheduleUrl}
              data-track="cta_demo_hero"
              className={primaryButton}
            >
              Request a demo <Arrow />
            </a>

            <a
              href={nav.demo}
              data-track="cta_see_it_work_hero"
              className={secondaryButton}
            >
              See it work <Arrow />
            </a>
          </div>

          <p className="mt-10 max-w-[620px] text-base font-semibold leading-relaxed text-ink/60">
            {messaging.heroLine}
          </p>
        </div>

        <HeroVideo />
      </div>
    </section>
  );
}