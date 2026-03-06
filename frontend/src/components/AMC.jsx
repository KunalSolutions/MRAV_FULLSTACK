import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  Monitor,
  Video,
  RadioTower,
  X,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Audio System Maintenance",
    icon: Volume2,
    details:
      "Complete inspection, tuning, and replacement of audio components ensuring crystal-clear sound and zero downtime.",
  },
  {
    title: "Video & Display Maintenance",
    icon: Monitor,
    details:
      "Preventive care and calibration of LED walls, projectors, and digital displays for perfect visuals.",
  },
  {
    title: "Video Conferencing",
    icon: Video,
    details:
      "End-to-end conferencing health checks including cameras, mics, and network stability.",
  },
  {
    title: "Live Streaming & Broadcast",
    icon: RadioTower,
    details:
      "Maintenance of encoders, servers, and streaming workflows for reliable broadcasts.",
  },
];

const AMC = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#C62828] mb-3">
            Annual Maintenance Contract
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional maintenance solutions for AV, broadcast, and
            conferencing systems ensuring reliability and peak performance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveService(service)}
                className="
                group cursor-pointer
                bg-white dark:bg-slate-800
                rounded-2xl p-8
                shadow-md hover:shadow-2xl
                transition duration-300
                hover:-translate-y-2
                text-center
                "
              >

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="
                  w-14 h-14 flex items-center justify-center
                  rounded-full
                  bg-red-50 dark:bg-slate-700
                  group-hover:bg-[#C62828]
                  transition
                  ">
                    <Icon className="w-6 h-6 text-[#C62828] group-hover:text-white transition"/>
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-semibold text-lg dark:text-white mb-3">
                  {service.title}
                </h4>

                {/* Preview */}
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Maintenance, diagnostics & system optimization
                </p>

                {/* CTA */}
                <div className="mt-4 flex justify-center text-[#C62828] text-sm font-medium">
                  Learn More
                  <ArrowRight size={16} className="ml-2"/>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="
              bg-white dark:bg-slate-900
              p-8 rounded-2xl
              max-w-lg w-full
              relative
              shadow-2xl
              "
            >
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              >
                <X />
              </button>

              <h3 className="text-2xl font-bold text-[#C62828] mb-4">
                {activeService.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {activeService.details}
              </p>

              <button
                onClick={() => setActiveService(null)}
                className="
                mt-6 px-6 py-2
                bg-[#1E3A8A]
                text-white
                rounded-full
                hover:opacity-90
                "
              >
                Close
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default AMC;