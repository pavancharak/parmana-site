import type { Metadata } from "next";
import { SiteFooter, SiteHeader, PageIntro } from "../components/SiteChrome";

const title = "License";
const description = "The Parmana repository, including the server, the SDKs and the offline verifier, is licensed under the Apache License 2.0.";
const licenseUrl = "https://github.com/pavancharak/parmana-core/blob/main/LICENSE";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/license" },
  openGraph: { title, description, url: "/license", siteName: "Parmana Systems", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function LicensePage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="License" title="Open source, under Apache 2.0.">
        <p>Read, use, and build on Parmana under a licence your legal team already knows.</p>
      </PageIntro>

      <section className="block">
        <div className="wrap">
          <div className="license-highlight" role="note">
            <p className="license-statement">
              The Parmana repository, including the server, the SDKs and the offline verifier, is licensed under the Apache License 2.0.
            </p>
            <div className="cta-row">
              <a className="button" href={licenseUrl} target="_blank" rel="noopener noreferrer">Read the licence</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
