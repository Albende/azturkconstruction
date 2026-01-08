import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustSignals from "./components/TrustSignals";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import StickyMobileCTA from "./components/StickyMobileCTA";

function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust Signals - After Hero */}
      <TrustSignals />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Lead Generation Components */}
      <FloatingCTA />
      <StickyMobileCTA />
    </div>
  );
}

export default App;
