import styles from "./ChallengePage.module.css";

const TAXONOMY = [
  {
    letter: "A",
    name: "Identity & onboarding fraud",
    count: "A1–A2",
    copy: "GenAI-assisted identity creation, synthetic identities, and automated onboarding abuse designed to make fraudulent accounts look legitimate.",
  },
  {
    letter: "B",
    name: "Social engineering & authorization fraud",
    count: "B1–B3",
    copy: "Attacks that manipulate legitimate users or authorization flows, including cases where the transaction itself can look statistically normal.",
  },
  {
    letter: "C",
    name: "Agentic commerce fraud",
    count: "C1–C3",
    copy: "AI agents acting at machine speed, including delegated mandate abuse where an action can be technically valid yet outside what was actually authorized.",
  },
  {
    letter: "D",
    name: "Automated machine-speed attacks",
    count: "D1–D2",
    copy: "High-volume, automated payment attacks that exploit speed, repetition, and scale beyond what manual controls can reliably handle.",
  },
  {
    letter: "E",
    name: "Post-transaction & loyalty fraud",
    count: "E1–E2",
    copy: "Abuse after payment, including fabricated dispute evidence and promotion or coupon manipulation.",
  },
];

const RESULTS = [
  {
    metric: "Precision",
    value: "0.944",
    note: "Held-out test set.",
  },
  {
    metric: "Recall",
    value: "0.966",
    note: "Held-out fraud detection recall.",
  },
  {
    metric: "F1",
    value: "0.955",
    note: "Balanced precision/recall measure.",
  },
  {
    metric: "ROC AUC",
    value: "0.999",
    note: "Held-out test set.",
  },
];

