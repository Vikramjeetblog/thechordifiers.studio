import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/tcs.png";
import atmosMixing from "../assets/atmosMixing.jpg";
import atmosMastering from "../assets/atmosMastering.jpg";
import { useLocation } from "react-router-dom";
const navItems = [
  { name: "HOME", id: "home" },
  { name: "VISION", id: "vision" },
  { name: "EXPERIENCE", id: "experience" },
  { name: "INSTITUTE", id: "academy" },
  { name: "STUDIO", id: "studio" },
  { name: "RECORD LABEL", id: "record" },
  { name: "ABOUT", id: "about" }
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDolbyPopup, setShowDolbyPopup] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [popupType, setPopupType] = useState(null);
  /*  SCROLL */
  const location = useLocation();

useEffect(() => {
  const path = location.pathname;

  if (path === "/record") {
    setActive("record");
  } 
  else if (path.includes("studio")) {
    setActive("studio");
  } 
  else if (path === "/about-us") {
    setActive("about");
  }
}, [location.pathname]);
  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSection = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSection = entry.target.id;
        }
      });

      if (visibleSection) {
        setActive(visibleSection);
      }
    },
    {
      rootMargin: "-50% 0px -50% 0px", // 👈 center of screen focus
      threshold: 0
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 text-white px-4 md:px-8 h-[70px] md:h-[80px] flex items-center">
      <div className="flex items-center justify-between w-full">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
  <img
    src={logo}
    className="h-28 md:h-32 lg:h-36 object-contain brightness-125 contrast-125"
  />
</Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 lg:gap-10 text-sm tracking-wide relative">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">

              {/* RECORD */}
              {item.id === "record" ? (
                <Link to="/record" className="hover:text-gray-300 transition">
                  {item.name}
                </Link>

              /* ACADEMY */
              ) : item.id === "academy" ? (
                <Link
                  to="/#academy"
                  onClick={() => setActive("academy")}
                  className="hover:text-gray-300 transition"
                >
                  {item.name}
                </Link>

              /* ABOUT */
              ) : item.id === "about" ? (
                <Link
                  to="/about-us#about"
                  onClick={() => setActive("about")}
                  className="hover:text-gray-300 transition"
                >
                  {item.name}
                </Link>

              /* NORMAL */
              ) : (
                <Link
                  to={`/#${item.id}`}
                  onClick={() => setActive(item.id)}
                  className="hover:text-gray-300 transition"
                >
                  {item.name}
                </Link>
              )}

              {/* STUDIO DROPDOWN (UNCHANGED) */}
              {item.id === "studio" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-[#111111]/95 backdrop-blur-md text-[#f2f2f2] border border-white/10 px-10 py-8 w-[700px] grid grid-cols-2 gap-6 shadow-xl rounded-md">

                  {/* LEFT */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-semibold mb-3 text-xs tracking-widest uppercase text-white/90">
                        Recording
                      </h3>

                      <ul className="space-y-2.5 text-sm text-gray-300">
                        <li className="text-white/80 text-sm font-medium tracking-wide">
                          The Studios
                        </li>
                       <li>
                          <Link to="/studio-a" className="hover:text-white">
                            Studio A
                          </Link>
                        </li>

                        <li>
                          <Link to="/studio-b" className="hover:text-white">
                            Studio B
                          </Link>
                        </li>
<li>
                          <Link to="/studio-c" className="hover:text-white">
                            Studio C
                          </Link>
                        </li>
                        
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-xs tracking-widest uppercase text-white/90">
                        Jam Session Rentals
                      </h3>

                      <ul className="space-y-2.5 text-sm text-gray-300">
                        <li>
                          <Link to="/studio-b" className="hover:text-white">
                            Studio B
                          </Link>
                        </li>
                        <li>
                          <Link to="/studio-c" className="hover:text-white">
                            Studio C
                          </Link>
                        </li>
              
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-xs tracking-widest uppercase text-white/90">
                        Video Production
                      </h3>

                      <ul className="space-y-2.5 text-sm text-gray-300">
                        <li className="hover:text-white cursor-pointer">Music Video</li>
                        <li className="hover:text-white cursor-pointer">Commercial Video</li>
                        <li className="hover:text-white cursor-pointer">For Corporates</li>
                      </ul>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-semibold mb-3 text-xs tracking-widest uppercase text-white/90">
                        Mixing
                      </h3>

                      <ul className="space-y-2.5 text-sm text-gray-300">
                       <li>
                          <Link to="/studio-a" className="hover:text-white">
                            Studio A
                          </Link>
                        </li>
                        <li>
                          <Link to="/studio-d" className="hover:text-white">
                            Studio D
                          </Link>
                        </li>

                        <li
  onClick={() => {
    setPopupType("mixing");
    setShowDolbyPopup(true);
  }}
  className="hover:text-white cursor-pointer"
>
  Dolby Atmos Mixing
</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-xs tracking-widest uppercase text-white/90">
                        Mastering
                      </h3>

                      <ul className="space-y-2.5 text-sm text-gray-300">
                        <li>
                          <Link to="/studio-d" className="hover:text-white">
                            Studio D
                          </Link>
                        </li>

                        

                        

    <li
  onClick={() => {
    setPopupType("mastering");
    setShowDolbyPopup(true);
  }}
  className="hover:text-white cursor-pointer"
>
  Dolby Atmos Mastering
</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* ABOUT DROPDOWN */}
              {item.id === "about" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-[#111111]/95 backdrop-blur-md text-white border border-white/10 p-6 w-[220px] shadow-xl">
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li><Link to="/about-us#story">Our Story</Link></li>
                    <li><Link to="/about-us#gallery">Gallery</Link></li>
                    <li><Link to="/about-us#visit">Visit Us</Link></li>
                  </ul>
                </div>
              )}

              {/* ACTIVE INDICATOR */}
              {active === item.id && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"
                />
              )}
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="md:hidden absolute top-[70px] left-0 w-full bg-black/95 backdrop-blur-lg px-6 py-8 flex flex-col gap-6 text-sm border-t border-white/10"
  >
    {navItems.map((item) => (
      <div key={item.id}>

        {/* NORMAL LINKS */}
        {item.id !== "studio" && item.id !== "about" && (
          <Link
            to={`/#${item.id}`}
            onClick={() => setMenuOpen(false)}
            className="block text-gray-300"
          >
            {item.name}
          </Link>
        )}

        {/* STUDIO DROPDOWN */}
        {item.id === "studio" && (
          <div>
            <div
              onClick={() =>
                setOpenDropdown(openDropdown === "studio" ? null : "studio")
              }
              className="flex justify-between items-center text-gray-300 cursor-pointer"
            >
              <span>STUDIO</span>
              <FiChevronDown
                className={`transition-transform ${
                  openDropdown === "studio" ? "rotate-180" : ""
                }`}
              />
            </div>

            {openDropdown === "studio" && (
              <div className="mt-4 ml-3 space-y-5 text-gray-400">

                <div>
                  <p className="text-xs text-white/60 mb-2 uppercase">Recording</p>
                  <div className="flex flex-col gap-2">
                    <Link to="/studio-a">Studio A</Link>
                    <Link to="/studio-b">Studio B</Link>
                    <Link to="/studio-c">Studio C</Link>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-white/60 mb-2 uppercase">Jam Sessions</p>
                  <div className="flex flex-col gap-2">
                    <Link to="/studio-b">Studio B</Link>
                    <Link to="/studio-c">Studio C</Link>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-white/60 mb-2 uppercase">Video Production</p>
                  <div className="flex flex-col gap-2">
                    <span>Music Video</span>
                    <span>Commercial Video</span>
                    <span>For Corporates</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-white/60 mb-2 uppercase">Mixing</p>
                  <div className="flex flex-col gap-2">
                    <Link to="/studio-a">Studio A</Link>
                    <Link to="/studio-d">Studio D</Link>
                    <span>Dolby Atmos Mixing</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-white/60 mb-2 uppercase">Mastering</p>
                  <div className="flex flex-col gap-2">
                    <Link to="/studio-d">Studio D</Link>
                    <span onClick={() => setShowDolbyPopup(true)} className="cursor-pointer">
                      Dolby Atmos Mastering
                    </span>
                  </div>
                </div>

              </div>
            )}
          </div>
        )}

        {/* ABOUT DROPDOWN */}
        {item.id === "about" && (
          <div>
            <div
              onClick={() =>
                setOpenDropdown(openDropdown === "about" ? null : "about")
              }
              className="flex justify-between items-center text-gray-300 cursor-pointer"
            >
              <span>ABOUT</span>
              <FiChevronDown
                className={`transition-transform ${
                  openDropdown === "about" ? "rotate-180" : ""
                }`}
              />
            </div>

            {openDropdown === "about" && (
              <div className="mt-3 ml-3 flex flex-col gap-2 text-gray-400">
                <Link to="/about-us#story">Our Story</Link>
                <Link to="/about-us#gallery">Gallery</Link>
                <Link to="/about-us#visit">Visit Us</Link>
              </div>
            )}
          </div>
        )}
      </div>
    ))}
  </motion.div>
)}
    </nav>
{showDolbyPopup && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center">

    {/* BACKDROP */}
    <div
      onClick={() => setShowDolbyPopup(false)}
      className="absolute inset-0 bg-black/80 backdrop-blur-sm"
    />

    {/* CONTENT */}
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative w-[90%] max-w-3xl rounded-xl overflow-hidden"
    >

    <img
  src={
    popupType === "mixing"
      ? atmosMixing
      : atmosMastering
  }
  className="w-full h-[300px] md:h-[400px] object-cover"
/>
 

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="absolute bottom-6 left-6 right-6">
        <h2 className="text-2xl md:text-3xl font-bold">
  {popupType === "mixing"
    ? "Dolby Atmos Mixing"
    : "Dolby Atmos Mastering"}
</h2>
       <p className="text-gray-300 mt-2 text-sm">
  {popupType === "mixing"
    ? "Immersive spatial mixing designed for next-generation audio experiences. Launching soon."
    : "Next-generation immersive mastering for cinematic sound. Launching soon."}
</p>
      </div>

      <button
        onClick={() => setShowDolbyPopup(false)}
        className="absolute top-4 right-4 text-white text-xl"
      >
        ✕
      </button>
    </motion.div>
  </div>
)}
</>
  );
};

export default Navbar;