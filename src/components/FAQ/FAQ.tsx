import styles from './FAQ.module.css';

const ITEMS = [
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
    question: 'Is this an AI governance platform?',
    answer:
      "No. Governance tools tell you what an AI did. Parmana decides whether it's allowed to do it in the first place. Governance watches, logs, and reports after the fact. Parmana is the checkpoint that decides in real time, before anything happens.",
  },
  {
    question: 'Does this slow down execution?',
    answer:
      "No. The authorization check itself completes in roughly one to two milliseconds. It's a synchronous step directly in the path before execution, not a queue an action waits in.",
  },
  {
    question: 'What happens if the AI is compromised or jailbroken?',
    answer:
      "Even a jailbroken AI can't act outside your rules. It can want anything. It can execute nothing the check doesn't clear. That's not the AI resisting temptation, it never held the credentials needed to act on its own in the first place, so there's nothing for a jailbreak to hijack.",
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
