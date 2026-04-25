import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, CheckCircle, Briefcase, Coffee } from "lucide-react";

const stats = [
  {
    value: 220,
    suffix: "+",
    label: "Clients Across India",
    icon: Users,
  },
  {
    value: 250,
    suffix: "+",
    label: "AV Projects Completed",
    icon: CheckCircle,
  },
  {
    value: 3900,
    suffix: "+",
    label: "AV & IT Solutions Delivered",
    icon: Briefcase,
  },
  {
    value: 1700,
    suffix: "+",
    label: "Client Meetings & Consultations",
    icon: Coffee,
  },
];

const Stats = () => {
  return (
    <section
      className="py-24 bg-gray-50 dark:bg-[#0F172A]"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <header className="text-center mb-14">
          <h2
            id="stats-heading"
            className="text-3xl font-bold text-[#0F172A] dark:text-white"
          >
            Our AV Project Experience & Client Success
          </h2>

          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            With decades of experience in audio visual solutions in Mumbai and across India, 
            our numbers reflect our commitment to quality, innovation, and client satisfaction.
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <article
                key={index}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >

                {/* Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C62828] to-[#1E3A8A] rounded-t-2xl"></div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-50 text-[#C62828] group-hover:bg-[#C62828] group-hover:text-white transition">
                    <Icon size={28} />
                  </div>
                </div>

                {/* Number (SEO fallback included) */}
                <h3 className="text-4xl font-extrabold text-[#0F172A] dark:text-white mb-2 text-center">
                  <span className="sr-only">{stat.value}{stat.suffix}</span>

                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.2}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {stat.suffix}
                </h3>

                {/* Label */}
                <p className="text-center text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>

              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Stats;