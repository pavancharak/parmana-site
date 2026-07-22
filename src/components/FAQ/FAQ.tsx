import styles from './FAQ.module.css';

const ITEMS = [
  {
    question: 'How is this different from an AI safety filter or prompt-level guardrail?',
    answer:
      "A safety filter asks a model to judge another model's output. Parmana doesn't use a model in the decision path at all. Authorization comes from rules your organization wrote, evaluated deterministically, so there's no second AI to manipulate or talk around.",
  },
  {
    question: 'Does this slow down AI execution?',
    answer:
      'No. Decisions are benchmarked at sub-2ms mean latency under in-memory storage. The agent gets an answer fast enough that nothing waits on Parmana.',
  },
  {
    question: 'What happens if the AI itself is compromised or jailbroken?',
    answer:
      "It still can't act outside the rules. The AI never holds execution credentials, so even a hacked AI has nothing to exercise directly, and every action is still checked against policy before anything runs.",
  },
  {
    question: 'Who writes the rules?',
    answer:
      'Your organization does, not the vendor and not the model. Policy is data your team defines and controls, evaluated the same way every time.',
  },
  {
    question: 'What proof exists that this works today, not just on a roadmap?',
    answer:
      "It's TRL 7: demonstrated in a live operational environment, not a lab demo. A real Razorpay refund has settled end to end through Parmana, verified via a signed webhook.",
  },
  {
    question: 'When Parmana blocks an action, does a human have to step in?',
    answer:
      'Not for the block itself. Humans write policy once, and nothing waits on a person after that. Parmana allows or blocks before execution, every time, rather than flagging it for someone to review afterward.',
  },
];

export default function FAQ() {
  return (
    <section className={`section ${styles.section}`} aria-label="Frequently asked questions">
      <div className="container">
        <span className="eyebrow">Questions</span>
        <h2 className={styles.heading}>Straight answers.</h2>
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
