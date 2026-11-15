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

const pillars = [
  {
    title: "Authority can be established",
    text: "What an AI agent is allowed to do is written down in advance, not left to its own interpretation.",
  },
  {
    title: "Evidence can be independently verified",
    text: "A record of each decision can be checked by someone outside the system that made it.",
  },
];

export default function VisionPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Vision" title="A world where institutions can be trusted.">
        <p>Authority can be established. Evidence can be independently verified.</p>
      </PageIntro>

      <section className="block">
        <div className="wrap">
          <div className="grid-2" style={{ marginTop: 0 }}>
            {pillars.map((item) => (
              <div className="card" key={item.title}>
                <h2 style={{ fontSize: "1.4rem" }}>{item.title}</h2>
                <p className="body" style={{ marginTop: 14 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        heading="Help build this."
        text="If you work on authority, audit or AI governance, we would like to hear from you."
      />
      <SiteFooter />
    </main>
  );
}
