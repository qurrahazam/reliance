"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    tag: "Faster Reimbursements",
    title: "Revenue Cycle Management",
    description:
      "End-to-end RCM solutions that reduce claim denials, accelerate reimbursements, and keep your revenue flowing with precision.",
    href: "/services/revenue-cycle",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="16" />
        <path d="M20 12v2M20 26v2M13 15l1.5 1.5M26 26l1.5 1.5M12 20h2M26 20h2" />
        <circle cx="20" cy="20" r="5" />
        <path d="M20 17.5v2.5l1.5 1.5" />
      </svg>
    ),
  },
  {
    tag: "Maximize Profitability",
    title: "Medical Billing Services",
    description:
      "Accurate, compliant medical billing that maximizes collections and minimizes administrative burden across all specialties.",
    href: "/services/medical-billing",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="6" width="24" height="28" rx="3" />
        <path d="M14 14h12M14 19h12M14 24h8" />
        <path d="M24 29l2 2 4-4" />
      </svg>
    ),
  },
  {
    tag: "Systematic Evaluation",
    title: "Credentialing & State Licensing",
    description:
      "Streamlined provider credentialing and multi-state licensing so your team is always compliant and ready to practice.",
    href: "/services/credentialing",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 5L34 11v10c0 8-6 13-14 15C8 34 6 26 6 21V11L20 5z" />
        <path d="M14 20l4 4 8-8" />
      </svg>
    ),
  },
  {
    tag: "Optimized Workflows",
    title: "A/R Recovery & Analysis",
    description:
      "Targeted accounts receivable recovery with deep analytics — identify trends, resolve aged claims, and recover lost revenue.",
    href: "/services/ar-recovery",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 32l8-9 6 4 8-11 6 3" />
        <path d="M34 14v6M34 14h-6" />
      </svg>
    ),
  },
  {
    tag: "Staffing Solutions",
    title: "Practice Management Solutions",
    description:
      "Comprehensive practice management support — from staffing and scheduling to operations — so you can focus on patient care.",
    href: "/services/practice-management",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="15" cy="13" r="5" />
        <path d="M5 33c0-5.5 4.5-10 10-10s10 4.5 10 10" />
        <circle cx="30" cy="15" r="4" />
        <path d="M35 33c0-4.4-2.8-8-7-9" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#38b6ff] mb-3">
            What We Offer
          </p>
          <div className="w-14 h-[2px] bg-[#004aad] rounded-full mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight max-w-xl mb-5">
            Smart solutions that elevate healthcare performance.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-lg">
            Reliance Medical LLC delivers premium healthcare management services
            designed to optimize revenue, strengthen compliance, and support long-term growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative flex flex-col gap-5 rounded-2xl p-8 min-h-[320px] cursor-pointer
                bg-white border border-gray-200
                transition-all duration-500 ease-out
                ${hovered === i
                  ? "border-[#004aad] shadow-[0_20px_40px_rgba(0,74,173,0.15)] -translate-y-3"
                  : "hover:border-[#38b6ff]/60"
                }
              `}
            >
              <div
                className={`transition-all duration-500 ${
                  hovered === i
                    ? "text-[#004aad] scale-110"
                    : "text-[#004aad]/70"
                }`}
              >
                {service.icon}
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-[#38b6ff]">
                {service.tag}
              </p>

              <h3
                className={`text-xl font-bold transition-colors duration-500 ${
                  hovered === i ? "text-[#004aad]" : "text-black"
                }`}
              >
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="flex items-center gap-2 text-sm font-semibold mt-auto pt-5 border-t border-gray-100 text-[#004aad] transition-all duration-300 hover:gap-4"
              >
                Learn More
                <svg
                  className="w-4 h-4 transition-transform duration-300"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}