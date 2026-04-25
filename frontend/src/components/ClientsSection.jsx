import React from "react";

const clientLogos = [
  {
    src: "/Brand/0.png",
    name: "Corporate Client 1"
  },
  {
    src: "/Brand/company logo-01.png",
    name: "Corporate Client 2"
  },
  {
    src: "/Brand/company logo-02.png",
    name: "Corporate Client 3"
  },
  {
    src: "/Brand/company logo-04.png",
    name: "Corporate Client 4"
  },
  {
    src: "/Brand/company logo-05.png",
    name: "Corporate Client 5"
  },
  {
    src: "/Brand/company logo-06.png",
    name: "Corporate Client 6"
  }
];

const ClientsSection = () => {
  return (
    <section
      id="clients"
      className="bg-gradient-to-b from-gray-50 to-white py-24"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <header className="text-center mb-16">
          <h2
            id="clients-heading"
            className="text-4xl font-bold text-[#0F172A] mb-3"
          >
            Trusted by Leading Companies in India
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Our clients include top organizations across industries who trust
            our expertise in audio visual systems, IT integration, and digital
            solutions.
          </p>
        </header>

        {/* Logo Grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center">
          {clientLogos.map((logo, index) => (
            <li
              key={index}
              className="group flex items-center justify-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={logo.src}
                alt={`${logo.name} - client of MR AV Solutions`}
                loading="lazy"
                className="h-14 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition duration-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClientsSection;