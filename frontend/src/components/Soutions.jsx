import React from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  { title: "Board Room AV Solutions", img: "../1.jpg", link: "#" },
  { title: "Conference Room AV Setup", img: "../2.jpg", link: "#" },
  { title: "Training Room AV Systems", img: "../4.jpg", link: "#" },
  { title: "Meeting Room AV Solutions", img: "../3.jpg", link: "#" },
  { title: "Experience Center AV", img: "../5.jpg", link: "#" },
  { title: "LED Video Wall Solutions", img: "../6.jpg", link: "#" },
  { title: "Auditorium AV Setup", img: "../7.jpg", link: "#" },
  { title: "Learning Center AV", img: "../8.jpg", link: "#" },
  { title: "Video Conferencing Systems", img: "../9.png", link: "#" },
];

const Solution = () => {
  return (
    <>
      {/* HERO */}
      <header
        className="relative h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('../MR AV Solution banner for website 95 X 48-01.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <nav aria-label="breadcrumb" className="text-sm mb-3">
            <ol className="flex gap-2">
              <li><a href="/" className="opacity-80 hover:underline">Home</a></li>
              <li>/</li>
              <li className="font-semibold">AV Solutions</li>
            </ol>
          </nav>

          {/* H1 (CRITICAL) */}
          <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
            Audio Visual Solutions in Mumbai for Businesses & Enterprises
          </h1>
        </div>
      </header>

      {/* INTRO */}
      <main>
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-3xl font-bold dark:text-white">
                Professional AV Solutions for Modern Workspaces
              </h2>

              <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                We provide advanced audio visual solutions in Mumbai including
                video conferencing systems, LED video walls, and integrated AV
                setups for corporate offices, auditoriums, and commercial spaces.
              </p>

              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Our AV systems are designed to improve communication,
                collaboration, and presentation experiences with high-quality
                audio, video, and automation technologies.
              </p>
            </div>

            <img
              src="../Services/audio-visual.jpg"
              alt="Audio visual solutions company in Mumbai providing AV integration systems"
              loading="lazy"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </section>

        {/* PORTFOLIO / SOLUTIONS */}
        <section className="py-20 bg-gray-100 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">

            <h2 className="text-3xl font-bold text-center mb-14 dark:text-white">
              Our Audio Visual Solutions & Installations
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, i) => (
                <article
                  key={i}
                  className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow hover:shadow-xl transition"
                >
                  <a href={item.link}>
                    <img
                      src={item.img}
                      alt={`${item.title} by AV company in Mumbai`}
                      loading="lazy"
                      className="h-[280px] w-full object-cover"
                    />
                  </a>

                  <div className="p-4 text-center">
                    <h3 className="font-semibold dark:text-white">
                      {item.title}
                    </h3>

                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="hidden">
          <p>
            MR AV Solutions is a leading provider of audio visual solutions in Mumbai,
            offering services such as video conferencing systems, LED video walls,
            boardroom AV setups, auditorium installations, and automation systems.
            We serve businesses, corporate offices, and enterprises across India.
          </p>
        </section>

      </main>
    </>
  );
};

export default Solution;