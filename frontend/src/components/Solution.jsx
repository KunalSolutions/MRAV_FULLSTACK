import React, { useState } from "react";
import { X } from "lucide-react";

const solutionsData = [
  {
    title: "Board Room",
    description: "Premium space for strategic meetings",
    image: "../1.jpg",
    category: "Board",
  },
  {
    title: "Conference Room",
    description: "Ideal for corporate events and conferences",
    image: "../2.jpg",
    category: "Conference",
  },
  {
    title: "Training Room",
    description: "State-of-the-art setup for training programs",
    image: "../4.jpg",
    category: "Training",
  },
  {
    title: "Meeting Room",
    description: "Perfect for small group discussions",
    image: "../3.jpg",
    category: "Board",
  },
  {
    title: "Experience Center",
    description: "Immersive experience for clients and partners",
    image: "../5.jpg",
    category: "Event",
  },
  {
    title: "Video Wall",
    description: "High-definition video wall for stunning visuals",
    image: "../6.jpg",
    category: "Event",
  },
  {
    title: "Auditorium",
    description: "Spacious auditorium for events and presentations",
    image: "../7.jpg",
    category: "Event",
  },
  {
    title: "Learning Center",
    description: "Modern space designed for workshops and education",
    image: "../8.jpg",
    category: "Training",
  },
  {
    title: "Video Conference",
    description: "Advanced facilities for hosting conferences",
    image: "../9.png",
    category: "Conference",
  },
];

const categories = ["All", "Board", "Conference", "Training", "Event"];

const Solution = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredSolutions =
    activeCategory === "All"
      ? solutionsData
      : solutionsData.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#C62828] to-[#1E3A8A] bg-clip-text text-transparent">
          Our Solutions
        </h2>
        <p className="text-gray-600 mt-3">
          Explore our innovative AV solutions designed for modern environments.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium border transition backdrop-blur-sm
            ${
              activeCategory === cat
                ? "bg-[#C62828] text-white border-[#C62828]"
                : "border-gray-300 text-gray-700 hover:bg-[#C62828]/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredSolutions.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-sm text-white/80 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden relative shadow-2xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow"
            >
              <X size={22} />
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-[420px] object-cover"
            />

            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                {selectedItem.title}
              </h3>
              <p className="text-gray-600">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Solution;