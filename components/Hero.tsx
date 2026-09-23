import { messaging, nav } from "@/lib/config";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

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

      <div className="relative max-w-container mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-44 lg:pt-40 lg:pb-52 text-center animate-[fade-in-up_0.7s_ease-out_both]">
        <p className="inline-flex items-center gap-2 rounded-full border border-purple/30 bg-white/70 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-purple-deep backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-purple" />
          Authorization infrastructure for agentic systems
        </p>
        <h1 className="mt-8 text-[44px] sm:text-[60px] lg:text-[84px] font-bold leading-[1.02] tracking-[-0.035em] text-ink">
          You authorize.
          <br />
          <span className="bg-gradient-to-r from-purple-deep to-purple bg-clip-text text-transparent">
            We ensure.
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-[640px] text-lg md:text-xl leading-[1.6] text-ink/70">
          {messaging.subhead}
        </p>
        <div className="mt-11 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={nav.howItWorks}
            className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-purple px-7 py-3 text-base font-semibold text-white min-h-[44px] shadow-[0_8px_24px_-8px_rgb(99_102_241/0.6)] transition hover:bg-purple-deep"
          >
            See how it works
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={nav.demo}
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-purple-deep border border-purple/40 min-h-[44px] transition hover:border-purple"
          >
            See a demo
          </a>
        </div>
      </div>
    </section>
  );
}
