import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Who Parmana is for",
  description: "For organisations and partners who need defined controls and independently checkable records for selected AI workflows.",
  alternates: {
    canonical: "/who-its-for"
  },
  openGraph: {
    title: "Who Parmana is for",
    description: "For organisations and partners who need defined controls and independently checkable records for selected AI workflows.",
    url: "/who-its-for",
    siteName: "Parmana Systems",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Who Parmana is for",
    description: "For organisations and partners who need defined controls and independently checkable records for selected AI workflows."
  }
};

const audiences = [
  {
    title: "Businesses using AI",
    text: "Apply configured limits to selected AI workflows routed through Parmana, and keep records of the checks those workflows perform.",
  },
  {
    title: "Customers",
    text: "Check whether a signed record has changed and whether its supported signatures validate. The record does not independently prove that an external action occurred.",
  },
  {
    title: "Partners",
    text: "Independently check the integrity and supported signatures of records shared with you, using public keys you trust.",
  },
  {
    title: "Regulators and auditors",
    text: "Review the cryptographic integrity of signed records. Assess the underlying rules, approvals and external events separately.",
  },
];

export default function WhoItsFor() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Who it's for" title="For teams that need to check selected AI activity.">
        <p>Parmana is for organisations that route selected AI workflows through configured control paths, and for the people who need to review the resulting records. Activity outside those paths is not covered.</p>
      </PageIntro>

      <section className="block">
        <div className="wrap">
          <ul className="principles">
            {audiences.map((audience) => (
              <li key={audience.title}>
                <h2>{audience.title}</h2>
                <p className="body">{audience.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction
        heading="Let's talk about your business"
        text="Tell us what your AI tools do, and we will suggest where to start."
      />

      <SiteFooter />
    </main>
  );
}
