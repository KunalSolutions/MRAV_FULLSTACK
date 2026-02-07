import React, { useState, useEffect } from "react";

const heroSlides = [
  {
    title: "Welcome to MR AV Solution",
    text: "Your trusted partner in providing cutting-edge audiovisual solutions for homes, businesses, and events. Experience innovation and quality like never before.",
    img: "../hero-carousel/hero-carousel-1.jpg",
  },
  {
    title: "Why Choose MR AV Solution?",
    text: "We specialize in delivering custom solutions tailored to your needs, ensuring seamless integration, exceptional quality, and unmatched reliability.",
    img: "../hero-carousel/hero-carousel-2.jpg",
  },
  {
    title: "Our Commitment",
    text: "At MR AV Solution, we prioritize customer satisfaction by offering state-of-the-art technology, professional expertise, and a focus on excellence in every project.",
    img: "../hero-carousel/hero-carousel-3.jpg",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const length = heroSlides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background image */}
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Centered text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-[#FFFFFF] max-w-2xl mb-6">
              {slide.text}
            </p>
            <a
              href="/contact"
              className="bg-red-600 text-white px-8 py-2 rounded font-semibold hover:bg-red-500 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      ))}

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-[#C62828]" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
