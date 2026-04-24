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
    title: "Advanced Recording Setup",
    desc: "A professional hybrid setup designed for high-quality recording and full-band jam sessions.",
    sections: [
      {
        heading: "Recording System",
        items: [
          "Multi-channel recording interface (band-ready)",
          "Independent headphone monitoring for multiple artists",
          "Live multi-track recording capability"
        ]
      },
      {
        heading: "Workflow",
        items: [
          "Seamless recording during jam sessions",
          "Low-latency monitoring for performers",
          "Optimized setup for bands and group sessions"
        ]
      }
    ]
  },

  "Microphones": {
    title: "Microphone Collection",
    desc: "Professional microphones suited for vocals, instruments, and full-band setups.",
    sections: [
      {
        heading: "Studio Mics",
        items: [
          "Large diaphragm condenser microphones (vocals)",
          "Dynamic microphones for drums & amps",
          "Multi-mic setup for live band recording"
        ]
      }
    ]
  },

  "Instruments": {
    title: "Instruments & Backline",
    desc: "Studio-ready instruments and gear for rehearsals, jams, and recording.",
    sections: [
      {
        heading: "Available",
        items: [
          "Full drum kit (band sessions)",
          "Electric & acoustic guitars",
          "Bass guitar setup",
          "Keyboard / MIDI workstation"
        ]
      }
    ]
  },

  "Floating Equipment": {
    title: "Advanced Session Gear",
    desc: "Enhanced tools for professional jam sessions and recording workflows.",
    sections: [
      {
        heading: "Processing & Routing",
        items: [
          "High-quality audio preamps",
          "EQ and compression tools",
          "Signal routing & DI systems"
        ]
      },
      {
        heading: "Session Support",
        items: [
          "Amplifiers for guitars and bass",
          "Flexible stage-style setup for bands",
          "Quick reconfiguration for different session formats"
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
            className="w-full flex justify-between items-center bg-[#111] border border-white/10 px-5 py-4 rounded-lg"
          >
            <span className="text-sm">{active}</span>
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

          {/* 🔥 SIDEBAR */}
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

                {/* ACTIVE INDICATOR */}
                {active === tab && (
                  <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#f0e81b]" />
                )}
              </button>
            ))}

          </div>

          {/* 🔥 CONTENT */}
          <div className="bg-[#0f0f0f] border border-white/10 p-6 md:p-12 rounded-xl">

            {/* TITLE */}
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              {content[active].title}
            </h3>

            {/* DESC */}
            <p className="text-gray-400 mb-8 text-sm md:text-base max-w-2xl">
              {content[active].desc}
            </p>

            {/* SECTIONS */}
            <div className="space-y-10">
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