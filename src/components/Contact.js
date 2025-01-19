import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
            href="https://wa.me/994519886622"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp-a Keç
          </a>
          <div className="social-media">
            <p>Layihələrimizi sosial şəbəkələrdə izləyin:</p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/azturk_construction/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="icon instagram" /> Instagram
              </a>
              <a
                href="https://www.tiktok.com/@azturkconstruction"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTiktok} className="icon tiktok" /> TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
