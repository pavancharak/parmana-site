import { nav } from "@/lib/config";

export default function DemoTeaser() {
  return (
    <section className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-10 md:py-12">
        <div className="rounded-md border border-purple/30 bg-lavender px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep">See it working</p>
            <h2 className="mt-2 text-lg md:text-xl font-bold text-ink">Watch an agent propose a refund and Parmana check it against the rule.</h2>
            <p className="mt-2 text-sm leading-[1.6] text-ink/70 max-w-[560px]">See the request, the rule check and the proof it produces, end to end.</p>
          </div>
          <a href={nav.demo} className="inline-flex items-center justify-center rounded-md bg-purple px-8 py-3 text-base font-semibold text-white min-h-[44px] shrink-0">See the demo</a>
        </div>
      </div>
    </section>
  );
}
