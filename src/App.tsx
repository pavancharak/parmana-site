import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Problem from './components/Problem/Problem';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Pillars from './components/Pillars/Pillars';
import WhyDeterministic from './components/WhyDeterministic/WhyDeterministic';
import JailbreakQuestion from './components/JailbreakQuestion/JailbreakQuestion';
import DecisionChain from './components/DecisionChain/DecisionChain';
import RunsWhereYouRun from './components/RunsWhereYouRun/RunsWhereYouRun';
import WhatParmanaIsNot from './components/WhatParmanaIsNot/WhatParmanaIsNot';
import Commitment from './components/Commitment/Commitment';
import WhatChanges from './components/WhatChanges/WhatChanges';
import DesignPartners from './components/DesignPartners/DesignPartners';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Problem />
        <HowItWorks />
        <Pillars />
        <WhyDeterministic />
        <JailbreakQuestion />
        <DecisionChain />
        <RunsWhereYouRun />
        <WhatParmanaIsNot />
        <Commitment />
        <WhatChanges />
        <DesignPartners />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
