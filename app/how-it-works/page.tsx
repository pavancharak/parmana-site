import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "How Parmana works in connected workflows",
  description: "See how Parmana checks requests routed through configured business control paths and records the result.",
  alternates: {
    canonical: "/how-it-works"
  },
  openGraph: {
    title: "How Parmana works in connected workflows",
    description: "See how Parmana checks requests routed through configured business control paths and records the result.",
    url: "/how-it-works",
    siteName: "Parmana Systems",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "How Parmana works in connected workflows",
    description: "See how Parmana checks requests routed through configured business control paths and records the result."
  }
};

const points = [
  {
    title: "Rules you write down",
    text: "Your rules say who can do what, with which money or data, and when. Anyone in your organisation can read them.",
  },
  {
    title: "Approval where it matters",
    text: "For actions you configure, a named person can be required to approve before the request continues.",
  },
  {
    title: "Checked before it runs",
    text: "Each request routed through the configured control path is checked against the rules at the time it is requested.",
  },
  {
    title: "A record anyone can check",
    text: "A signed record can be checked independently for hash integrity and supported signature validity using trusted keys supplied to the verifier.",
  },
];

export default function HowItWorks() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="How it works" title="A clear record of requests handled by your connected control path.">
        <p>
          Parmana sits in a configured path between an AI workflow and the systems you connect. It checks requests routed
          through that path against the business rules and approval requirements you configure. Activity that bypasses
          the configured path is outside this control.
        </p>
      </PageIntro>

      <section className="block">
        <div className="wrap">
          <ul className="principles">
            {points.map((point) => (
              <li key={point.title}>
                <h2>{point.title}</h2>
                <p className="body">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction
        heading="See it with your own tools"
        text="Bring one workflow you care about, and we will show you how Parmana would check it."
      />

      <SiteFooter />
    </main>
  );
}
