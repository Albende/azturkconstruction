import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfel</h2>
      <p>
        Aşağıda Azturk Construction tərəfindən inşa edilmiş və ya təmir edilmiş bəzi layihələrdən nümunələr görürsünüz.
      </p>
      <div className="portfolio-gallery">
        {/* Layihə kartları */}
        <a
          href="https://www.instagram.com/azturk_construction/"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <img
            src="https://www.zeysey.com/storage/image/blog/01J2V8NZ8KFK88H0WER7D0KTWS.jpg"
            alt="Layihə 1"
          />
          <h3>Villa Layihəsi</h3>
          <p>3 mərtəbəli müasir villa, Qaradağ rayonu (2023)</p>
        </a>

        <a
          href="https://www.instagram.com/azturk_construction/"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <img
            src="https://officebanao.com/wp-content/uploads/2023/10/Modern-Offices_459.jpg"
            alt="Layihə 2"
          />
          <h3>Ofis Təmir Layihəsi</h3>
          <p>Şəhər mərkəzində 200 m² ofisin əsaslı təmiri (2022)</p>
        </a>

        <a
          href="https://www.instagram.com/azturk_construction/"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNecOQWkyuoK9fqJ0D6GPntl5IAHRblgbGg&s"
            alt="Layihə 3"
          />
          <h3>Bağ Evi Yenidənqurma</h3>
          <p>İsmayıllı rayonu, bağ evi interyer dizaynı (2021)</p>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
