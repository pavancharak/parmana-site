const mission =
  "Help any organisation set clear limits on what its people, systems and AI agents can do, get the right person to approve each action, and keep records that anyone can check.";

const principles = [
  { title: "Actions, not actors, and not technologies", text: "The same rules apply to every actor and every stack. Parmana governs what is done, not which model, vendor or cryptographic scheme does it." },
  { title: "Limits are explicit", text: "Rules are written down, versioned and open to dispute, not hidden in prompts, habits or model behaviour." },
  { title: "Trust doesn't rest on us", text: "Anyone can verify a record offline, with no account and no network. The verifier states what it cannot prove, such as who owns a key." },
  { title: "Fail closed", text: "When a system is misconfigured or unsure, it stops rather than guessing." },
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
