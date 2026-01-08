import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./ContactForm";

function Contact() {
  const contactInfo = [
    {
      icon: faPhone,
      title: "Telefon",
      content: "+994 51 988 66 22",
      href: "tel:+994519886622",
      highlight: false,
    },
    {
      icon: faWhatsapp,
      title: "WhatsApp",
      content: "+994 51 988 66 22",
      href: "https://wa.me/994519886622",
      highlight: true,
      external: true,
    },
    {
      icon: faEnvelope,
      title: "Email",
      content: "info@azturkconstruction.az",
      href: "mailto:info@azturkconstruction.az",
      highlight: false,
    },
    {
      icon: faLocationDot,
      title: "Ünvan",
      content: "Çinar Plaza, 31-ci mərtəbə, 152A Heydər Əliyev prospekti, Bakı",
      href: null,
      highlight: false,
    },
  ];

  const socialLinks = [
    {
      icon: faInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/azturk_construction/",
      color: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888]",
    },
    {
      icon: faTiktok,
      label: "TikTok",
      href: "https://www.tiktok.com/@azturkconstruction",
      color: "hover:bg-white hover:text-navy-900",
    },
  ];

  return (
    <section id="contact" className="relative bg-navy-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-transparent to-navy-900" />

        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-section-mobile md:py-section lg:py-section-lg">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-gold-500 text-sm uppercase tracking-[0.2em] font-medium mb-4">
            Əlaqə
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Layihənizi{" "}
            <span className="text-gold-500 italic">Müzakirə</span> Edək
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Pulsuz konsultasiya üçün bizimlə əlaqə saxlayın. 24 saat ərzində cavab veririk.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-navy-800/30 backdrop-blur-sm border border-white/5 p-6 sm:p-8 lg:p-10">
              <h3 className="font-heading text-xl font-semibold text-white mb-6">
                Müraciət Formu
              </h3>
              <ContactForm />
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`
                    group p-6
                    bg-navy-800/30 backdrop-blur-sm
                    border transition-all duration-300
                    ${
                      item.highlight
                        ? "border-[#25D366]/30 hover:border-[#25D366]/60 hover:bg-[#25D366]/10"
                        : "border-white/5 hover:border-gold-500/30 hover:bg-navy-800/50"
                    }
                  `}
                >
                  <div
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center mb-4
                      transition-all duration-300
                      ${
                        item.highlight
                          ? "bg-[#25D366]/20 text-[#25D366] group-hover:bg-[#25D366]/30"
                          : "bg-gold-500/10 text-gold-500 group-hover:bg-gold-500/20"
                      }
                    `}
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                  </div>
                  <p className="text-white/50 text-sm mb-1">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className={`
                        text-white font-medium text-sm sm:text-base
                        transition-colors duration-300
                        ${item.highlight ? "hover:text-[#25D366]" : "hover:text-gold-400"}
                      `}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm sm:text-base">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="p-6 bg-navy-800/30 backdrop-blur-sm border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-gold-500" />
                </div>
                <h4 className="text-white font-semibold">İş Saatları</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50">Bazar ertəsi - Cümə</span>
                  <span className="text-white">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Şənbə</span>
                  <span className="text-white">10:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Bazar</span>
                  <span className="text-white/40">Bağlı</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 bg-navy-800/30 backdrop-blur-sm border border-white/5">
              <p className="text-white/50 text-sm mb-4">
                Layihələrimizi sosial şəbəkələrdə izləyin:
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group flex items-center gap-2
                      px-4 py-3
                      bg-white/5 border border-white/10
                      text-white/70 text-sm font-medium
                      transition-all duration-300
                      hover:border-transparent hover:text-white
                      ${social.color}
                    `}
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Promise */}
            <div className="flex items-center gap-4 p-4 bg-gold-500/10 border border-gold-500/20">
              <div className="flex-shrink-0 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <p className="text-white/80 text-sm">
                <span className="font-semibold text-gold-400">24 saat ərzində</span> cavab veririk
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
