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
        <h1>Vision</h1>
        <img className="hero-image" src="/hero.png" alt="" width="2048" height="768" />
        <h2>Mission</h2>
        <p className="body">{mission}</p>
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
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Parmana Systems</span>
      </footer>
    </main>
  );
}
