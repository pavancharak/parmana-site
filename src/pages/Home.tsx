import DocumentHeader from '../components/DocumentHeader/DocumentHeader';
import Hero from '../components/Hero/Hero';
import FeatureBlocks from '../components/FeatureBlocks/FeatureBlocks';
import PromiseCallout from '../components/PromiseCallout/PromiseCallout';
import CapabilitySection from '../components/CapabilitySection/CapabilitySection';
import PullQuote from '../components/PullQuote/PullQuote';
import Developers from '../components/Developers/Developers';
import CTA from '../components/CTA/CTA';

export default function Home() {
  return (
    <>
      <DocumentHeader page="Home" />

      <Hero />

      <CapabilitySection eyebrow="Built for confidence" heading="Simple enough to trust completely.">
        <p>
          It doesn't reason about whether an action seems okay. It doesn't
          judge intent. It checks a proposed action against a rule your
          business set in advance, and the answer is yes or no. Nothing to
          persuade. Nothing to talk into an exception. The same check, the
          same way, every time.
        </p>
        <PullQuote>
          A smart checkpoint can be reasoned with. A dumb one can't be talked
          into anything, because there's nothing to persuade.
        </PullQuote>
      </CapabilitySection>

      <FeatureBlocks />

      <PromiseCallout>
        Every action Parmana clears is exactly the action your business
        chose to allow, nothing left to chance.
      </PromiseCallout>

      <CapabilitySection eyebrow="Integration" heading="Runs on the systems you already trust.">
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

      <CapabilitySection eyebrow="Why it matters" heading="AI doesn't just answer anymore. It gets to act.">
        <p>
          An AI that can send a refund, update a record, or move funds can
          finally do real work in your business, not just suggest it.
        </p>
        <p>
          Parmana is the check between what an AI decides and what actually
          happens to your business, so every decision that reaches your
          systems is one you already stood behind.
        </p>
      </CapabilitySection>

      <PromiseCallout label="Zero trust">
        Every action, verified and provable, so trust is never something you
        have to hope for.
      </PromiseCallout>

      <CapabilitySection eyebrow="Built for what matters" heading="Ready for the systems that carry real weight.">
        <p>
          Financial transactions. Patient records. Regulated operations.
          This is where AI can do the most good, once it's operating inside
          rules you set.
        </p>
        <p>
          Parmana is built for exactly the kind of AI action where getting it
          right pays off the most, not just the easy, low-stakes cases.
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
        heading="Ready to let AI act at full speed? Keep human authority in control of AI execution."
        body="If you're deploying AI agents and want them switched on rather than stuck in pilot, write to us: founder@parmanasystems.com"
        label="Write to us"
      />
    </>
  );
}
