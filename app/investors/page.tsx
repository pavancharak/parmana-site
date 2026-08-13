import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Section from "@/components/section";

export default function InvestorsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-white">
          <div className="container section">
            <div className="max-w-5xl">
              <p className="label">FOR INVESTORS</p>

              <h1 className="heading-xl mt-6">
                The Infrastructure for the Agentic Era.
              </h1>

              <p className="body mt-12 max-w-4xl">
                AI is moving from generating outputs to making decisions and
                taking real-world actions.
              </p>

              <p className="body max-w-4xl">
                As autonomous systems operate at machine speed, institutions
                risk losing control over what decisions become execution.
              </p>

              <p className="body highlight max-w-4xl">
                Parmana is building the infrastructure that keeps institutional
                authority in control of execution.
              </p>
            </div>
          </div>
        </section>

        {/* The Shift */}
        <Section
          label="THE SHIFT"
          title="AI Is Becoming Autonomous."
        >
          <p className="body">
            Software historically waited for people to instruct it. That
            boundary is changing.
          </p>

          <p className="body">
            AI agents and autonomous systems can now reason, select tools,
            initiate workflows, and execute actions across connected systems.
          </p>

          <p className="body">
            This creates a new infrastructure requirement.
          </p>

          <p className="body highlight">
            Intelligence can become autonomous. Institutional authority
            cannot.
          </p>
        </Section>

        {/* Problem */}
        <Section
          background="gray"
          label="THE PROBLEM"
          title="Capability Is Not Authority."
        >
          <p className="body">
            An autonomous system may be capable of performing an action.
            It may have credentials. It may have access to an API. It may even
            have permission to use a particular tool.
          </p>

          <p className="body">
            None of those things necessarily mean the institution has
            authorized the specific decision to become real-world execution.
          </p>

          <p className="body highlight">
            The system that proposes an action should not be the system that
            authorizes it.
          </p>
        </Section>

        {/* Category */}
        <Section
          label="A NEW INFRASTRUCTURE LAYER"
          title="Execution Authority Infrastructure."
        >
          <p className="body">
            Parmana sits between execution requests and systems of record,
            independently evaluating whether an action is authorized by the
            institution.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border p-8">
              <p className="label">01</p>
              <h3 className="mt-4 text-2xl font-semibold">
                AI Proposes
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Autonomous systems generate decisions and execution requests.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <p className="label">02</p>
              <h3 className="mt-4 text-2xl font-semibold">
                Policy Determines
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Institutional policy defines what the organization permits.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <p className="label">03</p>
              <h3 className="mt-4 text-2xl font-semibold">
                Parmana Authorizes
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Only authorized decisions are permitted to become execution.
              </p>
            </div>
          </div>
        </Section>

        {/* Why Infrastructure */}
        <Section
          background="gray"
          label="WHY INFRASTRUCTURE"
          title="Every Autonomous System Eventually Meets Execution."
        >
          <p className="body">
            Agents will operate across payments, financial systems, customer
            records, enterprise applications, infrastructure, and other
            systems of record.
          </p>

          <p className="body">
            The underlying models will change. Agents will change. Vendors
            will change. Interfaces will change.
          </p>

          <p className="body highlight">
            Institutional authority must remain independent of all of them.
          </p>

          <p className="body">
            That is why Parmana is technology-agnostic by design. We are not
            building an AI model or competing to become the system making the
            decision.
          </p>

          <p className="body">
            We are building the infrastructure that determines whether a
            decision is authorized to become execution.
          </p>
        </Section>

        {/* Market Thesis */}
        <Section
          label="THE THESIS"
          title="As AI Capability Increases, Authority Becomes More Valuable."
        >
          <p className="body">
            More capable autonomous systems will increase the volume, speed,
            and complexity of machine-initiated execution.
          </p>

          <p className="body">
            Institutions will need to allow these systems to act without
            allowing them to become the authority over their own actions.
          </p>

          <p className="body highlight">
            We believe execution authority will become a foundational layer
            of the agentic computing stack.
          </p>
        </Section>

        {/* Why Now */}
        <Section
          background="gray"
          label="WHY NOW"
          title="The Boundary Between Software and Autonomous Action Is Disappearing."
        >
          <p className="body">
            AI agents are moving beyond experimentation and into operational
            systems.
          </p>

          <p className="body">
            As organizations give software the ability to act independently,
            traditional assumptions about authorization and execution no
            longer hold.
          </p>

          <p className="body highlight">
            The agentic era requires an independent authority layer between
            autonomous systems and real-world execution.
          </p>
        </Section>

        {/* Technical Foundation */}
        <Section
          label="TECHNICAL FOUNDATION"
          title="Built for Deterministic Authorization."
        >
          <p className="body">
            Parmana is built around deterministic authorization rather than
            probabilistic model behavior.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border p-8">
              <h3 className="text-xl font-semibold">
                Deterministic Decisions
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                The same execution request evaluated against the same
                institutional policy produces the same authorization outcome.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="text-xl font-semibold">
                Independent Verification
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Authorization outcomes can be independently verified rather
                than relying solely on application logs or model behavior.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="text-xl font-semibold">
                Fail-Closed Execution
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Unauthorized execution is blocked rather than treated as a
                recoverable downstream event.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="text-xl font-semibold">
                Technology Agnostic
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Authority remains independent of the model, agent, vendor, or
                system initiating the request.
              </p>
            </div>
          </div>
        </Section>

        {/* Proof */}
        <Section
          background="gray"
          label="PROOF"
          title="Infrastructure, Not a Concept."
        >
          <p className="body">
            Parmana has progressed beyond a conceptual architecture into a
            working authorization infrastructure with deterministic execution,
            verification, auditability, and production-oriented deployment.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              ["TRL 7", "Demonstrated in a live operational environment."],
              [
                "Deterministic",
                "Authorization decisions are policy-driven and reproducible.",
              ],
              [
                "Verifiable",
                "Execution outcomes produce independently verifiable evidence.",
              ],
              [
                "Model Agnostic",
                "Authority does not depend on a particular AI provider.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border bg-white p-6"
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Vision */}
        <section className="bg-black text-white">
          <div className="container section">
            <div className="max-w-5xl">
              <p className="label !text-neutral-400">
                LONG-TERM VISION
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
                Autonomous systems can operate at machine speed.
                <br />
                Institutions must retain authority.
              </h2>

              <p className="mt-10 max-w-4xl text-xl leading-9 text-neutral-300">
                Parmana is building the infrastructure that makes that
                possible.
              </p>
            </div>
          </div>
        </section>

        {/* Investor CTA */}
        <section className="bg-white">
          <div className="container section">
            <div className="mx-auto max-w-4xl text-center">
              <p className="label">BUILDING THE NEXT INFRASTRUCTURE LAYER</p>

              <h2 className="heading-xl mt-6">
                The agentic era needs institutional authority infrastructure.
              </h2>

              <p className="body mx-auto mt-8 max-w-3xl">
                We are building Parmana for institutions that need autonomous
                systems to act without surrendering authority over execution.
              </p>

              <div className="mt-10">
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-sm font-medium !text-white transition-colors duration-200 hover:bg-neutral-800"
                >
                  Talk to the Founders
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}