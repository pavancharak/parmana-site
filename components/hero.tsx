export default function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-24 lg:py-32">
          <p className="text-sm font-medium tracking-[0.2em] text-neutral-500">
            HUMAN AUTHORITY INFRASTRUCTURE
          </p>

          <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
            AI Can Act at Machine Speed. Humans Can&apos;t Approve Every
            Action.
          </h1>

          <p className="mt-6 max-w-4xl text-2xl font-medium leading-9 text-neutral-900">
            Parmana enforces human authority at machine speed.
          </p>

          <div className="mt-8 max-w-4xl">
            <p className="text-xl leading-9 text-neutral-700">
              Humans define the rules. AI proposes actions. Parmana decides
              what is authorized to happen—and records the proof.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-medium !text-white transition-colors duration-200 hover:bg-neutral-800"
            >
              Request Access
            </a>

            <a
              href="/architecture"
              className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-300 bg-white px-8 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:border-black hover:bg-neutral-50"
            >
              Explore Architecture
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}