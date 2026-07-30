import Hero from '../components/Hero/Hero';
import RotatingWord from '../components/RotatingWord/RotatingWord';
import PullQuote from '../components/PullQuote/PullQuote';
import CheckpointDiagram from '../components/CheckpointDiagram/CheckpointDiagram';
import FeatureGrid from '../components/FeatureGrid/FeatureGrid';
import ValueGrid from '../components/ValueGrid/ValueGrid';
import Verticals from '../components/Verticals/Verticals';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <Hero />

      <RotatingWord />

      <PullQuote label="Category">
        From probabilistic guardrails to explicit, pre-authorized rules.
      </PullQuote>

      <section className={`section ${styles.banner}`} aria-label="Full intelligence, full authority">
        <div className="container">
          <p className={styles.bannerText}>
            AI gets full use of its intelligence. Humans keep full authority over the decision, set
            through policy and rules.
          </p>
        </div>
      </section>

      <section
        id="how-parmana-fits"
        className={`section ${styles.fits}`}
        aria-label="How Parmana fits"
      >
        <div className="container">
          <h2 className={styles.fitsHeading}>How Parmana fits</h2>

          <div className={styles.fitsLayout}>
            <p className={styles.fitsCopy}>
              Parmana makes sure AI only does what your business allows. It sits between AI and the
              systems AI interacts with. It checks every action before it happens. If the action
              follows your rules, it proceeds. If not, it stops.
            </p>

            <CheckpointDiagram />

            <p className={styles.fitsCopy}>
              AI is never given a direct path to act on business systems. Every proposed action
              passes through Parmana&rsquo;s check first. Nothing on the other side of that boundary
              can act without clearing the checkpoint first.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid />

      <PullQuote
        label="No unauthorized access"
        supporting="As AI enters the agentic era — acting, not just answering — Parmana makes sure that access never happens without authorization. Not because the AI behaves. Because it never had the access to misuse."
      >
        No unauthorized access to your business systems in the agentic era.
      </PullQuote>

      <ValueGrid />

      <Verticals />

      <FAQ />

      <section className={`section ${styles.disappear}`} aria-label="Built to disappear">
        <div className="container">
          <p className={styles.disappearText}>
            The best infrastructure isn&rsquo;t something users notice. It quietly makes every AI
            action more reliable.
          </p>
        </div>
      </section>

      <CTA
        heading="AI is ready to operate. Make sure it operates within your rules."
        label="Write to us"
        supporting="If you're deploying AI agents and want them switched on rather than stuck in pilot, write to us: founder@parmanasystems.com"
      />
    </>
  );
}
