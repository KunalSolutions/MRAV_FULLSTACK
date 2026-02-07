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
      : solutionsData.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="bg-white py-20">
      {/* Section Title */}
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-[#C62828]">Solution</h2>
        <p className="text-[#0F172A] text-lg">Our Solution</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full cursor-pointer border font-semibold transition
              ${
                activeCategory === cat
                  ? "bg-[#C62828] text-white"
                  : "border-[#C62828] text-[#C62828] hover:bg-[#C62828]/10"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Brand Overlay */}
              <div className="absolute inset-0 bg-[#1E3A8A]/70 
                              opacity-100 md:opacity-0 md:group-hover:opacity-100 
                              transition flex flex-col justify-end p-6">
                <h4 className="text-xl font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-white/90 text-sm mt-1">
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
          <div className="bg-white rounded-xl max-w-3xl w-full overflow-hidden relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-[#C62828]"
            >
              <X size={28} />
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-[400px] object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-[#0F172A]/80">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Solution;
