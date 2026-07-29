import styles from './FAQ.module.css';

const ITEMS = [
  {
    question: "What's your philosophy?",
    answer:
      "Built so confidently that nothing ever needs an emergency stop. A kill switch is something you reach for after you've already accepted an AI might do something wrong, that's damage control, not real confidence. We designed for the harder case up front instead: we assume your AI agent will eventually be attacked, jailbroken, or manipulated, because that's the only honest starting assumption for anything exposed to language, and we built accordingly. The result is a system where the AI never has anything to misuse in the first place. It can be compromised, rogue, jailbroken, and it still can't execute anything outside your rules, because it never held the keys to begin with. There's nothing to kill, because there was never anything unauthorized running.",
  },
  {
    question: 'Why not just rely on audits and compliance reviews?',
    answer:
      "We designed human authority directly into the architecture, not into a review cycle. Human authority sets the rule once, and Parmana enforces it every single time, at the same speed the AI operates, not on whatever schedule the next audit falls on. That's a different foundation than an annual audit or a compliance review, which only ever confirm things were fine until the moment they weren't, or monitoring and observability, which show you what already happened rather than stopping it. A periodic human-in-the-loop check has the same limit: it can't keep pace with a system that acts continuously, at machine speed. Building authority into the system itself is what keeps pace instead.",
  },
  {
    question: "What's the real test of an audit trail?",
    answer:
      "Every record Parmana produces is built to hold up at the moment that actually matters: not when your systems are behaving as expected, but the moment they don't. Most audit trails are only ever exercised on the easy case. Parmana's is built for the hard one, because that's exactly when a record needs to hold up.",
  },
  {
    question: 'Do you have guardrails? How do you avoid general AI attacks?',
    answer:
      "You get real protection whether or not the AI's guardrails hold. Guardrails try to make the AI behave, they filter inputs, restrict outputs, train the model to refuse certain requests. That's a real layer, and it's still probabilistic: a well-crafted attack can find the seam, because a guardrail is a behavior the AI is trying to follow, and behavior can be manipulated. We take a different approach: it doesn't matter if the AI's guardrails hold. The AI can be fully manipulated, ignore every constraint it was ever given, and it still can't execute anything outside your rules, because it never held the credentials to execute anything in the first place. The attack can compromise what the AI decides to do. It can't compromise what the AI is actually allowed to do.",
  },
  {
    question: 'Can Parmana prevent hacking? How does it make my business systems secure?',
    answer:
      "What Parmana actually gives you is precise and real: even if your AI is compromised, jailbroken, prompt-injected, or otherwise manipulated, that compromise can't turn into unauthorized action inside your business systems. It isn't a firewall, antivirus, or intrusion-detection system, and it won't stop someone from breaching your network, exploiting a server vulnerability, or phishing an employee, your existing security stack still handles that. A traditional hack targets your infrastructure directly. Parmana closes a different, newer gap: an AI being used as the way in, with real execution power an attacker could otherwise exploit. Even a fully compromised AI has nothing to misuse, because it was never given credentials to begin with, it can only propose, never execute. Parmana doesn't make your systems immune to hacking. It makes sure that if your AI is ever the way in, there's nothing for it to actually do once it's compromised.",
  },
  {
    question: 'What is zero trust architecture, and how does Parmana use it?',
    answer:
      "Zero trust is what makes it possible to give AI real authority with confidence: nothing is treated as safe by default, not because of where it sits, or what it is, or how it behaved before. Every action is checked, every time, with nothing assumed. Most systems have a trusted zone: once something is inside it, it's generally trusted to keep acting without being re-checked. That works until something inside turns out to be compromised, at which point the whole zone's trust becomes the liability. Parmana doesn't have a trusted zone. The AI isn't trusted by default, no matter how well it's behaved before, every proposed action is checked against the rules fresh. Parmana isn't trusted blindly either, every decision produces a signed, independently verifiable record, so you're never asked to just believe it got it right. And your own business systems aren't assumed safe by default, nothing runs on a prior 'yes' being still good; every authorization is single-use, checked and consumed, never a standing green light. This matters specifically for AI because attacks like jailbreaks and prompt injection work by getting something inside a trusted zone to misbehave, then relying on that trust to carry the action through. Parmana never has a trusted zone for that kind of attack to exploit.",
  },
  {
    question: 'What happens if the AI is compromised or jailbroken?',
    answer:
      "Nothing changes for you, even then. AI security attacks can't execute unauthorized actions in your business systems, because the AI never had the power to execute anything on its own. Even a jailbroken AI can't act outside your rules. It can want anything. It can execute nothing the check doesn't clear. That's not the AI resisting temptation, it never held the credentials needed to act on its own in the first place, so there's nothing for a jailbreak to hijack.",
  },
  {
    question: 'What if a new, more capable AI model comes out, does that change anything?',
    answer:
      "You get to adopt every new model as it arrives, with the same confidence. A smarter AI can think of more things to try, it can't get more permission to do them. Every action starts as a proposal, not a command. Parmana checks it against rules a human set in advance, and that check doesn't get easier to pass because the AI reasoned its way there well. The AI never holds the keys to your systems. It can be brilliant, persuasive, even compromised, and it still has nothing to hand over, because nothing was ever given to it.",
  },
  {
    question: 'Is this an AI governance platform?',
    answer:
      "No, and that difference is the point. Parmana decides whether an action is allowed to happen in the first place, in real time, before anything happens. Governance tools tell you what an AI already did, watching, logging, and reporting after the fact. Real control doesn't depend on the AI behaving, it holds whether the AI is compromised, rogue, or jailbroken or not, which is what a system that only watches can never promise.",
  },
  {
    question: "Why doesn't Parmana let a human step in when it's unsure?",
    answer:
      "The check is fast enough that there's no gap to escalate into. It happens once, right before the action runs, and it's used up the moment it's checked. By the time a human could weigh in, the decision's already been made correctly. Escalation still exists, but only as a narrow, pre-configured exception for specific action types (a dollar threshold, a new kind of action), never a default fallback for uncertainty.",
  },
  {
    question: "Doesn't giving AI a way to escalate make this safer?",
    answer:
      "Real safety comes from closing the gap, not reopening it for convenience. Escalation feels safer, but it isn't free: a general escalation path recreates the timing gap the single-use check closes, shifts enforcement from the system to a person's judgment (inconsistent, susceptible to pressure, and it doesn't scale), and creates false comfort, the sense that someone checked this, even when that check is a rubber stamp. That's why escalation stays a narrow, pre-set exception, not a general fallback for uncertainty.",
  },
  {
    question: 'Does this slow down execution?',
    answer:
      "No, it adds roughly one to two milliseconds, so your AI keeps moving at full speed while staying fully authorized. It's a synchronous step directly in the path before execution, not a queue an action waits in.",
  },
  {
    question: 'What happens if Parmana itself is unavailable or goes down?',
    answer:
      "Nothing runs without authorization, ever, including when Parmana itself is down. An action requires a signed authorization to execute, and none is issued unless the check actually runs and passes. An outage stops execution. It never opens a path around it.",
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
