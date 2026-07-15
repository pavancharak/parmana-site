import DocumentHeader from '../components/DocumentHeader/DocumentHeader';
import CompanyIntro from '../components/CompanyIntro/CompanyIntro';
import Origin from '../components/Origin/Origin';
import Team from '../components/Team/Team';
import ContactBlock from '../components/ContactBlock/ContactBlock';

export default function Company() {
  return (
    <>
      <DocumentHeader page="Company" />
      <CompanyIntro />
      <Origin />
      <Team />
      <ContactBlock />
    </>
  );
}
