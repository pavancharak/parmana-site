import styles from './WhatParmanaIsNot.module.css';

export default function WhatParmanaIsNot() {
  return (
    <section className={`section ${styles.section}`} aria-label="What Parmana is not">
      <div className="container">
        <span className="eyebrow">Know the difference</span>

        <h2 className={styles.heading}>What Parmana is not.</h2>

        <ul className={styles.list}>
          <li>
            <strong>Not an AI guardrail.</strong> Guardrails try to influence AI
            behavior. Parmana verifies whether an action is authorized before it
            can execute.
          </li>

          <li>
            <strong>Not an API gateway.</strong> API gateways route requests.
            Parmana determines whether an AI should be allowed to execute the
            request in the first place.
          </li>

          <li>
            <strong>Not an observability platform.</strong> Observability tells
            you what happened. Parmana prevents unauthorized actions before they
            happen.
          </li>

          <li>
            <strong>Not human approval for every action.</strong> Humans define
            authority through policy. Parmana enforces that authority
            automatically at machine speed.
          </li>

          <li>
            <strong>Not another AI model.</strong> Authorization decisions come
            from deterministic policies, not from one AI attempting to judge
            another.
          </li>
        </ul>
      </div>
    </section>
  );
}