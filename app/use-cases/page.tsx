import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Use cases | Parmana Systems",
  description: "Everyday actions AI agents take for a business, such as refunds, supplier payments and customer updates, and how Parmana keeps each one within your rules.",
  alternates: { canonical: "/use-cases" },
};

const cases = [
  {
    title: "Refunds",
    text: "An agent can refund up to the amount you set. Anything larger waits for a person's approval.",
  },
  {
    title: "Supplier payments",
    text: "Payments go out only after sign-off. The payment system never sees the agent's passwords.",
  },
  {
    title: "Customer deals",
    text: "Changes to deal stages and amounts follow your rules, and each change is recorded.",
  },
  {
    title: "Code changes",
    text: "An agent can suggest a merge or a release. It goes ahead only once the required approval is on record.",
  },
  {
    title: "Team chat",
    text: "Messages to shared channels follow the same rules, so the agent says only what it is allowed to say.",
  },
  {
    title: "Your own systems",
    text: "Any other system can be connected. It receives only the actions you have approved, and each one runs once.",
  },
];

export default function UseCasesPage() {
  return (
    <main>
      <SiteHeader />

      <PageIntro eyebrow="Use cases" title="Where agents act for your business, you set the limits.">
        <p>
          Agents can issue refunds, pay suppliers, update customer deals, merge code and post to team chat. Each of these
          needs a clear limit and a record you can check later.
        </p>
      </PageIntro>

      <section className="block" aria-labelledby="cases-heading">
        <div className="wrap">
          <h2 id="cases-heading">Common actions, handled the same way</h2>
          <ol className="principles">
            {cases.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallToAction heading="Start with one everyday task." text="Tell us the action your agents take most often, and we will set up its rules and approvals together." />

      <SiteFooter />
    </main>
  );
}
