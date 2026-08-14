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
                AI Can Act at Machine Speed. Institutions Can&apos;t Approve
                Every Action.
              </h1>

              <p className="body mt-12 max-w-4xl">
                AI can generate decisions, plan workflows, use tools, and take
                action. Institutions cannot practically approve every AI
                action individually.
              </p>

              <p className="body max-w-4xl">
                The infrastructure challenge is therefore not simply making AI
                more capable. It is preserving institutional authority while
                autonomous systems operate at machine speed.
              </p>

              <p className="body highlight max-w-4xl">
                Parmana enforces institutional authority at the point of
                execution, ensuring that only institution-authorized actions
                become real-world execution, with verifiable evidence of what
                was authorized, what executed, and why.
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
            As AI moves closer to customers, money, data, and consequential
            business decisions, organizations cannot place a human approval
            step in every execution path.
          </p>

          <p className="body">
            The system generating an action can be highly capable without
            possessing institutional authority to make that action real.
          </p>

          <p className="body highlight">
            AI can generate the action. Institutions must retain authority over
            whether that action becomes real.
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
            It may have credentials. It may have access to an API. It may have
            tools, permissions, and guardrails.
          </p>

          <p className="body">
            None of these, by themselves, establish that the institution has
            authorized the specific action in the specific business context.
          </p>

          <p className="body highlight">
            The system that proposes an action should not be the system that
            determines whether it is authorized.
          </p>

          <p className="body">
            Institutions define the authority and boundaries. Institutional
            policy determines what the organization permits. Parmana enforces
            those boundaries before execution reaches systems of record.
          </p>
        </Section>

        {/* Infrastructure Layer */}
        <Section
          label="A NEW INFRASTRUCTURE LAYER"
          title="The Authority Layer for AI Execution."
        >
          <p className="body">
            Parmana sits between autonomous systems and consequential
            execution, enforcing institutional authority independently of the
            system generating the request.
          </p>

          {/* Core Model */}
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                AI
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Intelligence
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                AI generates decisions and proposes actions.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Institutions
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Authority
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                Institutions define what is permitted.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Parmana
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Enforcement
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                Parmana enforces institutional authority at machine speed.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Systems
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Execution
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                Systems execute only what is authorized.
              </p>
            </div>
          </div>

          {/* Execution Flow */}
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border p-8">
              <p className="label">01</p>

              <h3 className="mt-4 text-2xl font-semibold">
                AI Proposes
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                AI systems generate decisions and execution requests.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <p className="label">02</p>

              <h3 className="mt-4 text-2xl font-semibold">
                Institutions Define
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Institutional policy defines what actions are permitted.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <p className="label">03</p>

              <h3 className="mt-4 text-2xl font-semibold">
                Parmana Enforces
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Parmana enforces the institution&apos;s authorization before
                the proposed action becomes execution.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <p className="label">04</p>

              <h3 className="mt-4 text-2xl font-semibold">
                Parmana Proves
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                The authorization and execution produce independently
                verifiable evidence.
              </p>
            </div>
          </div>

          <p className="body highlight mt-12">
            AI creates capability. Institutions retain authority. Parmana
            enforces that authority.
          </p>
        </Section>

        {/* Why Infrastructure */}
        <Section
          background="gray"
          label="WHY INFRASTRUCTURE"
          title="AI Capability Will Keep Changing. Institutional Authority Cannot Depend on It."
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
            We are building the infrastructure that makes institutional
            authority enforceable at the point where machine-generated
            decisions become execution.
          </p>
        </Section>

        {/* Investment Thesis */}
        <Section
          label="THE INVESTMENT THESIS"
          title="AI&apos;s Value Depends on Institutional Authority Over Execution."
        >
          <p className="body">
            The AI market has demonstrated enormous capability. The next
            infrastructure challenge is enabling that capability to operate
            inside real business environments without transferring
            institutional authority to the systems generating the decisions.
          </p>

          <p className="body">
            As autonomous systems gain access to customers, money, data,
            business applications, APIs, databases, and systems of record,
            institutions need an independent mechanism for enforcing what those
            systems are permitted to make real.
          </p>

          <p className="body">
            Institutions cannot practically approve every AI action
            individually. The scalable alternative is to define authority
            through institutional policy and enforce that authority
            deterministically at execution time.
          </p>

          <p className="body">
            Authorization alone is not enough. Institutions also need evidence
            that establishes what was authorized, what executed, and whether
            the execution matched the authorization.
          </p>

          <p className="body highlight">
            We believe an authorization and evidence layer between autonomous
            systems and consequential execution will become increasingly
            important to the agentic computing stack.
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

          <p className="body highlight">
            And who has the authority to decide?
          </p>
        </Section>

        {/* Technical Foundation */}
        <Section
          label="TECHNICAL FOUNDATION"
          title="Institutional Authority, Enforced Deterministically."
        >
          <p className="body">
            Parmana separates probabilistic AI behavior from deterministic
            execution authorization.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border p-8">
              <h3 className="text-xl font-semibold">
                Deterministic Authorization
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
              <h3 className="text-xl font-semibold">
                Technology Agnostic
              </h3>

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
          title="Built to Prove Authorized Execution."
        >
          <p className="body">
            Parmana has progressed beyond a conceptual architecture into
            working institutional authorization infrastructure.
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
                "Built around execution paths, authorization, verification, auditability, and deployment requirements.",
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
          title="AI Creates Capability. Institutions Retain Authority."
        >
          <p className="body">
            The AI industry is focused on increasing capability.
          </p>

          <p className="body">
            As autonomous systems become more capable, the critical
            infrastructure question becomes who has authority over what those
            systems are allowed to make real.
          </p>

          <p className="body">
            Institutions will need to deploy increasingly capable autonomous
            systems without surrendering authority over what those systems are
            permitted to do.
          </p>

          <p className="body highlight">
            Parmana is building the infrastructure that keeps that authority
            with the institution.
          </p>

          <p className="body highlight">
            AI can act at machine speed. Institutional authority cannot.
            Parmana makes institutional authority enforceable at machine speed.
          </p>
        </Section>

        {/* Vision */}
        <section className="bg-black text-white">
          <div className="container section">
            <div className="max-w-5xl">
              <p className="label !text-neutral-400">
                LONG-TERM VISION
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
                AI Can Operate at Machine Speed.
                <br />
                Institutional Authority Must Keep Up.
              </h2>

              <p className="mt-10 max-w-4xl text-xl leading-9 text-neutral-300">
                The future does not require institutions to choose between AI
                capability and control.
              </p>

              <p className="mt-6 max-w-4xl text-xl leading-9 text-neutral-300">
                It requires infrastructure that allows AI to operate at machine
                speed while institutional authority remains in control of
                execution without requiring humans to approve every action.
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
              <p className="label">
                BUILDING THE NEXT INFRASTRUCTURE LAYER
              </p>

              <h2 className="heading-xl mt-6">
                Who Has the Authority to Decide What Actually Happens?
              </h2>

              <p className="body mx-auto mt-8 max-w-3xl">
                AI can generate actions at machine speed. Institutions must
                remain the authority over what becomes real-world execution.
              </p>

              <p className="body highlight mx-auto mt-6 max-w-3xl">
                Parmana enforces that authority and provides the evidence to
                prove what happened.
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