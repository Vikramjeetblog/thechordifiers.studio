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
    title: "Control Room — Recording Setup",
    desc: "A hybrid setup designed for recording, production, and basic mixing workflows.",
    sections: [
      {
        heading: "Recording System",
        items: [
          "Multi-channel audio interface for precise tracking",
          "Studio monitors for accurate playback and balance",
          "Headphone monitoring system for artists during sessions"
        ]
      },
      {
        heading: "Workflow",
        items: [
          "Smooth transition from recording to basic mixing",
          "Real-time monitoring for vocals and instruments",
          "Optimized setup for fast and efficient production"
        ]
      }
    ]
  },

  "Microphones": {
    title: "Microphones",
    desc: "Versatile microphones suited for vocals, voiceovers, and instruments.",
    sections: [
      {
        heading: "Available",
        items: [
          "Vocal condenser microphones for clean recordings",
          "Dynamic microphones for instruments and amps",
          "Dedicated setup for dry room vocal capture"
        ]
      }
    ]
  },

  "Instruments": {
    title: "Instruments",
    desc: "Production-ready instruments for composition and arrangement.",
    sections: [
      {
        heading: "Available",
        items: [
          "MIDI keyboards and controllers",
          "Virtual instrument integration (DAW-based)",
          "Basic instruments for idea development"
        ]
      }
    ]
  },

  "Floating Equipment": {
    title: "Floating Equipment — Session Support",
    desc: "Essential tools supporting recording and production workflow.",
    sections: [
      {
        heading: "Session Tools",
        items: [
          "Studio headphones for monitoring",
          "Mic stands, pop filters, and accessories",
          "Audio routing cables and connectors"
        ]
      },
      {
        heading: "Flexibility",
        items: [
          "Adaptable setup for solo artists and producers",
          "Quick adjustments for different recording needs"
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

        <div className="grid md:grid-cols-[260px_1fr] gap-10">

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

                {/* ACTIVE LINE */}
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
                      <li
                        key={j}
                        className="flex items-start gap-3"
                      >
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