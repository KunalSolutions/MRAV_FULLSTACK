import React from "react";
import { Briefcase, Home, Users } from "lucide-react";

const services = [
  {
    title: "Commercial AV Solutions",
    description:
      "Custom AV setups for office spaces, conference rooms, digital signage, and more. Professional and scalable solutions for any commercial setting.",
    icon: Briefcase,
    delay: 100,
  },
  {
    title: "Residential AV Solutions",
    description:
      "Transform your home with smart AV systems, home theaters, security solutions, and integrated smart living experiences.",
    icon: Home,
    delay: 200,
  },
  {
    title: "Event AV Solutions",
    description:
      "From conferences to exhibitions, we provide premium AV setups including sound systems, video walls, projectors, and live streaming solutions.",
    icon: Users,
    delay: 300,
  },
];

const Services = () => {
  return (
    <section id="solutions" className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#C62828] mb-3">
            Our Services
          </h2>
          <p className="text-[#0F172A] max-w-2xl mx-auto">
            We offer customized AV solutions for a variety of industries. Explore
            our services below.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={service.delay}
                className="group border rounded-xl p-8 text-center hover:shadow-lg transition bg-white"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1E3A8A]/10 group-hover:bg-[#C62828]/10 transition">
                    <Icon
                      size={32}
                      className="text-[#1E3A8A] group-hover:text-[#C62828] transition"
                    />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold text-[#0F172A] mb-3">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-[#0F172A]/80 mb-4">
                  {service.description}
                </p>

                {/* Link */}
                {/* <a
                  href="/services"
                  className="inline-block font-semibold text-[#1E3A8A] hover:text-[#C62828] transition"
                >
                  Learn More →
                </a> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
