import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
