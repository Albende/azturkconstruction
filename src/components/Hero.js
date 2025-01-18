import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Ev Tikintisi, Təmir və Dizayn üzrə Mütəxəssis</h1>
        <p>
          Azturk Construction — müasir memarlıq, yüksək keyfiyyət, 
          innovativ dizayn və rahat yaşayışın ünvanı. Evinizi xəyalınızda 
          qurduğunuz kimi tikək!
        </p>
        <a href="#contact" className="hero-button">İndi Əlaqə Saxlayın</a>
      </div>
    </section>
  );
}

export default Hero;
