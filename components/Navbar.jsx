"use client"

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <div className="z-20 fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-[#646367] to-[#3a393c] rounded-full p-0.3 min-w-72 drop-shadow-xl">
      <div className="flex h-full w-full items-center bg-gradient-to-br from-[#2f2e33] to-[#2b2a2e] text-white rounded-full px-4 py-2 gap-3 justify-between">
        
        <a href="/" className="relative flex items-center justify-center font-semibold">
          <img src={isActive("/") ? "/homef.svg" : "/home.svg"} alt="home" />
        </a>

        <a href="/letters" className="relative flex items-center justify-center font-semibold">
          <img src={isActive("/letters") ? "/letter-filled.svg" : "/letter.svg"} alt="letter" />
        </a>

        <a href="/work" className="relative flex items-center justify-center font-semibold">
          <img src={isActive("/work") ? "/bag-filled.svg" : "/bag.svg"} alt="bag" />
        </a>

        <a href="https://x.com/shikokaizen" target="_blank" className="relative flex items-center justify-center font-semibold">
          <img src={isActive("/x") ? "/x-filled.svg" : "/x.svg"} alt="x" />
        </a>

        <a href="https://www.instagram.com/animeshhq/" target="_blank" className="relative flex items-center justify-center font-semibold">
          <img src={isActive("/insta") ? "/insta-filled.svg" : "/insta.svg"} alt="insta" />
        </a>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="relative flex items-center justify-center font-semibold"
        >
          {mounted ? (
            <img src={theme === "light" ? "/moon.svg" : "/moon-filled.svg"} alt="theme toggle" />
          ) : (
            <img src="/moon.svg" alt="theme toggle" /> // Default state
          )}
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
