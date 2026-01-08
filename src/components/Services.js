import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faHammer, faPaintRoller, faHome, faDraftingCompass, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Services() {
  const services = [
    {
      icon: faBuilding,
      title: "Yeni Binaların Tikintisi",
      shortDesc: "Sıfırdan inşa",
      description:
        "Binaların sıfırdan inşası, memarlıq planlaşdırma, möhkəm təməl qurma və bütün lazımi tikinti işlərini peşəkar komanda ilə həyata keçiririk.",
      image:
        "https://i0.wp.com/tesbee.ca/wp-content/uploads/2024/06/DALL%C2%B7E-2024-06-04-08.43.41-A-vibrant-construction-site-with-various-stages-of-a-building-being-constructed.-Workers-in-hard-hats-are-operating-machinery-like-cranes-and-excavato.webp?fit=1792%2C1024&ssl=1",
    },
    {
      icon: faHammer,
      title: "Kapital və Kosmetik Təmir",
      shortDesc: "Tam təmir xidmətləri",
      description:
        "Evinizin və ya ofisinizin daxili və xarici təmirini ən yüksək keyfiyyət standardlarına uyğun aparırıq. Material seçimi və dizayn məsləhətləri də bizdən!",
      image:
        "https://karabakhgroupllc.com/uploads/posts/2022-05/medium/1652352638_3-2.jpg",
    },
    {
      icon: faPaintRoller,
      title: "İnteryer və Eksteryer Dizayn",
      shortDesc: "Unikal dizayn həlləri",
      description:
        "Mütəxəssislərimiz ən müasir dizayn trendlərini funksionallıqla birləşdirərək yaşayış və iş mühitlərinizi unikal üslubda yaradır.",
      image:
        "https://kolani.az/wp-content/uploads/2023/07/eksteryer-.jpg",
    },
    {
      icon: faHome,
      title: "Villa Tikintisi",
      shortDesc: "Lüks yaşayış layihələri",
      description:
        "Xüsusi villa və müstəqil ev layihələri. Enerji effektivliyi, müasir memarlıq və premium materiallarla xəyallarınızdakı evi tikrik.",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=80",
    },
    {
      icon: faDraftingCompass,
      title: "Memarlıq Layihələndirmə",
      shortDesc: "3D vizuallaşdırma",
      description:
        "Peşəkar memarlıq layihələri, 3D vizuallaşdırma və texniki sənədlərin hazırlanması. Fikirlərinizi həyata keçirməyə kömək edirik.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section id="services" className="relative bg-navy-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-navy-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-section-mobile md:py-section lg:py-section-lg">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-gold-500 text-sm uppercase tracking-[0.2em] font-medium mb-4">
            Xidmətlərimiz
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Hər Növ Tikinti{" "}
            <span className="text-gold-500 italic">Xidmətləri</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            14 illik təcrübə ilə keyfiyyətli tikinti, təmir və dizayn xidmətləri təqdim edirik.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden
                bg-navy-900 border border-white/5
                h-[420px] sm:h-[480px]
                transition-all duration-500
                hover:border-gold-500/30
                ${index === 0 ? "lg:col-span-2 lg:row-span-2 lg:h-auto" : ""}
              `}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
                {/* Icon */}
                <div
                  className={`
                    w-14 h-14 mb-4
                    bg-gold-500/10 border border-gold-500/30
                    flex items-center justify-center
                    transition-all duration-500
                    group-hover:bg-gold-500 group-hover:border-gold-500
                  `}
                >
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="w-6 h-6 text-gold-500 transition-colors duration-500 group-hover:text-navy-900"
                  />
                </div>

                {/* Gold accent line */}
                <div className="w-12 h-[2px] bg-gold-500/50 mb-4 transition-all duration-500 group-hover:w-20 group-hover:bg-gold-500" />

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white mb-2">
                  {service.title}
                </h3>

                {/* Short description (always visible) */}
                <p className="text-gold-400/80 text-sm uppercase tracking-wider mb-3">
                  {service.shortDesc}
                </p>

                {/* Full description (visible on hover) */}
                <p
                  className={`
                    text-white/60 text-sm sm:text-base leading-relaxed
                    transition-all duration-500
                    opacity-0 translate-y-4 max-h-0
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-40
                    ${index === 0 ? "lg:opacity-100 lg:translate-y-0 lg:max-h-40" : ""}
                  `}
                >
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div
                  className={`
                    mt-4 flex items-center gap-2
                    text-gold-500 text-sm font-medium
                    transition-all duration-500
                    opacity-0 translate-y-4
                    group-hover:opacity-100 group-hover:translate-y-0
                  `}
                >
                  <span>Ətraflı</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="
              group inline-flex items-center gap-3
              px-8 py-4
              bg-gradient-to-r from-gold-500 to-gold-600
              text-navy-900 font-semibold text-lg
              overflow-hidden relative
              transition-all duration-300
              hover:shadow-gold-lg hover:scale-[1.02]
              min-h-touch-lg
            "
          >
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] skew-x-12 transition-transform duration-700 group-hover:translate-x-[100%]" />
            <span className="relative z-10">Pulsuz Qiymət Təklifi Alın</span>
            <FontAwesomeIcon icon={faArrowRight} className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
