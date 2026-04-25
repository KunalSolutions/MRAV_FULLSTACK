import React, { useState } from "react";
import { X } from "lucide-react";

const solutionsData = [
  {
    title: "Board Room AV Solutions",
    description: "Advanced boardroom AV setup for strategic meetings and presentations.",
    image: "/1.jpg",
    category: "Board",
    link: "#",
  },
  {
    title: "Conference Room AV Solutions",
    description: "Professional AV systems for conferences, meetings, and corporate collaboration.",
    image: "/2.jpg",
    category: "Conference",
    link: "#",
  },
  {
    title: "Training Room AV Setup",
    description: "Modern AV systems for training rooms, workshops, and educational environments.",
    image: "/4.jpg",
    category: "Training",
    link: "#",
  },
  {
    title: "Meeting Room AV Solutions",
    description: "Compact and efficient AV solutions for small business meetings.",
    image: "/3.jpg",
    category: "Board",
    link: "#",
  },
  {
    title: "Experience Center AV Design",
    description: "Immersive AV experience centers for brands and customer engagement.",
    image: "/5.jpg",
    category: "Event",
    link: "#",
  },
  {
    title: "Video Wall Solutions India",
    description: "High-quality LED video wall solutions for corporate and commercial spaces.",
    image: "/6.jpg",
    category: "Event",
    link: "#",
  },
  {
    title: "Auditorium AV Solutions",
    description: "Complete AV setup for auditoriums, seminars, and large-scale events.",
    image: "/7.jpg",
    category: "Event",
    link: "#",
  },
  {
    title: "Learning Center AV Systems",
    description: "Interactive AV systems for education and training centers.",
    image: "/8.jpg",
    category: "Training",
    link: "#",
  },
  {
    title: "Video Conferencing Solutions",
    description: "Reliable video conferencing systems for seamless communication.",
    image: "/9.png",
    category: "Conference",
    link: "#",
  },
];

const categories = ["All", "Board", "Conference", "Training", "Event"];

const Solution = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSolutions =
    activeCategory === "All"
      ? solutionsData
      : solutionsData.filter((item) => item.category === activeCategory);

  return (
    <section
      id="solutions"
      className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden"
      aria-labelledby="solutions-heading"
    >
      {/* Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      {/* Heading */}
      <header className="text-center mb-14">
        <h2
          id="solutions-heading"
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#C62828] to-[#1E3A8A] bg-clip-text text-transparent"
        >
          AV Solutions for Businesses in Mumbai & India
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore our audio visual solutions for boardrooms, conference rooms,
          auditoriums, and enterprise environments across India.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium border transition
            ${
              activeCategory === cat
                ? "bg-[#C62828] text-white border-[#C62828]"
                : "border-gray-300 text-gray-700 hover:bg-[#C62828]/10"
            }`}
            aria-label={`Filter ${cat} solutions`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredSolutions.map((item, index) => (
            <article
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              {/* Clickable Link (IMPORTANT for SEO) */}
              <a href={item.link} aria-label={item.title}>

                <img
                  src={item.image}
                  alt={`${item.title} in Mumbai by MR AV Solutions`}
                  loading="lazy"
                  className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>

                {/* Text */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/80 mt-1">
                    {item.description}
                  </p>
                </div>

              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;