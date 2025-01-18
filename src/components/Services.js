import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <h2>Xidmətlərimiz</h2>
      <div className="services-wrapper">

        <div className="service-item">
          <img
            src="https://i0.wp.com/tesbee.ca/wp-content/uploads/2024/06/DALL%C2%B7E-2024-06-04-08.43.41-A-vibrant-construction-site-with-various-stages-of-a-building-being-constructed.-Workers-in-hard-hats-are-operating-machinery-like-cranes-and-excavato.webp?fit=1792%2C1024&ssl=1"
            alt="Tikinti"
          />
          <h3>Yeni Binaların Tikintisi</h3>
          <p>
            Binaların sıfırdan inşası, memarlıq planlaşdırma, 
            möhkəm təməl qurma və bütün lazımi tikinti işlərini 
            peşəkar komanda ilə həyata keçiririk.
          </p>
        </div>

        <div className="service-item">
          <img
            src="https://karabakhgroupllc.com/uploads/posts/2022-05/medium/1652352638_3-2.jpg"
            alt="Təmir"
          />
          <h3>Kapital və Kosmetik Təmir</h3>
          <p>
            Evinizin və ya ofisinizin daxili və xarici təmirini 
            ən yüksək keyfiyyət standardlarına uyğun aparırıq. 
            Material seçimi və dizayn məsləhətləri də bizdən!
          </p>
        </div>

        <div className="service-item">
          <img
            src="https://kolani.az/wp-content/uploads/2023/07/eksteryer-.jpg"
            alt="Dizayn"
          />
          <h3>İnteryer və Eksteryer Dizayn</h3>
          <p>
            Mütəxəssislərimiz ən müasir dizayn trendlərini 
            funksionallıqla birləşdirərək yaşayış və iş mühitlərinizi 
            unikal üslubda yaradır.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;
