
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const navItems = [
  { name: "HOME", id: "home" },
  { name: "VISION", id: "vision" },
  { name: "THE EXPERIENCE", id: "experience" },
  { name: "STUDIO", id: "studio" },
  { name: "RECORD", id: "record" },
  { name: "TCMI ACADEMY", id: "academy" },
  { name: "ABOUT", id: "about" }
];

const Navbar = () => {

  const [active, setActive] = useState("vision");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 text-white px-8 py-6">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <div className="bg-white text-black font-bold w-8 h-8 flex items-center justify-center rounded">
            C
          </div>

          <span className="tracking-widest text-sm">
            CREATOUS COLLECTIVE
          </span>

        </Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm tracking-wide relative">

          {navItems.map((item) => (
            <li key={item.id} className="relative group">

              {/* RECORD PAGE */}
              {item.id === "record" ? (
                <Link to="/record" className="hover:text-gray-300 transition">
                  {item.name}
                </Link>

              /* INSTITUTE PAGE */
              ) : item.id === "academy" ? (
                <Link to="/institute" className="hover:text-gray-300 transition">
                  {item.name}
                </Link>

              /* ABOUT PAGE */
              ) : item.id === "about" ? (
                <Link
                  to="/about-us"
                  onClick={() => setActive("about")}
                  className="hover:text-gray-300 transition"
                >
                  {item.name}
                </Link>

              /* NORMAL SECTION LINKS */
              ) : (
                <a
                  href={`#${item.id}`}
                  onClick={() => setActive(item.id)}
                  className="hover:text-gray-300 transition"
                >
                  {item.name}
                </a>
              )}

              {/* STUDIO DROPDOWN */}
              {item.id === "studio" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-[#d9d2c7] text-black p-8 w-[520px] flex gap-16 shadow-xl">

                  <div>
                    <h3 className="font-semibold mb-3 text-sm tracking-wide">
                      RECORDING & MIXING
                    </h3>

                    <ul className="space-y-1 text-sm">
                      <li className="hover:underline cursor-pointer">The Studios</li>
                      <li className="hover:underline cursor-pointer">Studio A</li>
                      <li className="hover:underline cursor-pointer">Studio B</li>
                      <li className="hover:underline cursor-pointer">Studio C</li>
                      <li className="hover:underline cursor-pointer">Jam Rentals</li>
                      <li className="hover:underline cursor-pointer">Video Production</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-sm tracking-wide">
                      MASTERING
                    </h3>

                    <ul className="space-y-1 text-sm">
                      <li className="hover:underline cursor-pointer">Studio A</li>
                      <li className="hover:underline cursor-pointer">Studio D</li>
                      <li className="hover:underline cursor-pointer">Dolby Atmos</li>
                      <li className="hover:underline cursor-pointer">Stem Mastering</li>
                    </ul>
                  </div>

                </div>
              )}


              {/* ABOUT DROPDOWN */}
              {item.id === "about" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-[#d9d2c7] text-black p-6 w-[220px] shadow-xl">

                  <ul className="space-y-3 text-sm">

                    

                    <li>
                      <Link to="/our-story" className="hover:underline">
                        Our Story
                      </Link>
                    </li>

                    <li>
                      <Link to="/gallery" className="hover:underline">
                        Gallery
                      </Link>
                    </li>

                    <li>
                      <Link to="/visit-us" className="hover:underline">
                        Visit Us
                      </Link>
                    </li>

                  </ul>

                </div>
              )}


              {/* Active Indicator */}
              {active === item.id && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"
                />
              )}

            </li>
          ))}

        </ul>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-6 flex flex-col gap-6 text-sm"
        >

          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <a href="#vision" onClick={() => setMenuOpen(false)}>VISION</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>THE EXPERIENCE</a>

          <Link to="/record" onClick={() => setMenuOpen(false)}>RECORD</Link>
          <Link to="/institute" onClick={() => setMenuOpen(false)}>TCMI ACADEMY</Link>

          {/* About Mobile */}
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
          <Link to="/our-story" onClick={() => setMenuOpen(false)}>OUR STORY</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>GALLERY</Link>
          <Link to="/visit-us" onClick={() => setMenuOpen(false)}>VISIT US</Link>

        </motion.div>
      )}

    </nav>
  );
};

export default Navbar;

