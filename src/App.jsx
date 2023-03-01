import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Features from "./pages/Features";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Listed from "./pages/Listed";
import Services from "./pages/Services";
import { useState } from "react";

function App() {
  return (
    <>
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/features" element={<Features />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/listed" element={<Listed />}/>
        <Route path="/faq" element={<FAQ />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
