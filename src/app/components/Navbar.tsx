import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Academic", href: "/academic" },
  { name: "Admission", href: "/admission" },
  { name: "Campus Life", href: "/campus-life" },
  { name: "News & Events", href: "/news" },
];

import logoWhite from "../../assets/e92c63db5878b0727474b90047a5609c2747e32f.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/index.html";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled || !isHomePage ? "bg-[#182B70] shadow-lg" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-3">
          <img
            src={logoWhite}
            alt="Chea Chanto College Logo"
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-white/90 hover:text-white font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/admission"
            className="bg-white text-[#182B70] px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all inline-block text-center"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#182B70] border-t border-white/10 lg:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admission"
                onClick={() => setIsOpen(false)}
                className="bg-white text-[#182B70] px-6 py-3 rounded-md font-bold text-center uppercase tracking-wider inline-block"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
