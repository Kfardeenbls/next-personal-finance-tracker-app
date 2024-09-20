"use client";
import React, { useState } from "react";
import Link from "next/link";
import MobileCloseBtn from "./MobileCloseBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Income", link: "/income" },
    { label: "Expenses", link: "/expenses" },
    { label: "Currency Converter", link: "/currency-converter" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="text-white font-semibold text-xl">
          Financial Tracker
        </div>
        <div className="lg:hidden">
          <MobileCloseBtn toggleMenu={toggleMenu} isOpen={isOpen} />
        </div>
        <ul
          className={`lg:flex lg:space-x-8 space-y-2 lg:space-y-0 absolute lg:static lg:bg-transparent w-full left-0 lg:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "top-16" : "top-[-400px]"
          } z-40`}
        >
          {navItems.map((item, index) => (
            <li key={index} className="group text-center lg:text-left">
              <Link
                onClick={toggleMenu}
                href={item.link}
                className="text-white font-medium tracking-wide text-lg hover:text-indigo-200 transition-colors duration-300 ease-in-out block py-2 lg:py-0"
              >
                {item.label}
              </Link>
              <div className="h-1 w-0 bg-indigo-300 group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
