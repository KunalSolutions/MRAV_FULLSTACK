import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  Monitor,
  Video,
  RadioTower,
  X,
  Download,
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

const pricing = [
  {
    tier: "Silver AMC",
    price: "₹25,000 / year",
    features: ["Quarterly Maintenance", "Remote Support", "Basic Reports"],
  },
  {
    tier: "Gold AMC",
    price: "₹45,000 / year",
    features: [
      "Bi-Monthly Maintenance",
      "Priority Support",
      "Performance Reports",
    ],
  },
  {
    tier: "Platinum AMC",
    price: "₹75,000 / year",
    features: [
      "Monthly Maintenance",
      "24/7 Support",
      "Dedicated Engineer",
      "Zero Downtime SLA",
    ],
  },
];

const AMC = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#C62828]">
            Annual Maintenance Contract (AMC)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
            Reliable maintenance solutions for AV, IT, and broadcast systems.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
                className="cursor-pointer bg-white dark:bg-slate-800 p-6 rounded-2xl shadow hover:shadow-xl transition"
              >
                <Icon className="w-8 h-8 text-[#1E3A8A] mb-4" />
                <h4 className="font-semibold text-lg dark:text-white">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-500 mt-2">
                  Click for details →
                </p>
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
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl max-w-md relative"
            >
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>
              <h3 className="text-xl font-bold mb-3 dark:text-white">
                {activeService.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {activeService.details}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AMC;
