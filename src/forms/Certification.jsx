import { useState } from "react";
import Toast from "../components/Toast";
export default function Certification() {
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    mode: "",
    goals: "",
    experience: "",
    daw: "",
    source: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  /* HANDLE CHANGE */
  const handleChange = (e) => {
    let { name, value } = e.target;

    // Name 
    if (name === "name") {
      value = value.replace(/[^a-zA-Z\s]/g, "");
    }

    // Phone 
    if (name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  /*  VALIDATION  */
  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required";

    if (!form.email) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      err.email = "Enter valid email";

    if (!form.phone) err.phone = "Phone is required";
    else if (form.phone.length !== 10)
      err.phone = "Must be 10 digits";

    if (!form.course) err.course = "Select a certification";
    if (!form.mode) err.mode = "Select learning mode";
    if (!form.goals) err.goals = "Goal is required";
    if (!form.experience) err.experience = "Experience is required";
    if (!form.daw) err.daw = "Select DAW";
    if (!form.source) err.source = "Select source";

    return err;
  };

  /*  SUBMIT  */
 const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);

    const allTouched = {};
    Object.keys(form).forEach((k) => (allTouched[k] = true));
    setTouched(allTouched);
    return;
  }

  try {
    setLoading(true);
    setMessage("");
    setStatus("");

    await fetch(
      "https://script.google.com/macros/s/AKfycbwNY0_c9IRb8E4b5Ka6wV8L16GdUk-YFRF9VDedilsfSRVhNCPZ0CCclRklJCB196iP/exec", 
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
    setMessage("Registration submitted successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      course: "",
      mode: "",
      goals: "",
      experience: "",
      daw: "",
      source: "",
      notes: "",
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
    <section className="bg-[#111] text-white min-h-screen pt-24 pb-16">
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

          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Certification Course Registration
          </h1>
          <div className="text-[#f0e81b] text-center py-3 text-md font-medium mb-6">
            Register now just at ₹999 + 18% GST
          </div>

          <p className="text-gray-400 text-sm mb-8">
            Register for certification programs and upgrade your skills.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            <Field label="Full Name" name="name"
              value={form.name} onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
            />

            <Field label="Email" name="email"
              value={form.email} onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
            />

            <Field label="Phone Number" name="phone"
              value={form.phone} onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && errors.phone}
            />

            {/*  DROPDOWN */}
            <SelectField
              label="Select Certification"
              name="course"
              value={form.course}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.course && errors.course}
              options={[
                "Level 1",
                "Level 2",
                "Level 3",
                "Level 4",
              ]}
            />

            {/* MODE */}
            <SelectField
              label="Preferred Learning Mode"
              name="mode"
              value={form.mode}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.mode && errors.mode}
              options={["Online", "Offline"]}
            />

            <TextareaField
              label="Goal of this Certification"
              name="goals"
              value={form.goals}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.goals && errors.goals}
            />

            <TextareaField
              label="Prior Experience"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.experience && errors.experience}
            />

            {/* DAW */}
            <div>
              <label className="text-sm text-gray-400 block mb-2">
                Which DAW do you use?
              </label>

              <div className="grid grid-cols-2 gap-2 text-sm">

                {[
                  "FL Studio",
                  "Logic Pro",
                  "Ableton Live",
                  "Cubase",
                  "Studio One",
                  "Other",
                ].map((daw) => (
                  <label key={daw} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="daw"
                      value={daw}
                      onChange={handleChange}
                    />
                    {daw}
                  </label>
                ))}

              </div>

              {touched.daw && errors.daw && (
                <p className="text-red-400 text-xs mt-1">{errors.daw}</p>
              )}
            </div>

            {/* SOURCE */}
            <SelectField
              label="How did you hear about us?"
              name="source"
              value={form.source}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.source && errors.source}
              options={[
                "Instagram",
                "YouTube",
                "Google",
                "Friend / Referral",
               
                "Other",
              ]}
            />

            <TextareaField
              label="Additional Notes"
              name="notes"
              value={form.notes}
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
  {loading ? "Submitting..." : "Proceed to pay ₹999"}
</button>

          </form>

        </div>
      </div>
    </section>
  );
}

/*  INPUT  */
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

/*  SELECT  */
function SelectField({ label, options, error, ...props }) {
  return (
    <div>
      <label className="text-sm text-gray-400 mb-1 block">{label}</label>

      <select
        {...props}
        className={`w-full px-4 py-3 bg-[#111] border ${
          error ? "border-red-500" : "border-white/10"
        } outline-none focus:border-[#f0e81b]`}
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>

      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

/* TEXTAREA  */
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