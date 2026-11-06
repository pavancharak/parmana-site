import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

const audiences = [
  {
    title: "Businesses using AI",
    text: "Show that your AI tools stayed within the limits you set, and keep a record of every important decision.",
  },
  {
    title: "Customers",
    text: "See what was approved and what happened, instead of relying on the company's word.",
  },
  {
    title: "Partners",
    text: "Check records yourself, rather than depending on the other side to report them accurately.",
  },
  {
    title: "Regulators and auditors",
    text: "Get clear, checkable evidence of how automated decisions were made and approved.",
  },
];

export default function WhoItsFor() {
  return (
    <main>
      <SiteHeader />
      <PageIntro eyebrow="Who it's for" title="For anyone who needs to trust what AI does.">
        <p>Parmana helps organisations and the people they work with, so that decisions can be trusted and checked.</p>
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
