"use client";

import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="hidden cu:block fixed top-0 left-6 h-1 w-full bg-[#414145] z-50 cu:left-6 cu:top-1/2 cu:transform cu:-translate-y-1/2 cu:h-96 cu:w-0.3">
      <div
        className="bg-white"
        style={{
          width: '100%',
          height: `${scrollProgress}%`,
        }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
