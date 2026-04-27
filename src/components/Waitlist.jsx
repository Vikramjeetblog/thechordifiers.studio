import React, { useState } from "react";
import Toast from "./Toast";

const FREE_API = "https://script.google.com/macros/s/AKfycbxOolZP8qxF89IsaKbed8hPT7TVZgk2gQMZxeJ8mAyZNxQf5M6a-kZJ-5_dZZcXeIuP/exec";
const PRIORITY_API = "https://script.google.com/macros/s/AKfycbwSuXolOmUsWKV2CcVc81CheGr2UMj7neNIV9B35iWBpbuXm7oFD3MbIDFVTTIW2fmH/exec";

const Waitlist = () => {
  const [toast, setToast] = useState(null);

  const [freeLoading, setFreeLoading] = useState(false);
  const [priorityLoading, setPriorityLoading] = useState(false);

  const [freeForm, setFreeForm] = useState({ name: "", email: "" });
  const [priorityForm, setPriorityForm] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });

  const [freeErrors, setFreeErrors] = useState({});
  const [priorityErrors, setPriorityErrors] = useState({});

  // VALIDATION
  const validate = (form, type) => {
    let err = {};

    if (!form.name) err.name = "Full name is required";
    else if (!/^[A-Za-z\s]+$/.test(form.name))
      err.name = "Only letters allowed";

    if (!form.email) err.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      err.email = "Invalid email";

    if (type === "priority") {
      if (!form.phone) err.phone = "Phone required";
      else if (!/^\d{10}$/.test(form.phone))
        err.phone = "Enter valid 10 digit number";

      if (!form.reason) err.reason = "This field is required";
    }

    return err;
  };

  // FREE SUBMIT
  const handleFreeSubmit = async (e) => {
    e.preventDefault();
    if (freeLoading) return;

    const err = validate(freeForm, "free");
    if (Object.keys(err).length) return setFreeErrors(err);

    setFreeErrors({});

    try {
      setFreeLoading(true);

      await fetch(FREE_API, {
        method: "POST",
        body: JSON.stringify(freeForm),
      });

      setToast({ type: "success", message: "Joined waitlist" });
      setFreeForm({ name: "", email: "" });
    } catch {
      setToast({ type: "error", message: "Something went wrong" });
    } finally {
      setFreeLoading(false);
    }
  };

  // PRIORITY SUBMIT
  const handlePrioritySubmit = async (e) => {
    e.preventDefault();
    if (priorityLoading) return;

    const err = validate(priorityForm, "priority");
    if (Object.keys(err).length) return setPriorityErrors(err);

    setPriorityErrors({});

    try {
      setPriorityLoading(true);

      await fetch(PRIORITY_API, {
        method: "POST",
        body: JSON.stringify(priorityForm),
      });

      setToast({ type: "success", message: "Priority request submitted" });
      setPriorityForm({ name: "", email: "", phone: "", reason: "" });
    } catch {
      setToast({ type: "error", message: "Something went wrong" });
    } finally {
      setPriorityLoading(false);
    }
  };

  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold">
          Get Priority Access
        </h2>

        <p className="text-gray-400 mt-3 text-sm tracking-widest">
          Be among the first to experience The Chordifiers Studio
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {/* FREE FORM */}
          <form
            onSubmit={handleFreeSubmit}
            className="border border-zinc-800 rounded-xl p-8 text-left"
          >
            <h3 className="text-sm text-white/70 font-semibold tracking-widest">
              JOIN THE WAITLIST (FREE)
            </h3>

            <p className="text-gray-400 text-sm mt-4">
              Get notified when studio bookings & sevices open.
            </p>

            <input
              type="text"
              placeholder="Full Name"
              value={freeForm.name}
              onChange={(e) => {
                const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                setFreeForm({ ...freeForm, name: value });
              }}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 mt-6"
            />
            {freeErrors.name && <p className="text-red-500 text-xs">{freeErrors.name}</p>}

            <input
              type="email"
              placeholder="Email"
              value={freeForm.email}
              onChange={(e) =>
                setFreeForm({ ...freeForm, email: e.target.value })
              }
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 mt-6"
            />
            {freeErrors.email && <p className="text-red-500 text-xs">{freeErrors.email}</p>}

            <button
              type="submit"
              disabled={freeLoading}
              className={`w-full py-3 rounded-full font-semibold mt-6 ${
                freeLoading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-white text-black hover:scale-105"
              }`}
            >
              {freeLoading ? "Submitting..." : "JOIN FREE WAITLIST"}
            </button>
          </form>

          {/* PRIORITY FORM */}
          <form
            onSubmit={handlePrioritySubmit}
            className="border border-[#f0e81b] rounded-xl p-8 bg-[#111] text-left relative"
          >
            {/* ✅ LIMITED BADGE */}
            <span className="absolute top-4 right-4 text-[10px] bg-white text-black px-3 py-1 rounded-full font-semibold">
              LIMITED
            </span>

            <h3 className="text-sm text-[#f0e81b] font-semibold tracking-widest">
              JOIN OUR ARTIST PRIORITY ACCESS
            </h3>

            {/* ✅ PRICE WITH GST */}
            <p className="text-4xl font-bold mt-2">
              ₹99 <span className="text-lg font-medium">+18% GST</span>
            </p>

            <p className="text-sm text-gray-400 mt-2">
              Upgrade for early privileged access
            </p>

            {/*  BENEFITS */}
            <ul className="text-gray-400 text-sm mt-6 space-y-2 list-disc pl-5">
              <li>Priority booking before public launch</li>
              <li>2 complimentary studio / jam sessions</li>
              <li>Founding Artist status</li>
              <li>Early access to studio services</li>
            </ul>

            <div className="mt-6 space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                value={priorityForm.name}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                  setPriorityForm({ ...priorityForm, name: value });
                }}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3"
              />
              {priorityErrors.name && <p className="text-red-500 text-xs">{priorityErrors.name}</p>}

              <input
                type="email"
                placeholder="Email"
                value={priorityForm.email}
                onChange={(e) =>
                  setPriorityForm({ ...priorityForm, email: e.target.value })
                }
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3"
              />
              {priorityErrors.email && <p className="text-red-500 text-xs">{priorityErrors.email}</p>}

              <input
                type="tel"
                placeholder="Phone"
                value={priorityForm.phone}
                onChange={(e) =>
                  setPriorityForm({
                    ...priorityForm,
                    phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                  })
                }
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3"
              />
              {priorityErrors.phone && <p className="text-red-500 text-xs">{priorityErrors.phone}</p>}

              <textarea
                placeholder="Why joining?"
                value={priorityForm.reason}
                onChange={(e) =>
                  setPriorityForm({
                    ...priorityForm,
                    reason: e.target.value,
                  })
                }
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3"
              />
              {priorityErrors.reason && <p className="text-red-500 text-xs">{priorityErrors.reason}</p>}
            </div>

            <button
              type="submit"
              disabled={priorityLoading}
              className={`w-full py-3 rounded-full mt-8 font-semibold ${
                priorityLoading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#f0e81b] text-black hover:scale-105"
              }`}
            >
              {priorityLoading ? "Processing..." : "UPGRADE TO PRIORITY — ₹99"}
            </button>
          </form>

        </div>
      </div>

      {/* TOAST */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Waitlist;