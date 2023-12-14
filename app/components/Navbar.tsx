"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";


const navLinks = [
  {
    title: "Home",
    path: "#Homepage",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Tokenomics",
    path: "#tokenomics",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#0d1335] bg-opacity-100">
      
      <div className="flex container items-center md:justify-between mx-auto px-4 py-2 h-46">
      <div className="px-4 mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <Link href={"/#Homepage"} className="text-2xl md:text-4xl text-white font-semibold flex items-center md:pl-20 lg:pl-40">
        
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-solanapurple to-solanagreen whitespace-nowrap overflow-hidden" style={{ fontFamily: 'Pixeloid, sans-serif' }}>TOKEN 2022</span>
            <img src="/2022logo-transparent.png" alt="Logo" className="ml-2" style={{ width: '90px', height: '90px' }} /> {/* Logo after the text */}
        </Link>
        
        <div className="menu hidden md:block md:w-auto md:pr-20 lg:pr-40" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">

            {navLinks.map((link, index) => (
            <li key={index}>
                <NavLink href={link.path} title={link.title} onClick={() => setNavbarOpen(false)} />
            </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      {/* Twitter Logo (absolute positioning on the right side) */}
      <div className="absolute bottom-0 right-4 flex flex-col space-y-2 md:top-1/2 md:bottom-auto md:flex-row md:space-y-0 md:space-x-2 md:transform md:-translate-y-1/2">
        <a href="https://twitter.com/SolanaToken2022" target="_blank" rel="noopener noreferrer" className="block">
          <img src="/logo-white.png" alt="Twitter" className="h-8 w-8" />
        </a>
        <a href="https://t.me/+QAbtqhC5DPs5NmZk" target="_blank" rel="noopener noreferrer" className="block">
          <img src="/telegram-logo.png" alt="Telegram" className="h-8 w-8" />
        </a>
      </div>

      
    </nav>
    
  );
};

export default Navbar;