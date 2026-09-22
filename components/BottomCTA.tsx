import { founderEmail, nav } from "@/lib/config";

export default function BottomCTA() {
  return (
    <section id="contact" className="bg-purple">
      <div className="max-w-container mx-auto px-6 py-16 md:py-20 lg:py-24 text-center">
        <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.2] tracking-tight text-white max-w-[820px] mx-auto">
          Deploy your agent with proof it followed your rule.
        </h2>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-[760px] mx-auto">
          Start with one action, such as a refund, an approval or a settlement. Show us the rule. We will show you the proof.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href={nav.demo} className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-purple-deep min-h-[44px]">See the demo</a>
          <a href={`mailto:${founderEmail}?subject=Request%20a%20pilot`} className="inline-flex items-center justify-center rounded-md border border-white px-8 py-3 text-base font-semibold text-white min-h-[44px]">Talk to us</a>
        </div>
      </div>
    </section>
  );
}
