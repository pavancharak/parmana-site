import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { nav } from "@/lib/config";

const connect = [
  { title: "Your rules", body: "Written as policies you own and version. Parmana reads them." },
  { title: "Your agents", body: "They send each request through Parmana before anything runs." },
  { title: "Your processor or system", body: "It verifies Parmana's signed decision before it runs an action." },
];

const back = [
  "A decision for every request, authorized or blocked",
  "A signed record of what was checked",
  "A trail from request to result",
];

const links = [
  { label: "Read the docs", href: nav.docs, track: "cta_read_docs" },
  { label: "GitHub", href: nav.github, track: "cta_github" },
];

export default function Developers() {
  return (
    <section id="developers" className="scroll-mt-20 bg-ink">
      <div className="max-w-container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-[720px]">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple">For developers</p>
          <h2 className="mt-4 text-[30px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-white">
            Simple to build with
          </h2>
          <p className="mt-5 text-lg leading-[1.65] text-white/70">
            You keep your rules. Parmana checks them. Your systems run only what passed. Parmana sits in front of the
            systems you already use.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">What you connect</p>
            <ul className="mt-6 space-y-6">
              {connect.map((c, i) => (
                <li key={c.title} className="flex gap-4">
                  <span className="font-mono text-xs text-purple pt-1">0{i + 1}</span>
                  <div>
                    <h3 className="text-base font-semibold text-white">{c.title}</h3>
                    <p className="mt-1 text-[15px] leading-[1.6] text-white/60">{c.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 flex flex-col">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">What you get back</p>
            <ul className="mt-6 space-y-4">
              {back.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] leading-[1.6] text-white/80">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-purple" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 flex flex-wrap gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  data-track={l.track}
                  {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-1 rounded-full border border-white/20 px-4 py-2 min-h-[44px] text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  {l.label}
                  {l.href.startsWith("http") && <ArrowUpRightIcon className="h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
