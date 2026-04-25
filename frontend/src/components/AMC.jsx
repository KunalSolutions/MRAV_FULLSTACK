import React from "react";
import { motion } from "framer-motion";
import {
  Volume2,
  Monitor,
  Video,
  RadioTower,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Audio System AMC Services",
    icon: Volume2,
    link: "/amc/audio-maintenance",
    description:
      "Professional maintenance and servicing of audio systems for conference rooms, auditoriums, and commercial spaces.",
  },
  {
    title: "Video & Display AMC",
    icon: Monitor,
    link: "/amc/video-display-maintenance",
    description:
      "Regular maintenance of LED walls, projectors, and display systems to ensure high performance.",
  },
  {
    title: "Video Conferencing AMC",
    icon: Video,
    link: "/amc/video-conferencing",
    description:
      "End-to-end maintenance of conferencing systems including cameras, microphones, and network setup.",
  },
  {
    title: "Broadcast & Streaming AMC",
    icon: RadioTower,
    link: "/amc/broadcast-maintenance",
    description:
      "Maintenance of live streaming, broadcasting systems, and server infrastructure.",
  },
];

const AMC = () => {
  return (
    <section
      className="py-24 bg-gray-50 dark:bg-[#0F172A]"
      aria-labelledby="amc-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <header className="text-center mb-16">
          <h2
            id="amc-heading"
            className="text-3xl font-bold text-[#C62828] mb-3"
          >
            AV Annual Maintenance Contract (AMC) Services in Mumbai
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide professional AMC services for audio visual systems,
            video conferencing, LED displays, and broadcast setups to ensure
            long-term performance and reliability across India.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <article
                key={i}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 text-center"
              >

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-50 dark:bg-slate-700 group-hover:bg-[#C62828] transition">
                    <Icon className="w-6 h-6 text-[#C62828] group-hover:text-white transition"/>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg dark:text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {service.description}
                </p>

                {/* CTA (REAL LINK) */}
                <a
                  href={service.link}
                  className="mt-5 inline-flex items-center justify-center text-[#C62828] text-sm font-medium hover:underline"
                >
                  View AMC Details
                  <ArrowRight size={16} className="ml-2"/>
                </a>

              </article>
            );
          })}

        </div>
      </div>

      {/* Hidden SEO Content */}
      <p className="hidden">
        MR AV Solutions offers AMC services in Mumbai including audio system maintenance,
        video conferencing AMC, LED wall servicing, and broadcast system maintenance for
        corporate offices, auditoriums, and enterprises across India.
      </p>
    </section>
  );
};

export default AMC;