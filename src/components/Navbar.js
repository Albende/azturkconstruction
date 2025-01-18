import React from "react";
import "./Navbar.css";

function Navbar() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Azturk Construction</div>
      <ul className="navbar-links">
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
