import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faHandshake, faLightbulb, faLeaf, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function About() {
  const values = [
    {
      icon: faAward,
      title: "Keyfiyyət",
      description: "Hər bir layihədə mükəmməl iş keyfiyyətini təmin edirik",
    },
    {
      icon: faHandshake,
      title: "Etibar",
      description: "Uzunmüddətli və etibarlı tərəfdaşlıq əsas prioritetimizdir",
    },
    {
      icon: faLightbulb,
      title: "Yenilik",
      description: "Ən müasir texnologiyaları və trendləri tətbiq edirik",
    },
    {
      icon: faLeaf,
      title: "Davamlılıq",
      description: "Ekoloji təmiz materiallardan istifadə edərək gələcəyi qoruyuruq",
    },
  ];

  return (
    <section id="about" className="relative bg-navy-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/80 via-transparent to-navy-900/50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-section-mobile md:py-section lg:py-section-lg">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image with Frame Effect */}
          <div className="relative order-2 lg:order-1">
            {/* Gold Frame Offset */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-full h-full border-2 border-gold-500/30" />

            {/* Main Image */}
            <div className="relative overflow-hidden bg-navy-900 group">
              <img
                src="/photoazturk.jpeg"
                alt="Azturk Construction"
                className="w-full h-[400px] lg:h-[500px] object-cover transition-all duration-700 grayscale hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />

              {/* Experience Badge */}
              <div
                className="
                  absolute bottom-6 left-6 lg:bottom-8 lg:left-8
                  bg-gold-500 text-navy-900
                  px-6 py-4
                  shadow-gold-lg
                "
              >
                <div className="font-display text-4xl lg:text-5xl font-bold">14+</div>
                <div className="text-sm uppercase tracking-wider font-semibold">
                  İllik Təcrübə
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-gold-500 text-sm uppercase tracking-[0.2em] font-medium mb-4">
              Haqqımızda
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Tikintidə{" "}
              <span className="text-gold-500 italic">Mükəmməllik</span>
              <br />
              Standartı
            </h2>

            <div className="space-y-4 text-white/70 text-base lg:text-lg leading-relaxed mb-8">
              <p>
                <span className="text-gold-400 font-semibold">Azturk Construction</span> Azərbaycanda memarlıq, tikinti,
                təmir və interyer dizayn sahələrində lider mövqeyə sahib olan bir şirkətdir. 2010-cu ildə təsis edilmiş
                və o zamandan bəri müştərilərimizə bənzərsiz keyfiyyət və peşəkarlıqla xidmət göstəririk.
              </p>
              <p>
                Missiyamız sadəcə binalar tikmək deyil — biz rahat, funksional və estetik mühitlər yaratmağa sadiqik.
                Əsas məqsədimiz müştərilərimizin gözləntilərini aşmaq, eyni zamanda dayanıqlı və müasir həllər təqdim etməkdir.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 mb-10 pb-8 border-b border-white/10">
              <div>
                <div className="font-display text-3xl lg:text-4xl font-bold text-gold-500">500+</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">Layihə</div>
              </div>
              <div>
                <div className="font-display text-3xl lg:text-4xl font-bold text-gold-500">100%</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">Məmnuniyyət</div>
              </div>
              <div>
                <div className="font-display text-3xl lg:text-4xl font-bold text-gold-500">24/7</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">Dəstək</div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                group inline-flex items-center gap-3
                text-gold-500 font-semibold
                transition-all duration-300
                hover:text-gold-400
              "
            >
              <span>Layihənizi Müzakirə Edin</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
              />
            </a>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-16 lg:mt-24">
          <h3 className="font-heading text-xl font-semibold text-white text-center mb-10">
            Bizim <span className="text-gold-500">Dəyərlərimiz</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="
                  group p-6
                  bg-navy-900/50 backdrop-blur-sm
                  border border-white/5
                  transition-all duration-500
                  hover:border-gold-500/30 hover:bg-navy-900/70
                  hover:-translate-y-2 hover:shadow-luxury-md
                "
              >
                <div
                  className="
                    w-14 h-14 mb-4
                    bg-gold-500/10 border border-gold-500/20
                    flex items-center justify-center
                    transition-all duration-500
                    group-hover:bg-gold-500 group-hover:border-gold-500
                  "
                >
                  <FontAwesomeIcon
                    icon={value.icon}
                    className="w-6 h-6 text-gold-500 transition-colors duration-500 group-hover:text-navy-900"
                  />
                </div>
                <h4 className="font-heading text-lg font-semibold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision CTA Banner */}
        <div
          className="
            mt-16 lg:mt-24
            relative overflow-hidden
            bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900
            border border-gold-500/20
            p-8 lg:p-12
          "
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-xl lg:text-2xl font-semibold text-white mb-2">
                Layihəniz üçün Pulsuz Konsultasiya
              </h3>
              <p className="text-white/60">
                Xəyallarınızı həyata keçirməyə hazırıq. Bu gün bizə yazın!
              </p>
            </div>
            <a
              href="https://wa.me/994519886622?text=Salam!%20Azturk%20Construction%20xidm%C9%99tl%C9%99ri%20haqq%C4%B1nda%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m."
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative inline-flex items-center gap-3
                px-8 py-4
                bg-gradient-to-r from-gold-500 to-gold-600
                text-navy-900 font-semibold text-lg
                overflow-hidden
                transition-all duration-300
                hover:shadow-gold-lg hover:scale-[1.02]
                min-h-touch-lg
                flex-shrink-0
              "
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] skew-x-12 transition-transform duration-700 group-hover:translate-x-[100%]" />
              <svg className="relative z-10 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="relative z-10">WhatsApp ilə Yazın</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
