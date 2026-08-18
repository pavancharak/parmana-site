import { useEffect } from "react";
import styles from "./ChallengePage.module.css";
import { FigureLabel } from "../components/FigureLabel";
import { GateSvg } from "../components/GateSvg";

const REPO_URL = "https://github.com/pavancharak/mastercard-ai-defense-lab";
const LIVE_URL = "https://mastercard-ai-defense-lab.fly.dev/";

const PILLARS = [
  {
    name: "Identify",
    copy: "Twelve attack patterns, mapped and written up.",
    tokenX: 20,
    openAmount: 0,
    pulse: false,
    title: "Identify: a request approaches, unmapped.",
  },
  {
    name: "Generate",
    copy: "A synthetic, labeled dataset built to simulate them.",
    tokenX: 120,
    openAmount: 0,
    pulse: true,
    title: "Generate: the request is held and simulated.",
  },
  {
    name: "Defend",
    copy: "A classifier trained and measured against real numbers.",
    tokenX: 220,
    openAmount: 1,
    pulse: false,
    title: "Defend: the request has passed a trained check.",
  },
];

const CATEGORIES = [
  {
    letter: "A",
    name: "Identity and Onboarding Fraud",
    count: "2 patterns",
    copy: "A fabricated or deepfaked identity passes the checks made to open an account in the first place.",
  },
  {
    letter: "B",
    name: "Social Engineering and Authorization Fraud",
    count: "3 patterns",
    copy: "The payment itself is genuinely authorized by the real accountholder, who was deceived into approving it.",
  },
  {
    letter: "C",
    name: "Agentic Commerce Fraud",
    count: "3 patterns",
    copy: "A purchasing agent is impersonated, deceived, or pushed past what it was actually authorized to do.",
  },
  {
    letter: "D",
    name: "Automated, Machine Speed Attacks",
    count: "2 patterns",
    copy: "Stolen credentials are tested and used faster than a person could, with automation standing in for manual trial and error.",
  },
  {
    letter: "E",
    name: "Post Transaction and Dispute Fraud",
    count: "2 patterns",
    copy: "Fabricated evidence or fabricated accounts are used to claim a refund, a chargeback, or a promotion that was never earned.",
  },
];

const INCLUDED = [
  {
    num: "01",
    title: "Attack taxonomy",
    copy: "Twelve write ups, one per pattern, each with its mechanism, channel, and the transaction signal it should leave behind.",
  },
  {
    num: "02",
    title: "Dataset and generation code",
    copy: "The synthetic transactions themselves, and the code that produces them, one generator per pattern plus a legitimate baseline.",
  },
  {
    num: "03",
    title: "Classifier and its metrics",
    copy: "The trained model and the full evaluation report, including the leak investigations that produced the numbers on this page.",
  },
  {
    num: "04",
    title: "A working prototype, with a real interface",
    copy: "A live, clickable application over all of it, including the mandate check described below.",
    link: LIVE_URL,
    linkLabel: "mastercard-ai-defense-lab.fly.dev",
  },
  {
    num: "05",
    title: "A short written solution walkthrough",
    copy: "The repository's own README, the same document this page is drawn from.",
  },
];

