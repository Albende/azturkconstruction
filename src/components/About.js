import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2>Haqqımızda</h2>
      <div className="about-content">
        <img
          src="/photoazturk.jpeg"
          alt="Azturk Construction"
          className="about-image"
        />
        <div className="about-text">
          <h3>Biz Kimik?</h3>
          <p>
            <strong>Azturk Construction</strong> Azərbaycanda memarlıq, tikinti, təmir və interyer dizayn sahələrində
            lider mövqeyə sahib olan bir şirkətdir. 2010-cu ildə təsis edilmiş və o zamandan bəri müştərilərimizə 
            bənzərsiz keyfiyyət və peşəkarlıqla xidmət göstəririk. Biz hər bir layihəyə unikal yanaşır, müştərilərimizin
            xəyalındakı məkanları reallığa çeviririk.
          </p>

          <h3>Missiyamız</h3>
          <p>
            Missiyamız sadəcə binalar tikmək deyil — biz rahat, funksional və estetik mühitlər yaratmağa sadiqik. 
            Əsas məqsədimiz müştərilərimizin gözləntilərini aşmaq, eyni zamanda dayanıqlı və müasir həllər təqdim etməkdir.
          </p>

          <h3>Gələcəyə Baxışımız</h3>
          <p>
            <strong>Vision:</strong> Gələcəkdə Azturk Construction-u dünya səviyyəli tikinti və dizayn şirkəti kimi
            görmək və Azərbaycanda tikinti sənayesində innovasiya lideri olmaq. Biz dayanıqlı infrastruktur layihələri,
            ekoloji təmiz binalar və yeni texnologiyalar vasitəsilə cəmiyyətin inkişafına töhfə verməyi hədəfləyirik.
          </p>

          <h3>Dəyərlərimiz</h3>
          <ul>
            <li>
              <strong>Keyfiyyət:</strong> Hər bir layihədə mükəmməl iş keyfiyyətini təmin etmək üçün dünya səviyyəli 
              standartlara riayət edirik.
            </li>
            <li>
              <strong>Etibar:</strong> Müştərilərimizlə uzunmüddətli və etibarlı tərəfdaşlıq qurmaq əsas prioritetimizdir.
            </li>
            <li>
              <strong>Yenilik:</strong> Ən müasir texnologiyaları və trendləri tətbiq etməklə daim inkişaf edirik.
            </li>
            <li>
              <strong>Sosial Məsuliyyət:</strong> Ekoloji təmiz materiallardan istifadə edərək və cəmiyyətin inkişafına
              dəstək olmaqla davamlılıq prinsiplərinə sadiq qalırıq.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
