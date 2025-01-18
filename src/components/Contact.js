import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Bizimlə Əlaqə</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <p>Telefon: +994 (51) 988 66 22</p>
          <p>Email: info@azturkconstruction.az</p>
          <p>
            Ünvan: Çinar Plaza, 31-ci mərtəbə, 152A Heydər Əliyev prospekti,
            Bakı, Azərbaycan
          </p>
          <a
            href="https://wa.me/994519886622" // Replace with your WhatsApp number
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp-a Keç
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
