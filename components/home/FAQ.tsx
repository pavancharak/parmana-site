import { Eyebrow, Heading, Section } from "./Section";

const questions = [
  {
    q: "What exactly does Parmana do?",
    a: "Parmana checks an action before it reaches the system that can carry it out. It compares the action with the limits set by the people responsible for the institution. Within the limit, it can continue. Outside the limit, it stops.",
  },
  {
    q: "Who decides what the AI is allowed to do?",
    a: "The people responsible for the institution. Parmana does not decide those limits for them.",
  },
  {
    q: "Can the AI change its own limits?",
    a: "No. The AI can request an action, but it cannot create, expand or redefine the limits that apply to it.",
  },
  {
    q: "What happens when the AI asks for something it is not allowed to do?",
    a: "The request is stopped before it reaches the protected system. The record shows what was requested and why it did not continue.",
  },
  {
    q: "Does Parmana replace our existing systems?",
    a: "No. Your payment, CRM, ERP, repository or internal system stays in place. Parmana checks the action before that system carries it out.",
  },
  {
    q: "Does this make AI less autonomous?",
    a: "No. AI can still choose and take actions on its own. The difference is that it cannot decide for itself what it is allowed to do.",
  },
  {
    q: "What can we prove later?",
    a: "You can see what was requested, what limit applied, whether it was allowed or stopped and what happened next.",
  },
  {
    q: "Does Parmana solve every AI or security problem?",
    a: "No. Parmana is focused on a specific problem: making sure autonomous actions stay within the limits people set. It does not replace your existing security controls or fix the AI model itself.",
  },
  {
    q: "How is this different from AI governance or AI security?",
    a: "Governance can say what should happen. Security can protect systems from many threats. Parmana answers a narrower question at the moment of action: is this autonomous system actually allowed to do this?",
  },
];

export default function FAQ() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-[900px]">
        <Eyebrow>Questions readers ask</Eyebrow>
        <Heading>Everything you need to know before giving AI the ability to act.</Heading>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {questions.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold tracking-tight text-ink md:text-xl">
                <span className="flex items-center justify-between gap-6">
                  {item.q}
                  <span aria-hidden className="shrink-0 text-2xl font-normal text-purple-deep transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 max-w-[760px] text-base leading-relaxed text-ink/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
