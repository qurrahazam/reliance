export default function FooterCTA() {
  return (
    <div className="bg-[#004aad] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Schedule Demo */}
        <div className="p-6 border border-[#38b6ff] rounded-lg text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-[#38b6ff] mb-2">
            Schedule a Free Demo
          </p>
          <p className="text-lg font-semibold leading-snug">
            Our team will contact you within 12 hours.
          </p>
        </div>

        {/* Call Us */}
        <div className="p-6 border border-[#38b6ff] rounded-lg text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-[#38b6ff] mb-2">
            Call Us
          </p>
          <p className="text-xl font-bold">(832) 415-1884</p>
        </div>

        {/* Email Us */}
        <div className="p-6 border border-[#38b6ff] rounded-lg text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-[#38b6ff] mb-2">
            Email Us
          </p>
          <a
            href="mailto:info@rootsrcm.com"
            className="text-xl font-bold hover:text-[#38b6ff] transition-colors duration-200"
          >
            info@relianceRCM.com
          </a>
        </div>

        {/* Location */}
        <div className="p-6 border border-[#38b6ff] rounded-lg text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-[#38b6ff] mb-2">
            Location
          </p>
          <p className="text-xl font-bold">117 Slesington stharrisonville, Mo 64701</p>
        </div>

      </div>
    </div>
  );
}