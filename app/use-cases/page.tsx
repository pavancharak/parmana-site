import type { Metadata } from "next";
import { CallToAction, PageIntro, SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Use cases | Parmana Systems",
  description: "Actions AI agents take on behalf of a business, such as refunds, vendor payments, CRM updates and pull requests, and how Parmana checks each one.",
  alternates: { canonical: "/use-cases" },
};

const cases = [
  {
    title: "Refunds",
    text: "An agent may issue a refund only within the limit your policy sets. Anything above it waits for a person's approval.",
  },
  {
    title: "Vendor payments",
    text: "Payments need an explicit, signed approval before they are released. The payment system never sees the agent's credentials.",
  },
  {
    title: "CRM updates",
    text: "Changes to deal stages and amounts are checked against policy, and each change is recorded so it can be read back and audited.",
  },
  {
    title: "Pull requests and releases",
    text: "An agent may propose a merge or a release. Parmana releases it only when the required approval is on record.",
  },
  {
    title: "Team channels",
    text: "Messages an agent posts to a shared channel go through the same check, so the agent can only say what the policy allows.",
  },
  {
    title: "Your own systems",
    text: "Any other system can be connected as an external connector. It receives only actions that were approved, once, as signed releases.",
  },
];

export default function UseCasesPage() {
  return (
    <main>
      <SiteHeader />

      <PageIntro eyebrow="Use cases" title="Where agents act for a business, Parmana sets the limit.">
        <p>
          Companies want AI agents to issue refunds, pay vendors, update CRM deals, merge pull requests and post to team
          channels. Each of these needs a written limit and a record that can be checked afterwards.
        </p>
      </PageIntro>

      <section className="block" aria-labelledby="cases-heading">
        <div className="wrap">
          <h2 id="cases-heading">Common actions, checked the same way</h2>
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

      <CallToAction heading="Start with one workflow." text="Tell us the action your agents take most often, and we will set up the policy and the approval for it together." />

      <SiteFooter />
    </main>
  );
}
