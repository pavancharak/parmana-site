const vision = "A world where actions taken on people's behalf can be trusted, because they can always be checked.";

const mission =
  "Help any organisation set clear limits on what its people, systems and AI agents can do, get the right person to approve each action, and keep records that anyone can check.";

const principles = [
  { title: "The same rules for everyone", text: "The same rules apply whether a person, a computer program or an AI agent does the action, and whatever tools it uses." },
  { title: "Limits are written down", text: "Rules are clear, recorded and open to challenge. They are not hidden in instructions or left to habit." },
  { title: "Anyone can check the record", text: "Anyone can check a record without an account or internet access. The checker also says what it cannot confirm, such as whether a signing key really belongs to a given company." },
  { title: "When in doubt, stop", text: "If something is set up wrong or approval is unclear, the action stops instead of guessing." },
];

export default function Home() {
  return (
    <main>
      <div className="wrap hero">
        <div className="hero-split">
          <div>
            <h1>Vision</h1>
            <p className="lead">{vision}</p>
            <h2>Mission</h2>
            <p className="body">{mission}</p>
          </div>
          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/N3qC9jpuViA"
              title="Parmana explainer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <section className="block soft">
        <div className="wrap">
          <h2>Principles</h2>
          <ol className="items">
            {principles.map((principle) => (
              <li key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="closing">
        <div className="wrap">
          <h2>Want to talk about this?</h2>
          <p>Connect with Pavan Charak on LinkedIn.</p>
          <a className="button" href="https://www.linkedin.com/in/pavancharak/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
        </div>
      </section>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Parmana Systems</span>
      </footer>
    </main>
  );
}
