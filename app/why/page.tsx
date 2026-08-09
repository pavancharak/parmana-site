import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Section from "@/components/section";

export default function WhyPage() {
  return (
    <>
      <Navbar />

      <main>

        <section className="bg-white">
          <div className="container section">
            <div className="max-w-5xl">
              <p className="label">
                Why
              </p>

              <h1 className="heading-xl mt-6">
                Unauthorized Execution
                <br />
                Changes Everything.
              </h1>

              <p className="body mt-12">
                AI agents are the clearest example of software shifting from
                systems that wait for instructions into systems capable of
                autonomous execution, but they are not the only one.
              </p>

              <p className="body">
                As execution becomes autonomous, organizations face a new
                challenge, regardless of what is initiating it.
              </p>

              <p className="body highlight">
                How do you ensure only authorized actions get executed?
              </p>
            </div>
          </div>
        </section>

        <Section
          label="The Shift"
          title="Enterprise Software Has Changed."
        >
          <p className="body">
            For decades, enterprise software executed only when people
            instructed it to.
          </p>

          <p className="body">
            AI agents are the clearest example of this change, but they are
            not the only one.
          </p>

          <p className="body">
            Automated systems, integrations, and agents can all execute
            business actions without a person in the loop.
          </p>
        </Section>

        <Section
          background="gray"
          label="Exposure"
          title="You Don't Have To Deploy AI Agents."
        >
          <p className="body">
            Choosing not to deploy AI agents does not eliminate your exposure
            to AI-driven execution.
          </p>

          <p className="body">
            Your customers, employees, partners, vendors, and third-party
            applications will increasingly use AI agents to interact with your
            business systems.
          </p>

          <p className="body highlight">
            Autonomous execution, AI-driven or otherwise, is becoming part of
            every connected business.
          </p>
        </Section>

        <Section
          label="The Risk"
          title="Every Execution Request Changes Something."
        >
          <p className="body">
            An execution request can transfer money, deploy software,
            provision infrastructure, modify customer records, or execute
            business workflows.
          </p>

          <p className="body">
            It doesn't matter whether the request comes from an AI agent,
            a human, an application, or an attacker.
          </p>

          <p className="body highlight">
            The business outcome is identical.
          </p>

          <p className="body">
            An unauthorized action should never execute.
          </p>

          <p className="body highlight">
            Only what you authorize should become real.
          </p>
        </Section>

        <Section
          background="gray"
          label="The Question"
          title="Every Organization Must Answer One Question."
        >
          <h3 className="text-4xl font-semibold tracking-tight">
            Should this action be allowed to execute?
          </h3>
        </Section>

      </main>

      <Footer />
    </>
  );
}