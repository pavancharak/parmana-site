import styles from './FAQ.module.css';

const ITEMS = [
  {
    question: "What's your philosophy?",
    answer:
      "We don't believe in a kill switch. A kill switch is something you reach for after you've already accepted that an AI might be doing something wrong, it's damage control, not prevention. We also don't believe your AI agent will stay uncompromised. We assume the opposite: it will be attacked, it will be jailbroken, something will try to manipulate it eventually. That's not pessimism, it's the only honest starting assumption for anything exposed to language. So instead of building a switch to pull after something goes wrong, we built a system where the AI never has anything to misuse in the first place. It can be compromised, rogue, jailbroken, it still can't execute anything outside your rules, because it never held the keys to begin with. There's nothing to kill, because there was never anything unauthorized running.",
  },
  {
    question: 'Why not just rely on audits and compliance reviews?',
    answer:
      "We don't believe an annual audit or a compliance review is AI governance. Those work exactly as long as everything is fine, and something eventually won't be. We don't believe monitoring and observability is AI governance either, watching what already happened doesn't stop it from happening. And we don't believe a human-in-the-loop process that checks in periodically can keep pace with a system that acts continuously, at machine speed. So we designed humans into the architecture itself, not into a review cycle. Human authority sets the rule once. Parmana enforces it every time, at the same speed the AI operates, not on whatever schedule the next audit falls on.",
  },
  {
    question: "What's the real test of an audit trail?",
    answer:
      "Compliance and auditability have a real test, and it isn't when your systems are behaving as expected. It's the moment they don't. Most audit trails are only ever exercised on the easy case. The one that matters is the hard one, and that's exactly when a record needs to hold up.",
  },
  {
    question: 'Do you have guardrails? How do you avoid general AI attacks?',
    answer:
      "We don't rely on guardrails. Guardrails try to make the AI behave, they filter inputs, restrict outputs, train the model to refuse certain requests. That's a real layer, and it's still probabilistic: a well-crafted attack can find the seam, because a guardrail is a behavior the AI is trying to follow, and behavior can be manipulated. We take a different approach: it doesn't matter if the AI's guardrails hold. The AI can be fully manipulated, ignore every constraint it was ever given, and it still can't execute anything outside your rules, because it never held the credentials to execute anything in the first place. The attack can compromise what the AI decides to do. It can't compromise what the AI is actually allowed to do.",
  },
  {
    question: 'Can Parmana prevent hacking? How does it make my business systems secure?',
    answer:
      "Parmana doesn't prevent hacking in the general sense. It isn't a firewall, antivirus, or intrusion-detection system, and it won't stop someone from breaching your network, exploiting a server vulnerability, or phishing an employee. Your existing security stack still has to do that job. What Parmana actually does is narrower: it makes sure that even if your AI is compromised, jailbroken, prompt-injected, or otherwise manipulated, that compromise can't turn into unauthorized action inside your business systems. A traditional hack targets your infrastructure directly. Parmana closes a different, newer gap: an AI being used as the way in, with real execution power an attacker can exploit. Even a fully compromised AI has nothing to misuse, because it was never given credentials to begin with, it can only propose, never execute. Parmana doesn't make your systems immune to hacking. It makes sure that if your AI is ever the way in, there's nothing for that AI to actually do once it's compromised.",
  },
  {
    question: 'What is zero trust architecture, and how does Parmana use it?',
    answer:
      "Zero trust means nothing is treated as safe by default, not because of where it sits, or what it is, or how it behaved before. Every action is checked, every time, with nothing assumed. Most systems have a trusted zone: once something is inside it, it's generally trusted to keep acting without being re-checked. That works until something inside turns out to be compromised, at which point the whole zone's trust becomes the liability. Parmana doesn't have a trusted zone. The AI isn't trusted by default, no matter how well it's behaved before, every proposed action is checked against the rules fresh. Parmana isn't trusted blindly either, every decision produces a signed, independently verifiable record, so you're never asked to just believe it got it right. And your own business systems aren't assumed safe by default, nothing runs on a prior 'yes' being still good; every authorization is single-use, checked and consumed, never a standing green light. This matters specifically for AI because attacks like jailbreaks and prompt injection work by getting something inside a trusted zone to misbehave, then relying on that trust to carry the action through. If nothing is trusted by default, there's no trusted zone to exploit in the first place.",
  },
  {
    question: 'What happens if the AI is compromised or jailbroken?',
    answer:
      "AI security attacks can't execute unauthorized actions in your business systems, because the AI never had the power to execute anything on its own. Even a jailbroken AI can't act outside your rules. It can want anything. It can execute nothing the check doesn't clear. That's not the AI resisting temptation, it never held the credentials needed to act on its own in the first place, so there's nothing for a jailbreak to hijack.",
  },
  {
    question: 'What if a new, more capable AI model comes out, does that change anything?',
    answer:
      "A smarter AI can think of more things to try. It can't get more permission to do them. Every action starts as a proposal, not a command. Parmana checks it against rules a human set in advance, that check doesn't get easier to pass because the AI reasoned its way there well. The AI never holds the keys to your systems. It can be brilliant, persuasive, even compromised, it still has nothing to hand over, because nothing was ever given to it.",
  },
  {
    question: 'Is this an AI governance platform?',
    answer:
      "No. Governance tools tell you what an AI did. Parmana decides whether it's allowed to do it in the first place. Governance watches, logs, and reports after the fact. Parmana is the checkpoint that decides in real time, before anything happens. If your AI governance succumbs to a compromised, rogue, or jailbroken AI, you don't have AI governance. You had a system that worked as long as the AI behaved. Real control doesn't depend on that.",
  },
  {
    question: "Why doesn't Parmana let a human step in when it's unsure?",
    answer:
      "There's no gap to escalate into. The check happens once, right before the action runs, and it's used up the moment it's checked. By the time a human could weigh in, the decision's already been made correctly. Escalation still exists, but only as a narrow, pre-configured exception for specific action types (a dollar threshold, a new kind of action), never a default fallback for uncertainty.",
  },
  {
    question: "Doesn't giving AI a way to escalate make this safer?",
    answer:
      "Escalation feels safer, but it isn't free. It reopens the exact gap the system was built to close. That's why it stays a narrow, pre-set exception, not a general fallback for uncertainty. A general escalation path recreates the timing gap the single-use check closes, shifts enforcement from the system to a person's judgment (inconsistent, susceptible to pressure, and it doesn't scale), and creates false comfort, the sense that someone checked this, even when that check is a rubber stamp.",
  },
  {
    question: 'Does this slow down execution?',
    answer:
      "No. The authorization check itself completes in roughly one to two milliseconds. It's a synchronous step directly in the path before execution, not a queue an action waits in.",
  },
  {
    question: 'What happens if Parmana itself is unavailable or goes down?',
    answer:
      "Nothing gets authorized while it's down. An action requires a signed authorization to execute, and none is issued unless the check actually runs and passes. An outage stops execution. It never opens a path around it.",
  },
];

export default function FAQ() {
  return (
    <section className={`section ${styles.section}`} aria-label="Frequently asked questions">
      <div className="container">
        <div className={styles.list}>
          {ITEMS.map((item) => (
            <details className={styles.item} key={item.question}>
              <summary className={styles.summary}>{item.question}</summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
