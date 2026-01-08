import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for glass effect transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navLinks = [
    { id: "about", label: "Haqqımızda" },
    { id: "services", label: "Xidmətlər" },
    { id: "portfolio", label: "Portfel" },
    { id: "testimonials", label: "Rəylər" },
    { id: "contact", label: "Əlaqə" },
  ];

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-luxury
          ${
            scrolled
              ? "bg-navy-900/95 backdrop-blur-xl shadow-luxury-lg border-b border-gold-500/10"
              : "bg-transparent"
          }
        `}
      >
        {/* Gold accent line at top */}
        <div
          className={`
            absolute top-0 left-0 right-0 h-[2px]
            bg-gradient-to-r from-transparent via-gold-500/60 to-transparent
            transition-opacity duration-500
            ${scrolled ? "opacity-100" : "opacity-0"}
          `}
        />

        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative z-10 group flex items-baseline gap-1"
            >
              <span className="font-display text-2xl lg:text-3xl font-bold text-gold-500 tracking-tight transition-all duration-300 group-hover:text-gold-400">
                Azturk
              </span>
              <span className="font-display text-2xl lg:text-3xl font-light text-white tracking-tight transition-all duration-300 group-hover:text-gold-100">
                Construction
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className="
                    relative py-2 text-sm uppercase tracking-[0.15em] font-medium
                    text-white/80 hover:text-gold-400
                    transition-colors duration-300
                    group
                  "
                >
                  {link.label}
                  {/* Gold underline animation */}
                  <span
                    className="
                      absolute bottom-0 left-0 w-0 h-[2px]
                      bg-gradient-to-r from-gold-400 to-gold-600
                      transition-all duration-300 ease-out
                      group-hover:w-full
                    "
                  />
                </a>
              ))}

              {/* Desktop CTA Button */}
              <a
                href="tel:+994519886622"
                className="
                  relative ml-4 px-6 py-3
                  bg-gradient-to-r from-gold-500 to-gold-600
                  text-navy-900 font-semibold text-sm uppercase tracking-wider
                  overflow-hidden
                  transition-all duration-300
                  hover:shadow-gold-md hover:scale-[1.02]
                  min-h-touch flex items-center gap-2
                  group
                "
              >
                {/* Shine effect on hover */}
                <span
                  className="
                    absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                    translate-x-[-100%] skew-x-12
                    transition-transform duration-700
                    group-hover:translate-x-[100%]
                  "
                />
                <FontAwesomeIcon icon={faPhone} className="relative z-10" />
                <span className="relative z-10">Pulsuz Konsultasiya</span>
              </a>
            </div>

            {/* Mobile: Call Button + Hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              {/* Mobile Call Button */}
              <a
                href="tel:+994519886622"
                className="
                  w-11 h-11 rounded-full
                  bg-gold-500 text-navy-900
                  flex items-center justify-center
                  transition-all duration-300
                  hover:bg-gold-400 hover:shadow-gold-sm
                  active:scale-95
                "
                aria-label="Zəng et"
              >
                <FontAwesomeIcon icon={faPhone} className="text-lg" />
              </a>

              {/* Hamburger Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="
                  relative w-11 h-11
                  flex items-center justify-center
                  focus:outline-none
                "
                aria-label={menuOpen ? "Menunu bağla" : "Menunu aç"}
                aria-expanded={menuOpen}
              >
                <div className="relative w-6 h-5 flex flex-col justify-between">
                  {/* Top bar */}
                  <span
                    className={`
                      absolute top-0 left-0 w-full h-[2px] bg-white
                      transition-all duration-300 ease-out origin-center
                      ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}
                    `}
                  />
                  {/* Middle bar */}
                  <span
                    className={`
                      absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2
                      transition-all duration-300 ease-out
                      ${menuOpen ? "opacity-0 scale-x-0" : "opacity-100"}
                    `}
                  />
                  {/* Bottom bar */}
                  <span
                    className={`
                      absolute bottom-0 left-0 w-full h-[2px] bg-white
                      transition-all duration-300 ease-out origin-center
                      ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}
                    `}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40
          transition-all duration-500 ease-luxury
          ${menuOpen ? "visible" : "invisible"}
        `}
      >
        {/* Backdrop */}
        <div
          className={`
            absolute inset-0 bg-navy-900/98 backdrop-blur-xl
            transition-opacity duration-500
            ${menuOpen ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Decorative elements */}
        <div
          className={`
            absolute top-20 right-10 w-64 h-64 rounded-full
            bg-gold-500/5 blur-3xl
            transition-all duration-700 delay-200
            ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
        />
        <div
          className={`
            absolute bottom-40 left-10 w-48 h-48 rounded-full
            bg-navy-500/20 blur-3xl
            transition-all duration-700 delay-300
            ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6">
          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`
                  text-2xl sm:text-3xl font-display font-medium
                  text-white/90 hover:text-gold-400
                  transition-all duration-300
                  min-h-touch flex items-center
                  ${
                    menuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }
                `}
                style={{
                  transitionDelay: menuOpen ? `${150 + index * 75}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div
            className={`
              mt-10 transition-all duration-500
              ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
            style={{
              transitionDelay: menuOpen ? "500ms" : "0ms",
            }}
          >
            <a
              href="https://wa.me/994519886622"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                px-8 py-4
                bg-gradient-to-r from-gold-500 to-gold-600
                text-navy-900 font-semibold text-lg uppercase tracking-wide
                transition-all duration-300
                hover:shadow-gold-lg hover:scale-[1.02]
                active:scale-[0.98]
              "
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp ilə Yazın
            </a>
          </div>

          {/* Contact info at bottom */}
          <div
            className={`
              absolute bottom-10 left-0 right-0
              text-center text-white/40 text-sm
              transition-all duration-500
              ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
            style={{
              transitionDelay: menuOpen ? "600ms" : "0ms",
            }}
          >
            <p className="font-light tracking-wide">+994 51 988 66 22</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
