import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection"; // Import FadeInSection
import "./App.css"; // Import updated CSS

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />

      {/* Wrap sections with FadeInSection for animations */}
      {/* <FadeInSection>
        <section id="about"> */}
          <About />
        {/* </section>
      </FadeInSection> */}
{/* 
      <FadeInSection>
        <section id="services"> */}
          <Services />
        {/* </section>
      </FadeInSection> */}
{/* 
      <FadeInSection>
        <section id="portfolio"> */}
          <Portfolio />
        {/* </section>
      </FadeInSection> */}

      {/* <FadeInSection>
        <section id="testimonials"> */}
          <Testimonials />
        {/* </section>
      </FadeInSection> */}

      {/* <FadeInSection>
        <section id="contact"> */}
          <Contact />
        {/* </section>
      </FadeInSection> */}

      <Footer />
    </div>
  );
}

export default App;
