import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { GateSvg } from "./GateSvg";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const START_X = 20;
const GATE_X = 120;
const END_X = 220;

type Phase = "start" | "approach" | "through";

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState<Phase>(
    reducedMotion ? "through" : "start"
  );

  useEffect(() => {
    if (reducedMotion) return;

    const t1 = window.setTimeout(() => setPhase("approach"), 450);
    const t2 = window.setTimeout(
      () => setPhase("through"),
      450 + 1300
    );

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [reducedMotion]);

  const tokenX =
    phase === "start"
      ? START_X
      : phase === "approach"
        ? GATE_X
        : END_X;

  const openAmount = phase === "through" ? 1 : 0;

  const duration =
    reducedMotion
      ? 1
      : phase === "approach"
        ? 1300
        : 900;

  return (
    <section className={styles.hero} id="top">
      <div className={styles.inner}>
        <div>
          <div className={styles.topRow}>
            <span className={styles.eyebrow}>
              Execution authority for AI
            </span>

            <span className={styles.badge}>
              Made in India
            </span>
          </div>

          <h1 className={styles.headline}>
            Can your institution control what AI is allowed to execute?
          </h1>

          <p className={styles.dek}>
            AI can propose and decide at machine speed. Parmana
            deterministically authorizes or rejects execution so only
            actions your organization permits can reach your systems
            of record.
          </p>

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
              Write to us
            </a>
          </div>
        </div>

        <div>
          <div className={styles.gateWrap}>
            <GateSvg
              titleId="hero-gate-title"
              title="An action reaches Parmana and continues only when it is allowed."
              tone="ink"
              tokenX={tokenX}
              openAmount={openAmount}
              durationMs={duration}
            />
          </div>

          <p className={styles.gateCaption}>
            only authorized actions reach execution
          </p>
        </div>
      </div>
    </section>
  );
}