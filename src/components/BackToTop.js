"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className={`fixed bottom-6 right-6 z-50 px-6 py-3 rounded-[50%/30%] shadow-lg cursor-pointer pointer-events-auto
    bg-gradient-to-r from-[var(--green)] via-[var(--pink-light)] to-[var(--blue)]
    text-black font-semibold flex items-center gap-2
    hover:bg-gradient-to-r hover:from-[var(--blue)] hover:via-[var(--pink-dark)] hover:to-[var(--green)]
    transform transition-all duration-500
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}
    >
      <FaArrowUp />
    </button>
  );
}
