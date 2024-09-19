"use client";
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="">
      {/* Upper Header Section */}
      <div className=" px-10 py-1  bg-white flex md:flex-row flex-col justify-between items-center border-b-[1px] border-slate-100	">
        <div>
          <p className="text-xs text-gray-400">Email: joshuatchild@gmail.com</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <i className="ri-facebook-circle-fill text-gray-400"></i>
          <i className="ri-instagram-line text-gray-400"></i>
          <i className="ri-linkedin-box-fill text-gray-400"></i>
        </div>
      </div>

      {/* Main Navigation Section */}
      <div className=" px-10 bg-slate-50 flex justify-between items-center py-6">
        {/* Site Name */}
        <div className="text-2xl font-bold text-zinc-800">TechTax</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 ml-auto">
          <a href="#home" className="text-sm hover:text-blue-600">
            Home
          </a>
          <a href="#services" className="text-sm hover:text-blue-600">
            Services
          </a>
          <a href="#about" className="text-sm hover:text-blue-600">
            About
          </a>
          <a href="#careers" className="text-sm hover:text-blue-600">
            Careers
          </a>
          <a href="#contact" className="text-sm hover:text-blue-600">
            Contact Us
          </a>
        </nav>

        {/* Buttons for Sign Up and Log In */}
        <div className="hidden md:flex space-x-4 ml-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign Up
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Log In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <i
            className={`ri-menu-line text-2xl ${
              isMenuOpen ? "hidden" : "block"
            }`}
          ></i>
          <i
            className={`ri-close-line text-2xl ${
              isMenuOpen ? "block" : "hidden"
            }`}
          ></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className=" px-10 py-2 md:hidden flex flex-col space-y-2 mt-4">
          <a href="#home" className="text-sm hover:text-blue-600">
            Home
          </a>
          <a href="#services" className="text-sm hover:text-blue-600">
            Services
          </a>
          <a href="#about" className="text-sm hover:text-blue-600">
            About
          </a>
          <a href="#careers" className="text-sm hover:text-blue-600">
            Careers
          </a>
          <a href="#contact" className="text-sm hover:text-blue-600">
            Contact Us
          </a>

          <div className="flex flex-col space-y-2 mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Sign Up
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Log In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
