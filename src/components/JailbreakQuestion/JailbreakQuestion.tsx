import styles from './JailbreakQuestion.module.css';

const items = [
  {
    title: 'Nothing to inject into.',
    body: "Authorization decisions come from a deterministic rule engine your organisation configured. No model, no prompts, no judgment. A jailbreak manipulates an AI's reasoning; Parmana's authorization path contains no AI to manipulate.",
  },
  {
    title: 'A system that owns nothing.',
    body: 'Even a fully jailbroken agent holds no credentials to your payment systems, ERP, or databases. Access exists for one instant, inside the connector, only after authorization, used once, destroyed. The attacker who controls your AI controls a system with no keys.',
  },
  {
    title: 'The attempt becomes evidence.',
    body: 'The unauthorized request is blocked and recorded in a signed, tamper evident record. Your security team sees the attack, when it happened, and what it tried, with proof a regulator can verify independently.',
  },
];

export default function JailbreakQuestion() {
  return (
    <section className={styles.section} id="jailbreak" aria-label="The jailbreak question">
      <div className="container">
        <p className="kicker">THE JAILBREAK QUESTION</p>
        <h2 className={styles.headline}>What happens when your AI is jailbroken?</h2>

        <p className={styles.body}>
          A jailbreak is any input crafted to make an AI ignore its instructions. It can be as crude as "ignore all
          previous instructions" or as subtle as an invoice PDF carrying hidden text that says transfer the refund to
          this account instead. The model does not know it is being attacked. It reads text, and some text rewires
          its behavior. Nobody has solved this. Every major model, from every vendor, has been jailbroken publicly
          and repeatedly.
        </p>
        <p className={styles.body}>
          While AI only talked, a jailbreak was embarrassing. The moment AI acts, the same weakness becomes
          financial: a fraudulent vendor paid because an email said so, a fake supplier created, a beneficiary
          account changed. The attack surface is everything the AI reads. Every email, document, and webpage
          becomes a potential command channel. You cannot firewall text. And one successful injection in a million
          interactions is one unauthorized payment. In a bank, one is the whole story.
        </p>

        <h3 className={styles.subHeadline}>
          Parmana does not try to win the arms race. It makes the arms race irrelevant to execution.
        </h3>

        <ol className={styles.list}>
          {items.map((item, index) => (
            <li className={styles.item} key={item.title}>
              <p className={styles.num}>0{index + 1}</p>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemBody}>{item.body}</p>
            </li>
          ))}
        </ol>

        <p className={styles.closing}>
          A jailbreak against a Parmana governed enterprise degrades from a catastrophe into a{' '}
          <span className={styles.closingAccent}>log entry</span>.
        </p>
      </div>
    </section>
  );
}
