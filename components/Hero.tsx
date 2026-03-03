export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003b8f] via-[#004aad] to-[#0066ff] text-white py-24 px-6">
      
      {/* Decorative background glow */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#38b6ff] opacity-20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Simplify Your <span className="text-[#38b6ff]">Medical Billing</span>
          </h1>

          <p className="text-lg text-blue-100 max-w-lg">
            Streamline your workflow, reduce errors, and increase revenue —
            all in one intelligent billing platform built for providers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#demo"
              className="inline-block bg-white text-[#004aad] font-semibold py-4 px-8 rounded-xl shadow-xl hover:scale-105 transition-transform duration-200"
            >
              Request a Demo
            </a>

            <a
              href="#learn"
              className="inline-block border border-white/50 py-4 px-8 rounded-xl hover:bg-white/10 transition"
            >
              Learn More
            </a>
          </div>

          <div className="pt-6 flex flex-wrap gap-6 text-sm text-blue-100">
            <span>✔ HIPAA Compliant</span>
            <span>✔ Fast Claim Processing</span>
            <span>✔ Trusted by Providers</span>
          </div>
        </div>

        {/* Right image */}
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
          <img
            src="/hero-medical.png"
            alt="Medical billing illustration"
            className="relative w-full rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}