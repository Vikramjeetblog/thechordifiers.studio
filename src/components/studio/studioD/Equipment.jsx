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
    desc: "Ultra-accurate monitoring environment for critical mixing and mastering decisions.",
    sections: [
      {
        heading: "Speakers",
        items: [
          "High-resolution nearfield monitors",
          "Midfield reference monitoring system",
          "Subwoofer for low-frequency accuracy"
        ]
      },
      {
        heading: "Reference",
        items: [
          "Multiple playback references (studio, consumer, headphones)",
          "Calibrated listening levels"
        ]
      }
    ]
  },

  "DAW & Plugins": {
    title: "DAW & Processing Suite",
    desc: "Industry-standard digital environment for mixing and mastering workflows.",
    sections: [
      {
        heading: "DAW",
        items: [
          "Professional DAW setup (Pro Tools / Logic / Ableton)",
          "Low-latency high-performance system"
        ]
      },
      {
        heading: "Plugins",
        items: [
          "Advanced EQ, compression, and limiting tools",
          "Stereo imaging & spatial processing",
          "Mastering-grade plugin suite"
        ]
      }
    ]
  },

  "Outboard Gear": {
    title: "Analog Outboard",
    desc: "Premium analog processing for warmth, depth, and character.",
    sections: [
      {
        heading: "Processing",
        items: [
          "Analog compressors (bus & mastering grade)",
          "High-end EQ units",
          "Saturation & harmonic processors"
        ]
      },
      {
        heading: "Signal Chain",
        items: [
          "Clean signal routing & gain staging",
          "Hybrid analog-digital workflow"
        ]
      }
    ]
  },

  "Acoustic Design": {
    title: "Acoustic Environment",
    desc: "Precision-tuned room designed for accurate sound translation.",
    sections: [
      {
        heading: "Treatment",
        items: [
          "Full-range acoustic treatment",
          "Bass trapping for low-end control",
          "Reflection and diffusion balance"
        ]
      },
      {
        heading: "Calibration",
        items: [
          "Room tuning for flat frequency response",
          "Optimized listening position"
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

        {/* TITLE */}
        <h2 className="text-3xl md:text-6xl font-bold mb-12 tracking-tight">
          Tech & Equipment
        </h2>

        {/* 🔥 MOBILE */}
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
                className={`w-full text-left px-6 py-4 border-b border-white/5 relative transition
                ${
                  active === tab
                    ? "text-white bg-black"
                    : "text-gray-400 hover:text-white hover:bg-black/60"
                }`}
              >
                {tab}

                {active === tab && (
                  <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#f0e81b]" />
                )}
              </button>
            ))}

          </div>

          {/* 🔥 CONTENT */}
          <div className="bg-[#0f0f0f] border border-white/10 p-6 md:p-12 rounded-xl">

            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              {content[active].title}
            </h3>

            <p className="text-gray-400 mb-8 max-w-2xl">
              {content[active].desc}
            </p>

            <div className="space-y-10">
              {content[active].sections.map((sec, i) => (
                <div key={i}>

                  <h4 className="text-xs uppercase tracking-[3px] text-[#f0e81b] mb-4">
                    {sec.heading}
                  </h4>

                  <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                    {sec.items.map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-[#f0e81b]">•</span>
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