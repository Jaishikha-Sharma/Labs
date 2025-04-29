import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/Scroller/Scrollbar";

// Lazy-loaded components
const Home = lazy(() => import("./components/home/Home"));
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contactUs/Contact"));
const Gallery = lazy(() => import("./components/gallery/Gallery"));
const Services = lazy(() => import("./components/services/Services"));
const Certificates = lazy(() => import("./components/certificates/Certificates"));
const WaterTesting = lazy(() => import("./components/services/testings/WaterTesting"));
const TestingLabs = lazy(() => import("./components/services/testings/TestingLab"));
const SoilTesting = lazy(() => import("./components/services/testings/SoilTesting"));
const FoodTesting = lazy(() => import("./components/services/testings/FoodTesting"));
const EnvTesting = lazy(() => import("./components/services/testings/EnviornmentTest"));
const Blogs = lazy(() => import("./components/blogs/Blogs"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const MetalsTesting = lazy(() => import("./components/services/testings/MetalsTesting"));
const CokeTesting = lazy(() => import("./components/services/testings/CokeTesting"));
const BuildingAnalysis = lazy(() => import("./components/services/testings/BuildingAnalysis"));
const Mission = lazy(() => import("./components/about/Mission"));
const WhatWeAre = lazy(() => import("./components/about/whatWeAre"));
const PrivacyPolicy = lazy(() => import("./components/footer/PrivacyPolicy"));
const TnC = lazy(() => import("./components/footer/TnC"));


function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div style={{ padding: "40px", textAlign: "center" }}>Loading...</div>}>
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
          <Route path="/Enviornment-testing" element={<EnvTesting />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/metals" element={<MetalsTesting />} />
          <Route path="/coke-testing" element={<CokeTesting />} />
          <Route path="/building-analysis" element={<BuildingAnalysis />} />
          <Route path="/what-we-are" element={<WhatWeAre />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-condition" element={<TnC />} />
        </Routes>
      </Suspense>
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
