import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Toast from "../components/Toast";
export default function BookCall() {
const [params] = useSearchParams();
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [status, setStatus] = useState("");

  const [form, setForm] = useState({
    name:  "",
    email: "",
    phone: "",
    message: "",
    date: null,
    time: "",
  });

  const [errors, setErrors] = useState({});

  const timeSlots = ["10:00 AM", "01:00 PM", "04:00 PM", "06:00 PM"];

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    // NAME
    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }

    // PHONE 
    if (name === "phone") {
      const digits = value.replace(/\D/g, "");
      if (digits.length > 10) return;
      return setForm({ ...form, phone: digits });
    }

    setForm({ ...form, [name]: value });
  };

  //  UPDATED VALIDATION
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = "Only letters allowed";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }

    if (!form.date) newErrors.date = "Select a date";
    if (!form.time) newErrors.time = "Select a time slot";

    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) return;

  try {
    setLoading(true);
    setMessage("");
    setStatus("");

    const formattedData = {
      ...form,
      date: format(form.date, "dd/MM/yyyy"),
    };

    await fetch(
      "https://script.google.com/macros/s/AKfycbzluF-dhGrpgg41mZb3kLsGUuBIV-6RJKlxFex0Uj9jCe4YQabR3qJ177KNNuIjfzaE/exec", 
      {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formattedData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setStatus("success");
    setMessage("Call booked successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
      date: null,
      time: "",
    });

    setErrors({});

  } catch (error) {
    console.error(error);
    setStatus("error");
    setMessage("Something went wrong. Please try again.");
  } finally {
    setLoading(false);

    setTimeout(() => {
      setMessage("");
      setStatus("");
    }, 3000);
  }
};

  return (
    <section className="bg-[#111111] text-white min-h-screen py-16 pt-24">
      <Toast
  message={message}
  type={status}
  onClose={() => {
    setMessage("");
    setStatus("");
  }}
/>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/*  FORM  */}
        <div className="bg-[#1a1a1a] p-8 border border-white/10">

          <h2 className="text-2xl font-semibold mb-4">
            BOOK YOUR CALL
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

           
            <div>
              {/* NAME */}
<div>
  <input
    name="name"
    value={form.name}
    placeholder="Full Name"
    onChange={handleChange}
    className="input"
  />
  
</div>
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

           
            <div>
              <input
                name="email"
                type="email"
                value={form.email}
                placeholder="Email Address"
                onChange={handleChange}
                className="input"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            {/* PHONE */}
            <div>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                placeholder="Phone Number"
                onChange={handleChange}
                className="input"
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

           
            <div>
              <DatePicker
                selected={form.date}
                onChange={(date) => setForm({ ...form, date })}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select Visit Date"
                className="input w-full"
              />
              {errors.date && <p className="error">{errors.date}</p>}
            </div>

            {/* TIME */}
            <div>
              <select
                name="time"
                value={form.time}
                onChange={handleChange}
                className="input"
              >
                <option value="">Select Time Slot</option>
                {timeSlots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.time && <p className="error">{errors.time}</p>}
            </div>

           
            <div>
              <textarea
                name="message"
                value={form.message}
                placeholder="Tell us about your goals..."
                onChange={handleChange}
                className="input h-24"
              />
            </div>

          <button
  disabled={loading}
  className={`w-full py-3 font-medium transition ${
    loading
      ? "bg-gray-500 cursor-not-allowed"
      : "bg-[#f0e81b] text-black hover:opacity-90"
  }`}
>
  {loading ? "Booking..." : "Book Call"}
</button>

          </form>
        </div>

        <div className="border border-white/10 bg-[#1a1a1a]">

  {/*  MAP */}
  <div className="w-full">
    <iframe
      title="The Chordifires Music Institue(TCS)"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3564.545301064381!2d88.4114563!3d26.6950211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4413f6a1a5b4d%3A0x40144543d5a04f29!2sThe%20Chordifiers%20Music%20Institute%20(TCMI)!5e0!3m2!1sen!2sin!4v1777120218449!5m2!1sen!2sin"
      width="100%"
      height="260"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/*  INFO SECTION */}
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

      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          background: #111;
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          outline: none;
        }

        .input:focus {
          border-color: #f0e81b;
        }

        .error {
          color: #ff4d4f;
          font-size: 12px;
          margin-top: 4px;
        }
      `}</style>
    </section>
  );
}