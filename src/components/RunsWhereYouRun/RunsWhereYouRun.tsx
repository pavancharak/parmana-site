import styles from './RunsWhereYouRun.module.css';

const items = [
  {
    title: 'Model agnostic.',
    body: 'Parmana sits between your AI and your systems. It does not care which model, which vendor, or which framework proposes the action. Swap the AI; the rules and the records stay.',
  },
  {
    title: 'Cloud, hybrid, on premises.',
    body: 'Deploy in your cloud, across a hybrid estate, or fully inside your own perimeter. Regulated institutions run sensitive workloads on their own ground; Parmana is built to run there with them.',
  },
  {
    title: 'Your keys, your data.',
    body: 'Policies, credentials, and records live in your environment. Nothing requires trusting our infrastructure, which is the point of a system whose records verify independently.',
  },
];

export default function RunsWhereYouRun() {
  return (
    <section className={styles.section} aria-label="Runs where you run">
      <div className="container">
        <p className="kicker">YOUR ENVIRONMENT, YOUR TERMS</p>
        <h2 className={styles.headline}>Any AI vendor. Any deployment model.</h2>

        <div className={styles.grid}>
          {items.map((item) => (
            <div className={styles.item} key={item.title}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
