// components/footer/FooterLinks.jsx

export default function FooterLinks() {
  const services = [
    { label: "Revenue Cycle Management RCM", href: "#" },
    { label: "Medical Billing Services", href: "#" },
    { label: "Credentialing / State Licensing", href: "#" },
    { label: "A/R Recovery & Analysis", href: "#" },
    { label: "Practice Management Solutions", href: "#" },
  ];

  const quickLinks = [
    { label: "About Us", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Return Policy", href: "#" },
    { label: "Contact us", href: "#" },
  ];

  return (
    <div className="bg-white py-14 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Services */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-5">
            Services
          </h4>
          <ul className="space-y-3">
            {services.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-[#004aad] hover:text-[#38b6ff] transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-[#004aad] hover:text-[#38b6ff] transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Form */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-5">
            Let's Get Connected
          </h4>
          <div className="space-y-5">
            <div className="border-b border-gray-300 pb-1">
              <input
                type="text"
                placeholder="Name"
                className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none py-1"
              />
            </div>
            <div className="border-b border-gray-300 pb-1">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none py-1"
              />
            </div>
            <button className="w-full bg-[#004aad] hover:bg-green-800 text-white text-sm font-semibold py-3 px-6 rounded-full transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}