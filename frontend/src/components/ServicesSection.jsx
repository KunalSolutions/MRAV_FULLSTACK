import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Automation",
    category: "Automation",
    image: "../Services/1.jpg",
    description:
      "Streamline your home or office with cutting-edge automation systems.",
  },
  {
    title: "Audio Systems",
    category: "Audio",
    image: "../Services/2.jpg",
    description:
      "High-quality audio systems for home theaters and conference rooms.",
  },
  {
    title: "Lighting Solutions",
    category: "Automation",
    image: "../Services/3.jpg",
    description:
      "Custom lighting systems for residential and commercial spaces.",
  },
  {
    title: "Video Systems",
    category: "Video",
    image: "../Services/4.jpg",
    description:
      "Advanced video systems including projectors and digital signage.",
  },
  {
    title: "Collaborative Systems",
    category: "Video",
    image: "../Services/5.jpg",
    description:
      "Interactive AV solutions for collaboration and conferencing.",
  },
  {
    title: "Surveillance & Security",
    category: "Automation",
    image: "../Services/6.jpg",
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
    <>
      {/* SEO STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          provider: {
            "@type": "Organization",
            name: "MR AV Solution",
          },
          serviceType: "Audio Visual & Automation Services",
        })}
      </script>

      {/* PAGE TITLE */}
      <div className="bg-gray-50 dark:bg-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-[#0F172A] dark:text-white">
            Services
          </h1>
          <p className="text-sm text-gray-500">Home / Services</p>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-white dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#C62828] mb-3">
              Our Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Customized AV & automation solutions designed for performance and
              scalability.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition
                  ${
                    activeFilter === filter
                      ? "bg-[#C62828] text-white"
                      : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-[#C62828] hover:text-white"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredServices.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setActiveItem(item)}
                  className="
                    cursor-pointer rounded-2xl overflow-hidden
                    border dark:border-slate-700
                    shadow-sm hover:shadow-xl
                    transition-all duration-300
                    hover:-translate-y-2
                    bg-white dark:bg-slate-800
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-55 object-cover"
                  />

                  <div className="p-6 text-center">
                    <h4 className="text-lg font-semibold text-[#0F172A] dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full overflow-hidden"
            >
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#C62828] mb-2">
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
    </>
  );
};

export default ServicesSection;
