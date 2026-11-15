import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

const title = "Team";
const description = "The people building Parmana Systems.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/team" },
  openGraph: { title, description, url: "/team", siteName: "Parmana Systems", type: "website" },
  twitter: { card: "summary", title, description },
};

const team = [
  {
    name: "Pavan Dev Singh Charak",
    role: "Founder and Product Lead",
    text: "Leads Parmana's product and architecture. Built the first version of the authorisation and enforcement layer.",
    github: "https://github.com/pavancharak",
  },
  {
    name: "Mohinder Singh Charak",
    role: "Co-Founder and Director",
    text: "Co-founder and director of Parmana Systems.",
  },
  {
    name: "K. Venkata Abhigna",
    role: "Partnership Manager",
    text: "Leads partnerships, working with teams that apply AI automation in regulated industries.",
  },
];

export default function TeamPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Team" title="The people behind Parmana.">
        <p>A small team building controls for AI agents that act on real systems.</p>
      </PageIntro>

      <section className="block">
        <div className="wrap">
          <div className="grid-3" style={{ marginTop: 0 }}>
            {team.map((person) => (
              <div className="card" key={person.name}>
                <h2 style={{ fontSize: "1.3rem" }}>{person.name}</h2>
                <p className="eyebrow" style={{ marginTop: 10, marginBottom: 0 }}>{person.role}</p>
                <p className="body" style={{ marginTop: 14 }}>{person.text}</p>
                {person.github ? (
                  <p style={{ marginTop: 14 }}>
                    <a href={person.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        heading="Work with the team."
        text="For partnerships, design reviews or research collaboration, book a call."
      />
      <SiteFooter />
    </main>
  );
}
