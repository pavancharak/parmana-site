export default function VisionMission() {
  return (
    <section id="vision" className="bg-lavender border-b border-border">
      <div className="max-w-container mx-auto px-6 py-14 md:py-18 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[1000px] mx-auto">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep">
              Our vision
            </p>
            <h2 className="mt-3 text-[26px] md:text-[34px] font-bold leading-[1.15] tracking-tight text-ink">
              A world where businesses can trust autonomous software to act as intended.
            </h2>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-deep">
              Our mission
            </p>
            <h2 className="mt-3 text-[26px] md:text-[34px] font-bold leading-[1.15] tracking-tight text-ink">
              Help organizations turn business decisions into controlled, provable and learnable software actions.
            </h2>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-base md:text-lg font-semibold text-ink">
            Control → Prove → Learn → Improve
          </p>
        </div>
      </div>
    </section>
  );
}
