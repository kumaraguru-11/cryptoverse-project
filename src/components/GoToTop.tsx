import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 400) {
      // Adjust this value to control when the button becomes visible
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        display: isVisible ? "block" : "none",
        fontSize: "30px",
        zIndex: "999",
        position: "fixed",
        bottom: "50px",
        right: "40px",
        cursor: "pointer",
      }}
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up-circle-fill fs-1 opacity-75"></i>
    </div>
  );
}

export default GoToTop;

