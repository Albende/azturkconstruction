import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const services = [
    { value: "", label: "Xidmət seçin" },
    { value: "ev-tikintisi", label: "Ev Tikintisi" },
    { value: "temir", label: "Təmir və Bərpa" },
    { value: "interyer-dizayn", label: "İnteryer Dizayn" },
    { value: "villa-tikintisi", label: "Villa Tikintisi" },
    { value: "ofis-temir", label: "Ofis Təmiri" },
    { value: "diger", label: "Digər" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    // Build WhatsApp message
    const serviceName = services.find((s) => s.value === formData.service)?.label || "Qeyd edilməyib";
    const message = `Salam! Mən ${formData.name}.

Telefon: ${formData.phone}
Xidmət: ${serviceName}
${formData.message ? `Mesaj: ${formData.message}` : ""}

Azturk Construction veb-saytından göndərildi.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/994519886622?text=${encodedMessage}`;

    // Show success briefly then redirect
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        setStatus("idle");
        setFormData({ name: "", phone: "", service: "", message: "" });
      }, 1000);
    }, 500);
  };

  const inputClasses = `
    w-full px-5 py-4
    bg-navy-800/50 border border-white/10
    text-white placeholder-white/40
    focus:border-gold-500/50 focus:bg-navy-800/70
    focus:outline-none focus:ring-2 focus:ring-gold-500/20
    transition-all duration-300
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
          Ad, Soyad <span className="text-gold-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Adınızı daxil edin"
          className={inputClasses}
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
          Telefon <span className="text-gold-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+994 XX XXX XX XX"
          className={inputClasses}
        />
      </div>

      {/* Service Dropdown */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-white/70 mb-2">
          Xidmət növü
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`${inputClasses} cursor-pointer appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA2TDggMTBMMTIgNiIgc3Ryb2tlPSIjQzlBMjI3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_1rem_center]`}
        >
          {services.map((service) => (
            <option key={service.value} value={service.value} className="bg-navy-900">
              {service.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
          Mesajınız
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Layihəniz haqqında ətraflı məlumat..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status !== "idle"}
        className={`
          relative w-full py-4 px-8
          font-semibold text-lg uppercase tracking-wider
          overflow-hidden
          transition-all duration-300
          min-h-touch-lg
          ${
            status === "success"
              ? "bg-emerald-500 text-white"
              : "bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 hover:shadow-gold-lg hover:scale-[1.02]"
          }
          disabled:cursor-not-allowed disabled:opacity-80
          group
        `}
      >
        {/* Shine effect */}
        <span
          className={`
            absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
            translate-x-[-100%] skew-x-12
            transition-transform duration-700
            group-hover:translate-x-[100%]
            ${status !== "idle" ? "hidden" : ""}
          `}
        />

        {/* Button Content */}
        <span className="relative z-10 flex items-center justify-center gap-3">
          {status === "loading" && (
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )}
          {status === "success" && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
          <span>
            {status === "loading" && "Göndərilir..."}
            {status === "success" && "Uğurlu!"}
            {status === "idle" && "WhatsApp ilə Göndər"}
          </span>
        </span>
      </button>

      {/* Privacy Note */}
      <p className="text-xs text-white/40 text-center mt-4">
        Formu göndərməklə{" "}
        <span className="text-gold-500/70">məxfilik siyasəti</span>ni qəbul edirsiniz
      </p>
    </form>
  );
}

export default ContactForm;
