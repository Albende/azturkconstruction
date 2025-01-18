import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close the menu after clicking
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Azturk Construction</div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")}>
            Xidmətlər
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={(e) => handleSmoothScroll(e, "portfolio")}>
            Portfel
          </a>
        </li>
        <li>
          <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, "testimonials")}>
            Rəylər
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
            Haqqımızda
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>
            Əlaqə
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
