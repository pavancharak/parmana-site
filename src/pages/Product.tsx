import DocumentHeader from '../components/DocumentHeader/DocumentHeader';
import CapabilitySection from '../components/CapabilitySection/CapabilitySection';
import capabilityStyles from '../components/CapabilitySection/CapabilitySection.module.css';
import PullQuote from '../components/PullQuote/PullQuote';
import Autonomy from '../components/Autonomy/Autonomy';
import Verticals from '../components/Verticals/Verticals';
import CTA from '../components/CTA/CTA';

export default function Product() {
  return (
    <>
      <DocumentHeader page="Product" />

      <section className="section" aria-label="Product overview">
        <div className="container">
          <h1>AI can finally act on your business's behalf, exactly within the limits you set.</h1>
          <p>
            When an AI wants to take an action, refund a payment, update a
            record, send a message, it sends that proposed action to
            Parmana first. Parmana checks it against the specific rule your
            organization set for that type of action. If the action matches
            an allowed rule, it goes through immediately. If it doesn't, it
            stops, before anything happens to your systems.
          </p>
        </div>
      </section>

      <CapabilitySection
        eyebrow="Human authority layer"
        heading="Autonomy belongs to the AI. Authority stays with the human."
      >
        <p>
          Parmana is the layer where that stays true, no matter how fast or
          independently the AI operates.
        </p>
        <p>
          As AI moves from answering to acting, someone still has to hold the
          authority to decide what it's allowed to do. Parmana is where that
          authority actually lives and gets enforced, not just documented.
        </p>
      </CapabilitySection>

      <CapabilitySection
        eyebrow="Never hands over the keys"
        heading="Your systems keep the keys. AI gets the freedom to act anyway."
      >
        <p>
          Other systems that connect AI to real business systems hand the AI
          the credentials to act directly. Parmana never does. The AI can
          only propose an action. It never holds the keys to carry one out.
          Execution always stays with your own systems, only after Parmana
          clears it, so the AI moves freely while your systems stay firmly
          in charge.
        </p>
        <PullQuote>
          Other systems give the AI the keys and hope. Parmana never hands
          over the keys at all. The AI proposes, your systems act.
        </PullQuote>

        <ul className={capabilityStyles.roleList}>
          <li>
            <strong>The AI.</strong> Only ever proposes an action. Never
            holds real credentials.
          </li>
          <li>
            <strong>The gateway.</strong> The checkpoint between the AI and
            every system it might touch. Checks each proposed action against
            your rules. Only the gateway holds real access, and only it
            decides what proceeds.
          </li>
          <li>
            <strong>Connectors.</strong> One per connected system (payments,
            records, and so on), each holding only the access it specifically
            needs. The AI never talks to a connector directly. Only the
            gateway can invoke one, and only after a request clears.
          </li>
        </ul>

        <p>
          <strong>
            The AI proposes. The gateway decides. The connector carries it
            out. Three separate roles, three separate places. The power to
            act only ever lives in the last two.
          </strong>
        </p>
      </CapabilitySection>

      <CapabilitySection
        eyebrow="Built to hold"
        heading="Confidence that holds even against a determined attack."
      >
        <p>
          You can put AI in front of real business systems and mean it,
          because the AI never had the power to execute anything on its own
          in the first place.
        </p>
        <p>
          Even with prompt injection (a hidden instruction slipped into
          something the AI reads), the attack can compromise what the AI
          decides to do. It can't compromise what the AI is actually allowed
          to do.
        </p>
      </CapabilitySection>

      <Autonomy />

      <Verticals />

      <CTA />
    </>
  );
}
