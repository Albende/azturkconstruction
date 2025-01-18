import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada serverə POST etmək və ya digər əməliyyat aparmaq olar
    alert("Mesajınız qəbul olundu. Tezliklə əlaqə saxlayacağıq!");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <h2>Əlaqə</h2>
      <div className="contact-wrapper">

        <div className="contact-info">
          <h3>Bizimlə əlaqə</h3>
          <p>Telefon: +994 (51) 988 66 22</p>
          <p>Email: info@azturkconstruction.az</p>
          <p>Ünvan: Çinar Plaza, 31-ci mərtəbə, 152A Heydər Əliyev prospekti, Bakı, Azərbaycan</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Sorğunuzu Bizə Göndərin</h3>
          <input
            type="text"
            placeholder="Adınız"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Telefon"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <textarea
            rows="5"
            placeholder="Mesajınız..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit">Göndər</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
