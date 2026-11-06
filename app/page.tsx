import { CallToAction, SiteFooter, SiteHeader } from "./components/SiteChrome";

const steps = [
  {
    title: "You set the rules",
    text: "Write down what people, software and AI assistants are allowed to do, and what needs a person to say yes first.",
  },
  {
    title: "Each action is checked",
    text: "Before anything happens, it is compared with those rules. Actions outside the rules do not go ahead.",
  },
  {
    title: "A record is kept",
    text: "Every decision and its result is saved. Anyone can check that record later, without needing an account.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-heading">
        <div className="wrap">
          <p className="eyebrow">Parmana</p>
          <h1 id="hero-heading">AI that stays within the rules you set.</h1>
          <p className="vision-statement">
            Parmana checks every action against your rules, asks a person to approve the ones that need it, and keeps a
            record that anyone can check.
          </p>
          <div className="cta-row">
            <a className="button" href="/how-it-works">See how it works</a>
            <a className="button secondary" href="/check-a-record">Check a record</a>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="steps-heading">
        <div className="wrap">
          <h2 id="steps-heading">How it works</h2>
          <ol className="steps">
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p className="body">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block soft" aria-labelledby="covers-heading">
        <div className="wrap">
          <h2 id="covers-heading">What Parmana covers</h2>
          <ul className="principles">
            <li>
              <h3>Business authority</h3>
              <p className="body">Who in your organisation may approve an action, start it, or change the rules around it.</p>
            </li>
            <li>
              <h3>Infrastructure</h3>
              <p className="body">The systems, accounts and connections that carry an action out, and who can use them.</p>
            </li>
          </ul>
        </div>
      </section>

      <CallToAction
        heading="Talk to us about your business"
        text="Tell us what your AI tools do today, and we will show you where Parmana fits."
      />

      <SiteFooter />
    </main>
  );
}
