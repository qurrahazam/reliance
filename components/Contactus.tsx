"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    monthlyBilling: "",
    providers: "1-5",
    totalAR: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!agreed) return;

    try {
      fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, agreed }),
      });

      toast.success("Message sent! We'll get back to you shortly.", {
        duration: 5000,
      });

      setForm({
        name: "", businessName: "", email: "", phone: "",
        monthlyBilling: "", providers: "1-5", totalAR: "", message: "",
      });
      setAgreed(false);

    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const inputClass = `
    w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800
    placeholder:text-gray-400 outline-none transition-all duration-300
    focus:border-[#004aad] focus:ring-2 focus:ring-[#38b6ff]/30
  `;

  return (
    <section className="bg-[#f7f9f8] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">

          {/* Left: headline */}
          <div className="md:col-span-2 md:sticky md:top-28">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#38b6ff] mb-3">
              Connect With Us
            </p>
            <div className="w-12 h-[3px] bg-gradient-to-r from-[#004aad] to-[#38b6ff] rounded-full mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d2e2a] leading-tight mb-6">
              Have a Question? <span className="text-[#004aad]">Reach Out Today.</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Fill out the form with your practice details and let our team create a personalized solution for your revenue cycle needs.
            </p>

            {/* Trust badges */}
            <div className="flex flex-col gap-3">
              {[
                "HIPAA-Compliant",
                "No long-term commitments",
                "24-Hour Response Guarantee",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#004aad] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3 bg-white rounded-3xl shadow-xl shadow-[#004aad]/10 p-8 border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className={inputClass}
                />
              </div>

              {/* Business Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Practice / Business Name
                </label>
                <input
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  placeholder="Your Practice Name"
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@practice.com"
                  className={inputClass}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(000) 000-0000"
                  className={inputClass}
                />
              </div>

              {/* Monthly Billing */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Monthly Billing
                </label>
                <input
                  name="monthlyBilling"
                  value={form.monthlyBilling}
                  onChange={handleChange}
                  placeholder="1K – 500K"
                  className={inputClass}
                />
              </div>

              {/* # of Providers */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  # of Providers
                </label>
                <select
                  name="providers"
                  value={form.providers}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="1-5">1–5</option>
                  <option value="6-10">6–10</option>
                  <option value="11-20">11–20</option>
                  <option value="21-50">21–50</option>
                  <option value="50+">50+</option>
                </select>
              </div>

              {/* Total AR */}
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Total A/R
                </label>
                <input
                  name="totalAR"
                  value={form.totalAR}
                  onChange={handleChange}
                  placeholder="Enter your total accounts receivable"
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your practice and how we can help..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Disclaimer */}
              <div className="sm:col-span-2">
                <div className="flex items-start gap-3 p-4 border-2 border-[#004aad] bg-[#e6f0ff] rounded-xl">
                  <button
                    onClick={() => setAgreed(!agreed)}
                    className={`
                      mt-0.5 w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-all duration-200
                      ${agreed ? "bg-[#004aad] border-[#004aad]" : "border-gray-300 bg-white"}
                    `}
                  >
                    {agreed && (
                      <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1.5 5l2.5 2.5 4.5-4" />
                      </svg>
                    )}
                  </button>
                  <div>
                    <p className="text-xs font-bold text-[#004aad] uppercase mb-1">
                      Disclaimer
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      By providing my mobile number, I consent to receive SMS notifications and alerts from Roots RCM LLC. Message frequency may vary. Message and data rates may apply. Text HELP to (832) 415-1884 for assistance. Reply STOP at any time to opt out. https://rootsrcm.com/privacy-policy/
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  onClick={handleSubmit}
                  disabled={!agreed}
                  className={`w-full text-white font-bold text-sm tracking-widest uppercase py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1
                    ${agreed
                      ? "bg-[#004aad] hover:bg-[#38b6ff] shadow-[#004aad]/20 cursor-pointer"
                      : "bg-gray-300 cursor-not-allowed shadow-none"
                    }`}
                >
                  Submit
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}