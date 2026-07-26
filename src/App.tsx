import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Trust from './pages/Trust';
import Deployment from './pages/Deployment';
import FAQPage from './pages/FAQPage';
import Value from './pages/Value';
import Company from './pages/Company';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/deployment" element={<Deployment />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/value" element={<Value />} />
        <Route path="/company" element={<Company />} />
      </Route>
    </Routes>
  );
}

export default App;
