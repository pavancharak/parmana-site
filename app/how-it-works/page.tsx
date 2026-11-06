import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

const points = [
  {
    title: "Rules you write down",
    text: "Your rules say who can do what, with which money or data, and when. Anyone in your organisation can read them.",
  },
  {
    title: "Approval where it matters",
    text: "Some actions need a named person to say yes first. Nothing runs on an instruction alone.",
  },
  {
    title: "Checked before it runs",
    text: "Each action is compared with the rules at the moment it is requested, not only when the rules were written.",
  },
  {
    title: "A record anyone can check",
    text: "The decision and the result are saved in a form that cannot be changed quietly. A third party can check it on their own computer.",
  },
];

export default function HowItWorks() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="How it works" title="A clear record of what AI did, and why it was allowed.">
        <p>
          Parmana sits between your AI tools and the things they do. It makes sure every action follows the rules you
          set, and it keeps a record you can show to a customer, a partner or a regulator.
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
