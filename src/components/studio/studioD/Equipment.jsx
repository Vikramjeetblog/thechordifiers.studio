import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const tabs = [
  "Monitoring",
  "DAW & Plugins",
  "Outboard Gear",
  "Acoustic Design"
];

const content = {
  "Monitoring": {
    title: "Monitoring System",
    desc: "Accurate monitoring is the backbone of mixing and mastering.",
    sections: [
      {
        heading: "Speakers",
        items: [
          "Nearfield studio monitors",
          "Reference monitors for critical listening"
        ]
      }
    ]
  },

  "DAW & Plugins": {
    title: "DAW & Plugins",
    desc: "Industry-standard software for mixing and mastering.",
    sections: [
      {
        heading: "Software",
        items: [
          "Professional DAW setup",
          "Mixing & mastering plugin suite"
        ]
      }
    ]
  },

  "Outboard Gear": {
    title: "Outboard Processing",
    desc: "Analog gear for warmth, control, and depth.",
    sections: [
      {
        heading: "Gear",
        items: [
          "Compressors",
          "EQ units",
          "Analog processors"
        ]
      }
    ]
  },

  "Acoustic Design": {
    title: "Room Acoustics",
    desc: "Designed for accurate sound translation.",
    sections: [
      {
        heading: "Treatment",
        items: [
          "Acoustic panels",
          "Bass traps",
          "Reflection control"
        ]
      }
    ]
  }
};

export default function Equipment() {
  const [active, setActive] = useState("Monitoring");
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-6xl font-bold mb-10">
          Tech & Equipment
        </h2>

        {/* MOBILE DROPDOWN */}
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
                  className={`px-5 py-3 cursor-pointer ${
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

          {/* DESKTOP SIDEBAR */}
          <div className="hidden md:block bg-[#0a0a0a] border border-white/10">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(tab)}
                className={`w-full text-left px-6 py-4 border-b border-white/5 relative
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

          {/* CONTENT */}
          <div className="bg-[#0f0f0f] border border-white/10 p-6 md:p-12 h-[450px] overflow-y-auto rounded-xl">

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              {content[active].title}
            </h3>

            <p className="text-gray-400 mb-6">
              {content[active].desc}
            </p>

            {content[active].sections.map((sec, i) => (
              <div key={i} className="mb-6">

                <h4 className="text-sm uppercase tracking-wider text-[#f0e81b] mb-3">
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