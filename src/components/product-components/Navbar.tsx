"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LogoSvg from "./LogoSvg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleToggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed w-full bg-navy-800/90 backdrop-blur-sm z-50 transition-transform duration-300 border-b border-cyber-blue/20
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Text */}
          <Link
            href="/"
            className="flex items-center space-x-3"
            aria-label="Home"
            tabIndex={0}
          >
            <LogoSvg width={45} height={60} />
            <span
              className={
                "font-iceland text-gray-300 text-2xl md:text-3xl tracking-widest pl-4"
              }
            >
              solvr
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#who"
              className="text-gray-300 hover:text-cyber-blue transition-colors"
            >
              Who We Are
            </Link>
            <Link
              href="#whatwedo"
              className="text-gray-300 hover:text-cyber-blue transition-colors"
            >
              What We Do
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-300 hover:text-cyber-blue transition-colors"
            >
              Testimonials
            </Link>

            {/* CTA Button */}
            <Link
              href="#bookcall"
              className="bg-gradient-to-br from-cyber-blue to-cyber-blue/70  text-black px-4 py-2 rounded-md 
                hover:bg-cyber-blue/80 transition-colors"
            >
              Book YOUR Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white 
              hover:bg-navy-700 focus:outline-none"
            onClick={handleToggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#who"
              className="block px-3 py-2 text-gray-300 hover:text-cyber-blue 
                transition-colors"
            >
              Who We Are
            </Link>
            <Link
              href="#whatwedo"
              className="block px-3 py-2 text-gray-300 hover:text-cyber-blue 
                transition-colors"
            >
              What We Do
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 text-gray-300 hover:text-cyber-blue 
                transition-colors"
            >
              Testimonials
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
