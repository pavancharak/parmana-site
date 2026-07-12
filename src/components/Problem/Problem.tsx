import styles from './Problem.module.css';

export default function Problem() {
  return (
    <section className={styles.section} aria-label="The problem">
      <div className="container">
        <p className="kicker">THE PROBLEM YOU ALREADY HAVE</p>
        <h2 className={styles.headline}>Your AI works. It just isn't allowed to do anything.</h2>
        <p className={styles.body}>
          Somewhere in your organisation right now there is an AI pilot that can draft the payment, process the
          claim, raise the purchase order. It performed for months. Then it reached the risk committee and stopped,
          because nobody could answer one question:
        </p>
        <blockquote className={styles.pullQuote}>
          <p>
            "What happens when it does something it shouldn't, and how do we prove to the regulator what happened?"
          </p>
        </blockquote>
        <p className={styles.body}>
          Today there are two answers and both kill the project. Put a human in front of every action and lose the
          point of automation. Or trust the agent, and no risk officer in a regulated institution will sign that. Nor
          should they.
        </p>
        <p className={styles.closing}>The missing piece isn't a smarter agent. It's a safe way to say yes.</p>
      </div>
    </section>
  );
}
