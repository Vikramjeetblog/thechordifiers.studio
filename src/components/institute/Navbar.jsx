import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/institute-logo.png";

const InstituteNavbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Studio", path: "/" },
    { name: "Courses", path: "/institute/courses" },
    { name: "Location", path: "/institute/location" },
    { name: "Contact", path: "/institute/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#111111]/80 border-b border-white/10 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link to="/institute" className="flex items-center">
          <img
            src={logo}
            alt="Chordifiers Institute"
            className="h-10 md:h-24 lg:h-14 w-auto "
          />
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-10 font-['Inter']">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-[#f2f2f2] hover:text-[#f0e81b] transition duration-300 group"
            >
              {link.name}

              {/* Hover underline */}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f0e81b] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

        </nav>

        {/* Apply Button */}

        <Link
          to="/institute/apply"
          className="hidden md:block border border-[#f0e81b] text-[#f0e81b] px-6 py-2 hover:bg-[#f0e81b] hover:text-black transition duration-300 shadow-[0_0_12px_rgba(240,232,27,0.4)]"
        >
          Apply Now
        </Link>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-white/10 px-6 py-6 flex flex-col gap-6 font-['Inter']">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-[#f2f2f2] hover:text-[#f0e81b] transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/institute/apply"
            onClick={() => setMenuOpen(false)}
            className="border border-[#f0e81b] text-[#f0e81b] px-6 py-2 text-center hover:bg-[#f0e81b] hover:text-black transition"
          >
            Apply Now
          </Link>

        </div>
      )}

    </header>
  );
};

export default InstituteNavbar;