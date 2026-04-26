import { useState, useRef } from "react";
import Toast from "../components/Toast";
export default function Mentorship() {

const formRef = useRef(null);
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    city: "",
    skills: "",
    projects: "",
    reason: "",
    timeCommitment: "",
    experience: "",
    goals: "",
    extra: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  /*  HANDLE CHANGE  */
  const handleChange = (e) => {
    let { name, value } = e.target;

    //  PHONE → only numbers
    if (name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    //  NAME 
    if (name === "fullName") {
      value = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  /*  VALIDATION  */
  const validate = () => {
    let newErrors = {};

    if (!form.fullName) newErrors.fullName = "Full Name is required";

    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter valid email";

    if (!form.phone) newErrors.phone = "Phone is required";
    else if (form.phone.length !== 10)
      newErrors.phone = "Phone must be 10 digits";

    if (!form.dob) newErrors.dob = "Date of birth required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.skills) newErrors.skills = "Skills required";
    if (!form.reason) newErrors.reason = "Reason is required";
    if (!form.timeCommitment) newErrors.timeCommitment = "Time commitment required";
    if (!form.goals) newErrors.goals = "Goals required";

    return newErrors;
  };

  /*  SUBMIT  */
 const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);

    const allTouched = {};
    Object.keys(form).forEach((key) => (allTouched[key] = true));
    setTouched(allTouched);

    const firstError = Object.keys(validationErrors)[0];
    const el = document.getElementsByName(firstError)[0];

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.focus();
    }

    return;
  }

  try {
    setLoading(true);
    setMessage("");
    setStatus("");

    await fetch('https://script.google.com/macros/s/AKfycby3a_uuKpQFqlad5EAbRHF1XicBJaV8Wd5irls-CZBMTiv2QnMSAvHyXpXl7EfQMSyv-Q/exec', {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setStatus("success");
    setMessage("Registration submitted successfully!");

    setForm({
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      city: "",
      skills: "",
      projects: "",
      reason: "",
      timeCommitment: "",
      experience: "",
      goals: "",
      extra: "",
    });

    setErrors({});
    setTouched({});

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
    <section className="bg-[#111111] text-white min-h-screen pt-24 pb-16">
<Toast
  message={message}
  type={status}
  onClose={() => {
    setMessage("");
    setStatus("");
  }}
/>
      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-[#1a1a1a] border border-white/10 p-8">

          <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
            Mentorship Program Registration
          </h1>

          <div className="text-[#f0e81b] text-center py-3 text-md font-medium mb-6">
            Register now just at ₹599 + 18% GST
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

            <Field label="Full Name" name="fullName" value={form.fullName}
              onChange={handleChange} onBlur={handleBlur}
              error={touched.fullName && errors.fullName}
            />

            <Field label="Email Address" name="email" value={form.email}
              onChange={handleChange} onBlur={handleBlur}
              error={touched.email && errors.email}
            />

            <Field label="Phone Number" name="phone" value={form.phone}
              onChange={handleChange} onBlur={handleBlur}
              error={touched.phone && errors.phone}
            />

            <Field type="date" label="Date of Birth" name="dob"
              value={form.dob} onChange={handleChange} onBlur={handleBlur}
              error={touched.dob && errors.dob}
            />

            <Field label="City / State" name="city"
              value={form.city} onChange={handleChange} onBlur={handleBlur}
              error={touched.city && errors.city}
            />

            <TextareaField label="Current Skills" name="skills"
              value={form.skills} onChange={handleChange} onBlur={handleBlur}
              error={touched.skills && errors.skills}
            />

            <TextareaField label="Previous Projects"
              name="projects" value={form.projects} onChange={handleChange}
            />

            <TextareaField label="Why do you want to join?"
              name="reason" value={form.reason}
              onChange={handleChange} onBlur={handleBlur}
              error={touched.reason && errors.reason}
            />

            <Field label="Weekly Time Commitment"
              name="timeCommitment" value={form.timeCommitment}
              onChange={handleChange} onBlur={handleBlur}
              error={touched.timeCommitment && errors.timeCommitment}
            />

            <TextareaField label="Prior Experience"
              name="experience" value={form.experience}
              onChange={handleChange}
            />

            <TextareaField label="Your Goals"
              name="goals" value={form.goals}
              onChange={handleChange} onBlur={handleBlur}
              error={touched.goals && errors.goals}
            />

            <TextareaField label="Anything else?"
              name="extra" value={form.extra}
              onChange={handleChange}
            />

           <button
  disabled={loading}
  className={`w-full py-3 font-medium transition ${
    loading
      ? "bg-gray-500 cursor-not-allowed"
      : "bg-[#f0e81b] text-black hover:brightness-90"
  }`}
>
  {loading ? "Submitting..." : "Process to Pay ₹599"}
</button>

          </form>

        </div>
      </div>

    </section>
  );
}

/*  INPUT */
function Field({ label, error, ...props }) {
  return (
    <div>
      <label className="text-sm text-gray-400 mb-1 block">{label}</label>

      <input
        {...props}
        className={`w-full px-4 py-3 bg-[#111] border ${
          error ? "border-red-500" : "border-white/10"
        } outline-none focus:border-[#f0e81b]`}
      />

      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

/*  TEXTAREA  */
function TextareaField({ label, error, ...props }) {
  return (
    <div>
      <label className="text-sm text-gray-400 mb-1 block">{label}</label>

      <textarea
        {...props}
        className={`w-full px-4 py-3 bg-[#111] border ${
          error ? "border-red-500" : "border-white/10"
        } outline-none focus:border-[#f0e81b] h-24`}
      />

      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}