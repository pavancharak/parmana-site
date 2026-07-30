import styles from './ValueGrid.module.css';

const DIRECT = [
  {
    title: 'Speed without new risk',
    body: 'AI moves into production because every action is checked before it happens, not caught after.',
  },
  {
    title: 'Consistency',
    body: 'The same rules apply no matter which AI, which model, or which team is behind the request.',
  },
  {
    title: 'Accountability',
    body: 'A clear record of why each action happened, ready whenever someone needs to ask.',
  },
  {
    title: 'Faster AI rollout',
    body: 'The control question is already answered, so new AI work doesn’t wait on case-by-case manual review.',
  },
];

const STRATEGIC = [
  {
    title: 'A competitive edge, not just risk reduction',
    body: 'Move faster on customer-facing AI than competitors still relying on manual sign-off.',
  },
  {
    title: 'Regulatory readiness',
    body: 'A built-in checkpoint, not after-the-fact logs or guardrails built into the model itself.',
  },
];

export default function ValueGrid() {
  return (
    <section className={`section ${styles.section}`} aria-label="Value to your organization">
      <div className="container">
        <h2 className={styles.heading}>Value to your organization</h2>

        <div className={styles.columns}>
          <div className={`panel ${styles.column}`}>
            <span className="eyebrow">Direct value</span>
            <ul className={styles.list}>
              {DIRECT.map((item) => (
                <li className={styles.item} key={item.title}>
                  <p className={styles.itemTitle}>{item.title}</p>
                  <p className={styles.itemBody}>{item.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={`panel ${styles.column}`}>
            <span className="eyebrow">Strategic value</span>
            <ul className={styles.list}>
              {STRATEGIC.map((item) => (
                <li className={styles.item} key={item.title}>
                  <p className={styles.itemTitle}>{item.title}</p>
                  <p className={styles.itemBody}>{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
