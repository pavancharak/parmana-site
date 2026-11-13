import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

const title = "Vision";
const description = "A world where institutions can be trusted, authority can be established, and evidence can be independently verified.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/vision" },
  openGraph: { title, description, url: "/vision", siteName: "Parmana Systems", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function VisionPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Vision" title="A world where institutions can be trusted.">
        <p>Authority can be established. Evidence can be independently verified.</p>
      </PageIntro>

      <section className="block">
        <div className="wrap">
          <ul className="principles">
            <li>
              <h2>Authority can be established</h2>
              <p className="body">What an AI agent is allowed to do is written down in advance, not left to its own interpretation.</p>
            </li>
            <li>
              <h2>Evidence can be independently verified</h2>
              <p className="body">A record of each decision can be checked by someone outside the system that made it.</p>
            </li>
          </ul>
        </div>
      </section>

      <CallToAction
        heading="Help build this"
        text="If you work on authority, audit or AI governance, we would like to hear from you."
      />
      <SiteFooter />
    </main>
  );
}
