import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function BookCall() {
  const [params] = useSearchParams();

  const type = params.get("type");
  const name = params.get("name");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="bg-[#111111] text-white min-h-screen py-16 pt-24">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* ================= LEFT (SIMPLE FORM) ================= */}
        <div className="bg-[#1a1a1a] p-8 border border-white/10">

          <h2 className="text-2xl font-semibold mb-4">
            BOOK YOUR CALL
          </h2>

          <p className="text-gray-400 text-sm mb-6">
            Enter your details and our team will contact you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="input"
            />

            <input
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="input"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="input"
            />

            <textarea
              name="message"
              placeholder="Tell us about your goals..."
              onChange={handleChange}
              className="input h-24"
            />

            <button className="w-full py-3 bg-[#f0e81b] text-black font-medium hover:opacity-90 transition">
              Book Call
            </button>

          </form>
        </div>

        {/* ================= RIGHT (MAP + INFO) ================= */}
        <div className="border border-white/10 bg-[#1a1a1a]">

          {/* ===== MAP ===== */}
          <div className="h-[220px] w-full">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=kharmumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>

          {/* ===== INFO SECTION ===== */}
          <div className="p-6">

            <p className="text-xs text-gray-500 mb-2">
              SPEAK WITH OUR TEAM
            </p>

            <h2 className="text-xl font-semibold mb-5">
              WHAT SHOULD YOU PREP FOR THIS CALL?
            </h2>

            <ul className="space-y-4 text-sm text-gray-300">

              <li className="flex gap-3">
                <span className="text-[#f0e81b]">•</span>
                Your goals (skills, projects, career path)
              </li>

              <li className="flex gap-3">
                <span className="text-[#f0e81b]">•</span>
                Links to your music / portfolio
              </li>

              <li className="flex gap-3">
                <span className="text-[#f0e81b]">•</span>
                Questions about courses & career
              </li>

              <li className="flex gap-3">
                <span className="text-[#f0e81b]">•</span>
                Your current tools (DAW/plugins/gear)
              </li>

              <li className="flex gap-3">
                <span className="text-[#f0e81b]">•</span>
                Financial or relocation queries
              </li>

            </ul>

            
              

           

          </div>
        </div>

      </div>

      {/* ===== INPUT STYLE ===== */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          background: #111;
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          outline: none;
        }

        .input::placeholder {
          color: #777;
        }

        .input:focus {
          border-color: #f0e81b;
        }
      `}</style>

    </section>
  );
}