import React from "react";
import { Briefcase, Home, Users, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Commercial AV Solutions",
    description:
      "Custom AV setups for office spaces, conference rooms, digital signage, and scalable solutions for modern workplaces.",
    icon: Briefcase,
    delay: 100,
  },
  {
    title: "Residential AV Solutions",
    description:
      "Transform your home with smart AV systems, home theaters, security solutions, and fully integrated smart living.",
    icon: Home,
    delay: 200,
  },
  {
    title: "Event AV Solutions",
    description:
      "Professional AV setups for conferences, exhibitions, live events, including sound systems, video walls, and live streaming.",
    icon: Users,
    delay: 300,
  },
];

const Services = () => {
  return (
    <section
      id="solutions"
      className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden"
    >
      {/* Background Blurs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#C62828] to-[#1E3A8A] bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver innovative AV and IT solutions tailored for businesses,
            homes, and large-scale events.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={service.delay}
                className="group relative bg-white border rounded-2xl p-10 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#1E3A8A]/10 mb-6 group-hover:bg-[#C62828]/10 transition">
                  <Icon
                    size={32}
                    className="text-[#1E3A8A] group-hover:text-[#C62828] transition"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold group-hover:text-[#C62828] transition"
                >
                  Learn More
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </a>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#C62828]/30 transition pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;