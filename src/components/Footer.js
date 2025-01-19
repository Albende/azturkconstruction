import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Azturk Construction. Bütün hüquqlar qorunur.
      </p>
      <div className="footer-icons">
        <a
          href="https://www.instagram.com/azturk_construction/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a
          href="https://www.tiktok.com/@azturkconstruction"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
