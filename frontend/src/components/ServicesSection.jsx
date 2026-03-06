import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Volume2, Video, Lightbulb, Shield } from "lucide-react";

const services = [
  {
    title: "Automation",
    category: "Automation",
    icon: Cpu,
    image: "/Services/1.jpg",
    description:
      "Streamline your home or office with cutting-edge automation systems.",
  },
  {
    title: "Audio Systems",
    category: "Audio",
    icon: Volume2,
    image: "/Services/2.jpg",
    description:
      "High-quality audio systems for home theaters and conference rooms.",
  },
  {
    title: "Lighting Solutions",
    category: "Automation",
    icon: Lightbulb,
    image: "/Services/3.jpg",
    description:
      "Custom lighting systems for residential and commercial spaces.",
  },
  {
    title: "Video Systems",
    category: "Video",
    icon: Video,
    image: "/Services/4.jpg",
    description:
      "Advanced video systems including projectors and digital signage.",
  },
  {
    title: "Collaborative Systems",
    category: "Video",
    icon: Video,
    image: "/Services/5.jpg",
    description:
      "Interactive AV solutions for collaboration and conferencing.",
  },
  {
    title: "Surveillance & Security",
    category: "Automation",
    icon: Shield,
    image: "/Services/6.jpg",
    description:
      "Advanced surveillance systems for safety and access control.",
  },
];

const filters = ["All", "Automation", "Audio", "Video"];

const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  const filteredServices =
    activeFilter === "All"
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#C62828] mb-3">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Customized AV & automation solutions designed for modern
            businesses and smart spaces.
          </p>
        </div>

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
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                >

                  {/* Image */}
                  <div
                    onClick={() => setActiveItem(item)}
                    className="relative overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                    {/* Icon */}
                    <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full">
                      <Icon size={18} className="text-[#C62828]" />
                    </div>

                    {/* Title Overlay */}
                    <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>

                    <button
                      onClick={() => setActiveItem(item)}
                      className="mt-5 text-sm font-medium text-[#C62828] hover:underline"
                    >
                      View Details →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden max-w-xl w-full"
            >
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#C62828] mb-3">
                  {activeItem.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300">
                  {activeItem.description}
                </p>

                <button
                  onClick={() => setActiveItem(null)}
                  className="mt-6 px-6 py-2 bg-[#1E3A8A] text-white rounded-full hover:opacity-90"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;