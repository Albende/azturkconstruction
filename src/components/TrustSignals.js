import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faProjectDiagram, faSmile, faHeadset } from "@fortawesome/free-solid-svg-icons";

function TrustSignals({ variant = "default" }) {
  const signals = [
    {
      icon: faCalendarCheck,
      number: "14+",
      label: "İllik Təcrübə",
    },
    {
      icon: faProjectDiagram,
      number: "500+",
      label: "Tamamlanmış Layihə",
    },
    {
      icon: faSmile,
      number: "100%",
      label: "Müştəri Məmnuniyyəti",
    },
    {
      icon: faHeadset,
      number: "24/7",
      label: "Dəstək",
    },
  ];

  // Variant: dark (for light sections), default (for dark sections)
  const isDark = variant === "dark";

  return (
    <section
      className={`
        relative py-12 lg:py-16
        ${isDark ? "bg-navy-900" : "bg-navy-800/50"}
      `}
    >
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Icon */}
              <div
                className={`
                  w-16 h-16 mx-auto mb-4
                  bg-gold-500/10 border border-gold-500/20
                  flex items-center justify-center
                  transition-all duration-500
                  group-hover:bg-gold-500/20 group-hover:border-gold-500/40
                `}
              >
                <FontAwesomeIcon
                  icon={signal.icon}
                  className="w-7 h-7 text-gold-500"
                />
              </div>

              {/* Number */}
              <div className="font-display text-3xl lg:text-4xl font-bold text-gold-500 mb-1">
                {signal.number}
              </div>

              {/* Label */}
              <div className="text-white/50 text-sm uppercase tracking-wider">
                {signal.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSignals;
