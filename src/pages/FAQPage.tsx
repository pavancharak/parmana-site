import DocumentHeader from '../components/DocumentHeader/DocumentHeader';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';

export default function FAQPage() {
  return (
    <>
      <DocumentHeader page="FAQ" />

      <section className="section" aria-label="FAQ introduction">
        <div className="container">
          <span className="eyebrow">Questions</span>
          <h1>Straight answers to the questions evaluators actually ask.</h1>
          <p>
            The agentic era rewards businesses that move fast and stay in
            control, and that starts with answering these directly, not
            around them.
          </p>
        </div>
      </section>

      <FAQ />

      <CTA />
    </>
  );
}
