import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

const title = "How Parmana fits";
const description =
  "A simple picture of how Parmana sits between your AI agent and your systems, checks each action against your policies, and keeps a record.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/architecture" },
  openGraph: { title, description, url: "/architecture", siteName: "Parmana Systems", type: "website" },
  twitter: { card: "summary", title, description },
};

const steps = [
  { title: "The agent asks", text: "An AI agent asks to do something, such as issue a refund." },
  { title: "Parmana checks it", text: "Parmana compares the request with your policies. If it doesn't fit, it stops." },
  { title: "A person approves, if needed", text: "Where your policy says so, a named person must approve before anything happens." },
  { title: "Your system acts, once", text: "Your own payment or customer system carries out the approved action one time, and a record is kept." },
];

export default function ArchitecturePage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="How it fits" title="Your policies. Every action checked. A record kept.">
        <p>Parmana sits between your AI agent and your systems. Nothing reaches your systems without passing through it.</p>
      </PageIntro>

      <section className="block" aria-label="Picture of how Parmana fits">
        <div className="wrap">
          <div className="picture" role="img" aria-label="Your policies feed into Parmana. An AI agent sends a request to Parmana, which passes approved requests to your systems. A person approves when the policy requires it, and every action is recorded.">
            <div className="pic-top">
              <div className="pic-box policy">
                <strong>Your policies</strong>
                <span>What is allowed, and what needs approval</span>
              </div>
            </div>
            <div className="pic-row">
              <div className="pic-box">
                <strong>AI agent</strong>
                <span>Asks to act</span>
              </div>
              <div className="pic-arrow" aria-hidden="true">→</div>
              <div className="pic-box hero-box">
                <strong>Parmana</strong>
                <span>Checks every request</span>
              </div>
              <div className="pic-arrow" aria-hidden="true">→</div>
              <div className="pic-box">
                <strong>Your systems</strong>
                <span>Payments, customers, email</span>
              </div>
            </div>
            <div className="pic-bottom">
              <div className="pic-arrow down" aria-hidden="true">↓</div>
              <div className="pic-row small">
                <div className="pic-box">
                  <strong>A person approves</strong>
                  <span>Only when your policy asks</span>
                </div>
                <div className="pic-arrow" aria-hidden="true">→</div>
                <div className="pic-box">
                  <strong>A record is kept</strong>
                  <span>What was asked, what was allowed, what was done</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block soft" aria-labelledby="steps-heading">
        <div className="wrap">
          <p className="eyebrow">In four steps</p>
          <h2 id="steps-heading">What happens each time.</h2>
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

      <CallToAction
        heading="Want to see it with your own systems?"
        text="Tell us which system your agent uses first, and we'll show you how the rules apply to it."
      />
      <SiteFooter />
    </main>
  );
}
