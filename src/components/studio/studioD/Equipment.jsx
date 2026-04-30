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
    title: "Control Room — Mixing & Mastering Environment",
    desc: "A precision-engineered space for high-end mixing, mastering, and critical listening.",
    sections: [
      {
        heading: "Processing System",
        items: [
          "Advanced DAW control and workflow system",
          "Integration with outboard hardware",
          "High-resolution audio processing chain"
        ]
      },
      {
        heading: "Workflow",
        items: [
          "Detailed mixing and mastering pipeline",
          "Accurate referencing across multiple systems",
          "Seamless control of Studio C sessions"
        ]
      }
    ]
  },

  "DAW & Plugins": {
    title: "Monitoring System",
    desc: "Multi-level monitoring for accurate sound translation. ",
    sections: [
      {
        heading: "Available",
        items: [
          "Near-field monitors for detailed mixing",
          "Mid-field monitors for balance and depth",
          "Far-field monitoring for full-range evaluation"
        ]
      }
    ]
  },

  "Outboard Gear": {
    title: "Hardware & Processing",
    desc: "Professional-grade tools for shaping and refining sound. ",
    sections: [
      {
        heading: "Available",
        items: [
          "Analog processing units (EQ, compression)",
          "Digital mastering tools and processors",
          "Signal control and routing systems"
        ]
      }
    ]
  },

  "Acoustic Design": {
    title: "Floating Equipment — Professional Workflow Tools",
    desc: "Essential tools supporting high-end production, monitoring, and session workflows.",
    sections: [
      {
        heading: "Session Tools",
        items: [
          "High-end headphones for critical listening",
          "Studio communication and routing systems",
          "Backup and auxiliary monitoring gear"
        ]
      },
      {
        heading: "Flexibility",
        items: [
          "Designed for professional engineers and producers",
          "Supports both production and educational workflows"
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