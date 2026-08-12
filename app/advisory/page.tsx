import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "AI & Autonomous Systems Advisory | Parmana",
  description:
    "AI governance, AI security, autonomous-systems architecture, enterprise architecture, and execution authorization advisory from Parmana.",
};

const services = [
  {
    title: "AI Governance",
    description:
      "Design governance mechanisms that remain meaningful when AI systems can act autonomously.",
  },
  {
    title: "AI Security",
    description:
      "Review the security boundaries around agents, identities, tools, APIs, and execution paths.",
  },
  {
    title: "Autonomous Systems Architecture",
    description:
      "Assess architectures where AI systems can initiate consequential actions.",
  },
  {
    title: "Execution Authorization",
    description:
      "Design controls that determine whether a proposed action is permitted to become real-world execution.",
  },
  {
    title: "Enterprise Architecture",
    description:
      "Evaluate how autonomous systems interact with existing enterprise systems and systems of record.",
  },
  {
    title: "Architecture Reviews",
    description:
      "Independently assess trust boundaries, execution paths, authorization mechanisms, and architectural risks.",
  },
];

const stages = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the autonomous system, business process, actors, tools, data, and consequential actions.",
  },
  {
    number: "02",
    title: "Map",
    description:
      "Map identities, capabilities, access paths, policies, execution paths, and trust boundaries.",
  },
  {
    number: "03",
    title: "Review",
    description:
      "Identify architectural gaps where capability or access can exceed institutional authority.",
  },
  {
    number: "04",
    title: "Recommend",
    description:
      "Produce concrete architecture, control boundaries, policy recommendations, and implementation priorities.",
  },
];

const engagements = [
  {
    title: "Architecture Review",
    description:
      "Independent assessment of an autonomous-system architecture, including trust boundaries, execution paths, authorization mechanisms, and integrations with systems of record.",
  },
  {
    title: "AI Security Review",
    description:
      "Review agent identities, tools, APIs, credentials, access paths, and execution boundaries.",
  },
  {
    title: "Autonomous Systems Risk Assessment",
    description:
      "Identify where autonomous capability can exceed intended organizational authority.",
  },
  {
    title: "AI Governance Architecture",
    description:
      "Translate governance requirements into concrete architectural control boundaries.",
  },
  {
    title: "Execution Authorization Architecture",
    description:
      "Design the authorization layer between autonomous decisions and consequential execution.",
  },
  {
    title: "Enterprise AI Architecture Review",
    description:
      "Assess how autonomous systems interact with existing enterprise architecture and operational controls.",
  },
];

