import type { Metadata } from "next";
import { CallToAction, SiteFooter, SiteHeader, booking } from "./components/SiteChrome";

const pageTitle = "Authority for AI agents, enforced outside the prompt";
const pageDescription =
  "Parmana checks every action an AI agent takes against the limits you set, requires signed approval where policy needs it, and records what was authorized and what happened.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: { title: pageTitle, description: pageDescription, url: "/", siteName: "Parmana Systems", type: "website" },
  twitter: { card: "summary", title: pageTitle, description: pageDescription },
};

const problems = [
  {
    title: "A prompt is not a control",
    text: "“Only refund up to 500” is an instruction the model can ignore, and text injected into its context can override it.",
  },
  {
    title: "Credentials should not reach the agent",
    text: "On supported paths, the gateway resolves connector credentials, so the agent calling the API never receives them.",
  },
  {
    title: "Logs are a claim, not evidence",
    text: "Logs written by the system that acted show what it says happened. Parmana writes signed records that can be checked independently.",
  },
];

const steps = [
  {
    title: "Declare",
    text: "The agent sends one request, POST /transactions, with a caller key and a Business Transaction. Declaring and executing are one call.",
  },
  {
    title: "Authorize",
    text: "Parmana loads the named policy version and checks governance, signals and bindings. It returns approve or reject. A rejected action never runs.",
  },
  {
    title: "Approve where required",
    text: "If the policy requires it, a trusted person gives a signed approval. No approval, no action, including reads.",
  },
  {
    title: "Execute once, then prove",
    text: "The gateway releases one approved action through a connector and writes a signed record of what was authorized and what happened.",
  },
];

const permissions = [
  {
    title: "Named actions",
    text: "Every capability has a name, such as razorpay:refund, so it is obvious what an agent is asking to do.",
  },
  {
    title: "Granted per caller",
    text: "Each caller gets only the actions it needs. Anything not granted is refused and recorded.",
  },
  {
    title: "Limits and approvals",
    text: "Each granted action can carry its own limits. Requests above a limit go to a trusted person for signed approval.",
  },
];

const useCases = [
  { title: "Refunds", text: "Refunds under the set limit go ahead. Anything above it waits for approval." },
  { title: "Vendor payments", text: "Payments are checked against approved vendors, amounts and approvers before they run." },
  { title: "CRM updates", text: "An agent can update a deal stage. Changes to amounts or ownership go to review." },
  { title: "Pull requests", text: "An agent can open a change. Merging needs the approval the policy names." },
];

const sampleRequest = `POST /transactions
Authorization: Bearer <caller key>
Content-Type: application/json

{
  "businessTransactionId": "3f6c2a1e-8b4d-4e7a-9c1f-2d5b7a9e0f11",
  "metadata": {
    "businessTransactionId": "3f6c2a1e-8b4d-4e7a-9c1f-2d5b7a9e0f11",
    "tenantId": "acme-finance",
    "sourceSystem": "support-agent"
  },
  "authority": {
    "principalId": "agent:support-refunds",
    "authorityType": "delegated"
  },
  "intent": {
    "action": "razorpay:refund",
    "parameters": { "amount": 12000, "currency": "INR" }
  },
  "policy": { "name": "refund-limits", "version": "3" }
}`;

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-heading">
        <div className="wrap hero-inner">
          <p className="eyebrow">For engineering teams building AI agents</p>
          <h1 id="hero-heading">Authority for AI agents, enforced outside the prompt.</h1>
          <p className="lead">
            Parmana checks every action an agent takes against the limits you set, requires signed
            approval where your policy needs it, and records what was authorized and what happened.
          </p>
          <div className="cta-row">
            <a className="button" href={booking} target="_blank" rel="noopener noreferrer">Talk to us</a>
            <a className="button secondary" href="https://docs.parmanasystems.com" target="_blank" rel="noopener noreferrer">
              Read the docs
            </a>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="problem-heading">
        <div className="wrap">
          <p className="eyebrow">The problem</p>
          <h2 id="problem-heading">Agents that move money or change data need controls they cannot talk their way past.</h2>
          <div className="grid-3">
            {problems.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="block soft" aria-labelledby="flow-heading">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2 id="flow-heading">Declare, authorize, execute, prove.</h2>
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

      <section className="block" aria-labelledby="request-heading">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Integration</p>
            <h2 id="request-heading">One request in front of the action you need to control.</h2>
            <p className="body">
              Your agent code changes in one place: the call that used to go straight to the API now goes
              to Parmana. The request names the action, the parameters the policy depends on, and the
              policy version in effect. The fields below are illustrative.
            </p>
          </div>
          <pre className="code" aria-label="Example request to Parmana">
            <code>{sampleRequest}</code>
          </pre>
        </div>
      </section>

      <section className="block band" aria-labelledby="verify-heading">
        <div className="wrap split-text">
          <div>
            <p className="eyebrow">Verification</p>
            <h2 id="verify-heading">Check a record without trusting us.</h2>
          </div>
          <div>
            <p className="body">
              Each authorization and execution produces a signed record. Anyone can check its integrity
              and signatures using only the public keys they choose to trust, without access to our
              database or runtime. Verification shows the record is intact and was signed by a trusted
              key. It does not, on its own, prove that an external action happened.
            </p>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="permissions-heading">
        <div className="wrap">
          <p className="eyebrow">Permissions</p>
          <h2 id="permissions-heading">Each agent gets only the actions it is granted.</h2>
          <div className="grid-3">
            {permissions.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="block soft" aria-labelledby="use-cases-heading">
        <div className="wrap">
          <p className="eyebrow">Where teams start</p>
          <h2 id="use-cases-heading">Try it on the riskiest action your agent has.</h2>
          <div className="grid-2">
            {useCases.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="body">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="video-heading">
        <div className="wrap">
          <p className="eyebrow">Video</p>
          <h2 id="video-heading">See how a request is checked.</h2>
          <div className="video-embed">
            <iframe
              src="https://www.youtube-nocookie.com/embed/B3G1Cvir5nc"
              title="Parmana video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CallToAction
        heading="Put one agent action behind Parmana this week."
        text="Pick the riskiest action your agent has, route it through the gate in a test environment, and verify one record offline."
      />

      <SiteFooter />
    </main>
  );
}
