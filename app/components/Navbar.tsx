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
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#000000] bg-opacity-0">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-2 h-46">
        <Link href={"/#Homepage"} className="text-2xl md:text-4xl text-white font-semibold flex items-center md:pl-20 lg:pl-40">
        
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-solanapurple to-solanagreen" style={{ fontFamily: 'Pixeloid, sans-serif' }}>TOKEN 2022</span>
            <img src="/2022logo-transparent.png" alt="Logo" className="ml-2" style={{ width: '90px', height: '90px' }} /> {/* Logo after the text */}
        </Link>
        <div className="mobile-menu block md:hidden">
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
    </nav>
  );
};

export default Navbar;