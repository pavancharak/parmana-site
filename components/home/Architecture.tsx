import { Eyebrow, Heading, Lead, Section } from "./Section";

function Node({
  label,
  sub,
  tone = "plain",
}: {
  label: string;
  sub: string;
  tone?: "plain" | "accent" | "dark";
}) {
  const styles = {
    plain: "border border-border bg-paper text-ink",
    accent: "border border-purple/30 bg-lavender text-ink",
    dark: "bg-ink text-white shadow-[0_24px_48px_-20px_rgba(26,26,26,0.5)]",
  }[tone];

  return (
    <div className={`rounded-2xl px-5 py-4 ${styles}`}>
      <p className="text-base font-bold tracking-tight">{label}</p>
      <p className={`mt-0.5 text-sm ${tone === "dark" ? "text-white/60" : "text-ink/60"}`}>{sub}</p>
    </div>
  );
}

function Step() {
  return (
    <div aria-hidden className="flex items-center justify-center text-purple/60 lg:px-1">
      <svg viewBox="0 0 24 24" className="h-5 w-5 rotate-90 lg:rotate-0" fill="none">
        <path d="M4 12h15m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function Architecture() {
  return (
    <Section id="how-it-works">
      <div className="text-center">
        <Eyebrow>How it works</Eyebrow>
        <Heading center>Your systems stay. People keep control.</Heading>
        <Lead center>
          AI asks to take an action. Parmana checks it against the limit people set. Only allowed actions reach the system that can carry them out.
        </Lead>
      </div>

      <div
        role="img"
        aria-label="People set a limit. Autonomous AI requests an action. Parmana checks whether the request is within that limit. Allowed requests reach the existing system. Requests outside the limit stop. A record is kept."
        className="mx-auto mt-16 grid max-w-[1100px] items-stretch gap-2 lg:grid-cols-[1fr_auto_1fr_auto_1.15fr_auto_1fr]"
      >
        <Node label="People" sub="Set what is allowed" tone="accent" />
        <Step />
        <Node label="Autonomous AI" sub="Requests an action" />
        <Step />
        <Node label="Parmana" sub="Checks the limit" tone="dark" />
        <Step />
        <Node label="Existing system" sub="Runs only what was allowed" />
      </div>

      <div className="mx-auto mt-6 max-w-[1100px] grid gap-2 md:grid-cols-2">
        <div className="rounded-2xl border border-purple/30 bg-lavender px-6 py-5 text-sm text-ink/70">
          <span className="font-semibold text-purple-deep">Allowed</span> → the action can continue.
        </div>
        <div className="rounded-2xl border border-border bg-paper px-6 py-5 text-sm text-ink/70">
          <span className="font-semibold text-ink">Outside the limit</span> → the action stops before the protected system.
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-[1100px] rounded-2xl border border-dashed border-purple/40 px-6 py-4 text-center text-sm text-ink/70">
        The record shows what was requested, what limit applied and whether the action continued or stopped.
      </div>
    </Section>
  );
}
