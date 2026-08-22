import { useState } from "react";
import styles from "./Hero.module.css";
import { GateSvg } from "./GateSvg";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const START_X = 20;
const GATE_X = 120;
const END_X = 220;
const BLOCKED_X = 82;

type Outcome = "allowed" | "blocked";
type Phase = "start" | "approach" | "resolved";

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();

  const [phase, setPhase] = useState<Phase>("start");
  const [outcome, setOutcome] = useState<Outcome | null>(null);

  function runAction(nextOutcome: Outcome) {
    setOutcome(nextOutcome);

    if (reducedMotion) {
      setPhase("resolved");
      return;
    }

    setPhase("start");

    window.setTimeout(() => {
      setPhase("approach");
    }, 100);

    window.setTimeout(() => {
      setPhase("resolved");
    }, 1400);
  }

  let tokenX = START_X;
  let openAmount = 0;

  if (phase === "approach") {
    tokenX = GATE_X;
  }

  if (phase === "resolved" && outcome === "allowed") {
    tokenX = END_X;
    openAmount = 1;
  }

  if (phase === "resolved" && outcome === "blocked") {
    tokenX = BLOCKED_X;
  }

  const duration =
    reducedMotion
      ? 1
      : phase === "approach"
        ? 1300
        : 700;

  return (
    <section className={styles.hero} id="top">
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.topRow}>
            <span className={styles.eyebrow}>
              Authorization infrastructure for AI agents
            </span>

            <span className={styles.badge}>
              Made in India
            </span>
          </div>

          <h1 className={styles.headline}>
            AI agents can act.
            <br />
            Parmana decides what they are authorized to do.
          </h1>

          <p className={styles.dek}>
            Parmana is the authorization and enforcement boundary
            between AI agents and consequential actions.
          </p>

          <div className={styles.proof}>
            <strong>DETERMINISTIC</strong>
            <span>authorization enforced before execution</span>
          </div>

          <div className={styles.actions}>
            <a
              className={styles.primary}
              href="#how-it-works"
            >
              See how it works
            </a>

            <a
              className={styles.secondary}
              href="mailto:founder@parmanasystems.com"
            >
              Talk to us
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.demoLabel}>
            Request an action
          </div>

          <div className={styles.gateWrap}>
            <GateSvg
              titleId="hero-gate-title"
              title="An AI agent request reaches the Parmana authorization boundary and is either allowed to execute or blocked."
              tone="ink"
              tokenX={tokenX}
              openAmount={openAmount}
              durationMs={duration}
            />
          </div>

          <div className={styles.demoActions}>
            <button
              type="button"
              className={styles.demoButton}
              onClick={() => runAction("allowed")}
            >
              Request authorized action
            </button>

            <button
              type="button"
              className={`${styles.demoButton} ${styles.demoButtonSecondary}`}
              onClick={() => runAction("blocked")}
            >
              Request unauthorized action
            </button>
          </div>

          <div className={styles.result} aria-live="polite">
            {phase === "resolved" && outcome === "allowed" && (
              <div className={styles.resultContent}>
                <strong>ALLOWED</strong>
                <span>
                  Authorized by policy. Execution may proceed.
                </span>
              </div>
            )}

            {phase === "resolved" && outcome === "blocked" && (
              <div className={styles.resultContent}>
                <strong>BLOCKED</strong>
                <span>
                  Not authorized. Execution is prevented.
                </span>
              </div>
            )}

            {(phase === "start" || phase === "approach") && (
              <div className={styles.resultContent}>
                <strong>PARMANA</strong>
                <span>
                  Authorization is decided before execution.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}