const INCLUDED = [
  {
    num: "01",
    title: "Code repository",
    copy: "Complete implementation covering Identify, Generate, Defend, the deterministic mandate layer, and the web prototype.",
    href: "https://github.com/pavancharak/mastercard-ai-defense-lab",
    label: "View on GitHub",
  },
  {
    num: "02",
    title: "Working prototype",
    copy: "A live web application that brings the taxonomy, generated data, trained model, case browser, dashboard, and mandate demonstration together.",
    href: "https://mastercard-ai-defense-lab.fly.dev/",
    label: "Open live prototype",
  },
  {
    num: "03",
    title: "Solution walkthrough",
    copy: "The complete approach, evidence, model results, architectural distinction, and real-world feasibility are documented in the repository.",
    href: "https://github.com/pavancharak/mastercard-ai-defense-lab",
    label: "Read the submission",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Detection is not authorization.",
    copy: "A fraud classifier estimates whether a transaction resembles known fraud. It does not know what a customer, institution, or delegated agent was actually authorized to do.",
  },
  {
    title: "The mandate layer is structurally different.",
    copy: "For delegated mandate abuse, the system independently compares the proposed action with the authoritative mandate. No training data, probability threshold, or model confidence is required.",
  },
  {
    title: "The failure is demonstrated, not hypothetical.",
    copy: "Four live mandate-violation scenarios were refused even though the trained fraud classifier independently scored the same proposed transactions as low risk.",
  },
  {
    title: "The two systems complement each other.",
    copy: "AI detection handles statistical patterns across emerging fraud. Deterministic authorization handles what must never happen because it was never authorized.",
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
            Mastercard Innovation Challenge · AI Defense Lab
          </span>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.inner}>
            <p className={styles.headerLabel}>Mastercard Innovation Challenge 2026</p>

            <h1>Build the attack. Build the defense.</h1>

            <p className={styles.lede}>
              An end-to-end AI defense system for GenAI-era payment fraud:
              identify emerging attacks, generate realistic simulations, detect
              them with machine learning, and independently verify whether the
              proposed action is actually authorized.
            </p>

            <div className={styles.copy}>
              <p>
                Generative AI makes payment fraud faster, cheaper, more adaptive,
                and harder to detect. Static rules and transaction-level
                classifiers remain necessary, but they do not answer every
                security question.
              </p>
              <p>
                Our approach treats payment defense as a closed loop:
                <strong> Identify → Generate → Defend → Authorize.</strong>
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDim}`}>
          <div className={styles.inner}>
            <p className={styles.headerLabel}>01 · Closed-loop defense</p>

            <div className={styles.pillars}>
              <article className={styles.pillar}>
                <div className={styles.pillarIcon} aria-hidden="true">
                  <svg viewBox="0 0 120 80" role="presentation">
                    <line x1="10" y1="40" x2="45" y2="40" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="60" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="75" y1="40" x2="110" y2="40" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <h2 className={styles.pillarName}>Identify</h2>
                <p className={styles.pillarCopy}>
                  Map emerging GenAI-powered payment fraud across channels,
                  rails, social engineering surfaces, and agentic workflows.
                </p>
              </article>

              <article className={styles.pillar}>
                <div className={styles.pillarIcon} aria-hidden="true">
                  <svg viewBox="0 0 120 80" role="presentation">
                    <path
                      d="M10 40 C30 10, 45 70, 65 40 S95 10, 110 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <h2 className={styles.pillarName}>Generate</h2>
                <p className={styles.pillarCopy}>
                  Turn the taxonomy into realistic synthetic attacks and
                  transactions that can stress-test a defense at scale.
                </p>
              </article>

              <article className={styles.pillar}>
                <div className={styles.pillarIcon} aria-hidden="true">
                  <svg viewBox="0 0 120 80" role="presentation">
                    <rect
                      x="25"
                      y="15"
                      width="70"
                      height="50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M38 40 L52 52 L82 27"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <h2 className={styles.pillarName}>Defend</h2>
                <p className={styles.pillarCopy}>
                  Train and evaluate a fraud classifier, then add deterministic
                  authorization where statistical detection cannot establish
                  what was actually permitted.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inner}>
            <p className={styles.headerLabel}>02 · Identify</p>

            <h2>Attack taxonomy</h2>

            <p className={styles.lede}>
              Twelve attack vectors across five categories form the shared
              specification for the rest of the system.
            </p>

            <div className={styles.categoryGrid}>
              {TAXONOMY.map((category) => (
                <article className={styles.category} key={category.letter}>
                  <div className={styles.categoryHead}>
                    <span className={styles.categoryLetter}>{category.letter}</span>
                    <span className={styles.categoryCount}>{category.count}</span>
                  </div>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                  <p className={styles.categoryCopy}>{category.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDim}`}>
          <div className={styles.inner}>
            <p className={styles.headerLabel}>03 · Defend</p>

            <h2>Detection performance</h2>

            <div className={styles.stats}>
              {RESULTS.map((result) => (
                <div className={styles.stat} key={result.metric}>
                  <span className={styles.statLabel}>{result.metric}</span>
                  <span className={styles.statValue}>{result.value}</span>
                </div>
              ))}
            </div>

            <div className={styles.copy}>
              <p>
                The classifier is an XGBoost binary fraud detector trained only
                on generated data and evaluated on a held-out test set.
              </p>
              <p>
                The evaluation is intentionally broken down by category and
                vector so aggregate performance cannot hide weak spots.
              </p>
            </div>

            <div className={styles.resultRows}>
              <div className={styles.resultRow}>
                <span className={styles.resultMetric}>Category A</span>
                <span className={styles.resultNote}>
                  Identity and onboarding — 1.000 recall.
                </span>
              </div>
              <div className={styles.resultRow}>
                <span className={styles.resultMetric}>Category B</span>
                <span className={styles.resultNote}>
                  Social engineering and authorization — 0.891 recall; the
                  hardest category by design.
                </span>
              </div>
              <div className={styles.resultRow}>
                <span className={styles.resultMetric}>Category C</span>
                <span className={styles.resultNote}>
                  Agentic commerce — 1.000 recall on the held-out classifier
                  evaluation.
                </span>
              </div>
              <div className={styles.resultRow}>
                <span className={styles.resultMetric}>Category D</span>
                <span className={styles.resultNote}>
                  Automated machine speed — 1.000 recall.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inner}>
            <p className={styles.headerLabel}>04 · The critical distinction</p>

            <h2>When detection is not enough</h2>

            <div className={styles.copy}>
              <p>
                A payment can look statistically legitimate and still violate
                the authority under which an agent is operating.
              </p>
              <p>
                That is the problem demonstrated by category C3: delegated
                mandate scope abuse.
              </p>
            </div>

            <div className={styles.mandateBlock}>
              <div className={styles.mandateIcon} aria-hidden="true">
                <svg viewBox="0 0 120 120" role="presentation">
                  <rect
                    x="25"
                    y="20"
                    width="70"
                    height="80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <line x1="40" y1="42" x2="80" y2="42" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="40" y1="58" x2="80" y2="58" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="40" y1="74" x2="65" y2="74" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M72 82 L80 90 L94 72"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <div className={styles.copy}>
                <h3>Independent mandate authorization</h3>
                <p>
                  The proposed transaction is checked against the authoritative
                  mandate itself, rather than asking the classifier whether the
                  transaction resembles fraud.
                </p>
                <p>
                  In the live demonstration, four mandate violations were
                  refused even though the trained classifier independently
                  scored those proposed transactions as low risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDim}`}>
          <div className={styles.inner}>
            <p className={styles.headerLabel}>05 · Submission</p>

            <h2>What is included</h2>

            <div className={styles.includedList}>
              {INCLUDED.map((item) => (
                <article className={styles.includedItem} key={item.num}>
                  <span className={styles.includedNum}>{item.num}</span>
                  <div>
                    <h3 className={styles.includedTitle}>{item.title}</h3>
                    <p className={styles.includedCopy}>{item.copy}</p>
                    <a
                      className={styles.includedLink}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.label} →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inner}>
            <p className={styles.headerLabel}>06 · Why this is different</p>

            <h2>Two different questions require two different checks.</h2>

            <div className={styles.differentiators}>
              {DIFFERENTIATORS.map((item) => (
                <article className={styles.differentiator} key={item.title}>
                  <h3 className={styles.differentiatorTitle}>{item.title}</h3>
                  <p className={styles.copy}>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDim}`}>
          <div className={styles.inner}>
            <p className={styles.headerLabel}>07 · Live evidence</p>

            <h2>See the system run.</h2>

            <p className={styles.lede}>
              The prototype is deployed and exposes the actual taxonomy,
              generated dataset, trained model, dashboard, case browser, and
              mandate demonstration.
            </p>

            <div className={styles.copy}>
              <p>
                The strongest demonstration is the mandate flow: a real
                proposed purchase is scored by the trained fraud model and then
                independently evaluated against the authorized mandate.
              </p>
            </div>

            <a
              className={styles.includedLink}
              href="https://mastercard-ai-defense-lab.fly.dev/"
              target="_blank"
              rel="noreferrer"
            >
              Open the live AI Defense Lab →
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerWordmark}>Parmana</div>
          <p className={styles.footerNote}>
            Mastercard Innovation Challenge 2026 · AI Defense Lab for Payment
            Security. Detection, generation, and independent authorization for
            GenAI-era payment systems.
          </p>
        </div>
      </footer>
    </>
  );
}