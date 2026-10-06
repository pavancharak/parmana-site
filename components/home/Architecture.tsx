import { Eyebrow, Heading, Lead, Section } from "./Section";

function Node({ label, sub, tone = "plain" }: { label: string; sub: string; tone?: "plain" | "accent" | "dark" }) {
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
        <Eyebrow>Architecture</Eyebrow>
        <Heading center>Your systems stay. Your authority stays.</Heading>
        <Lead center>
          Parmana does not replace your business systems, your identity provider or your AI models. It adds the authority
          check between an autonomous request and consequential execution.
        </Lead>
      </div>

      <div
        role="img"
        aria-label="An autonomous system sends a request to Parmana. Parmana checks it against business authority. Allowed requests proceed to the existing system; requests outside authority stop. Every decision produces independent proof."
        className="mx-auto mt-16 grid max-w-[1100px] items-stretch gap-2 lg:grid-cols-[1fr_auto_1fr_auto_1.15fr_auto_1fr]"
      >
        <Node label="Autonomous system" sub="Requests an action" />
        <Step />
        <Node label="Parmana" sub="Checks business authority" tone="dark" />
        <Step />
        <div className="grid gap-2">
          <div className="flex items-center gap-3 rounded-2xl border border-purple/30 bg-lavender px-5 py-3">
            <span className="rounded-full bg-purple px-2.5 py-0.5 font-mono text-[11px] font-semibold text-white">ALLOW</span>
            <span className="text-sm text-ink/70">Within authority</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-paper px-5 py-3">
            <span className="rounded-full border border-ink/70 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-ink">STOP</span>
            <span className="text-sm text-ink/70">Never reaches the system</span>
          </div>
        </div>
        <Step />
        <Node label="Existing system" sub="Runs only what was allowed" />
      </div>

      <div className="mx-auto mt-6 max-w-[1100px] rounded-2xl border border-dashed border-purple/40 px-6 py-4 text-center text-sm text-ink/70">
        <span className="font-semibold text-purple-deep">Independent proof</span> of every decision, allowed or stopped,
        verifiable without Parmana.
      </div>
    </Section>
  );
}
