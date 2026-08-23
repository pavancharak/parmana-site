import Diagram from "@/components/Diagram";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-bg-light to-white">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] text-text-primary">
            AI can take action. Make sure every action is one your business
            allows.
          </h1>
          <p className="mt-6 text-base leading-[1.6] text-text-secondary max-w-[560px]">
            As AI begins running your business systems, Parmana checks every
            action before it happens so you stay in control.
          </p>
          <a
            href="#value-prop"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-bold text-white hover:bg-primary-dark transition-colors min-h-[48px]"
          >
            Explore Parmana
          </a>
        </div>

        <div>
          <Diagram compact />
        </div>
      </div>
    </section>
  );
}
