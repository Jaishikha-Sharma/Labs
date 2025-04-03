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
import WaterTesting from "./components/services/testings/WaterTesting";
import TestingLabs from "./components/services/testings/TestingLab";
import SoilTesting from "./components/services/testings/SoilTesting";
import FoodTesting from "./components/services/testings/FoodTesting";
import HerbalTesting from "./components/services/testings/OilTesting";
import EnvTesting from "./components/services/testings/EnviornmentTest";
import ScrollToTop from "./components/Scroller/Scrollbar";

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
        <Route path="/water-Testing" element={<WaterTesting />} />
        <Route path="/testing-lab" element={<TestingLabs />} />
        <Route path="/soil-testing" element={<SoilTesting />} />
        <Route path="/food-testing" element={<FoodTesting />} />
        <Route path="/herbal-testing" element={<HerbalTesting />} />
        <Route path="/Enviornment-testing" element={<EnvTesting />} />
      </Routes>
      <ScrollToTop/>
      <Footer/>
    </Router>
  );
}

export default App;
