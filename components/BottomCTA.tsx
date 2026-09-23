import { nav, scheduleUrl } from "@/lib/config";

export default function BottomCTA({
  heading = "Ready to ensure every agent action stays within your authority?",
  body = "We're working with builders and enterprises exploring agentic systems. Let's talk about your agents.",
  showDemo = true,
}: {
  heading?: string;
  body?: string;
  showDemo?: boolean;
}) {
  return (
    <section id="contact" className="scroll-mt-20 px-4 md:px-6 pb-20 md:pb-28 bg-paper">
      <div className="relative max-w-container mx-auto overflow-hidden rounded-3xl bg-purple-deep px-6 py-16 md:py-24 text-center">
        <div aria-hidden className="absolute -top-24 -right-16 h-80 w-80 rounded-full bg-purple blur-3xl opacity-70" />
        <div aria-hidden className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-purple blur-3xl opacity-50" />
        <div className="relative">
          <h2 className="text-[28px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-white max-w-[820px] mx-auto">
            {heading}
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={scheduleUrl}
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-purple-deep min-h-[44px] transition hover:bg-lavender"
            >
              Schedule a conversation
            </a>
            {showDemo && (
              <a
                href={nav.demo}
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-3 text-base font-semibold text-white min-h-[44px] transition hover:border-white hover:bg-white/10"
              >
                See a demo
              </a>
            )}
          </div>
          <p className="mt-8 text-base md:text-lg text-white/80 max-w-[620px] mx-auto">{body}</p>
        </div>
      </div>
    </section>
  );
}
