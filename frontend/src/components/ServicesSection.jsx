import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Volume2, Video, Lightbulb, Shield } from "lucide-react";

const services = [
  {
    title: "Automation Systems in Mumbai",
    category: "Automation",
    icon: Cpu,
    image: "/Services/1.jpg",
    link: "#",
    description:
      "Smart automation solutions for homes and offices including lighting, control systems, and integrated AV.",
  },
  {
    title: "Professional Audio Systems",
    category: "Audio",
    icon: Volume2,
    image: "/Services/2.jpg",
    link: "#",
    description:
      "High-quality audio solutions for conference rooms, auditoriums, and home theaters.",
  },
  {
    title: "Lighting Automation Solutions",
    category: "Automation",
    icon: Lightbulb,
    image: "/Services/3.jpg",
    link: "#",
    description:
      "Custom lighting automation systems for residential and commercial environments.",
  },
  {
    title: "Video & Display Systems",
    category: "Video",
    icon: Video,
    image: "/Services/4.jpg",
    link: "#",
    description:
      "Advanced display solutions including LED walls, projectors, and digital signage.",
  },
  {
    title: "Video Conferencing Solutions",
    category: "Video",
    icon: Video,
    image: "/Services/5.jpg",
    link: "#",
    description:
      "Collaborative AV solutions for seamless business communication and conferencing.",
  },
  {
    title: "Surveillance & Security Systems",
    category: "Automation",
    icon: Shield,
    image: "/Services/6.jpg",
    link: "#",
    description:
      "Advanced CCTV, access control, and security automation solutions.",
  },
];

const filters = ["All", "Automation", "Audio", "Video"];

const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredServices =
    activeFilter === "All"
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <section
      className="py-24 bg-gray-50 dark:bg-[#0F172A]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <header className="text-center mb-14">
          <h2
            id="services-heading"
            className="text-3xl font-bold text-[#C62828] mb-3"
          >
            AV & Automation Services in Mumbai, India
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            We provide professional audio visual systems, automation solutions,
            and security systems for businesses, homes, and enterprises.
          </p>
        </header>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  activeFilter === filter
                    ? "bg-[#C62828] text-white shadow-md"
                    : "bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-[#C62828] hover:text-white"
                }`}
              aria-label={`Filter ${filter} services`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          <AnimatePresence>
            {filteredServices.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                >

                  {/* Clickable Image (SEO important) */}
                  <a href={item.link} aria-label={item.title}>
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={`${item.title} by MR AV Solutions in Mumbai`}
                        loading="lazy"
                        className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                      <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full">
                        <Icon size={18} className="text-[#C62828]" />
                      </div>

                      <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  </a>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>

                    <a
                      href={item.link}
                      className="mt-5 inline-block text-sm font-medium text-[#C62828] hover:underline"
                    >
                      Explore Service →
                    </a>
                  </div>

                </article>
              );
            })}
          </AnimatePresence>

        </div>
      </div>

      {/* Hidden SEO Content */}
      <p className="hidden">
        MR AV Solutions provides professional AV services in Mumbai including
        automation systems, video conferencing, audio systems, LED video walls,
        and security solutions for commercial and residential projects across India.
      </p>
    </section>
  );
};

export default ServicesSection;