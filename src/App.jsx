import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import ProductInfo from './pages/ProductInfo';
import OurServices from './pages/OurServices'; // Import Our Services Page
import image1 from './assets/image1.jpg';

function App() {
  const products = [
    { image: image1, title: "Puffer Jacket", price: "218" },
    { image: image1, title: "Contrast Legging", price: "98" },
    { image: image1, title: "Contrast Legging", price: "98" },
  ];

  return (
    <Router>
      <div className="w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/services" element={<OurServices />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
