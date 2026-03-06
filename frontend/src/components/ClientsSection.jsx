import React from "react";

const clientLogos = [
  "../Brand/0.png",
  "../Brand/company logo-01.png",
  "../Brand/company logo-02.png",
  "../Brand/company logo-04.png",
  "../Brand/company logo-05.png",
  "../Brand/company logo-06.png",
];

const ClientsSection = () => {
  return (
    <section
      id="clients"
      className="bg-gradient-to-b from-gray-50 to-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-3">
            Trusted By
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We collaborate with leading brands and organizations across
            industries to deliver world-class AV and IT solutions.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-14 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;