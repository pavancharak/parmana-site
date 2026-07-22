import DocumentHeader from '../components/DocumentHeader/DocumentHeader';
import Hero from '../components/Hero/Hero';
import FeatureBlocks from '../components/FeatureBlocks/FeatureBlocks';
import Autonomy from '../components/Autonomy/Autonomy';
import Developers from '../components/Developers/Developers';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';

export default function Home() {
  return (
    <>
      <DocumentHeader page="Home" />

      <Hero />

      <FeatureBlocks />

      <Autonomy />

      <Developers />

      <FAQ />

      <CTA
        heading="Keep human authority in control of AI execution."
        body="See how Parmana verifies every AI action before it reaches your business systems, ensuring AI operates within the authority your organization defines."
        label="Become a Design Partner"
      />
    </>
  );
}