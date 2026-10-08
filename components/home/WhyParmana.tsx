import { messaging } from "@/lib/config";

const notOwners = ["Not the model.", "Not the AI agent.", "Not the app.", "Not the AI vendor."];

export default function WhyParmana() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-white md:py-32">
      <div aria-hidden className="absolute -right-32 -top-40 -z-10 h-[480px] w-[480px] rounded-full bg-purple/30 blur-3xl" />

      <div className="max-w-container mx-auto grid gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/60">Who decides</p>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.08] tracking-[-0.03em] md:text-[56px]">
            People decide what AI is allowed to do.
          </h2>

          <p className="mt-8 max-w-[560px] text-lg leading-[1.6] text-white/70 md:text-xl">
            Parmana does not decide what your institution should allow. It makes the limit enforceable when autonomous AI tries to act.
          </p>
        </div>

        <div>
          <ul className="space-y-3">
            {notOwners.map((n) => (
              <li key={n} className="text-2xl font-semibold tracking-tight text-white/45 md:text-3xl">
                {n}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
            People set the boundary.
          </p>

          <p className="mt-6 text-base text-white/60">{messaging.tagline}</p>
        </div>
      </div>
    </section>
  );
}
