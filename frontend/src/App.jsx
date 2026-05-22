import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import SolutionPage from "./pages/Solution";
import ContactPage from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solutions" element={<SolutionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
      </Routes>
      <WhatsAppButton />
      <ScrollToTop />
      <Footer />
    </Router>
  );
};

export default App;
