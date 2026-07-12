import styles from './Hero.module.css';

const PILOT_MAILTO = 'mailto:founder@manthan.systems?subject=Pilot%20conversation';

export default function Hero() {
  return (
    <section className={styles.hero} id="top" aria-label="Introduction">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.watermark} aria-hidden="true">
        प्र
      </div>
      <div className={styles.inner}>
        <p className={styles.badge}>
          NOW OPEN FOR PILOTS <span aria-hidden="true">·</span> INDIAN FINANCIAL SERVICES
        </p>
        <p className={`kicker kicker--on-ink ${styles.kicker}`}>THE AUTHORIZATION LAYER FOR AI EXECUTION</p>
        <h1 className={styles.headline}>
          <span className={styles.headlineLine}>Companies bought AI they're afraid to switch on.</span>
          <span className={`${styles.headlineLine} ${styles.headlineAccent}`}>We make it safe to switch on.</span>
        </h1>
        <p className={styles.subhead}>
          Parmana sits between your AI and your systems. The AI asks. Parmana approves or declines against rules you
          wrote, in an instant. The record can't be faked.
        </p>
        <div className={styles.actions}>
          <a className="button button--primary" href={PILOT_MAILTO}>
            Start a pilot
          </a>
          <a className={styles.secondaryLink} href="#how-it-works">
            See how a decision flows
          </a>
        </div>
        <p className={styles.reassurance}>
          Shadow pilots. Six to eight weeks. Nothing touches production until your team decides it does.
        </p>
        <p className={styles.trustStrip}>
          Built for regulated financial services <span aria-hidden="true">·</span> RBI, IRDAI, SEBI environments{' '}
          <span aria-hidden="true">·</span> India first
        </p>
      </div>
    </section>
  );
}
