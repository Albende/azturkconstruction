import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../assets/backgroundazturk.jpeg";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: "14+", label: "İllik Təcrübə" },
    { number: "500+", label: "Tamamlanmış Layihə" },
    { number: "100%", label: "Müştəri Məmnuniyyəti" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy-800/90 to-navy-900/80" />

        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-navy-400/20 rounded-full blur-3xl" />
      </div>

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <div
            className={`
              inline-flex items-center gap-2 mb-6
              px-4 py-2 rounded-full
              bg-white/5 backdrop-blur-sm border border-white/10
              transition-all duration-700
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide">
              2010-cu ildən bəri xidmətinizdəyik
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`
              font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              font-bold leading-[1.1] tracking-tight
              mb-6
              transition-all duration-700 delay-150
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <span className="text-white">Ev Tikintisi, Təmir və </span>
            <span className="text-gold-500 italic">Dizayn</span>
            <span className="text-white"> üzrə Mütəxəssis</span>
          </h1>

          {/* Subheading */}
          <p
            className={`
              text-lg sm:text-xl lg:text-2xl
              text-white/70 font-light leading-relaxed
              max-w-2xl mb-10
              transition-all duration-700 delay-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            Azturk Construction — müasir memarlıq, yüksək keyfiyyət,
            innovativ dizayn və rahat yaşayışın ünvanı. Evinizi xəyalınızda
            qurduğunuz kimi tikək!
          </p>

          {/* CTA Buttons */}
          <div
            className={`
              flex flex-col sm:flex-row gap-4 mb-12
              transition-all duration-700 delay-450
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            {/* Primary CTA - WhatsApp */}
            <a
              href="https://wa.me/994519886622?text=Salam!%20Azturk%20Construction%20xidm%C9%99tl%C9%99ri%20haqq%C4%B1nda%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m."
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative inline-flex items-center justify-center gap-3
                px-8 py-4 sm:py-5
                bg-[#25D366] hover:bg-[#1ebe57]
                text-white font-semibold text-lg
                overflow-hidden
                transition-all duration-300
                hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)]
                hover:scale-[1.02]
                min-h-touch-lg
              "
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] skew-x-12 transition-transform duration-700 group-hover:translate-x-[100%]" />
              <svg className="relative z-10 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="relative z-10">WhatsApp ilə Yazın</span>
            </a>

            {/* Secondary CTA - Phone */}
            <a
              href="tel:+994519886622"
              className="
                group relative inline-flex items-center justify-center gap-3
                px-8 py-4 sm:py-5
                bg-gradient-to-r from-gold-500 to-gold-600
                text-navy-900 font-semibold text-lg
                overflow-hidden
                transition-all duration-300
                hover:shadow-gold-lg hover:scale-[1.02]
                min-h-touch-lg
              "
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] skew-x-12 transition-transform duration-700 group-hover:translate-x-[100%]" />
              <FontAwesomeIcon icon={faPhone} className="relative z-10" />
              <span className="relative z-10">+994 51 988 66 22</span>
            </a>
          </div>

          {/* Stats */}
          <div
            className={`
              flex flex-wrap gap-8 sm:gap-12
              transition-all duration-700 delay-600
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="font-display text-3xl sm:text-4xl font-bold text-gold-500">
                  {stat.number}
                </div>
                <div className="text-sm uppercase tracking-wider text-white/50 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`
          absolute bottom-8 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-2
          transition-all duration-700 delay-700
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/40">
          Aşağı Sürüşdürün
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
          <div className="w-1 h-2 bg-gold-500 rounded-full animate-bounce-subtle" />
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-20 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A227" stopOpacity="0" />
              <stop offset="100%" stopColor="#C9A227" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M400,400 L400,200 Q400,100 300,100 L100,100 Q0,100 0,0"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
