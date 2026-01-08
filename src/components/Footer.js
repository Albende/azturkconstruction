import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show back to top button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { id: "about", label: "Haqqımızda" },
    { id: "services", label: "Xidmətlər" },
    { id: "portfolio", label: "Portfel" },
    { id: "testimonials", label: "Rəylər" },
    { id: "contact", label: "Əlaqə" },
  ];

  const services = [
    "Ev Tikintisi",
    "Kapital Təmir",
    "İnteryer Dizayn",
    "Villa Tikintisi",
    "Ofis Təmiri",
    "Memarlıq Layihələndirmə",
  ];

  const socialLinks = [
    {
      icon: faInstagram,
      href: "https://www.instagram.com/azturk_construction/",
      label: "Instagram",
      hoverClass: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888]",
    },
    {
      icon: faTiktok,
      href: "https://www.tiktok.com/@azturkconstruction",
      label: "TikTok",
      hoverClass: "hover:bg-white hover:text-navy-900",
    },
    {
      icon: faWhatsapp,
      href: "https://wa.me/994519886622",
      label: "WhatsApp",
      hoverClass: "hover:bg-[#25D366]",
    },
  ];

  return (
    <footer className="relative bg-navy-950 overflow-hidden">
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/3 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-navy-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <button
              onClick={() => {
                scrollToTop();
              }}
              className="inline-block mb-6 group"
            >
              <span className="font-display text-2xl font-bold text-gold-500 tracking-tight transition-colors duration-300 group-hover:text-gold-400">
                Azturk
              </span>
              <span className="font-display text-2xl font-light text-white tracking-tight transition-colors duration-300 group-hover:text-gold-100">
                Construction
              </span>
            </button>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              2010-cu ildən bəri Azərbaycanda keyfiyyətli tikinti, təmir və dizayn xidmətləri göstəririk.
              Xəyallarınızı həyata keçirməyə hazırıq.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-10 h-10
                    bg-white/5 border border-white/10
                    text-white/70
                    flex items-center justify-center
                    transition-all duration-300
                    hover:border-transparent hover:text-white
                    ${social.hoverClass}
                  `}
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Sürətli Keçidlər
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="text-white/60 text-sm hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Xidmətlərimiz
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, "services")}
                    className="text-white/60 text-sm hover:text-gold-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Əlaqə
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+994519886622"
                  className="flex items-start gap-3 text-white/60 text-sm hover:text-gold-400 transition-colors duration-300 group"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-4 h-4 mt-0.5 text-gold-500/60 group-hover:text-gold-400 transition-colors"
                  />
                  <span>+994 51 988 66 22</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@azturkconstruction.az"
                  className="flex items-start gap-3 text-white/60 text-sm hover:text-gold-400 transition-colors duration-300 group"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-4 h-4 mt-0.5 text-gold-500/60 group-hover:text-gold-400 transition-colors"
                  />
                  <span>info@azturkconstruction.az</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-4 h-4 mt-0.5 text-gold-500/60"
                />
                <span>
                  Çinar Plaza, 31-ci mərtəbə,
                  <br />
                  152A Heydər Əliyev prospekti,
                  <br />
                  Bakı, Azərbaycan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Azturk Construction. Bütün hüquqlar qorunur.
          </p>

          <div className="flex items-center gap-6 text-white/40 text-xs">
            <span>Dizayn & İnkişaf: Azturk</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-6 right-6 z-30
          w-12 h-12
          bg-gold-500 text-navy-900
          flex items-center justify-center
          transition-all duration-500
          hover:bg-gold-400 hover:shadow-gold-md
          ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
          lg:hidden
        `}
        aria-label="Yuxarı qalx"
      >
        <FontAwesomeIcon icon={faChevronUp} className="w-5 h-5" />
      </button>
    </footer>
  );
}

export default Footer;
