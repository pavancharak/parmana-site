const actions = [
  { action: "Issue a customer refund", amount: "₹4,800", status: "Allowed", allowed: true },
  { action: "Change a supplier bank account", amount: "", status: "Not allowed", allowed: false },
  { action: "Create a purchase order", amount: "₹52,000", status: "Needs approval", allowed: null },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="navInner">
          <a className="logo" href="#" aria-label="Parmana home">parmana<span>.</span></a>
          <div className="navLinks">
            <a href="#problem">The problem</a>
            <a href="#how">How it works</a>
            <a href="#evidence">Evidence</a>
          </div>
          <a className="navButton" href="#contact">Talk to us <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroGlow" aria-hidden="true" />
        <div className="container heroContent">
          <div className="eyebrow"><span className="statusDot" /> Business authority for AI actions</div>
          <h1>If the business has not authorized it, <span>AI cannot do it.</span></h1>
          <p className="heroLead">AI agents can make decisions and take action. Parmana checks whether the business has allowed each action before it reaches your systems.</p>
          <div className="heroActions">
            <a className="button buttonDark" href="#how">See how it works <span aria-hidden="true">↓</span></a>
            <a className="button buttonLight" href="#contact">Talk to Parmana</a>
          </div>
          <div className="heroNote">The business decides. Parmana checks. Only authorized actions proceed.</div>

          <div className="heroDiagram" aria-label="How Parmana checks an AI action">
            <div className="diagramTop">
              <span className="diagramLabel">AN AI ACTION</span>
              <span className="liveBadge"><span /> Authorization check</span>
            </div>
            <div className="diagramFlow">
              <div className="flowNode">
                <div className="nodeIcon agentIcon">AI</div>
                <strong>Agent request</strong>
                <span>Refund a customer</span>
              </div>
              <div className="flowConnector"><span /></div>
              <div className="flowNode activeNode">
                <div className="nodeIcon parmanaIcon">P</div>
                <strong>Parmana</strong>
                <span>Check business authority</span>
              </div>
              <div className="flowConnector"><span /></div>
              <div className="flowOutcomes">
                <div className="outcome outcomeAllow"><span className="outcomeSymbol">✓</span><div><strong>Authorized</strong><small>Action can proceed</small></div></div>
                <div className="outcome outcomeDeny"><span className="outcomeSymbol">×</span><div><strong>Not authorized</strong><small>Action is blocked</small></div></div>
              </div>
            </div>
            <div className="diagramBottom"><span className="shield">✓</span> A decision record is created for review and audit.</div>
          </div>
        </div>
      </section>

      <section className="section problemSection" id="problem">
        <div className="container twoColumn">
          <div className="sectionIntro">
            <div className="eyebrow eyebrowPlain">The missing link</div>
            <h2>Governance controls AI against whose authority?</h2>
            <p className="bodyLarge">The authority of the business.</p>
            <p className="bodyCopy">Giving an AI agent business context is not the same as controlling what it can do. The business needs to decide what is allowed, and each action needs to be checked against that decision.</p>
          </div>
          <div className="contextPanel">
            <div className="panelHeader"><span>Business context</span><span className="panelPill">Guidance</span></div>
            <div className="contextQuote">“Help the customer and resolve the issue quickly.”</div>
            <div className="contextDivider"><span>Context does not grant authority</span></div>
            <div className="panelHeader"><span>Business authority</span><span className="panelPill panelPillPurple">Permission</span></div>
            <div className="ruleLine"><span className="ruleCheck">✓</span><div><strong>Refunds up to ₹5,000</strong><small>Allowed within the stated limit</small></div></div>
            <div className="ruleLine"><span className="ruleCross">×</span><div><strong>Change bank details</strong><small>Not allowed for this agent</small></div></div>
            <div className="panelFoot">Parmana checks the action against the authority the business has granted.</div>
          </div>
        </div>
      </section>

      <section className="section processSection" id="how">
        <div className="container">
          <div className="sectionHeading">
            <div className="eyebrow eyebrowPlain">How it works</div>
            <h2>From business rules to actions you can trust.</h2>
            <p className="bodyCopy">Parmana sits between the AI agent and the business system. It checks the proposed action before execution.</p>
          </div>
          <div className="processGrid">
            <article className="processCard">
              <div className="processNumber">01</div>
              <div className="processIcon iconBusiness" aria-hidden="true">▤</div>
              <h3>The business sets the limits</h3>
              <p>Define what an agent may do, which records it can change, and where approval is required.</p>
            </article>
            <article className="processCard">
              <div className="processNumber">02</div>
              <div className="processIcon iconAgent" aria-hidden="true">✳</div>
              <h3>The agent proposes an action</h3>
              <p>The agent sends the action it wants to take to the business system.</p>
            </article>
            <article className="processCard processCardFocus">
              <div className="processNumber">03</div>
              <div className="processIcon iconCheck" aria-hidden="true">✓</div>
              <h3>Parmana checks permission</h3>
              <p>If the action is not authorized, Parmana stops it before it reaches the system.</p>
            </article>
            <article className="processCard">
              <div className="processNumber">04</div>
              <div className="processIcon iconProof" aria-hidden="true">⌁</div>
              <h3>Evidence is recorded</h3>
              <p>Keep a verifiable record of the request, the authorization decision, and the execution result.</p>
            </article>
          </div>
          <div className="processResult"><span className="resultCheck">✓</span><p><strong>Business authority comes first.</strong> The agent does not get to decide what it is allowed to do.</p></div>
        </div>
      </section>

      <section className="section actionSection" id="evidence">
        <div className="container evidenceLayout">
          <div>
            <div className="eyebrow eyebrowPlain">Evidence by design</div>
            <h2>An audit should show more than what happened.</h2>
            <p className="bodyCopy">It should show what the business allowed, whether the action passed the check, and what happened next.</p>
            <div className="evidenceList">
              <div><span>01</span><p><strong>What was requested</strong><small>The action the AI agent proposed.</small></p></div>
              <div><span>02</span><p><strong>Why it was allowed or blocked</strong><small>The business authority used to make the decision.</small></p></div>
              <div><span>03</span><p><strong>What happened</strong><small>The execution result and its evidence.</small></p></div>
            </div>
          </div>
          <div className="auditCard">
            <div className="auditHeader"><div><span className="auditEyebrow">PARMANA EVIDENCE</span><h3>Action record</h3></div><span className="recordStatus">Verified record</span></div>
            <div className="auditRow"><span>Requested action</span><strong>Issue customer refund</strong></div>
            <div className="auditRow"><span>Business rule</span><strong>Refund limit: ₹5,000</strong></div>
            <div className="auditRow"><span>Requested amount</span><strong>₹4,800</strong></div>
            <div className="auditRow"><span>Authorization</span><strong className="textGreen">Allowed</strong></div>
            <div className="auditRow"><span>Execution</span><strong>Completed</strong></div>
            <div className="auditHash"><span>Record integrity</span><code>Proof attached to decision record</code><span className="hashMark">✓</span></div>
            <p className="auditDisclaimer">Illustrative example. Actual evidence depends on the connected system and integration.</p>
          </div>
        </div>
      </section>

      <section className="closingQuote">
        <div className="container quoteInner">
          <div className="eyebrow eyebrowDark">The principle</div>
          <h2>Compliance is not just proving what AI did. It is proving that the business authorized it.</h2>
          <p>Parmana checks authority before action and records evidence for review afterward.</p>
        </div>
      </section>

      <section className="ctaSection" id="contact">
        <div className="container ctaInner">
          <div>
            <div className="eyebrow eyebrowPlain">Keep the business in control</div>
            <h2>Let AI do useful work. Keep authority with the business.</h2>
            <p className="bodyCopy">See how Parmana can check AI actions before they change your business systems.</p>
          </div>
          <a className="button buttonDark" href="mailto:founder@parmanasystems.com">Talk to Parmana <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <a className="logo" href="#" aria-label="Parmana home">parmana<span>.</span></a>
          <span>Business authority for AI actions.</span>
          <span>© 2026 Parmana Systems</span>
        </div>
      </footer>
    </main>
  );
}