export default function AdvisoryPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <p className="label">AI &amp; AUTONOMOUS SYSTEMS ADVISORY</p>

            <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-6xl lg:text-7xl">
              Before autonomous systems can act, institutions need to know
              what they are authorized to do.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-700 md:text-2xl md:leading-10">
              I advise organizations on AI governance, AI security,
              autonomous-systems architecture, and execution authorization.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-medium !text-white transition hover:bg-neutral-800"
              >
                Request an Architecture Review
              </Link>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-300 bg-white px-8 text-sm font-medium text-neutral-900 transition hover:border-black hover:bg-neutral-50"
              >
                Explore Parmana
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50">
          <div className="container section">
            <div className="max-w-4xl">
              <p className="label">THE PROBLEM</p>
              <h2 className="heading-lg mt-6">
                Autonomous systems can act. Institutions must remain in
                control.
              </h2>
              <p className="body mt-10">
                AI agents can now interact with APIs, databases, business
                applications, and systems of record.
              </p>
              <p className="mt-8 text-2xl font-medium leading-10 text-neutral-950">
                The critical question is no longer only:
                <br />
                <span className="text-neutral-500">What can the system do?</span>
                <br />
                <br />
                It is:
                <br />
                What is the system actually authorized to do?
              </p>
            </div>

            <div className="mt-20 grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 md:grid-cols-5">
              {[
                ["CAPABILITY", "Can the system perform the action?"],
                ["IDENTITY", "Who or what is requesting it?"],
                ["ACCESS", "Can it reach the system?"],
                ["AUTHORIZATION", "Is this specific action permitted?"],
                ["EXECUTION", "Can the permitted action actually become real?"],
              ].map(([title, description]) => (
                <div key={title} className="bg-white p-7">
                  <p className="text-xs font-semibold tracking-[0.18em] text-neutral-500">
                    {title}
                  </p>
                  <p className="mt-5 text-base leading-7 text-neutral-800">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-2xl font-semibold tracking-tight text-neutral-950">
              Capability is not authority.
            </p>
          </div>
        </section>

        <section>
          <div className="container section">
            <p className="label">SERVICES</p>
            <h2 className="heading-lg mt-6 max-w-4xl">
              What I help organizations address
            </h2>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="border border-neutral-200 bg-white p-8 transition hover:border-neutral-400"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
                    {service.title}
                  </h3>
                  <p className="mt-5 leading-8 text-neutral-600">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 text-white">
          <div className="container section">
            <div className="max-w-5xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-neutral-400">
                THE DISTINCTION
              </p>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Capability is not authority.
              </h2>
              <div className="mt-10 max-w-3xl space-y-7 text-lg leading-9 text-neutral-300">
                <p>
                  An autonomous system may be capable of performing an action.
                </p>
                <p>It may have access to the system.</p>
                <p>It may be correctly identified.</p>
                <p>
                  None of those establish that the institution has authorized
                  this specific action, against this specific resource, under
                  these specific conditions.
                </p>
              </div>
              <p className="mt-12 text-2xl font-medium text-white">
                That is the boundary I work on.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container section">
            <p className="label">APPROACH</p>
            <h2 className="heading-lg mt-6 max-w-4xl">
              How I approach an architecture review
            </h2>

            <div className="mt-16 grid border-t border-neutral-200 md:grid-cols-2">
              {stages.map((stage) => (
                <div
                  key={stage.number}
                  className="border-b border-neutral-200 py-10 md:pr-12"
                >
                  <div className="flex gap-6">
                    <span className="pt-1 text-sm font-semibold text-neutral-400">
                      {stage.number}
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
                        {stage.title}
                      </h3>
                      <p className="mt-4 max-w-xl leading-8 text-neutral-600">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-50">
          <div className="container section">
            <p className="label">ENGAGEMENTS</p>
            <h2 className="heading-lg mt-6 max-w-4xl">
              Architecture engagements
            </h2>

            <div className="mt-14 grid gap-px border border-neutral-200 bg-neutral-200 md:grid-cols-2">
              {engagements.map((engagement) => (
                <article key={engagement.title} className="bg-white p-8 md:p-10">
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
                    {engagement.title}
                  </h3>
                  <p className="mt-5 leading-8 text-neutral-600">
                    {engagement.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-medium !text-white transition hover:bg-neutral-800"
              >
                Request an Architecture Review
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="container section">
            <div className="border-y border-neutral-200 py-20">
              <p className="label">PARMANA</p>
              <h2 className="heading-lg mt-6 max-w-4xl">
                Building the infrastructure behind the thesis.
              </h2>
              <p className="body mt-8">
                Parmana is building Institutional Authority Infrastructure for
                autonomous systems — ensuring that an institution&apos;s
                definition of what is allowed determines what becomes
                real-world execution.
              </p>
              <Link
                href="/"
                className="mt-10 inline-flex h-12 items-center justify-center rounded-md border border-neutral-300 px-8 text-sm font-medium text-neutral-900 transition hover:border-black hover:bg-neutral-50"
              >
                Explore Parmana
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-neutral-50">
          <div className="container section">
            <p className="label">ABOUT</p>
            <h2 className="heading-lg mt-6 max-w-4xl">Pavan Dev Singh Charak</h2>
            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-9 text-neutral-700">
              <p>
                Pavan Dev Singh Charak is the Founder &amp; Systems Architect
                behind Parmana Systems.
              </p>
              <p>
                His work focuses on autonomous systems, execution
                authorization, AI security, enterprise architecture, and
                trustworthy digital infrastructure.
              </p>
              <p>
                He is building infrastructure for a simple principle:
                <br />
                <span className="font-semibold text-neutral-950">
                  Only what an institution authorizes should become real.
                </span>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container section">
            <div className="border border-neutral-200 bg-white px-8 py-16 md:px-16">
              <p className="label">START A CONVERSATION</p>
              <h2 className="heading-lg mt-6 max-w-4xl">
                Building an autonomous system?
              </h2>
              <p className="body mt-8">
                Before giving it the ability to act, understand what authority
                it actually has.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-medium !text-white transition hover:bg-neutral-800"
              >
                Request an Architecture Review
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
