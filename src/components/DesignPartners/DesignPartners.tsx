import styles from './DesignPartners.module.css';

const PILOT_MAILTO = 'mailto:founder@manthan.systems?subject=Pilot%20conversation';

const columns = [
  {
    title: 'What you get.',
    body: "The product shaped around your use case. First-mover permission your competitors don't have. A direct line to the founding team. Founding-partner terms locked before commercial launch.",
  },
  {
    title: 'What we ask.',
    body: 'One real use case currently stuck at the risk gate. One review where your risk team asks its hardest questions. A short working session every two weeks.',
  },
  {
    title: 'What it costs.',
    body: 'Your time. No licence fee for the design partnership. The pilot runs in shadow, so nothing touches production until your team decides it does.',
  },
];

export default function DesignPartners() {
  return (
    <section className={styles.section} id="design-partners" aria-label="Design partner program">
      <div className="container">
        <p className="kicker">OPEN FOR PILOTS</p>
        <h2 className={styles.headline}>Pilot slots are open. We are selecting a small number of institutions.</h2>
        <p className={styles.body}>
          Design partners in Indian financial services get first access: your policies, your systems, your
          regulatory reality shape what we build. A pilot runs six to eight weeks, in shadow, ending with your risk
          team holding independently verifiable records of every action the agent proposed, approved and blocked
          alike.
        </p>

        <div className={styles.grid}>
          {columns.map((column) => (
            <div className={styles.column} key={column.title}>
              <h3 className={styles.columnTitle}>{column.title}</h3>
              <p className={styles.columnBody}>{column.body}</p>
            </div>
          ))}
        </div>

        <a className={`button button--primary ${styles.cta}`} href={PILOT_MAILTO}>
          Start the conversation
        </a>
        <p className={styles.email}>founder@manthan.systems</p>
      </div>
    </section>
  );
}
