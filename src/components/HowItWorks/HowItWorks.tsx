import styles from './HowItWorks.module.css';

const steps = [
  {
    label: 'AI PROPOSES',
    title: 'AI proposes.',
    body: 'Your agent requests an action: pay this vendor, settle this claim, raise this order.',
  },
  {
    label: 'PARMANA AUTHORIZES',
    title: 'Parmana authorizes.',
    body: 'The request is checked against your policy. Allowed actions receive a signed, single-use, time-limited authorization. Everything else is blocked. Instantly, automatically, every time.',
  },
  {
    label: 'YOUR SYSTEMS EXECUTE',
    title: 'Your systems execute.',
    body: 'The action runs through a gateway that independently re-verifies the authorization before anything touches your systems. The AI never holds your credentials.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works" aria-label="How it works">
      <div className="container">
        <p className="kicker kicker--on-ink">HOW IT WORKS</p>
        <h2 className={styles.headline}>It works the way card authorization works.</h2>
        <p className={styles.body}>
          When you tap your card, the shop doesn't decide whether you can pay. A network checks the rules and
          approves or declines in an instant, and the transaction leaves a record no one can fake. Parmana is that
          layer for AI.
        </p>

        <ol className={styles.flow}>
          {steps.map((step, index) => (
            <li className={styles.step} key={step.label}>
              <span className={styles.node} aria-hidden="true" />
              <p className={styles.stepLabel}>
                <span className={styles.stepNum}>0{index + 1}</span> {step.label}
              </p>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>

        <p className={styles.closing}>
          This is not monitoring, which tells you what went wrong afterward. It is the layer that determines what can
          happen at all.
        </p>
      </div>
    </section>
  );
}
