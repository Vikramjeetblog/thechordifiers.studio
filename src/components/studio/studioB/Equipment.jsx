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
    title: "Control Room — Recording Integration ",
    desc: "Integrated with Studio A for live session control and recording support.",
    sections: [
      {
        heading: "RECORDING SYSTEM ",
        items: [
          "Multi-channel routing from jam space to control room",
          "Live session recording capability",
          "Headphone monitoring for band members"
        ]
      },
      {
        heading: "Workflow",
        items: [
          "Seamless integration with Studio A",
          "Real-time tracking of instruments",
          "Efficient setup for rehearsals and recordings"
        ]
      }
    ]
  },

  "Microphones": {
  title: "Microphones",
  desc: "Reliable microphones optimized for rehearsal environments and live session capture.",
  sections: [
    {
      heading: "Available",
      items: [
        "Dynamic microphones for vocals, amplifiers, and stage-style use",
        "Dedicated drum mic setup for full band sessions",
        "Multi-purpose microphones adaptable to different band configurations"
      ]
    }
  ]
},

  "Instruments": {
  title: "Instruments & Backline",
  desc: "Complete band-ready setup designed for rehearsals, jams, and live tracking sessions.",
  sections: [
    {
      heading: "Available",
      items: [
        "Full drum kit for complete band performances",
        "Electric and acoustic guitars with amplifier support",
        "Bass guitar with dedicated amplification",
        "Keyboard setup for melodic and harmonic production"
      ]
    }
  ]
},

  "Floating Equipment": {
  title: "Floating Equipment — Jam & Session Gear",
  desc: "Essential support equipment enabling smooth rehearsal workflows and live session flexibility.",
  sections: [
    {
      heading: "Session Tools",
      items: [
        "Instrument amplifiers and speaker systems for live sound output",
        "DI boxes and signal routing equipment for clean audio flow",
        "Basic EQ and mixer support for quick sound adjustments"
      ]
    },
    {
      heading: "Flexibility",
      items: [
        "Adaptable setup for bands of varying sizes and configurations",
        "Fast reconfiguration for rehearsals, jam sessions, and live recordings"
      ]
    }
  ]
},
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