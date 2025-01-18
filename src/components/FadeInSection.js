// src/components/FadeInSection.js
import React, { useRef, useState, useEffect } from "react";
import "./FadeInSection.css";

const FadeInSection = ({ children }) => {
  const domRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // We'll get only one entry since we're only observing domRef
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Once visible, we can unobserve so it doesn't toggle repeatedly
        observer.unobserve(domRef.current);
      }
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }
    // Cleanup
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
