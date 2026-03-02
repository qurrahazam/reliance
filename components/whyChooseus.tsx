"use client";

import { useState } from "react";
import Link from "next/link";

const reasons = [
  {
    title: "Cost-Efficient Billing",
    description:
      "Reliance Medical LLC uses a smart pay-when-paid approach, reducing overhead and letting you focus on patient care.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="20" height="22" rx="2" />
        <path d="M9 9h10M9 13h10M9 17h6" />
        <path d="M17 20l2 2 3-3" />
      </svg>
    ),
  },
  {
    title: "Revenue Optimization",
    description:
      "Accurate claim submission and denial prevention ensures your practice receives timely reimbursements and improved cash flow.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22l5-6 4 3 5-7 5 3" />
        <path d="M21 8v5M21 8h-5" />
      </svg>
    ),
  },
  {
    title: "Faster Payments",
    description: (
      <>
        Streamline your revenue cycle and reduce delays using our trusted{" "}
        <Link href="/services/medical-billing" className="text-[#38b6ff] hover:underline font-medium">
          medical billing services
        </Link>{" "}
        and integrated ERA workflows.
      </>
    ),
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="10" />
        <path d="M14 9v5l3 3" />
        <path d="M9 14h2" />
      </svg>
    ),
  },
  {
    title: "HIPAA-Compliant Systems",
    description:
      "Every step of our workflow is fully HIPAA compliant, ensuring your patient data remains secure and your practice audit-ready.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3L24 7v8c0 6-4.5 10-10 11C4 25 4 15 4 15V7L14 3z" />
        <path d="M10 14l3 3 5-5" />
      </svg>
    ),
  },
  {
    title: "Expert Support Team",
    description:
      "Our dedicated specialists answer questions, resolve issues, and ensure your revenue cycle runs smoothly at all times.",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="9" r="4" />
        <path d="M3 24c0-4 3.6-7 8-7s8 3 8 7" />
        <circle cx="21" cy="11" r="3" />
        <path d="M25 24c0-3-2-5.5-5-6.3" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#38b6ff] mb-3">
            Our Advantage
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d2e2a] leading-tight">
            Why Practices Choose Reliance Medical
          </h2>
          <div className="w-14 h-[3px] bg-gradient-to-r from-[#004aad] to-[#38b6ff] rounded-full mx-auto mt-5" />
        </div>

        {/* Reasons List */}
        <div className="flex flex-col gap-5">
          {reasons.map((reason, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`
                flex items-start gap-5 px-7 py-6 rounded-2xl border transition-all duration-300 cursor-default
                ${hovered === i
                  ? "bg-[#f0f8ff] border-[#004aad] shadow-lg -translate-x-1"
                  : "bg-white border-gray-100 hover:border-[#38b6ff]/50"
                }
              `}
            >
              {/* Icon Bubble */}
              <div
                className={`
                  shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                  ${hovered === i ? "bg-[#004aad] text-white" : "bg-[#f0fafa] text-[#004aad]"}
                `}
              >
                {reason.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1.5 pt-1">
                <h3
                  className={`text-base font-bold transition-colors duration-300 ${
                    hovered === i ? "text-[#004aad]" : "text-[#0d2e2a]"
                  }`}
                >
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}