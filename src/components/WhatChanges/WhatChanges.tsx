import styles from './WhatChanges.module.css';

const pairs = [
  {
    without: 'AI pilots that work in the demo and stall at the risk committee, quarter after quarter.',
    with: 'A yes your risk team can defend. Agents move to real work because the failure modes are structurally closed, not statistically unlikely.',
  },
  {
    without: 'A human approving every action. Machine speed capped at clerk speed, and judgment replaced by fatigue.',
    with: 'Humans write the rules once. Enforcement runs automatically on every action. People handle exceptions, not queues.',
  },
  {
    without: 'The AI holds credentials to your systems, so every failure of the AI is a failure of those systems.',
    with: 'The AI holds nothing. Access exists for one instant, only after authorization, used once, destroyed.',
  },
  {
    without: 'A jailbroken or manipulated agent is a potential catastrophe.',
    with: 'A jailbroken agent is a blocked request and a signed record of the attempt.',
  },
  {
    without:
      'When something goes wrong, your account of events is logs the vendor keeps and explanations the model gives about itself.',
    with: 'Every action, approved and blocked alike, carries proof your auditor, board, or regulator can verify independently.',
  },
];

export default function WhatChanges() {
  return (
    <section className={styles.section} id="what-changes" aria-label="What changes for your organisation">
      <div className="container">
        <p className="kicker">BEFORE AND AFTER</p>
        <h2 className={styles.headline}>What changes for your organisation.</h2>

        <div className={styles.rows}>
          {pairs.map((pair) => (
            <div className={styles.row} key={pair.without}>
              <div className={styles.without}>
                <p className={styles.label}>WITHOUT PARMANA</p>
                <p className={styles.text}>{pair.without}</p>
              </div>
              <div className={styles.with}>
                <p className={styles.labelWith}>WITH PARMANA</p>
                <p className={styles.textWith}>{pair.with}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.closing}>
          Same AI. Same systems. One new layer between them, and the answer changes from no to yes.
        </p>
      </div>
    </section>
  );
}
