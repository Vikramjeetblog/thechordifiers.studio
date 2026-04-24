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
    title: "Recording Setup",
    desc: "A flexible setup designed for both recording sessions and live jams.",
    sections: [
      {
        heading: "Recording System",
        items: [
          "Multi-channel audio interface",
          "Headphone monitoring for multiple artists",
          "Live session recording capability"
        ]
      },
      {
        heading: "Workflow",
        items: [
          "Quick setup for jam and recording sessions",
          "Real-time tracking of vocals and instruments"
        ]
      }
    ]
  },

  "Microphones": {
    title: "Microphones",
    desc: "Versatile microphones suited for vocals, instruments, and live sessions.",
    sections: [
      {
        heading: "Available",
        items: [
          "Vocal condenser microphones",
          "Dynamic microphones for instruments & amps",
          "Multi-use microphones for band setups"
        ]
      }
    ]
  },

  "Instruments": {
    title: "Instruments & Backline",
    desc: "Ready-to-use instruments for rehearsals, jams, and recordings.",
    sections: [
      {
        heading: "Available",
        items: [
          "Drum kit (for band sessions)",
          "Electric & acoustic guitars",
          "Keyboard / MIDI setup"
        ]
      }
    ]
  },

  "Floating Equipment": {
    title: "Jam & Session Gear",
    desc: "Essential gear to support collaborative and live music sessions.",
    sections: [
      {
        heading: "Session Tools",
        items: [
          "Instrument amplifiers",
          "DI boxes and routing gear",
          "Basic EQ and compression tools"
        ]
      },
      {
        heading: "Flexibility",
        items: [
          "Adaptable setup for bands and solo artists",
          "Quick reconfiguration for different session types"
        ]
      }
    ]
  }
};

export default function Equipment() {
  const [active, setActive] = useState("Control Room");
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-6xl font-bold mb-12 tracking-tight">
          Tech & Equipment
        </h2>

        {/* 🔥 MOBILE DROPDOWN */}
        <div className="md:hidden mb-8 relative">

          <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center bg-[#111] border border-white/10 px-5 py-4 rounded-lg backdrop-blur-md"
          >
            <span className="text-sm">{active}</span>
            <FiChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
          </button>

          {open && (
            <div className="absolute w-full mt-2 bg-[#111] border border-white/10 rounded-lg overflow-hidden z-20 backdrop-blur-md">
              {tabs.map((tab, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setActive(tab);
                    setOpen(false);
                  }}
                  className={`px-5 py-3 cursor-pointer text-sm transition ${
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

        <div className="grid md:grid-cols-[260px_1fr] gap-12">

          {/* 🔥 DESKTOP SIDEBAR */}
          <div className="hidden md:block bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">

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

                {/* LEFT ACTIVE LINE */}
                {active === tab && (
                  <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#f0e81b]" />
                )}
              </button>
            ))}

          </div>

          {/* 🔥 RIGHT CONTENT */}
          <div className="bg-[#0f0f0f] border border-white/10 p-6 md:p-12 rounded-xl">

            {/* HEADER */}
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              {content[active].title}
            </h3>

            <p className="text-gray-400 mb-8 text-sm md:text-base max-w-2xl">
              {content[active].desc}
            </p>

            {/* SECTIONS */}
            <div className="space-y-8">
              {content[active].sections.map((sec, i) => (
                <div key={i}>

                  <h4 className="text-xs md:text-sm uppercase tracking-[3px] text-[#f0e81b] mb-4">
                    {sec.heading}
                  </h4>

                  <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                    {sec.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-[#f0e81b] mt-[2px]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}