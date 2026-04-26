import { useState, useRef } from "react";
import Toast from "../components/Toast";
export default function LabelSignup() {
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    genre: "",
    experience: "",
    portfolio: "",
    about: ""
  });

  const [errors, setErrors] = useState({});
  
  const refs = {
    name: useRef(),
    
    email: useRef(),
    phone: useRef(),
    location: useRef(),
    genre: useRef(),
    experience: useRef(),
    portfolio: useRef(),
    about: useRef()
  };

 const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "name") {
   
    const clean = value.replace(/[^a-zA-Z\s]/g, "");
    setForm({ ...form, name: clean });
    return;
  }

  if (name === "phone") {
    
    const clean = value.replace(/\D/g, "").slice(0, 10);
    setForm({ ...form, phone: clean });
    return;
  }

  setForm({ ...form, [name]: value });
};
  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Name is required";
    else if (!/^[a-zA-Z\s]+$/.test(form.name))
      err.name = "Only letters allowed";

   
    if (!form.email.trim())
      err.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      err.email = "Invalid email";

    if (!form.phone)
      err.phone = "Phone is required";
    else if (!/^\d{10}$/.test(form.phone))
      err.phone = "Phone must be exactly 10 digits";

    if (!form.location.trim())
      err.location = "Location is required";

    if (!form.genre.trim())
      err.genre = "Genre is required";

    if (!form.experience)
      err.experience = "Select experience level";

    if (!form.portfolio.trim())
      err.portfolio = "Portfolio is required";

    if (!form.about.trim())
      err.about = "Tell us about yourself";

    setErrors(err);

    const firstError = Object.keys(err)[0];
    if (firstError && refs[firstError]?.current) {
      refs[firstError].current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }

    return Object.keys(err).length === 0;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    setLoading(true);
    setMessage("");
    setStatus("");

    await fetch(
      "https://script.google.com/macros/s/AKfycbz8sZbg4hwpvXex90wBZLzoNxHvHFkN1VtYHLr6dG3C5SoKY3c4bcQqDZ48OIp56DcM/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setStatus("success");
    setMessage("Application submitted successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      location: "",
      genre: "",
      experience: "",
      portfolio: "",
      about: ""
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

  const inputStyle =
    "w-full bg-black border px-5 py-4 rounded-xl outline-none transition";

  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <Toast
  message={message}
  type={status}
  onClose={() => {
    setMessage("");
    setStatus("");
  }}
/>
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-6xl font-extrabold text-center">
          JOIN THE RECORD LABEL
        </h1>

        <div className="mt-12 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div ref={refs.name}>
              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className={`${inputStyle} ${
                  errors.name ? "border-red-500" : "border-zinc-700 focus:border-[#f0e81b]"
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

          

            
            <div ref={refs.email}>
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className={`${inputStyle} ${
                  errors.email ? "border-red-500" : "border-zinc-700 focus:border-[#f0e81b]"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

           
            <div ref={refs.phone}>
              <input
                name="phone"
                placeholder="Phone (10 digits)"
                inputMode="numeric"
                pattern="\d{10}"
                maxLength={10}
                onChange={handleChange}
                className={`${inputStyle} ${
                  errors.phone ? "border-red-500" : "border-zinc-700 focus:border-[#f0e81b]"
                }`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* LOCATION */}
            <div ref={refs.location}>
              <input
                name="location"
                placeholder="Location"
                onChange={handleChange}
                className={`${inputStyle} ${
                  errors.location ? "border-red-500" : "border-zinc-700 focus:border-[#f0e81b]"
                }`}
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>

            
            <div ref={refs.genre}>
              <input
                name="genre"
                placeholder="Genre"
                onChange={handleChange}
                className={`${inputStyle} ${
                  errors.genre ? "border-red-500" : "border-zinc-700 focus:border-[#f0e81b]"
                }`}
              />
              {errors.genre && <p className="text-red-500 text-sm mt-1">{errors.genre}</p>}
            </div>

            
            <div ref={refs.experience}>
              <select
                name="experience"
                onChange={handleChange}
                className={`${inputStyle} ${
                  errors.experience ? "border-red-500" : "border-zinc-700 focus:border-[#f0e81b]"
                }`}
              >
                <option value="">Experience Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Professional</option>
              </select>
              {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
            </div>

          
            <div ref={refs.portfolio}>
              <input
                name="portfolio"
                placeholder="Portfolio Link"
                onChange={handleChange}
                className={`${inputStyle} ${
                  errors.portfolio ? "border-red-500" : "border-zinc-700 focus:border-[#f0e81b]"
                }`}
              />
              {errors.portfolio && <p className="text-red-500 text-sm mt-1">{errors.portfolio}</p>}
            </div>

           
            <div ref={refs.about}>
              <textarea
                name="about"
                rows="4"
                placeholder="Tell us about yourself"
                onChange={handleChange}
                className={`${inputStyle} ${
                  errors.about ? "border-red-500" : "border-zinc-700 focus:border-[#f0e81b]"
                }`}
              />
              {errors.about && <p className="text-red-500 text-sm mt-1">{errors.about}</p>}
            </div>

            <button
  disabled={loading}
  className={`w-full py-4 rounded-xl font-semibold transition ${
    loading
      ? "bg-gray-500 cursor-not-allowed"
      : "bg-[#f0e81b] text-black hover:scale-105"
  }`}
>
  {loading ? "Submitting..." : "SUBMIT APPLICATION"}
</button>

          </form>
        </div>
      </div>

      
      
    </section>
  );
}