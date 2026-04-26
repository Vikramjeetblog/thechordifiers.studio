import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/institute-logo.png";

const InstituteNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", path: "/", type: "route" },
    { name: "Studio", path: "/thestudio", type: "route" },
    { name: "Institute", path: "/institute#home", id: "home", type: "hash" },
    { name: "Courses", path: "/institute#courses", id: "courses", type: "hash" },
    { name: "Location", path: "/institute#location", id: "location", type: "hash" },
    { name: "Contact", path: "/institute#contact", id: "contact", type: "hash" },
  ];

  //  Scroll Spy Logic
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px", // 👈 controls when section becomes active
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-[80px] backdrop-blur-md bg-[#111111]/80 border-b border-white/10 z-50">

      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Chordifiers Institute"
            className="h-28 md:h-32 lg:h-36 object-contain brightness-125 contrast-125"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-['Inter']">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            if (link.type === "hash") {
              return (
                <HashLink
                  key={link.name}
                  smooth
                  to={link.path}
                  className={`relative transition duration-300 group ${
                    isActive ? "text-[#f0e81b]" : "text-[#f2f2f2]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#f0e81b] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </HashLink>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-[#f2f2f2] hover:text-[#f0e81b] transition duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f0e81b] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </nav>

        {/* Apply Button */}
        <HashLink
          smooth
          to="/book-a-call"
          className="hidden md:block border border-[#f0e81b] text-[#f0e81b] px-6 py-2 hover:bg-[#f0e81b] hover:text-black transition duration-300 shadow-[0_0_12px_rgba(240,232,27,0.4)]"
        >
          Apply Now
        </HashLink>

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

          {navLinks.map((link) =>
            link.type === "hash" ? (
              <HashLink
                key={link.name}
                smooth
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-[#f2f2f2] hover:text-[#f0e81b] transition"
              >
                {link.name}
              </HashLink>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-[#f2f2f2] hover:text-[#f0e81b] transition"
              >
                {link.name}
              </Link>
            )
          )}

        </div>
      )}
    </header>
  );
};

export default InstituteNavbar;