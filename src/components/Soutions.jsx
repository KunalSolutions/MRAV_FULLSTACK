import React from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  { title: "Board Room", img: "../1.jpg" },
  { title: "Conference Room", img: "../2.jpg" },
  { title: "Training Room", img: "../4.jpg" },
  { title: "Meeting Room", img: "../3.jpg" },
  { title: "Experience Center", img: "../5.jpg" },
  { title: "Video Wall", img: "../6.jpg" },
  { title: "Auditorium", img: "../7.jpg" },
  { title: "Learning Center", img: "../8.jpg" },
  { title: "Video Conference", img: "../9.png" },
];

const Solution = () => {
  return (
    <>
      {/* Hero / Page Title */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('../MR AV Solution banner for website 95 X 48-01.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <nav className="text-sm">
            <ol className="flex gap-2">
              <li className="opacity-80">Home</li>
              <li>/</li>
              <li className="font-semibold">Solution</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Audio Visual Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold leading-tight dark:text-white">
              We Are Specialized In <br />
              <span className="text-[#C62828]">
                Audio Visual Solutions
              </span>
            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              As specialists in Audio Visual solutions, we deliver cutting-edge
              technology to enhance meetings, events, and presentations.
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              From immersive video walls to seamless conferencing, our AV
              solutions ensure reliability, clarity, and impact.
            </p>
          </motion.div>

          <motion.img
            src="../Services/audio-visual.jpg"
            alt="Audio Visual Solutions"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-14 dark:text-white"
          >
            Our AV Installations
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[280px] w-full object-cover"
                />
                <div className="p-4 text-center">
                  <h5 className="font-semibold dark:text-white">
                    {item.title}
                  </h5>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Solution;
