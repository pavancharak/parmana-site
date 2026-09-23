import type { Metadata } from "next";
import CalEmbed from "@/components/CalEmbed";
import { calLink, founderEmail } from "@/lib/config";

export const metadata: Metadata = {
  title: "Schedule a conversation | Parmana",
  description: "Book a 30 minute conversation about authorization for your agents.",
  alternates: { canonical: "https://parmanasystems.com/book" },
};

export default function BookPage() {
  return (
    <main className="bg-gradient-to-b from-lavender to-paper">
      <div className="max-w-container mx-auto px-4 md:px-6 pt-16 pb-20 md:pt-20">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">30 minutes</p>
          <h1 className="mt-4 text-[34px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
            Schedule a conversation
          </h1>
          <p className="mx-auto mt-4 max-w-[560px] text-lg text-ink/70">
            Bring one agent and the authority you want it to stay within. Pick a time that works for you.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border border-border bg-white p-2 md:p-4 shadow-[0_30px_60px_-30px_rgb(67_56_202/0.25)]">
          <CalEmbed />
        </div>
        <p className="mt-6 text-center text-sm text-ink/60">
          Calendar not loading?{" "}
          <a href={`https://cal.com/${calLink}`} className="text-purple-deep underline underline-offset-2">
            Open it on Cal.com
          </a>{" "}
          or email{" "}
          <a href={`mailto:${founderEmail}`} className="text-purple-deep underline underline-offset-2">
            {founderEmail}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
