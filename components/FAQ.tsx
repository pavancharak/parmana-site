import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { nav, scheduleUrl } from "@/lib/config";

// To add a question, append an entry. Keep answers short, plain, and free of dashes.
const faqs = [
  {
    q: "Isn't this what a policy engine does?",
    a: "A policy engine usually runs inside the system it protects. Parmana runs outside it, as its own checkpoint. So a problem inside your system doesn't change what is allowed, and every decision comes with a signed receipt you can check later.",
  },
  {
    q: "What happens if Parmana can't be reached?",
    a: "Nothing that needs a check goes through. Your system only runs an action after it sees a signed yes from Parmana. No signed yes, no action. It fails safe.",
  },
  {
    q: "Do we have to rebuild anything?",
    a: "No. Your rules stay the same and your systems stay the same. You connect Parmana with an SDK, and your system checks for Parmana's signed decision before it runs an action.",
  },
  {
    q: "How do we know the check really happened?",
    a: "Every decision is signed. The receipt shows the request, the rule it was checked against, and the result. Anyone with Parmana's public key can verify it on their own, without taking our word for it.",
  },
  {
    q: "Does Parmana make business decisions?",
    a: "No. You set the rules. AI, people, and apps can ask for actions. Parmana checks each request against your rules and records the result. The decision about what is allowed stays with you.",
  },
  {
    q: "Who is it for?",
    a: "Teams in payments and financial services that let AI request refunds, payouts, approvals, or purchases, and need to show exactly what was allowed and why.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-paper">
      <div className="max-w-container mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep">Questions</p>
          <h2 className="mt-4 text-[30px] md:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            What people ask us first
          </h2>
          <p className="mt-5 text-lg leading-[1.65] text-ink/70">
            Something else on your mind?{" "}
            <a href={scheduleUrl} data-track="cta_schedule_faq" className="font-semibold text-purple-deep underline underline-offset-4 hover:no-underline">
              Ask us directly
            </a>{" "}
            or{" "}
            <a href={nav.docs} target="_blank" rel="noopener noreferrer" className="font-semibold text-purple-deep underline underline-offset-4 hover:no-underline">
              read the docs
            </a>
            .
          </p>
        </div>
        <div className="border-t border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-border">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDownIcon className="h-5 w-5 flex-none text-purple-deep transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-6 pr-8 text-[15px] leading-[1.7] text-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
