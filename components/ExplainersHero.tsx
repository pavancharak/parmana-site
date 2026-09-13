import Gate from "@/components/Gate";

export default function ExplainersHero() {
  return (
    <section className="relative overflow-hidden bg-paper border-b border-border">
      <Gate
        state="open"
        className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 opacity-15 md:h-56 md:w-56"
      />

      <div className="relative max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24 text-center">
        <p className="text-xs font-mono uppercase tracking-wide text-purple-deep">
          Explainers
        </p>

        <h1 className="mx-auto mt-4 max-w-[720px] text-[30px] md:text-[42px] font-bold leading-[1.15] tracking-tight text-ink">
          Short videos on the boundary Parmana enforces
        </h1>

        <p className="mx-auto mt-6 max-w-[640px] text-lg leading-[1.5] text-ink/70">
          A few minutes each, no walkthrough required. Looking for the full
          integration instead?{" "}
          <a href="/demo" className="text-purple-deep font-medium hover:underline">
            Watch the live demo.
          </a>
        </p>
      </div>
    </section>
  );
}
