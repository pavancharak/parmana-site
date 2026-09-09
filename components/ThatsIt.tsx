import Gate from "@/components/Gate";

export default function ThatsIt() {
  return (
    <section id="thats-it" className="bg-navy border-b border-divider">
      <div className="max-w-container mx-auto px-6 py-20 md:py-24 lg:py-32 text-center">
        <Gate
          state="open"
          dark
          accent="#6FE3C4"
          className="mx-auto h-10 w-10 md:h-20 md:w-20"
        />

        <h2 className="mt-8 font-serif text-[28px] md:text-[38px] lg:text-[44px] font-semibold leading-[1.2] tracking-tight text-paper max-w-[860px] mx-auto">
          You don&apos;t need to worry if you can prove your policies held.
          Proof before execution. That&apos;s it.
        </h2>

        <p className="mt-6 text-lg md:text-xl text-paper/70 max-w-[640px] mx-auto">
          Not more systems. Not new rules. Not rearchitecture. Just proof that
          your rules work.
        </p>

        <div className="mt-10 space-y-2 text-lg md:text-xl font-medium text-paper">
          <p>Your approval limits already work for AI.</p>
          <p>Your vendor lists already work for AI.</p>
          <p>Your business rules already work for AI.</p>
        </div>

        <p className="mt-6 text-lg md:text-xl font-semibold text-mint">
          We just prove it. Before execution happens. That&apos;s it.
        </p>
      </div>
    </section>
  );
}
