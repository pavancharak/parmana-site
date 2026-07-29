import PullQuote from '../PullQuote/PullQuote';
import styles from './CompanyIntro.module.css';

export default function CompanyIntro() {
  return (
    <section className={`section ${styles.section}`} aria-label="Company">
      <div className="container">
        <span className="eyebrow">Company</span>

        <h1 className={styles.heading}>
          AI can operate at machine speed. Human authority should too.
        </h1>

        <PullQuote>
          We want to make the world safer from unauthorized execution by
          autonomous systems.
        </PullQuote>

        <div className={styles.body}>
          <p>
            AI systems are increasingly making and executing decisions across
            critical business operations. That's an enormous opportunity,
            and we built Parmana to make sure organizations can take it fully:
            not by slowing AI down, but by making sure every action it takes
            remains exactly within the authority your organization defines.
          </p>

          <p>
            Parmana verifies every AI action before execution. If an action is
            authorized, it proceeds, immediately. If it isn't, it stops.
            Every decision produces cryptographic proof, so organizations can
            hand AI real work with confidence that authority stays under
            human control, regardless of how AI behaves. That's the world we
            want to build: one where autonomous systems can be trusted with
            real authority, because unauthorized execution was designed out
            from the start.
          </p>
        </div>
      </div>
    </section>
  );
}