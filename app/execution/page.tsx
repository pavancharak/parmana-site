import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Section from "@/components/section";

export default function ExecutionPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-white">
          <div className="container section">
            <div className="max-w-5xl">
              <p className="label">Execution</p>

              <h1 className="heading-xl mt-6">
                Execution Changes
                <br />
                Business Systems.
              </h1>

              <p className="body mt-12">
                Execution is any action that changes the state of a business
                system.
              </p>

              <p className="body">
                Unlike information, execution has real business consequences.
              </p>

              <p className="body highlight">
                Every execution changes something.
              </p>
            </div>
          </div>
        </section>

        <Section
          label="Information"
          title="Information Doesn't Change Business Systems."
        >
          <p className="body">
            Reading a report doesn't change a business system.
          </p>

          <p className="body">
            Answering a question doesn't change a business system.
          </p>

          <p className="body">
            Generating text doesn't change a business system.
          </p>

          <p className="body highlight">
            Information informs decisions.
          </p>
        </Section>

        <Section
          background="gray"
          label="Execution"
          title="Execution Changes Business Systems."
        >
          <p className="body">Transfer funds.</p>

          <p className="body">Deploy software.</p>

          <p className="body">Approve a payment.</p>

          <p className="body">Modify customer records.</p>

          <p className="body">Provision infrastructure.</p>

          <p className="body highlight">
            Execution changes the state of a business system.
          </p>
        </Section>

        <Section
          label="The Shift"
          title="Systems Can Now Initiate Execution."
        >
          <p className="body">
            Earlier generations of AI primarily generated information.
          </p>

          <p className="body">
            AI agents can now initiate business actions directly, and they
            are not the only systems that can.
          </p>

          <p className="body">
            AI agents, applications, and integrations can all interact
            directly with enterprise systems.
          </p>

          <p className="body highlight">
            But intelligence does not create authority.
          </p>
        </Section>

        <Section
          background="gray"
          label="The Question"
          title="Every Execution Requires Authorization."
        >
          <p className="body">
            Every execution request should answer one question before reaching
            a business system.
          </p>

          <h3 className="mt-8 text-4xl font-semibold tracking-tight">
            Is this action authorized by the institution?
          </h3>

          <p className="body highlight mt-8">
            Institutional authority, not who or what requested it,
            determines what gets executed.
          </p>
        </Section>

        <section className="bg-white">
          <div className="container section">
            <div className="max-w-4xl">
              <p className="label">Parmana</p>

              <h2 className="heading-lg mt-6">
                Your Institution Has Authority.
                <br />
                Not the Requester.
              </h2>

              <p className="body mt-12">
                Parmana ensures institutions don&apos;t lose authority over
                what becomes real, regardless of who or what requested it.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}