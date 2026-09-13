import Gate from "@/components/Gate";
import { nav } from "@/lib/config";

export default function DemoTeaser() {
  return (
    <section className="bg-paper border-b border-border">
      <div className="max-w-container mx-auto px-6 py-10 md:py-12">
        <div className="relative overflow-hidden rounded-md border border-purple/30 bg-lavender px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <Gate
            state="checking"
            className="pointer-events-none absolute -right-4 -bottom-4 h-24 w-24 opacity-10"
          />

          <div className="relative text-center md:text-left">
            <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">
              Not a mockup
            </p>
            <h2 className="mt-2 text-lg md:text-xl font-bold text-ink">
              Watch a real refund get authorized, live
            </h2>
            <p className="mt-2 text-sm leading-[1.6] text-ink/70 max-w-[520px]">
              A working integration between a Phinite autonomous agent and
              Parmana, with the full walkthrough and the real authorization
              evidence.
            </p>
            <a
              href={nav.explainers}
              className="mt-2 inline-block text-sm text-purple-deep font-medium hover:underline"
            >
              Or watch the short explainers
            </a>
          </div>

          <a
            href={nav.demo}
            className="relative inline-flex items-center justify-center rounded-md bg-purple px-8 py-3 text-base font-semibold text-white hover:opacity-90 transition-opacity duration-150 min-h-[44px] shrink-0"
          >
            Watch the demo
          </a>
        </div>
      </div>
    </section>
  );
}
