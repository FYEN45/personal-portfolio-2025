"use client";
import React, { useEffect } from "react";

const ScrollToTopBtn = () => {
  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scrollToTopButton");
    const navbar = document.getElementById("navbar");
    if (!navbar || !scrollToTopBtn) return;

    const handleScroll = () => {
      const navbarHeight = navbar.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY > navbarHeight) {
        scrollToTopBtn.classList.remove("opcatiy-0");
        scrollToTopBtn.classList.add("opacity-100");
      } else {
        scrollToTopBtn.classList.add("opacity-0");
        scrollToTopBtn.classList.remove("opacity-100");
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    scrollToTopBtn.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", handleScroll);

    return () => {
      scrollToTopBtn.removeEventListener("click", scrollToTop);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="scrollToTop" className="fixed bottom-14 w-full">
      <div className="mx-auto flex w-full justify-end align-middle">
        <button className="opacity-0 transition-opacity" id="scrollToTopButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10 bg-slate-900 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ScrollToTopBtn;
