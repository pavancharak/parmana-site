import styles from "./Problem.module.css";
import { FigureLabel } from "./FigureLabel";

export function Problem() {
  return (
    <section
      className={styles.section}
      id="how-it-works"
    >
      <div className={styles.inner}>
        <FigureLabel
          n="02"
          title="The authorization gap"
        />

        <div className={styles.copy}>
          <p>
            AI agents can now make decisions, use business
            systems, and take consequential actions.
          </p>

          <p>
            But <strong>capability is not authority.</strong>
          </p>

          <p>
            An agent may have valid credentials and access to a
            system. That does not mean it should be allowed to
            perform every action it can technically execute.
          </p>

          <p>
            The authorization decision needs to happen
            independently of the agent.
          </p>

          <p className={styles.question}>
            Is this action permitted under the authority, intent,
            and business policy that govern it?
          </p>

          <p>
            If the answer is no, the action should never reach
            execution.
          </p>
        </div>
      </div>
    </section>
  );
}