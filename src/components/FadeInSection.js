import React, { useRef, useState, useEffect } from "react";
import "./FadeInSection.css";

const FadeInSection = ({ children }) => {
  const domRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = domRef.current; // Save domRef.current to a stable variable
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(node); // Use the stable node reference
      }
    });

    if (node) {
      observer.observe(node);
    }

    // Cleanup
    return () => {
      if (node) observer.unobserve(node);
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