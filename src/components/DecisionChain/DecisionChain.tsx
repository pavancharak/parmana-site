import styles from './DecisionChain.module.css';

const links = [
  {
    title: 'Policy check.',
    body: 'The request is evaluated against your rules. Deterministic, first match wins, deny by default.',
  },
  {
    title: 'Signed authorization.',
    body: 'Approved actions receive a cryptographically signed authorization: single use, time limited, bound to the exact content approved. Change one character of the action and the authorization is void.',
  },
  {
    title: 'Independent verification.',
    body: "A gateway re-verifies the authorization byte for byte before release. It doesn't trust the layer that issued it.",
  },
  {
    title: 'Credential isolation.',
    body: 'Only after verification does a single-use session credential exist, inside the connector, at the moment of execution. Used once. Destroyed after, even on failure.',
  },
  {
    title: 'Sealed record.',
    body: 'The execution is written into a signed, tamper-evident trust record that can be verified by anyone, without access to our systems.',
  },
];

export default function DecisionChain() {
  return (
    <section className={styles.section} aria-label="The decision chain">
      <div className="container">
        <p className="kicker">UNDER THE HOOD</p>
        <h2 className={styles.headline}>What happens in the instant between ask and answer.</h2>

        <ol className={styles.chain}>
          {links.map((link, index) => (
            <li className={styles.item} key={link.title}>
              <span className={styles.num}>{index + 1}</span>
              <div>
                <h3 className={styles.itemTitle}>{link.title}</h3>
                <p className={styles.itemBody}>{link.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className={styles.closing}>
          Every link in this chain exists in running code with an automated test behind it. We publish what we
          claim, and we don't claim what we haven't built.
        </p>
      </div>
    </section>
  );
}
