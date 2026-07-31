import styles from './FAQ.module.css';

const ITEMS = [
  {
    question: "What's your philosophy?",
    answer: [
      "We don't believe in a kill switch. A kill switch is something you reach for after you've already accepted that an AI might be doing something wrong. It's damage control, not prevention. We also don't believe your AI agent will stay uncompromised. We assume the opposite: it will be attacked, it will be jailbroken, something will try to manipulate it eventually. That's not pessimism, it's the only honest starting assumption for anything exposed to language.",
      "So instead of building a switch to pull after something goes wrong, we built a system where the AI never has anything to misuse in the first place. It can be compromised, rogue, jailbroken. It still can't execute anything outside your rules, because it never held the keys to begin with. There's nothing to kill, because there was never anything unauthorized running.",
    ],
  },
  {
    question: 'Why no escalation path?',
    answer: [
      "There's no gap to escalate into. The check happens once, right before the action runs, and it's used up the moment it's checked. By the time a human could weigh in, the decision's already been made correctly.",
      'Escalation still exists but only as a deliberate, preconfigured exception for specific action types, for example anything above a dollar threshold. It is never a default fallback for uncertainty.',
    ],
  },
  {
    question: 'What about a more capable or jailbroken AI?',
    answer: [
      "A smarter AI can think of more things to try. It can't get more permission to do them.",
      "Even a jailbroken AI can't act outside your rules. It can want anything. It can execute nothing the check doesn't clear.",
    ],
  },
  {
    question: "What if we're not in a regulated industry?",
    answer: ["The absence of regulation isn't safety. It's a risk no one owns."],
  },
  {
    question: "Don't audits and monitoring already cover this?",
    answer: [
      "We don't believe an annual audit or a compliance review is AI governance. Those work exactly as long as everything is fine and something eventually won't be. We don't believe monitoring and observability is AI governance either. Watching what already happened doesn't stop it from happening. And we don't believe a human in the loop process that checks in periodically can keep pace with a system that acts continuously, at machine speed. So we designed humans into the architecture itself, not into a review cycle.",
    ],
  },
];

export default function FAQ() {
  return (
    <section className={`section ${styles.section}`} aria-label="Philosophy">
      <div className="container">
        <h2 className={styles.heading}>Philosophy</h2>

        <div className={styles.list}>
          {ITEMS.map((item) => (
            <details className={styles.item} key={item.question}>
              <summary className={styles.summary}>{item.question}</summary>
              <div className={styles.answer}>
                {item.answer.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
