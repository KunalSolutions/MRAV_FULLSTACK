import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, CheckCircle, Briefcase, Coffee } from "lucide-react";

const stats = [
  {
    value: 220,
    suffix: "+",
    label: "Registered Customers",
    icon: Users,
  },
  {
    value: 250,
    suffix: "+",
    label: "Projects Completed",
    icon: CheckCircle,
  },
  {
    value: 3904,
    suffix: "+",
    label: "Business Solutions",
    icon: Briefcase,
  },
  {
    value: 1750,
    suffix: "+",
    label: "Coffee’s with Clients",
    icon: Coffee,
  },
];

const Stats = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#0F172A] dark:text-white">
            Our Achievements
          </h2>
          <p className="text-gray-500 mt-2">
            Numbers that reflect our experience and trust
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >

                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C62828] to-[#1E3A8A] rounded-t-2xl"></div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-50 text-[#C62828] group-hover:bg-[#C62828] group-hover:text-white transition">
                    <Icon size={28} />
                  </div>
                </div>

                {/* Number */}
                <h3 className="text-4xl font-extrabold text-[#0F172A] dark:text-white mb-2 text-center">
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

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Stats;