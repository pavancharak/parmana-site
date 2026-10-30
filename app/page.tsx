import { Footer, Header, bookingUrl } from "../components/Site";

const steps = [
  { title: "Set the limits", text: "Decide what each person and system may do, how far they can go, and who approves anything beyond that." },
  { title: "Check every action", text: "Each action is compared with your limits before it runs. If approval is missing or unclear, it stops." },
  { title: "Keep the record", text: "Each action gets a record of who approved it, what ran, and whether it matched. Anyone can check that record." },
];

export default function Home() {
  return (
    <main>
      <Header />
      <div className="wrap hero">
        <p className="label">The trust layer for every action</p>
        <h1>Every action stays within what your business allowed.</h1>
        <p className="lead">Parmana checks each action against the limits you set, whether a person or a machine takes it, and keeps a record anyone can verify.</p>
        <div className="actions">
          <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book a meeting</a>
          <a className="text-link" href="/vision">Read our vision</a>
        </div>
      </div>
      <section className="block soft" id="how-it-works">
        <div className="wrap">
          <p className="label">How it works</p>
          <h2>Three steps. Every action checked.</h2>
          <ol className="items">
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="closing">
        <div className="wrap">
          <h2>See how it fits your business.</h2>
          <p>Tell us where you need a clear line between what an AI agent can suggest and what it is allowed to do.</p>
          <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book a meeting</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
