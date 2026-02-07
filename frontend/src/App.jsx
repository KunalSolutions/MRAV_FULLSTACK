import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import SolutionPage from "./pages/Solution";
import ContactPage from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
