import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Hamısı" },
    { id: "villa", label: "Villa" },
    { id: "office", label: "Ofis" },
    { id: "interior", label: "İnteryer" },
  ];

  const projects = [
    {
      id: 1,
      category: "villa",
      title: "Müasir Villa Layihəsi",
      description: "3 mərtəbəli müasir villa, Qaradağ rayonu",
      year: "2023",
      image: "https://www.zeysey.com/storage/image/blog/01J2V8NZ8KFK88H0WER7D0KTWS.jpg",
      featured: true,
      href: "https://www.instagram.com/azturk_construction/",
    },
    {
      id: 2,
      category: "office",
      title: "Ofis Təmir Layihəsi",
      description: "Şəhər mərkəzində 200 m² ofisin əsaslı təmiri",
      year: "2022",
      image: "https://officebanao.com/wp-content/uploads/2023/10/Modern-Offices_459.jpg",
      featured: false,
      href: "https://www.instagram.com/azturk_construction/",
    },
    {
      id: 3,
      category: "interior",
      title: "Bağ Evi Yenidənqurma",
      description: "İsmayıllı rayonu, bağ evi interyer dizaynı",
      year: "2021",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNecOQWkyuoK9fqJ0D6GPntl5IAHRblgbGg&s",
      featured: false,
      href: "https://www.instagram.com/azturk_construction/",
    },
    {
      id: 4,
      category: "villa",
      title: "Lüks Villa Kompleksi",
      description: "Premium villa layihəsi, Mərdəkan",
      year: "2023",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80",
      featured: false,
      href: "https://www.instagram.com/azturk_construction/",
    },
    {
      id: 5,
      category: "interior",
      title: "Mənzil Təmiri",
      description: "150 m² mənzilin tam təmiri, Bakı",
      year: "2022",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop&q=80",
      featured: false,
      href: "https://www.instagram.com/azturk_construction/",
    },
    {
      id: 6,
      category: "office",
      title: "Korporativ Ofis",
      description: "IT şirkəti üçün ofis dizaynı",
      year: "2023",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
      featured: false,
      href: "https://www.instagram.com/azturk_construction/",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative bg-navy-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 via-transparent to-navy-800/50" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-navy-500/10 rounded-full blur-3xl" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-section-mobile md:py-section lg:py-section-lg">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-gold-500 text-sm uppercase tracking-[0.2em] font-medium mb-4">
            Portfel
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Tamamlanmış{" "}
            <span className="text-gold-500 italic">Layihələrimiz</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Azturk Construction tərəfindən inşa edilmiş və ya təmir edilmiş bəzi layihələrdən nümunələr.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 lg:mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                px-6 py-3 text-sm font-medium uppercase tracking-wider
                transition-all duration-300
                min-h-touch
                ${
                  activeFilter === filter.id
                    ? "bg-gold-500 text-navy-900"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                }
              `}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative overflow-hidden
                bg-navy-800 border border-white/5
                transition-all duration-500
                hover:border-gold-500/30
                ${project.featured ? "sm:col-span-2 sm:row-span-2" : ""}
                ${project.featured ? "h-[400px] sm:h-[500px] lg:h-[600px]" : "h-[280px] sm:h-[320px]"}
              `}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Category Tag */}
              <div
                className={`
                  absolute top-4 left-4
                  px-3 py-1.5
                  bg-gold-500/90 text-navy-900
                  text-xs uppercase tracking-wider font-semibold
                  transition-all duration-500
                  translate-y-[-20px] opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100
                `}
              >
                {filters.find((f) => f.id === project.category)?.label}
              </div>

              {/* Year Badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium">
                {project.year}
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                {/* Gold accent line */}
                <div className="w-10 h-[2px] bg-gold-500/50 mb-4 transition-all duration-500 group-hover:w-16 group-hover:bg-gold-500" />

                <h3
                  className={`
                    font-heading font-semibold text-white mb-2
                    ${project.featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}
                  `}
                >
                  {project.title}
                </h3>

                <p
                  className={`
                    text-white/60 transition-all duration-500
                    ${project.featured ? "text-base" : "text-sm"}
                  `}
                >
                  {project.description}
                </p>

                {/* View Link */}
                <div
                  className={`
                    mt-4 flex items-center gap-2
                    text-gold-500 text-sm font-medium
                    transition-all duration-500
                    opacity-0 translate-y-4
                    group-hover:opacity-100 group-hover:translate-y-0
                  `}
                >
                  <span>İnstagram-da Bax</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" />
                </div>
              </div>

              {/* Hover Overlay Icon */}
              <div
                className={`
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-16 h-16
                  bg-gold-500/90 text-navy-900
                  flex items-center justify-center
                  transition-all duration-500
                  opacity-0 scale-50
                  group-hover:opacity-100 group-hover:scale-100
                `}
              >
                <FontAwesomeIcon icon={faPlus} className="w-6 h-6" />
              </div>
            </a>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <a
            href="https://www.instagram.com/azturk_construction/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex items-center gap-3
              px-8 py-4
              bg-white/5 border border-white/10
              text-white font-semibold text-lg
              transition-all duration-300
              hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888]
              hover:border-transparent hover:scale-[1.02]
              min-h-touch-lg
            "
          >
            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            <span>Bütün Layihələri Görün</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
