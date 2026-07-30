import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Company from './pages/Company';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/company" element={<Company />} />
      </Route>
    </Routes>
  );
}

export default App;
