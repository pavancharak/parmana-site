const vision = "A world where actions taken on people's behalf can be trusted, because they can always be checked.";

const philosophy = "Trust should not depend on believing what happened. It should depend on being able to check what happened.";

const mission =
  "Help organisations define what their people, systems and AI agents are allowed to do, ensure the right approvals happen before actions are taken, and create records that anyone can independently verify.";

const principles = [
  { title: "The same rules for everyone", text: "The same rules apply whether a person, a computer program or an AI agent does the action, and whatever tools it uses." },
  { title: "Limits are written down", text: "Rules are clear, recorded and open to challenge. They are not hidden in instructions or left to habit." },
  { title: "Anyone can check the record", text: "Anyone can check a record without an account or internet access. The checker also says what it cannot confirm, such as whether a signing key really belongs to a given company." },
  { title: "When in doubt, stop", text: "If something is set up wrong or approval is unclear, the action stops instead of guessing." },
];

const benefits = [
  { title: "Citizens", text: "Citizens can trust the institutions that act on their behalf, and have more confidence in the bureaucracy that serves them." },
  { title: "Customers", text: "Customers can trust organisations that show what was approved and what happened." },
  { title: "Partners", text: "Partners can rely on records they can check themselves, without relying on the other party's word." },
  { title: "Businesses", text: "Businesses can prove their actions stayed within their own limits, which builds trust with everyone they work with." },
];

const linkedIn = "https://www.linkedin.com/in/pavancharak/";
const docs = "https://docs.parmanasystems.com";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="/">Parmana Systems</a>
        <nav aria-label="Site">
          <a href={docs} target="_blank" rel="noopener noreferrer">Docs</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="vision-heading">
        <div className="wrap split">
          <div>
            <h1 id="vision-heading">Vision</h1>
            <p className="vision-statement">{vision}</p>
            <p className="philosophy">{philosophy}</p>
            <h2 id="mission-heading">Mission</h2>
            <p className="body">{mission}</p>
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

      <section className="block soft" aria-labelledby="principles-heading">
        <div className="wrap">
          <h2 id="principles-heading">Principles</h2>
          <ol className="principles">
            {principles.map((principle, index) => (
              <li key={principle.title}>
                <span className="number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block soft" aria-labelledby="benefits-heading">
        <div className="wrap">
          <h2 id="benefits-heading">Why it matters</h2>
          <ol className="principles">
            {benefits.map((benefit) => (
              <li key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block" aria-labelledby="talk-heading">
        <div className="wrap">
          <h2 id="talk-heading">Want to talk about this?</h2>
          <p className="body">Connect with Pavan Charak on LinkedIn.</p>
          <a className="button" href={linkedIn} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Parmana Systems</span>
          <nav aria-label="Footer">
            <a href={docs} target="_blank" rel="noopener noreferrer">Docs</a>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
