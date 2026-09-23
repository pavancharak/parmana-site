import {
  ClipboardDocumentListIcon,
  PaperAirplaneIcon,
  CheckBadgeIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

const steps = [
  { icon: ClipboardDocumentListIcon, title: "Declared", body: "You define what your agent is allowed to do." },
  { icon: PaperAirplaneIcon, title: "Authorized", body: "Your agent proposes an action. Parmana checks it against what you declared." },
  { icon: CheckBadgeIcon, title: "Executed", body: "Only authorized actions proceed to your system." },
  { icon: DocumentCheckIcon, title: "Proven", body: "Verifiable proof of the entire chain, from authorization to result." },
];

export default function HowItWorks() {
  return (
    <section className="bg-lavender/60 border-y border-border">
      <div className="max-w-container mx-auto px-6 py-20 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep text-center">Every action, four steps</p>
        <h2 className="mt-4 text-[28px] md:text-[40px] font-bold leading-[1.1] tracking-[-0.025em] text-ink text-center">
          Declared. Authorized. Executed. Proven.
        </h2>
        <ol className="relative mt-16 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          <span aria-hidden className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-purple/20 via-purple to-purple/20" />
          <span aria-hidden className="md:hidden absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-purple/20 via-purple to-purple/20" />
          {steps.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="relative flex md:flex-col md:items-center md:text-center gap-5 md:gap-0">
              <span className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border border-purple/40 bg-white text-purple-deep shadow-[0_4px_12px_-4px_rgb(99_102_241/0.4)]">
                <Icon className="h-5 w-5" />
              </span>
              <div className="md:mt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">0{i + 1}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-ink/70 md:max-w-[220px] md:mx-auto">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
