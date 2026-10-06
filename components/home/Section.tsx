import type { ReactNode } from "react";

export function Section({
  id,
  tone = "paper",
  children,
}: {
  id?: string;
  tone?: "paper" | "lavender";
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-24 md:py-32 ${tone === "lavender" ? "bg-lavender/60" : "bg-paper"}`}>
      <div className="max-w-container mx-auto px-6">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">{children}</p>;
}

export function Heading({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <h2
      className={`mt-4 max-w-[820px] text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[52px] ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <p className={`mt-6 max-w-[640px] text-lg leading-[1.6] text-ink/70 md:text-xl ${center ? "mx-auto text-center" : ""}`}>
      {children}
    </p>
  );
}

export function Arrow() {
  return (
    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
      →
    </span>
  );
}

export const card =
  "rounded-2xl border border-border bg-paper shadow-[0_1px_2px_rgba(26,26,26,0.04),0_8px_24px_-12px_rgba(67,56,202,0.18)]";

export const primaryButton =
  "group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-purple px-7 py-3 text-base font-semibold text-white shadow-md shadow-purple/30 transition-colors hover:bg-purple-deep";

export const secondaryButton =
  "group inline-flex min-h-[48px] items-center gap-2 rounded-full border border-purple/30 bg-paper px-7 py-3 text-base font-semibold text-purple-deep transition-colors hover:bg-lavender";
