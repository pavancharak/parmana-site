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
    copy: "Artificial activity designed to resemble legitimate customers and transactions.",
  },
];

const SUBMISSIONS = [
  {
    num: "01",
    title: "Code repository",
    copy: "A complete, runnable repository covering identify, generate, and defend.",
    href: "https://github.com/pavancharak/mastercard-ai-defense-lab",
    label: "View the code repository →",
  },
  {
    num: "02",
    title: "Solution walkthrough",
    copy: "A Word document covering the attacks identified, how they are generated and simulated, the detection and mitigation approach, results, and real-world feasibility.",
    href: "https://www.kaggle.com/competitions/mastercard-innovation-challenge-2026/writeups/infrastructure-integration-plan-independent-ai-au",
    label: "Read the solution walkthrough on Kaggle →",
  },
  {
    num: "03",
    title: "Working web prototype",
    copy: "A live web prototype demonstrating the closed loop from identifying an attack to generating it and testing the defence.",
    href: "https://mastercard-ai-defense-lab.fly.dev/",
    label: "Open the working prototype →",
  },
];

const EVALUATION = [
  {
    metric: "Attack diversity",
    note: "The range of emerging payment fraud attacks identified.",
  },
  {
    metric: "Attack fidelity",
    note: "How closely simulated attacks resemble realistic payment fraud.",
  },
  {
    metric: "Detection efficacy",
    note: "How effectively the defence detects the generated attacks.",
  },
  {
    metric: "Novelty",
    note: "What is new and distinctive about the overall solution.",
  },
  {
    metric: "Real-world feasibility",
    note: "Whether the approach can work in live payment environments.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "The attack becomes the test.",
    copy: "The system does not rely only on a fixed list of known fraud patterns. New attacks become tests for the defence.",
  },
  {
    title: "The defence exposes the next weakness.",
    copy: "When the defence misses something, that gap becomes another attack to study and simulate.",
  },
  {
    title: "Built for real payments.",
    copy: "The goal is useful protection in live payment environments, where missed fraud and unnecessary declines both matter.",
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
                AI is making payment fraud faster, cheaper, and harder to
                spot. This challenge asks us to look at both sides: how new
                attacks could work, and how we can build a defence that
                catches them.
              </p>

              <p>
                Our approach is a closed loop: identify new attacks, generate
                realistic examples, test the defence, and use what the
                defence misses to find the next attack.
              </p>
            </div>

            <div className={styles.pillars}>
              {PILLARS.map((pillar) => (
                <article className={styles.pillar} key={pillar.num}>
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
              Emerging attack areas
            </p>

            <div className={styles.copy}>
              <p>
                The system explores how AI can change the way payment fraud
                is created, adapted, and scaled across different payment
                surfaces.
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
                The important part is the loop between attack and defence.
                Each side continuously tests the other.
              </p>
            </div>

            <div className={styles.mandateBlock}>
              <GateSvg
                titleId="challenge-gate-title"
                title="An attack reaches the defence and is tested."
                className={styles.mandateIcon}
                tone="ink"
                tokenX={120}
                openAmount={0}
                showToken
              />

              <div>
                <h2 className={styles.categoryName}>
                  Identify → Generate → Defend
                </h2>

                <p className={styles.categoryCopy}>
                  New attacks are identified, realistic examples are
                  generated, and the defence is tested against them.
                  Weaknesses found by the defence feed the next round.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDim}`}>
          <div className={styles.inner}>
            <p className={styles.lede}>
              Evaluation
            </p>

            <div className={styles.copy}>
              <p>
                The solution is evaluated on five things: how many different
                attacks it can identify, how realistic those attacks are,
                how well the defence detects them, how novel the overall
                approach is, and whether it can work in real payment
                environments.
              </p>
            </div>

            <div className={styles.resultRows}>
              {EVALUATION.map((item) => (
                <div
                  className={styles.resultRow}
                  key={item.metric}
                >
                  <span className={styles.resultMetric}>
                    {item.metric}
                  </span>

                  <span className={styles.resultNote}>
                    {item.note}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.mandateBlock}>
              <div>
                <h2 className={styles.categoryName}>
                  Submission deadline
                </h2>

                <p className={styles.categoryCopy}>
                  Final submission must be made before 31 August 2026.
                  Shortlisted teams will present at Global Fintech Fest
                  in Mumbai from 8–11 September 2026.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inner}>
            <p className={styles.lede}>
              Submission
            </p>

            <div className={styles.copy}>
              <p>
                The challenge requires three artifacts submitted through
                the Writeups section before the deadline.
              </p>
            </div>

            <div className={styles.includedList}>
              {SUBMISSIONS.map((item) => (
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

                    <a
                      className={styles.includedLink}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
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
          <div className={styles.footerWordmark}>
            Parmana
          </div>

          <p className={styles.footerNote}>
            Mastercard Innovation Challenge 2026 · AI Defense Lab
            for Payment Security
          </p>
        </div>
      </footer>
    </>
  );
}