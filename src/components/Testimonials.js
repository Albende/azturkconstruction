import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronLeft, faChevronRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote:
        "Azturk Construction sayəsində evim xəyallarımdan da gözəl oldu. Keyfiyyətli iş və professional münasibət! Çox razı qaldım.",
      author: "Elçin Məmmədov",
      role: "Villa Layihəsi",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      quote:
        "Şirkət mənim ofisimi qısa zamanda təmir edib təhvil verdi. Xidmət səviyyəsi yüksək idi, hər detalı nəzərə almışdılar. Mütləq tövsiyə edirəm.",
      author: "Nigar Həsənli",
      role: "Ofis Təmiri",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      quote:
        "Dizayn işi son dərəcə modern və funksional alındı. Tikinti prosesi də vaxtında tamamlandı. Peşəkarlıqları ilə heyran qaldıq!",
      author: "Orxan Quliyev",
      role: "İnteryer Dizayn",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      quote:
        "Mənzilimizin tam təmiri mükəmməl şəkildə aparıldı. Komanda çox səliqəli işlədi və büdcəyə riayət etdi. Əla xidmət!",
      author: "Aynur Əliyeva",
      role: "Mənzil Təmiri",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Auto-rotate
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  return (
    <section id="testimonials" className="relative bg-navy-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 via-transparent to-navy-800/50" />

        {/* Large decorative quote */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="w-[300px] h-[300px] text-gold-500/5"
          />
        </div>

        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-section-mobile md:py-section lg:py-section-lg">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-gold-500 text-sm uppercase tracking-[0.2em] font-medium mb-4">
            Rəylər
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Müştərilərimiz{" "}
            <span className="text-gold-500 italic">Nə Deyir?</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-luxury"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="text-center">
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className="w-5 h-5 text-gold-500"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl font-light italic text-white/90 leading-relaxed mb-10">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gold-500/30"
                        loading="lazy"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-white text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-gold-500/80 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12
              w-12 h-12
              bg-white/5 border border-white/10
              text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20
              flex items-center justify-center
              transition-all duration-300
              hidden sm:flex
            "
            aria-label="Əvvəlki"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12
              w-12 h-12
              bg-white/5 border border-white/10
              text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20
              flex items-center justify-center
              transition-all duration-300
              hidden sm:flex
            "
            aria-label="Növbəti"
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  w-3 h-3 rounded-full
                  transition-all duration-300
                  ${
                    index === activeIndex
                      ? "bg-gold-500 w-8"
                      : "bg-white/20 hover:bg-white/40"
                  }
                `}
                aria-label={`${index + 1}-ci rəyə keç`}
              />
            ))}
          </div>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 lg:mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-3xl lg:text-4xl font-bold text-gold-500 mb-2">
                500+
              </div>
              <div className="text-white/50 text-sm uppercase tracking-wider">
                Razı Müştəri
              </div>
            </div>
            <div>
              <div className="font-display text-3xl lg:text-4xl font-bold text-gold-500 mb-2">
                5.0
              </div>
              <div className="text-white/50 text-sm uppercase tracking-wider">
                Orta Reytinq
              </div>
            </div>
            <div>
              <div className="font-display text-3xl lg:text-4xl font-bold text-gold-500 mb-2">
                100%
              </div>
              <div className="text-white/50 text-sm uppercase tracking-wider">
                Məmnuniyyət
              </div>
            </div>
            <div>
              <div className="font-display text-3xl lg:text-4xl font-bold text-gold-500 mb-2">
                14+
              </div>
              <div className="text-white/50 text-sm uppercase tracking-wider">
                İllik Təcrübə
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
