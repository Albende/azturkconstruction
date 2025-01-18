import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Azturk Construction. Bütün hüquqlar qorunur.
      </p>
    </footer>
  );
}

export default Footer;
