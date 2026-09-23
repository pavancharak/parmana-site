import type { Metadata } from "next";
import Gate from "@/components/Gate";
import LetterToolbar from "@/components/LetterToolbar";
import { letterDate, recipientFrom, sections, signature } from "@/lib/investorLetter";

// Unlisted: shared by link only. Not in nav, noindex (plus X-Robots-Tag in next.config.mjs).
export const metadata: Metadata = {
  title: "A letter to investors | Parmana",
  description: "Parmana Series A letter.",
  robots: { index: false, follow: false },
};

// Personalize with /letter?to=Name
export default function LetterPage({ searchParams }: { searchParams: { to?: string | string[] } }) {
  const recipient = recipientFrom(searchParams.to);
  const query = recipient === recipientFrom(undefined) ? "" : `?to=${encodeURIComponent(recipient)}`;

  return (
    <main className="bg-lavender/60 print:bg-white">
      <div className="max-w-[800px] mx-auto px-4 md:px-0 py-10 md:py-16 print:p-0">
        <LetterToolbar query={query} />

        <article className="mt-6 rounded-sm border border-border bg-white px-6 py-10 md:px-[60px] md:py-20 shadow-[0_30px_60px_-30px_rgb(67_56_202/0.2)] print:mt-0 print:border-0 print:shadow-none print:px-0 print:py-0">
          <header className="flex items-start justify-between gap-6 border-l-2 border-purple pl-4">
            <div className="flex items-center gap-3">
              <Gate state="open" className="h-9 w-9" />
              <div>
                <p className="text-lg font-bold tracking-tight text-ink">Parmana</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">Authorization infrastructure</p>
              </div>
            </div>
            <p className="pt-1 text-right font-mono text-xs uppercase tracking-[0.14em] text-ink/60">{letterDate}</p>
          </header>

          <p className="mt-12 text-[17px] text-ink">Dear {recipient},</p>

          <div className="text-[16px] md:text-[17px] leading-[1.8] text-ink/85">
            {sections.map((s, i) => (
              <section key={i} className={s.heading ? "mt-10 border-t border-border pt-8" : "mt-6"}>
                {s.heading && (
                  <h2 className="mb-5 text-xl font-bold tracking-[-0.01em] text-ink break-after-avoid">{s.heading}</h2>
                )}
                <div className="space-y-6">
                  {s.blocks.map((b, j) =>
                    b.kind === "p" ? (
                      <p key={j}>{b.text}</p>
                    ) : (
                      <p key={j}>
                        <span className="font-semibold text-purple-deep">{b.label}.</span> {b.text}
                      </p>
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>

          <footer className="mt-12 break-inside-avoid">
            <p className="text-[17px] italic text-ink/80">{signature.closing}</p>
            <div className="mt-8 border-l-2 border-purple pl-4">
              <p className="text-lg font-semibold text-ink">{signature.name}</p>
              <p className="text-sm text-ink/70">
                {signature.title}, {signature.company}
              </p>
              <p className="mt-2 font-mono text-xs text-ink/60">
                <a href={`mailto:${signature.email}`} className="hover:text-purple-deep">{signature.email}</a>
                {" · "}
                <a href={`tel:${signature.phone.replace(/ /g, "")}`} className="hover:text-purple-deep">{signature.phone}</a>
              </p>
            </div>
          </footer>
        </article>

        <p className="mt-6 text-center text-xs text-ink/50 print:hidden">
          Standalone version: <a href={`/letter/standalone${query}`} className="underline underline-offset-2 hover:text-purple-deep">open as a single HTML file</a>
        </p>
      </div>
    </main>
  );
}
