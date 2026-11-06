import { SiteFooter, SiteHeader, booking, contactEmail } from "./components/SiteChrome";
import PaymentCheck from "./components/PaymentCheck";

const capabilities = [
  { title: "READ", text: "Decide what information AI agents can access." },
  { title: "WRITE", text: "Decide what information AI agents can change." },
  { title: "EXECUTE", text: "Decide which actions AI agents can perform." },
];

const flow = [
  "Your business sets the rules.",
  "An AI agent requests an action.",
  "Parmana checks whether it is allowed.",
  "The action proceeds or is blocked.",
  "A record of the decision is created.",
];

const useCases = [
  {
    title: "Payments",
    text: "A refund within the approved limit goes out. Anything above it waits for a person to approve.",
  },
  {
    title: "Finance",
    text: "Journal entries post only from accounts that are approved to post them.",
  },
  {
    title: "Procurement",
    text: "An AI assistant can raise a purchase request. Only the right manager can approve it.",
  },
  {
    title: "Customer operations",
    text: "An agent can update a delivery address. It cannot change a bank account without a person checking.",
  },
  {
    title: "Enterprise workflows",
    text: "Access requests follow the approval path your business set, and every step is recorded.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      {/* 1. Hero */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="wrap split">
          <div>
            <h1 id="hero-heading">Your business. Your rules. Even when AI acts.</h1>
            <p className="vision-statement">
              AI agents can take action across your business. Parmana makes sure they only do what you have allowed
              them to do.
            </p>
            <div className="cta-row">
              <a className="button" href="#platform">Explore Parmana</a>
              <a className="button secondary" href="/how-it-works">See How It Works</a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <svg viewBox="0 0 560 320" role="img">
              <defs>
                <linearGradient id="line" x1="0" x2="1">
                  <stop offset="0" stopColor="#4f46e5" />
                  <stop offset="1" stopColor="#2563eb" />
                </linearGradient>
              </defs>
              <rect x="20" y="120" width="130" height="80" rx="16" fill="#f5f7ff" stroke="#c7d2fe" />
              <text x="85" y="166" textAnchor="middle" fontSize="16" fill="#1e1b4b" fontFamily="inherit">AI agent</text>

              <path d="M150 160 H215" stroke="url(#line)" strokeWidth="3" fill="none" />
              <rect x="215" y="100" width="130" height="120" rx="20" fill="#1e1b4b" />
              <text x="280" y="164" textAnchor="middle" fontSize="18" fontWeight="600" fill="#ffffff" fontFamily="inherit">Parmana</text>

              <path d="M345 160 H410" stroke="url(#line)" strokeWidth="3" fill="none" />
              <rect x="410" y="60" width="130" height="60" rx="14" fill="#f5f7ff" stroke="#c7d2fe" />
              <rect x="410" y="130" width="130" height="60" rx="14" fill="#f5f7ff" stroke="#c7d2fe" />
              <rect x="410" y="200" width="130" height="60" rx="14" fill="#f5f7ff" stroke="#c7d2fe" />
              <text x="475" y="96" textAnchor="middle" fontSize="14" fill="#1e1b4b" fontFamily="inherit">Payments</text>
              <text x="475" y="166" textAnchor="middle" fontSize="14" fill="#1e1b4b" fontFamily="inherit">Customers</text>
              <text x="475" y="236" textAnchor="middle" fontSize="14" fill="#1e1b4b" fontFamily="inherit">Records</text>
            </svg>
          </div>
        </div>
      </section>

      {/* 2. Can act, stays in control */}
      <section className="block" aria-labelledby="control-heading">
        <div className="wrap">
          <h2 id="control-heading">AI can act. Your business stays in control.</h2>
          <p className="body">
            An AI agent might initiate a payment, update a customer record or approve a request.
          </p>
          <p className="body">
            But just because an agent can take an action does not mean it should be allowed to.
          </p>
          <p className="body">Parmana checks whether the action is allowed before it happens.</p>
        </div>
      </section>

      {/* 3. Platform: READ, WRITE, EXECUTE */}
      <section id="platform" className="block soft" aria-labelledby="platform-heading">
        <div className="wrap">
          <h2 id="platform-heading">You decide what AI can do.</h2>
          <ul className="principles">
            {capabilities.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. How it works */}
      <section id="how-it-works" className="block" aria-labelledby="flow-heading">
        <div className="wrap">
          <h2 id="flow-heading">Every action has to follow your rules.</h2>
          <ol className="steps">
            {flow.map((step) => (
              <li key={step}>
                <p className="body">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Examples, interactive */}
      <section className="block soft" aria-labelledby="examples-heading">
        <div className="wrap">
          <h2 id="examples-heading">Not allowed? It doesn&apos;t happen.</h2>
          <p className="body">Choose a payment to see what Parmana does with it.</p>
          <PaymentCheck />
        </div>
      </section>

      {/* 6. Records */}
      <section className="block" aria-labelledby="records-heading">
        <div className="wrap">
          <h2 id="records-heading">Know what happened. Know why.</h2>
          <p className="body">
            Every decision creates a record showing what was requested, which business rule applied and what happened
            next.
          </p>
          <p className="body">Your business has evidence of how AI agents acted.</p>
        </div>
      </section>

      {/* 7. Use cases */}
      <section id="use-cases" className="block soft" aria-labelledby="use-cases-heading">
        <div className="wrap">
          <h2 id="use-cases-heading">Built for the way businesses work.</h2>
          <ul className="principles">
            {useCases.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Closing call to action */}
      <section className="block" aria-labelledby="closing-heading">
        <div className="wrap">
          <h2 id="closing-heading">AI moves fast. Your rules stay in control.</h2>
          <p className="body">
            Give AI agents room to work without giving them authority your business never approved.
          </p>
          <div className="cta-row">
            <a className="button" href={booking} target="_blank" rel="noopener noreferrer">Talk to Parmana</a>
            <a className="button secondary" href="#platform">See the Platform</a>
          </div>
          <p className="body" style={{ marginTop: "1.5rem" }}>
            Or email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
