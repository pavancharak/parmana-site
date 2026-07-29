import DocumentHeader from '../components/DocumentHeader/DocumentHeader';
import ValueList from '../components/ValueList/ValueList';
import PromiseCallout from '../components/PromiseCallout/PromiseCallout';
import CTA from '../components/CTA/CTA';

const DIRECT_VALUE = [
  {
    label: 'Speed without new risk',
    line: 'Production AI use moves faster because every action is checked before it runs, not caught and cleaned up after.',
  },
  {
    label: 'Consistency',
    line: 'The same rules apply no matter which AI, which model, or which team is behind the action.',
  },
  {
    label: 'Accountability',
    line: 'Every allowed or blocked action has a clear record of exactly which rule made that call.',
  },
  {
    label: 'Faster AI rollout',
    line: "The question of what an AI is allowed to do gets answered once, in the rule, instead of case by case in a manual review queue.",
  },
];

const STRATEGIC_VALUE = [
  {
    label: 'Competitive edge',
    line: 'Teams can put AI in front of customers and let it act, while competitors are still routing every transaction through a manual sign-off.',
  },
  {
    label: 'Regulatory readiness',
    line: "A built-in checkpoint that decides before execution holds up to scrutiny in a way after-the-fact logs or model-level guardrails alone don't.",
  },
];

export default function Value() {
  return (
    <>
      <DocumentHeader page="Value" />

      <section className="section" aria-label="Value overview">
        <div className="container">
          <span className="eyebrow">Value</span>
          <h1>From probabilistic guardrails to explicit, pre-authorized rules.</h1>
          <p>
            That shift isn't just a technical one. It changes what your
            organization can actually do with AI, and how fast.
          </p>
        </div>
      </section>

      <ValueList eyebrow="Direct value" heading="What changes day to day." items={DIRECT_VALUE} />

      <ValueList eyebrow="Strategic value" heading="What it means for the business." items={STRATEGIC_VALUE} />

      <PromiseCallout label="The edge">
        Innovate for your customers at full speed. That control becomes
        your edge.
      </PromiseCallout>

      <section className="section" aria-label="Closing">
        <div className="container">
          <p>
            This removes the false choice between keeping AI read-only and
            slow, or giving it real access and hoping nothing goes wrong.
            Human oversight is still available wherever your organization
            chooses to keep it. It's just no longer the default bottleneck
            on every action.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
