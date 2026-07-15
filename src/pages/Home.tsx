import DocumentHeader from '../components/DocumentHeader/DocumentHeader';
import Hero from '../components/Hero/Hero';
import Pillars from '../components/Pillars/Pillars';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import JailbreakNotice from '../components/JailbreakNotice/JailbreakNotice';
import WhoItIsFor from '../components/WhoItIsFor/WhoItIsFor';
import WhyNow from '../components/WhyNow/WhyNow';
import CTA from '../components/CTA/CTA';

export default function Home() {
  return (
    <>
      <DocumentHeader page="Home" />
      <Hero />
      <Pillars />
      <HowItWorks />
      <JailbreakNotice />
      <WhoItIsFor />
      <WhyNow />
      <CTA
        heading="See it stop a compromised agent."
        body="Our demo shows four outcomes live: a valid action accepted, a replay rejected, a tampered request rejected, and a missing authorization rejected."
        label="Write to founder@parmanasystems.com"
        mailto="mailto:founder@parmanasystems.com"
      />
    </>
  );
}
