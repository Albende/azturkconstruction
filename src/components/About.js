import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2>Haqqımızda</h2>
      <div className="about-content">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/028/247/802/small_2x/asian-two-construction-engineers-supervising-progress-of-construction-project-and-crane-background-photo.jpg"
          alt="Azturk Construction"
        />
        <div className="about-text">
          <p>
            <strong>Azturk Construction</strong> Azərbaycanda aparıcı 
            tikinti və təmir şirkətlərindən biridir. 2010-cu ildə 
            fəaliyyətə başlayan şirkətimiz öz müştərilərinə yüksək 
            keyfiyyətli xidmətlər, kreativ dizayn həlləri və inamlı 
            tərəfdaşlıq təklif edir.
          </p>
          <p>
            Missiyamız — insanların rahat və estetik yaşayış, çalışma 
            mühitinə sahib olmasına kömək etməkdir. Yüzlərlə uğurlu 
            layihəmiz, müştərilərimizin etimadı və peşəkar komandamızla 
            daima daha yaxşı nəticələrə imza atırıq.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
