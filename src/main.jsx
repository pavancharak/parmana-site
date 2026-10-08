import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import {ArrowRight, Check, ChevronDown, ShieldCheck, LockKeyhole, Building2, FileCheck2, Menu, X} from "lucide-react";
import "./styles.css";

const examples=[
 {label:"REFUND",title:"Customer refund",text:"An agent is authorized to approve refunds up to ₹50,000. A request for ₹80,000 arrives.",result:"Execution blocked.",detail:"The AI can recommend the refund. The business still controls whether it can execute."},
 {label:"PAYMENT",title:"Vendor payment",text:"An agent can release payments within an approved limit. It attempts a payment above that limit.",result:"Execution blocked.",detail:"Autonomous operation does not create new authority."},
 {label:"RECORD",title:"Protected record",text:"An agent attempts to change a customer record outside its approved business process.",result:"Execution blocked.",detail:"The action is checked against the authority granted by the institution."}
];

function App(){
 const [menu,setMenu]=useState(false);
 const [active,setActive]=useState(0);
 useEffect(()=>{document.documentElement.style.scrollBehavior="smooth"},[]);
 return <div className="site">
  <header className="nav">
   <a className="brand" href="#top">PARMANA<span>®</span></a>
   <nav className={menu?"navlinks open":"navlinks"}>
    <a href="#problem" onClick={()=>setMenu(false)}>The problem</a>
    <a href="#how" onClick={()=>setMenu(false)}>How it works</a>
    <a href="#examples" onClick={()=>setMenu(false)}>Examples</a>
    <a href="#institutions" onClick={()=>setMenu(false)}>For institutions</a>
    <a className="navcta" href="#contact" onClick={()=>setMenu(false)}>Talk to Parmana <ArrowRight size={15}/></a>
   </nav>
   <button className="menubtn" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X/>:<Menu/>}</button>
  </header>

  <main id="top">
   <section className="hero">
    <div className="eyebrow"><span className="pulse"></span> INSTITUTIONAL AUTHORITY FOR AUTONOMOUS AI</div>
    <h1>Keep the authority.<br/><em>Let AI operate autonomously.</em></h1>
    <p className="hero-copy">Parmana ensures autonomous AI can execute only the actions your business has authorized.</p>
    <div className="actions"><a className="button primary" href="#how">See how Parmana works <ArrowRight size={18}/></a><a className="button ghost" href="#problem">Explore the problem</a></div>
    <p className="micro">For institutions deploying AI that can make decisions and take action.</p>
    <div className="hero-line"><span>BUSINESS AUTHORITY</span><div className="line"></div><span>AI AUTONOMY</span><div className="line"></div><span>EXECUTION</span></div>
   </section>

   <section id="problem" className="dark-section">
    <div className="section-kicker">THE GAP</div>
    <div className="split">
     <div><h2>Accountability<br/>without authority<br/><em>is a dangerous gap.</em></h2></div>
     <div className="copy"><p>Institutions are increasingly responsible for what AI systems do, while autonomous AI is gaining the ability to take actions inside business systems.</p><p>An agent may approve a refund, release a payment, change a customer record, create an order, or trigger an operational workflow.</p><div className="question"><span>AI decides</span><b>→</b><span>AI acts</span></div><p className="big-question">Who controls the authority to act?</p></div>
    </div>
   </section>

   <section className="principle">
    <div className="section-kicker">PARMANA'S PRINCIPLE</div>
    <h2>AI can be autonomous<br/><em>without becoming the authority.</em></h2>
    <p className="lead">The business defines what AI is allowed to do. AI operates independently within those boundaries. Parmana checks the attempted action before it executes.</p>
    <div className="authority-flow">
      {["Business authority","Authorized actions","AI operates autonomously","Parmana checks execution","Allowed action executes"].map((x,i)=><React.Fragment key={x}><div className={"flow-card "+(i===3?"guard":"")}><span>0{i+1}</span><strong>{x}</strong>{i===3&&<ShieldCheck size={22}/>}</div>{i<4&&<div className="down">↓</div>}</React.Fragment>)}
    </div>
    <div className="blocked"><LockKeyhole size={20}/><strong>Outside the authority?</strong><span>Execution blocked.</span></div>
   </section>

   <section id="how" className="how">
    <div className="section-kicker">HOW IT WORKS</div><h2>Simple by design.</h2>
    <div className="steps">{[
      ["01","Business defines authority","The institution decides what an AI system is allowed to do."],
      ["02","AI operates","The AI can make decisions and initiate actions without waiting for a human every time."],
      ["03","Parmana checks the action","Before execution, Parmana verifies whether the requested action falls within the authority granted by the business."],
      ["04","Only authorized actions execute","If authorized, execution proceeds. If not authorized, execution is stopped."],
      ["05","The institution retains control","The AI remains autonomous. The institution remains the authority."]
    ].map(([n,t,d])=><article className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
   </section>

   <section className="distinction">
    <div><div className="section-kicker">THE DISTINCTION</div><h2>Autonomy <span>≠</span> Authority</h2></div>
    <div className="dist-copy"><div><strong>Autonomy</strong><p>AI can operate without constant human intervention.</p></div><div><strong>Authority</strong><p>What the AI is actually permitted to do.</p></div><div className="statement">Parmana lets institutions give AI autonomy <em>without giving away institutional authority.</em></div></div>
   </section>

   <section id="examples" className="examples">
    <div className="section-kicker">REAL WORLD EXAMPLES</div><h2>What happens when AI<br/><em>tries to go beyond its authority?</em></h2>
    <div className="tabs">{examples.map((e,i)=><button className={i===active?"tab active":"tab"} onClick={()=>setActive(i)} key={e.label}>{e.label}<span>{e.title}</span></button>)}</div>
    <div className="example-card"><div><span className="tag">{examples[active].label}</span><h3>{examples[active].title}</h3><p>{examples[active].text}</p></div><div className="result"><div className="result-icon"><X size={24}/></div><strong>{examples[active].result}</strong><p>{examples[active].detail}</p></div></div>
   </section>

   <section className="protect">
    <div className="section-kicker">WHAT PARMANA PROTECTS</div><h2>The boundary between<br/><em>what AI can decide and what AI can execute.</em></h2>
    <div className="decision"><div className="node">AI proposes an action</div><div className="arrow">↓</div><div className="gate"><ShieldCheck size={28}/><strong>Is this action authorized by the business?</strong></div><div className="branches"><div><span>YES</span><b>→ Execute</b></div><div><span>NO</span><b>→ Block</b></div></div></div>
   </section>

   <section id="institutions" className="institutions">
    <div className="section-kicker">FOR INSTITUTIONS</div><h2>Built for institutions where<br/><em>AI actions carry real consequences.</em></h2>
    <div className="sector-grid">{["Banking","Financial services","Insurance","Healthcare","Enterprise operations","Regulated industries"].map(x=><div key={x}><Building2 size={18}/>{x}</div>)}</div>
    <div className="accountability"><div><span>ACCOUNTABILITY</span><strong>The institution remains accountable for the action.</strong></div><div className="equals">→</div><div><span>AUTHORITY</span><strong>The institution must retain authority over execution.</strong></div></div>
   </section>

   <section className="why">
    <div className="section-kicker">WHY PARMANA</div><h2>Give AI room to operate.<br/><em>Not room to overreach.</em></h2>
    <div className="principles">{[
      ["01","Authority stays with the business","AI does not become the source of authority simply because it can act."],
      ["02","Autonomous operation","AI can operate without requiring humans to approve every routine action."],
      ["03","Execution enforcement","Unauthorized actions are stopped before they execute."],
      ["04","Evidence","The institution can establish what authority existed and whether the attempted action was within that authority."]
    ].map(([n,t,d])=><div key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
   </section>

   <section id="contact" className="cta">
    <div className="section-kicker">PARMANA SYSTEMS</div><h2>Let AI operate.<br/><em>Keep the authority.</em></h2><p>Deploy autonomous AI without surrendering control over what your systems are allowed to execute.</p><div className="actions"><a className="button light" href="mailto:founder@parmanasystems.com">Talk to Parmana <ArrowRight size={18}/></a><a className="button outline" href="#how">See Parmana in action</a></div>
   </section>
  </main>
  <footer><a className="brand" href="#top">PARMANA<span>®</span></a><p>Institutional authority for autonomous AI.</p><span>© {new Date().getFullYear()} Parmana Systems</span></footer>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
