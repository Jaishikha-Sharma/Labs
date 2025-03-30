import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contactUs/Contact";
import Gallery from "./components/gallery/Gallery";
import Services from "./components/services/Services";
import Certificates from "./components/certificates/Certificates"
import "./App.css"
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
