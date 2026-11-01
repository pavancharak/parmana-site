import { CallToAction, SiteFooter, SiteHeader, linkedIn } from "./components/SiteChrome";

const highlights = [
  {
    title: "Set the limits",
    text: "Write down what your people, systems and AI agents may do. The limits are clear, recorded and open to challenge.",
  },
  {
    title: "Approve before acting",
    text: "Actions that need sign-off wait for a trusted person. Nothing runs on instruction alone.",
  },
  {
    title: "Keep a record anyone can check",
    text: "Each decision and result is sealed. Anyone can check it, with no account and no internet access.",
  },
];

const audiences = [
  {
    title: "Citizens",
    text: "People can trust the institutions that act for them, and feel more confident in the services they rely on.",
  },
  {
    title: "Customers",
    text: "Customers can see what was approved and what happened, instead of taking an organisation's word for it.",
  },
  {
    title: "Partners",
    text: "Partners can check records themselves, instead of relying on the other party.",
  },
  {
    title: "Businesses",
    text: "Businesses can show that their actions stayed within their own limits, which builds trust with everyone they work with.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-heading">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Parmana Systems</p>
            <h1 id="hero-heading">AI agents that act only within your rules.</h1>
            <p className="vision-statement">
              Parmana checks every action against the limits you set, waits for approval where it is needed, and keeps a
              record that anyone can verify.
            </p>
            <p className="philosophy">
              Trust should not depend on believing what happened. It should depend on being able to check what happened.
            </p>
            <div className="cta-row">
              <a className="button" href="/product">See how it works</a>
              <a className="button secondary" href="/trust">Check a record</a>
            </div>
          </div>
          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/N3qC9jpuViA"
              title="How Parmana governs AI agents"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="block soft" aria-labelledby="highlights-heading">
        <div className="wrap">
          <h2 id="highlights-heading">Three things Parmana does</h2>
          <ol className="principles">
            {highlights.map((item, index) => (
              <li key={item.title}>
                <span className="number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block" aria-labelledby="audience-heading">
        <div className="wrap">
          <h2 id="audience-heading">Why it matters to everyone</h2>
          <ol className="principles">
            {audiences.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
          <blockquote className="statement">
            <p className="statement-lead">Our vision</p>
            <p className="statement-text">
              &ldquo;Confidence in an action should come from verification, not reputation. Every authorised action should
              be open to independent checking.&rdquo;
            </p>
            <p className="statement-by">Pavan Charak, Founder</p>
          </blockquote>
        </div>
      </section>

      <CallToAction heading="Talk to us about your agents." text="Tell us the action your agents take most often, and we will look at its rules and approvals together." />

      <section className="block soft" aria-labelledby="connect-heading">
        <div className="wrap">
          <h2 id="connect-heading">Connect with the founder</h2>
          <p className="body">Questions about Parmana are welcome on LinkedIn.</p>
          <a className="button secondary" href={linkedIn} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
