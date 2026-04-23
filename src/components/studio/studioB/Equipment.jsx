import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const tabs = [
  "Control Room",
  "Microphones",
  "Instruments",
  "Floating Equipment"
];

const content = {
  "Control Room": {
    title: "Control Room",
    desc: "The centrepiece of the control room is an 84 channel Neve 88RS console with SP3D scoring panel.",
    sections: [
      {
        heading: "Console",
        items: ["AMS NEVE 88RS3 – 84 channels"]
      }
    ]
  },

  "Microphones": {
    title: "Microphones",
    desc: "Industry standard microphones.",
    sections: [
      {
        heading: "Available",
        items: ["Neumann U87", "AKG C414"]
      }
    ]
  },

  "Instruments": {
    title: "Instruments",
    desc: "Professional instruments.",
    sections: [
      {
        heading: "Available",
        items: ["Yamaha Piano", "Fender Guitar"]
      }
    ]
  },

  "Floating Equipment": {
    title: "Floating Equipment",
    desc: "Additional gear available.",
    sections: [
      {
        heading: "Gear",
        items: ["Outboard compressors", "EQ units"]
      }
    ]
  }
};

export default function Equipment() {
  const [active, setActive] = useState("Control Room");
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-black text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-6xl font-bold mb-10">
          Tech & Equipment
        </h2>

        {/* 🔥 MOBILE DROPDOWN */}
        <div className="md:hidden mb-8 relative">

          <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center bg-[#111] border border-white/10 px-5 py-4 rounded-lg"
          >
            <span>{active}</span>
            <FiChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
          </button>

          {open && (
            <div className="absolute w-full mt-2 bg-[#111] border border-white/10 rounded-lg overflow-hidden z-20">
              {tabs.map((tab, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setActive(tab);
                    setOpen(false);
                  }}
                  className={`px-5 py-3 cursor-pointer text-sm ${
                    active === tab
                      ? "text-white bg-black"
                      : "text-gray-400 hover:text-white hover:bg-black/60"
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-[260px_1fr] gap-10">

          {/* 🔥 DESKTOP SIDEBAR */}
          <div className="hidden md:block bg-[#0a0a0a] border border-white/10">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(tab)}
                className={`w-full text-left px-6 py-4 border-b border-white/5 transition relative
                ${
                  active === tab
                    ? "text-white bg-black"
                    : "text-gray-400 hover:text-white hover:bg-black/60"
                }`}
              >
                {tab}

                {active === tab && (
                  <span className="absolute right-0 top-0 bottom-0 w-[3px] bg-[#f0e81b]" />
                )}
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-[#0f0f0f] border border-white/10 p-6 md:p-12 h-[450px] overflow-y-auto rounded-xl">

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              {content[active].title}
            </h3>

            <p className="text-gray-400 mb-6 text-sm md:text-base">
              {content[active].desc}
            </p>

            {content[active].sections.map((sec, i) => (
              <div key={i} className="mb-6">

                <h4 className="text-xs md:text-sm uppercase tracking-wider text-[#f0e81b] mb-3">
                  {sec.heading}
                </h4>

                <ul className="space-y-2 text-gray-300 text-sm">
                  {sec.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}