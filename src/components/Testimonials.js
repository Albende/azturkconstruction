import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Rəylər</h2>
      <div className="testimonials-wrapper">

        <div className="testimonial">
          <p>
            “Azturk Construction sayəsində evim xəyallarımdan da gözəl oldu. 
            Keyfiyyətli iş və professional münasibət! Çox razı qaldım.”
          </p>
          <h4>— Elçin Məmmədov</h4>
        </div>

        <div className="testimonial">
          <p>
            “Şirkət mənim ofisimi qısa zamanda təmir edib təhvil verdi. 
            Xidmət səviyyəsi yüksək idi, hər detalı nəzərə almışdılar.”
          </p>
          <h4>— Nigar Həsənli</h4>
        </div>

        <div className="testimonial">
          <p>
            “Dizayn işi son dərəcə modern və funksional alındı. 
            Tikinti prosesi də vaxtında tamamlandı. Tövsiyə edirəm!”
          </p>
          <h4>— Orxan Quliyev</h4>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