export function ChallengePage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Mastercard Innovation Challenge submission, Parmana";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.wordmark}>Parmana</span>
          <span className={styles.headerLabel}>
            Mastercard Innovation Challenge, GFF 2026 submission
          </span>
        </div>
      </header>

      <main>
        <section className={styles.section} id="what-was-asked">
          <div className={styles.inner}>
            <FigureLabel n="01" title="What the challenge asked for" />
            <p className={styles.lede}>
              This is Parmana's submission to the Mastercard Innovation Challenge at Global
              Fintech Fest 2026 in Mumbai, hosted by Mastercard AI Garage: an AI Defense Lab for
              Payment Security.
            </p>
            <div className={styles.copy}>
              <p>
                The challenge asked for one closed loop covering three things: find new ways
                generative AI could be used to commit payment fraud, simulate those attacks
                realistically at scale, and defend against them. This submission calls the three
                pillars by name.
              </p>
            </div>
            <div className={styles.pillars}>
              {PILLARS.map((pillar) => (
                <div className={styles.pillar} key={pillar.name}>
                  <GateSvg
                    titleId={`pillar-gate-${pillar.name}`}
                    title={pillar.title}
                    className={styles.pillarIcon}
                    tone="ink"
                    tokenX={pillar.tokenX}
                    openAmount={pillar.openAmount}
                    pulseToken={pillar.pulse}
                    durationMs={1}
                  />
                  <h3 className={styles.pillarName}>{pillar.name}</h3>
                  <p className={styles.pillarCopy}>{pillar.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDim}`} id="identify">
          <div className={styles.inner}>
            <FigureLabel n="02" title="Identify" />
            <div className={styles.copy}>
              <p>
                The submission mapped twelve distinct ways generative AI could be used to attack
                payment systems, grouped into five categories. Each pattern is written up with how
                it works and why it's hard to catch.
              </p>
            </div>
            <div className={styles.categoryGrid}>
              {CATEGORIES.map((category) => (
                <div className={styles.category} key={category.letter}>
                  <div className={styles.categoryHead}>
                    <span className={styles.categoryLetter}>{category.letter}</span>
                    <span className={styles.categoryCount}>{category.count}</span>
                  </div>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                  <p className={styles.categoryCopy}>{category.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="generate">
          <div className={styles.inner}>
            <FigureLabel n="03" title="Generate" />
            <div className={styles.copy}>
              <p>
                A synthetic, labeled transaction dataset was built to simulate these patterns
                realistically: 21,960 rows in total, 700 of them fraud, one generator per pattern
                plus a legitimate baseline sharing the same fields.
              </p>
              <p>
                Generated data was checked to make sure it didn't quietly leak the answer, which
                would have made the results look better than they really are. Several rounds of
                exactly that kind of leak were found and fixed in the open, the same underlying
                shape each time: a field that was only ever filled in for the fraud rows and left
                blank everywhere else, which let a classifier learn which generator wrote a row
                instead of learning the real pattern.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDim}`} id="defend">
          <div className={styles.inner}>
            <FigureLabel n="04" title="Defend, and the honest numbers" />
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Precision</span>
                <span className={styles.statValue}>0.944</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Recall</span>
                <span className={styles.statValue}>0.966</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>F1</span>
                <span className={styles.statValue}>0.955</span>
              </div>
            </div>
            <div className={styles.resultRows}>
              <div className={styles.resultRow}>
                <span className={styles.resultMetric}>
                  Category B, recall 0.891
                </span>
                <span className={styles.resultNote}>
                  Expected going in. In this category the payment itself is genuinely authorized
                  by the real accountholder, so there's little for a transaction level check to
                  catch it on. The Identify stage research called this the hardest category before
                  a single row of data was generated, and the number matches that.
                </span>
              </div>
              <div className={styles.resultRow}>
                <span className={styles.resultMetric}>
                  Category C, precision 0.600, recall 1.000, F1 0.750
                </span>
                <span className={styles.resultNote}>
                  Checked by hand. A result this specific gets verified before it gets reported:
                  the fields the model relied on were traced individually, confirmed to be real
                  signal rather than an accidental shortcut, and confirmed to match what the
                  attack actually does.
                </span>
              </div>
            </div>
            <div className={styles.copy}>
              <p>
                A classifier that scores a transaction after the fact can't fully solve every
                pattern here. Some of them, like delegated mandate scope abuse (category C,
                pattern C3), work by deliberately keeping what's claimed and what's actually
                happening from lining up. No amount of better statistics fixes that. What's
                needed is a check built into how the action gets authorized in the first place,
                not just a better score. The submission includes a small working demonstration of
                exactly that check, built specifically for this challenge and kept separate from
                Parmana's own product.
              </p>
            </div>
            <div className={styles.mandateBlock}>
              <GateSvg
                titleId="mandate-gate"
                title="A request the classifier scored as low risk, stopped anyway by an independent check."
                className={styles.mandateIcon}
                tone="stop"
                tokenX={86}
                openAmount={0}
                durationMs={1}
              />
              <p className={styles.resultNote}>
                In a live run, a purchasing agent operating under a fixed monthly mandate
                attempted six purchases. The classifier scored four of them as low risk. An
                independent check, comparing each purchase against what the mandate actually
                authorized, refused all four anyway, including one a classifier could never catch
                no matter how it was trained: a monthly spending cap breached across two earlier,
                individually approved purchases. No field in the model's data even records that
                number.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} id="included">
          <div className={styles.inner}>
            <FigureLabel n="05" title="What's included" />
            <div className={styles.includedList}>
              {INCLUDED.map((item) => (
                <div className={styles.includedItem} key={item.num}>
                  <span className={styles.includedNum}>{item.num}</span>
                  <div>
                    <h3 className={styles.includedTitle}>{item.title}</h3>
                    <p className={styles.includedCopy}>{item.copy}</p>
                    {item.link && (
                      <a
                        className={styles.includedLink}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.linkLabel}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <a className={styles.includedLink} href={REPO_URL} target="_blank" rel="noreferrer">
              github.com/pavancharak/mastercard-ai-defense-lab
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerWordmark}>Parmana</div>
          <p className={styles.footerNote}>
            This submission is a separate repository, built specifically for the Mastercard
            Innovation Challenge at Global Fintech Fest 2026, apart from Parmana's own product.
          </p>
        </div>
      </footer>
    </>
  );
}
