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
            <div className="max-w-6xl">
              <p className="label">FOR INVESTORS</p>

              <h1 className="heading-xl mt-6 max-w-6xl">
                AI in a demo ≠ AI in production.
              </h1>

              <p className="body mt-12 max-w-4xl">
                Capability creates potential. Controlled execution creates
                business value.
              </p>

              <p className="body max-w-4xl">
                AI capability becomes business value only when it operates
                inside real business workflows with real customers, real
                money, real data, real decisions, and real consequences.
              </p>

              <p className="body highlight max-w-4xl">
                The next infrastructure opportunity is making AI capability
                deployable in the real world without institutions losing
                authority over execution.
              </p>
            </div>
          </div>
        </section>

        {/* The Shift */}
        <Section
          label="THE SHIFT"
          title="AI Is Moving From Capability to Execution."
        >
          <p className="body">
            AI systems can now generate decisions, use tools, initiate
            workflows, and interact with systems of record.
          </p>

          <p className="body">
            But capability alone does not create business value.
          </p>

          <p className="body">
            Value appears when that capability can operate inside production
            environments where actions have real consequences.
          </p>

          <p className="body highlight">
            AI can generate the decision. The institution must retain authority
            over what becomes real.
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
          </p>

          <p className="body">
            It may have credentials. It may have access to an API. It may be
            able to execute the action.
          </p>

          <p className="body">
            None of these establish that the institution has authorized the
            specific action.
          </p>

          <p className="body highlight">
            The system that proposes an action should not be the system that
            determines whether it is authorized.
          </p>
        </Section>

        {/* Infrastructure Layer */}
        <Section
          label="A NEW INFRASTRUCTURE LAYER"
          title="Controlled Execution Infrastructure."
        >
          <p className="body">
            Parmana is building the infrastructure between autonomous systems
            and consequential execution.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border p-8">
              <p className="label">01</p>

              <h3 className="mt-4 text-2xl font-semibold">AI Proposes</h3>

              <p className="mt-4 leading-7 text-neutral-600">
                AI systems generate decisions and execution requests.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <p className="label">02</p>

              <h3 className="mt-4 text-2xl font-semibold">
                Policy Determines
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Institutional policy defines what is permitted.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <p className="label">03</p>

              <h3 className="mt-4 text-2xl font-semibold">
                Parmana Authorizes
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Parmana determines whether the proposed action is authorized to
                become execution.
              </p>
            </div>
          </div>

          <p className="body highlight mt-12">
            Capability creates potential. Controlled execution creates business
            value.
          </p>
        </Section>

        {/* Why Infrastructure */}
        <Section
          background="gray"
          label="WHY INFRASTRUCTURE"
          title="AI Capability Will Keep Changing. Execution Authority Cannot Depend on It."
        >
          <p className="body">
            Models will change. Agents will change. Vendors will change.
            Interfaces will change.
          </p>

          <p className="body">
            Organizations will deploy increasingly capable autonomous systems
            across payments, financial systems, customer operations, enterprise
            applications, infrastructure, and other systems of record.
          </p>

          <p className="body highlight">
            Institutional authority must remain independent of the technology
            generating the action.
          </p>

          <p className="body">
            That is why Parmana is technology-agnostic by design.
          </p>

          <p className="body">
            We are not building an AI model. We are not competing to become the
            system making the decision.
          </p>

          <p className="body">
            We are building the infrastructure that determines whether a
            decision is authorized to become execution.
          </p>
        </Section>

        {/* Investment Thesis */}
        <Section
          label="THE INVESTMENT THESIS"
          title="The Value of AI Depends on Its Ability to Reach Production."
        >
          <p className="body">
            The AI market has demonstrated enormous capability. The next
            challenge is deployment.
          </p>

          <p className="body">
            Organizations will not capture meaningful value from autonomous
            systems if those systems cannot operate inside real business
            environments.
          </p>

          <p className="body">
            The closer AI gets to real-world execution, the more important
            controlled execution becomes.
          </p>

          <p className="body highlight">
            We believe the infrastructure that enables AI capability to become
            controlled production execution will become increasingly important
            to the agentic computing stack.
          </p>
        </Section>

        {/* Why Now */}
        <Section
          background="gray"
          label="WHY NOW"
          title="AI Is Moving Into Real Business Operations."
        >
          <p className="body">
            AI is moving beyond demonstrations and experimentation.
          </p>

          <p className="body">
            Organizations are beginning to connect AI systems to customers,
            financial systems, business applications, APIs, databases, systems
            of record, and operational workflows.
          </p>

          <p className="body">
            That changes the infrastructure requirement.
          </p>

          <p className="body highlight">
            The question is no longer simply: What can AI do?
          </p>

          <p className="body highlight">
            It becomes: What can AI be allowed to make real?
          </p>
        </Section>

        {/* Technical Foundation */}
        <Section
          label="TECHNICAL FOUNDATION"
          title="Built for Deterministic Authorization."
        >
          <p className="body">
            Parmana separates probabilistic AI behavior from deterministic
            execution authorization.
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
                Authorization outcomes can be independently verified.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="text-xl font-semibold">
                Fail-Closed Execution
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Unauthorized execution is blocked.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="text-xl font-semibold">Technology Agnostic</h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Authority remains independent of the model, agent, vendor, or
                system generating the request.
              </p>
            </div>
          </div>
        </Section>

        {/* Proof */}
        <Section
          background="gray"
          label="PROOF"
          title="Built for Real Execution."
        >
          <p className="body">
            Parmana has progressed beyond a conceptual architecture into
            working authorization infrastructure.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              [
                "Deterministic",
                "Policy-driven and reproducible authorization.",
              ],
              [
                "Verifiable",
                "Execution outcomes produce independently verifiable evidence.",
              ],
              [
                "Model Agnostic",
                "Authority does not depend on a particular AI provider.",
              ],
              [
                "Production-Oriented",
                "Built around execution paths, verification, auditability, and deployment requirements.",
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

        {/* Thesis */}
        <Section
          label="THE THESIS"
          title="Capability Creates Potential. Controlled Execution Creates Business Value."
        >
          <p className="body">
            The AI industry is focused on increasing capability.
          </p>

          <p className="body">
            We believe the next infrastructure layer is about converting that
            capability into controlled production execution.
          </p>

          <p className="body">
            As autonomous systems become more capable, institutions will need
            to deploy them without surrendering authority over what they are
            allowed to do.
          </p>

          <p className="body highlight">
            That is the infrastructure opportunity Parmana is building for.
          </p>
        </Section>

        {/* Vision */}
        <section className="bg-black text-white">
          <div className="container section">
            <div className="max-w-5xl">
              <p className="label !text-neutral-400">LONG-TERM VISION</p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
                AI Can Operate at Machine Speed.
                <br />
                Institutions Must Retain Authority.
              </h2>

              <p className="mt-10 max-w-4xl text-xl leading-9 text-neutral-300">
                The future does not require institutions to choose between AI
                capability and control.
              </p>

              <p className="mt-6 max-w-4xl text-xl leading-9 text-neutral-300">
                It requires infrastructure that allows both.
              </p>

              <p className="mt-10 text-2xl font-medium text-white">
                Parmana is building that infrastructure.
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
                Make AI Capability Deployable.
              </h2>

              <p className="body mx-auto mt-8 max-w-3xl">
                The agentic era will not be defined only by what AI can do. It
                will be defined by what businesses can confidently allow AI to
                do in production.
              </p>

              <p className="body highlight mx-auto mt-6 max-w-3xl">
                Capability creates potential. Controlled execution creates
                business value.
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