import DocumentHeader from '../components/DocumentHeader/DocumentHeader';
import CardGrid from '../components/CardGrid/CardGrid';
import CapabilitySection from '../components/CapabilitySection/CapabilitySection';
import PullQuote from '../components/PullQuote/PullQuote';
import PromiseCallout from '../components/PromiseCallout/PromiseCallout';
import CTA from '../components/CTA/CTA';

const ZERO_TRUST_CARDS = [
  {
    label: 'The AI',
    body: 'Proposes an action. Nothing more. It never holds the power to carry one out.',
  },
  {
    label: 'Parmana itself',
    body: "Every decision it makes leaves a signed, independently checkable record. Not just Parmana's word for it.",
  },
  {
    label: 'Your own systems',
    body: "Nothing runs on assumed validity. Every action is checked against evidence before it's allowed through.",
  },
];

export default function Trust() {
  return (
    <>
      <DocumentHeader page="Trust" />

      <section className="section" aria-label="Zero trust architecture">
        <div className="container">
          <span className="eyebrow">Zero trust architecture</span>
          <h1>
            Nothing is trusted by default. Not the AI. Not Parmana. Not even
            your own systems.
          </h1>
          <p>
            Parmana is built on zero trust architecture: nothing is trusted
            by default. Not the AI, not Parmana itself, not the business
            systems it connects to. Every action is verified against
            evidence, every time, with nothing assumed.
          </p>
        </div>
      </section>

      <CardGrid eyebrow="What that means here" heading="Three places nothing is assumed." items={ZERO_TRUST_CARDS} />

      <CapabilitySection
        eyebrow="Holds even against attacks"
        heading="AI security attacks can't execute unauthorized actions."
      >
        <p>
          AI security attacks can't execute unauthorized actions in your
          business systems, because the AI never had the power to execute
          anything on its own.
        </p>
        <p>
          Prompt injection is the clearest example: a hidden instruction
          slipped into something the AI reads. But the same holds for a
          jailbreak, or a fully compromised model. An attack can compromise
          what the AI decides to do. It can't compromise what the AI is
          actually allowed to do.
        </p>
      </CapabilitySection>

      <section className="section" aria-label="Before vs after execution">
        <div className="container">
          <span className="eyebrow">Before vs. after execution</span>
          <h2>Two very different meanings of watching AI.</h2>
          <PullQuote>
            Parmana acts before execution. AI governance acts after it. One
            prevents. The other reports.
          </PullQuote>
        </div>
      </section>

      <PromiseCallout label="Verify everything">
        Verify everything. Even us. Every decision leaves proof, not a
        promise.
      </PromiseCallout>

      <CTA />
    </>
  );
}
