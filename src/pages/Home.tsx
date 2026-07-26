import DocumentHeader from '../components/DocumentHeader/DocumentHeader';
import Hero from '../components/Hero/Hero';
import FeatureBlocks from '../components/FeatureBlocks/FeatureBlocks';
import PromiseCallout from '../components/PromiseCallout/PromiseCallout';
import CapabilitySection from '../components/CapabilitySection/CapabilitySection';
import Developers from '../components/Developers/Developers';
import CTA from '../components/CTA/CTA';

export default function Home() {
  return (
    <>
      <DocumentHeader page="Home" />

      <Hero />

      <FeatureBlocks />

      <PromiseCallout>
        Every action Parmana clears follows exactly the rules you set.
        Nothing more, nothing less. If it didn't come from your rules, it
        doesn't run.
      </PromiseCallout>

      <CapabilitySection eyebrow="Integration" heading="How Parmana fits into what you already run.">
        <p>
          Parmana sits between your AI systems and the systems that actually
          do the work: payments, records, operations. It doesn't replace
          those systems or ask you to move your data into a new one.
        </p>
        <p>
          Every action still runs through your own systems. Parmana only
          decides, in the moment, whether that action is allowed to go
          through.
        </p>
      </CapabilitySection>

      <CapabilitySection eyebrow="Why it matters" heading="Because AI doesn't just answer anymore. It acts.">
        <p>
          An AI that can send a refund, update a record, or move funds is
          making decisions with real consequences, whether it was right to
          make them or not.
        </p>
        <p>
          Parmana is the check between what an AI decides and what actually
          happens to your business. Without it, every wrong decision becomes
          a real one.
        </p>
      </CapabilitySection>

      <PromiseCallout label="Zero trust">
        Zero trust, all the way down. Not the AI. Not us. Not even your own
        systems by default. Verified, every time.
      </PromiseCallout>

      <CapabilitySection eyebrow="Built for consequence" heading="Designed for systems that matter.">
        <p>
          Financial transactions. Patient records. Regulated operations.
          These aren't places where "probably fine" is an acceptable
          outcome.
        </p>
        <p>
          Parmana is built for exactly the kind of AI action where getting it
          wrong has a real cost, not just for the easy, low-stakes cases.
        </p>
      </CapabilitySection>

      <CapabilitySection eyebrow="In the background" heading="Built to disappear.">
        <p>
          Parmana isn't a new screen for your team to watch or another
          dashboard added to the pile. Once the rules are set, it works in
          the background, checking every action, without becoming one more
          thing to operate.
        </p>
        <p>
          The goal isn't a new interface. It's for AI to be trustworthy
          enough that you stop thinking about it.
        </p>
      </CapabilitySection>

      <Developers />

      <CTA
        heading="Keep human authority in control of AI execution."
        body="See how Parmana verifies every AI action before it reaches your business systems, ensuring AI operates within the authority your organization defines."
        label="Become a Design Partner"
      />
    </>
  );
}
