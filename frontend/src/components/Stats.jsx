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
    <section className="py-20 bg-white dark:bg-[#0F172A] transition-colors">
      <div className="max-w-7xl mx-auto px-4">
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
                className="
                  rounded-2xl p-8 text-center
                  bg-gray-50 dark:bg-slate-800
                  shadow-sm hover:shadow-2xl
                  transition-all duration-300
                  hover:-translate-y-2
                "
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-[#1E3A8A] dark:text-[#60A5FA]" />
                </div>

                {/* Number */}
                <h3
                  className="
                    text-4xl font-extrabold mb-2
                    bg-gradient-to-r from-[#C62828] to-[#1E3A8A]
                    bg-clip-text text-transparent
                  "
                >
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
                <p className="text-gray-600 dark:text-gray-300 font-medium">
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
