"use client";

import Link from "next/link";

const topStats = [
  { value: "25%+", label: "Average Reduction in Denials" },
  { value: "18 Days", label: "Average Claim Processing Time" },
];

const bottomStats = [
  { value: "22%+", label: "Revenue Growth for Clients" },
  { value: "97%", label: "Clean Claim Submission Rate" },
  { value: "96%", label: "Insurance Collection Success" },
  { value: "45+", label: "Medical Specialties Served" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#004aad] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 items-center">
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Performance You Can Trust
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              At Reliance RCM, we combine industry expertise with smart processes 
              to simplify revenue cycle management. Our focus is accuracy, 
              compliance, and consistent financial growth for every practice we serve.
            </p>
          </div>

          {/* Top 2 stats */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            {topStats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-white/75 text-sm font-medium">
                  {stat.label}
                </span>
                <div className="w-10 h-0.5 bg-[#38b6ff] rounded-full mt-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-14" />

        {/* Bottom row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {bottomStats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-white/75 text-sm font-medium">
                {stat.label}
              </span>
              <div className="w-10 h-0.5 bg-[#38b6ff] rounded-full mt-1" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="bg-white text-[#004aad] text-sm font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Start Growing Today
          </Link>
        </div>

      </div>
    </section>
  );
}