import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "VISION", id: "vision" },
  { name: "THE EXPERIENCE", id: "experience" },
  { name: "TCMI ACADEMY", id: "academy" }
];

const Navbar = () => {

  const [active, setActive] = useState("vision");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 text-white px-8 py-6">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white text-black font-bold w-8 h-8 flex items-center justify-center rounded">
            C
          </div>

          <span className="tracking-widest text-sm">
            CREATOUS COLLECTIVE
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm tracking-wide relative">

          {navItems.map((item) => (
            <li key={item.id} className="relative">

              <a
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className="hover:text-gray-300 transition"
              >
                {item.name}
              </a>

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

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActive(item.id);
                setMenuOpen(false);
              }}
              className="hover:text-gray-300"
            >
              {item.name}
            </a>
          ))}

        </motion.div>
      )}

    </nav>
  );
};

export default Navbar;