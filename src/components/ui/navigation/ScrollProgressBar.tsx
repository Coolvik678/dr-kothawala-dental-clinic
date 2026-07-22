"use client";

import React, { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercentage((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-900">
      <div
        className="h-full bg-gradient-to-r from-teal-500 via-emerald-400 to-sky-400 transition-all duration-150"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
