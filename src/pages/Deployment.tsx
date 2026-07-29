import DocumentHeader from '../components/DocumentHeader/DocumentHeader';
import CardGrid from '../components/CardGrid/CardGrid';
import PromiseCallout from '../components/PromiseCallout/PromiseCallout';
import CTA from '../components/CTA/CTA';

const CARDS = [
  {
    label: 'Model agnostic',
    body: "Any AI, any vendor, any team's setup. The check works the same regardless of which model is asking. Switch models without rebuilding your control layer.",
  },
  {
    label: 'On-prem, hybrid, or cloud',
    body: 'Parmana runs wherever your business systems already live. On your own servers, in the cloud, or split across both. Your choice, not a constraint.',
  },
  {
    label: 'Not air-gapped, on purpose',
    body: "A sealed-off system can't receive policy updates, security patches, or produce a record anyone outside the room can verify live. Connected, but strictly controlled. Not disconnected from everything.",
  },
];

export default function Deployment() {
  return (
    <>
      <DocumentHeader page="Deployment" />

      <section className="section" aria-label="Deployment overview">
        <div className="container">
          <span className="eyebrow">Deployment</span>
          <h1>Ready to run wherever your business already lives. Works with any AI.</h1>
        </div>
      </section>

      <CardGrid eyebrow="How it deploys" heading="Built to fit your infrastructure, not the other way around." items={CARDS} />

      <PromiseCallout label="The deployment promise">
        Works with any AI model. Runs on-prem, hybrid, or cloud, wherever
        you're ready for it. Not air-gapped, on purpose: a system you can
        keep updating and verifying is one you can actually trust.
      </PromiseCallout>

      <CTA />
    </>
  );
}
