import styles from "./ChallengePage.module.css";
import { GateSvg } from "../components/GateSvg";

const PILLARS = [
  {
    num: "01",
    title: "Identify",
    copy: "Find new ways AI could be used to commit payment fraud.",
  },
  {
    num: "02",
    title: "Generate",
    copy: "Create realistic examples of those attacks at scale.",
  },
  {
    num: "03",
    title: "Defend",
    copy: "Build a system that detects and stops them.",
  },
];

const ATTACK_CATEGORIES = [
  {
    letter: "A",
    name: "AI-generated fraud",
    count: "NEW",
    copy: "Fraud created or adapted by AI to look like normal payment activity.",
  },
  {
    letter: "B",
    name: "Social engineering",
    count: "NEW",
    copy: "AI-assisted messages, calls, identities, and conversations designed to manipulate people.",
  },
  {
    letter: "C",
    name: "Account abuse",
    count: "NEW",
    copy: "Attempts to use stolen, created, or manipulated identities to access payment accounts.",
  },
  {
    letter: "D",
    name: "Payment manipulation",
    count: "NEW",
    copy: "Attempts to change payment details, destinations, amounts, or transaction behaviour.",
  },
  {
    letter: "E",
    name: "Synthetic behaviour",
    count: "NEW",
    copy: "Large-scale artificial activity designed to resemble legitimate customers and transactions.",
  },
];

const RESULTS = [
  {
    metric: "Attack diversity",
    note: "How broadly the system can identify different AI-powered payment fraud scenarios.",
  },
  {
    metric: "Attack realism",
    note: "How closely generated examples resemble real payment behaviour.",
  },
  {
    metric: "Detection",
    note: "How accurately the defence identifies generated attacks while limiting false positives.",
  },
];

const INCLUDED = [
  {
    num: "01",
    title: "Code repository",
    copy: "A complete, runnable repository covering identify, generate, and defend.",
    href: "https://github.com/pavancharak/mastercard-ai-defense-lab",
    label: "View on GitHub",
  },
  {
    num: "02",
    title: "Solution walkthrough",
    copy: "A clear explanation of the attacks identified, how they are generated, how they are detected, and how the system could work in real payments.",
  },
  {
    num: "03",
    title: "Working web prototype",
    copy: "A live demonstration of the complete loop from discovering an attack to generating it and testing the defence.",
    href: "https://mastercard-ai-defense-lab.fly.dev/mandate-demo",
    label: "Open live prototype",
  },
];

const DIFFERENTIATORS = [
  {
    title: "The attack becomes the test.",
    copy: "Instead of building a detector against a fixed list of known fraud patterns, the system creates new attacks and uses them to test the defence.",
  },
  {
    title: "The loop keeps improving.",
    copy: "When the defence finds a gap, that gap becomes another attack to study and simulate.",
  },
  {
    title: "Built for real payments.",
    copy: "The goal is not simply to win on a dataset. The system should make sense in a real payment environment where false positives and missed fraud both matter.",
  },
];

export function ChallengePage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.wordmarkLink}>
            <span className={styles.wordmark}>Parmana</span>
          </a>

          <span className={styles.headerLabel}>
            Mastercard AI Defense Lab
          </span>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.inner}>
            <p className={styles.lede}>
              Building the attack and the defence together.
            </p>

            <div className={styles.copy}>
              <p>
                AI is making payment fraud faster, cheaper, and harder
                to spot. This challenge asks us to look at both sides:
                how new attacks could work, and how we can build a
                defence that catches them.
              </p>

              <p>
                Our approach is a closed loop: identify new attacks,
                generate realistic examples, test the defence, and use
                what the defence misses to find the next attack.
              </p>
            </div>

            <div className={styles.pillars}>
              {PILLARS.map((pillar) => (
                <article
                  className={styles.pillar}
                  key={pillar.num}
                >
                  <span className={styles.pillarIcon}>
                    {pillar.num}
                  </span>

                  <h2 className={styles.pillarName}>
                    {pillar.title}
                  </h2>

                  <p className={styles.pillarCopy}>
                    {pillar.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDim}`}>
          <div className={styles.inner}>
            <p className={styles.lede}>
              What we are looking for
            </p>

            <div className={styles.copy}>
              <p>
                The system should look beyond a small set of known fraud
                examples. It should explore how AI can change the way
                payment fraud is created, adapted, and scaled.
              </p>
            </div>

            <div className={styles.categoryGrid}>
              {ATTACK_CATEGORIES.map((category) => (
                <article
                  className={styles.category}
                  key={category.letter}
                >
                  <div className={styles.categoryHead}>
                    <span className={styles.categoryLetter}>
                      {category.letter}
                    </span>

                    <span className={styles.categoryCount}>
                      {category.count}
                    </span>
                  </div>

                  <h3 className={styles.categoryName}>
                    {category.name}
                  </h3>

                  <p className={styles.categoryCopy}>
                    {category.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inner}>
            <p className={styles.lede}>
              The closed loop
            </p>

            <div className={styles.copy}>
              <p>
                The important part is not any one model. It is the loop
                between attack and defence.
              </p>
            </div>

            <div className={styles.mandateBlock}>
              <GateSvg
                titleId="challenge-gate-title"
                title="An attack reaches the defence, which decides whether it should be allowed through."
                className={styles.mandateIcon}
                tone="ink"
                tokenX={120}
                openAmount={0}
                showToken
              />

              <div>
                <h2 className={styles.categoryName}>
                  Attack → Generate → Defend → Learn
                </h2>

                <p className={styles.categoryCopy}>
                  Every weakness found by the defence becomes a reason
                  to create another test. The system is designed to
                  keep challenging itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDim}`}>
          <div className={styles.inner}>
            <p className={styles.lede}>
              What success looks like
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Identify</span>
                <span className={styles.statValue}>Broad</span>
              </div>

              <div className={styles.stat}>
                <span className={styles.statLabel}>Generate</span>
                <span className={styles.statValue}>Realistic</span>
              </div>

              <div className={styles.stat}>
                <span className={styles.statLabel}>Defend</span>
                <span className={styles.statValue}>Accurate</span>
              </div>
            </div>

            <div className={styles.resultRows}>
              {RESULTS.map((result) => (
                <div
                  className={styles.resultRow}
                  key={result.metric}
                >
                  <span className={styles.resultMetric}>
                    {result.metric}
                  </span>

                  <span className={styles.resultNote}>
                    {result.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inner}>
            <p className={styles.lede}>
              What we are submitting
            </p>

            <div className={styles.includedList}>
              {INCLUDED.map((item) => (
                <article
                  className={styles.includedItem}
                  key={item.num}
                >
                  <span className={styles.includedNum}>
                    {item.num}
                  </span>

                  <div>
                    <h3 className={styles.includedTitle}>
                      {item.title}
                    </h3>

                    <p className={styles.includedCopy}>
                      {item.copy}
                    </p>

                    {item.href && (
                      <a
                        className={styles.includedLink}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDim}`}>
          <div className={styles.inner}>
            <p className={styles.lede}>
              Why this approach
            </p>

            <div className={styles.differentiators}>
              {DIFFERENTIATORS.map((item) => (
                <article
                  className={styles.differentiator}
                  key={item.title}
                >
                  <h2 className={styles.differentiatorTitle}>
                    {item.title}
                  </h2>

                  <p className={styles.copy}>
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerWordmark}>Parmana</div>

          <p className={styles.footerNote}>
            Mastercard Innovation Challenge 2026 · AI Defense Lab
            for Payment Security
          </p>
        </div>
      </footer>
    </>
  );
}