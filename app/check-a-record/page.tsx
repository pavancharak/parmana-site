import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Check a signed Parmana record",
  description: "Run the offline verifier to check a record hash and supported signatures against trusted public keys you supply. This does not establish whether external actions occurred.",
  alternates: {
    canonical: "/check-a-record"
  },
  openGraph: {
    title: "Check a signed Parmana record",
    description: "Run the offline verifier to check a record hash and supported signatures against trusted public keys you supply. This does not establish whether external actions occurred.",
    url: "/check-a-record",
    siteName: "Parmana Systems",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Check a signed Parmana record",
    description: "Run the offline verifier to check a record hash and supported signatures against trusted public keys you supply. This does not establish whether external actions occurred."
  }
};

export default function CheckARecord() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Check a record" title="You do not have to take our word for it.">
        <p>
          The offline verifier checks whether a signed record matches its recorded hash and whether its supported
          signatures validate against trusted public keys you provide. You do not need a Parmana account or an
          internet connection to run the check.
        </p>
      </PageIntro>

      <section className="block">
        <div className="wrap">
          <ol className="steps">
            <li>
              <h2>Get the record</h2>
              <p className="body">The organisation gives you the signed record. You also need the public keys and trust details you intend to rely on, obtained through a channel you trust.</p>
            </li>
            <li>
              <h2>Check it on your own computer</h2>
              <p className="body">The verifier recalculates the record hash and checks supported signatures against the trust material you
              provide. It does not decide whether a business rule was appropriate or whether an approval was valid in
              the organisation's real-world process.</p>
            </li>
            <li>
              <h2>Understand what was verified</h2>
              <p className="body">A successful check means the verified record content matches its hash and the supported signatures validate
              against the trusted keys you supplied. It does not independently prove that an external payment,
              account change or other action actually happened.</p>
            </li>
          </ol>
        </div>
      </section>

      <CallToAction
        heading="Need help using the verifier?"
        text="Use the verifier source and instructions to run the check on your own computer. Do not share private keys or sensitive records."
      />

      <SiteFooter />
    </main>
  );
}
