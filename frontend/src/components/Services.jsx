import React from "react";
import { Briefcase, Home, Users, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Commercial AV Solutions in Mumbai",
    description:
      "Professional audio visual solutions for offices, conference rooms, digital signage, and enterprise environments.",
    icon: Briefcase,
    link: "#",
  },
  {
    title: "Residential AV & Home Automation",
    description:
      "Smart home solutions including home theaters, security systems, and fully integrated AV automation for modern living.",
    icon: Home,
    link: "#",
  },
  {
    title: "Event AV Solutions & Setup",
    description:
      "Complete AV solutions for events, exhibitions, conferences, including sound systems, LED walls, and live streaming.",
    icon: Users,
    link: "#",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <header className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#C62828] to-[#1E3A8A] bg-clip-text text-transparent mb-4"
          >
            Audio Visual & IT Services in Mumbai, India
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end AV solutions including commercial setups,
            residential automation, and event AV services across India.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={index}
                className="group relative bg-white border rounded-2xl p-10 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#1E3A8A]/10 mb-6 group-hover:bg-[#C62828]/10 transition">
                  <Icon
                    size={32}
                    className="text-[#1E3A8A] group-hover:text-[#C62828] transition"
                  />
                </div>

                {/* Title (H3 for SEO hierarchy) */}
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* CTA with keyword */}
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold group-hover:text-[#C62828] transition"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Explore Service
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </a>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#C62828]/30 transition pointer-events-none"></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;