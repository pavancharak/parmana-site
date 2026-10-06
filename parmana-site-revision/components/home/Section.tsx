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
    <section
      id={id}
      className={`scroll-mt-20 py-20 md:py-28 ${
        tone === "lavender" ? "bg-lavender/60" : "bg-paper"
      }`}
    >
      <div className="max-w-container mx-auto px-6">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">
      {children}
    </p>
  );
}

export function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-4 max-w-[760px] text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-ink md:text-[44px]">
      {children}
    </h2>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 max-w-[640px] text-lg leading-[1.6] text-ink/70">
      {children}
    </p>
  );
}

export const card =
  "rounded-2xl border border-border bg-paper shadow-[0_1px_2px_rgba(26,26,26,0.04),0_8px_24px_-12px_rgba(67,56,202,0.18)]";
