import { nav, scheduleUrl } from "@/lib/config";

const ctas = [
  { label: "Find out where you stand", note: "5-minute check. A, B, or C?", href: nav.check, track: "cta_find_where_you_stand", primary: true },
  { label: "See how it works", note: "Walkthrough with a demo", href: nav.demo, track: "cta_demo" },
  { label: "Read the docs", note: "Technical details for your team", href: nav.docs, track: "cta_read_docs" },
];

export default function HomeCTA() {
  return (
    <section id="contact" className="scroll-mt-20 px-4 md:px-6 pb-20 md:pb-28 pt-20 md:pt-28 bg-paper">
      <div className="relative max-w-container mx-auto overflow-hidden rounded-3xl bg-purple-deep px-6 py-16 md:py-24 text-center">
        <div aria-hidden className="absolute -top-24 -right-16 h-80 w-80 rounded-full bg-purple blur-3xl opacity-70" />
        <div aria-hidden className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-purple blur-3xl opacity-50" />
        <div className="relative">
          <h2 className="text-[28px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-white max-w-[820px] mx-auto">
            You set rules. Parmana checks them. You get proof.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[960px] mx-auto">
            {ctas.map((c) => (
              <a
                key={c.label}
                href={c.href}
                data-track={c.track}
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`flex flex-col items-center justify-center rounded-2xl px-6 py-6 min-h-[44px] transition ${
                  c.primary
                    ? "bg-white text-purple-deep hover:bg-lavender"
                    : "border border-white/40 text-white hover:border-white hover:bg-white/10"
                }`}
              >
                <span className="text-base font-semibold">{c.label}</span>
                <span className={`mt-1 text-sm ${c.primary ? "text-purple-deep/70" : "text-white/70"}`}>{c.note}</span>
              </a>
            ))}
          </div>
          <p className="mt-10 text-base md:text-lg text-white/80">
            Rather talk it through?{" "}
            <a href={scheduleUrl} data-track="cta_book_audit" className="font-semibold text-white underline underline-offset-4 hover:no-underline">
              Book a 30-minute audit
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
