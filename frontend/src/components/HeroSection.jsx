import { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    {
      url: "https://i.pinimg.com/1200x/cf/b8/6b/cfb86b290e22116ccd0170487340529f.jpg",
      alt: "Modern digital technology solutions"
    },
    {
      url: "https://i.pinimg.com/1200x/e7/6d/2a/e76d2a2eb1a9064eeb8b34ef00d6cb21.jpg",
      alt: "Creative web design and development"
    },
    {
      url: "https://i.pinimg.com/1200x/32/21/77/3221775710f21f554b9379e5099d5a62.jpg",
      alt: "Business growth with digital services"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="relative h-[90vh] w-full overflow-hidden">

      {/* SEO-friendly Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img.url}
          alt={img.alt}
          loading={index === 0 ? "eager" : "lazy"} // first image priority
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-white">

        {/* H1 = Main keyword focus */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Digital Solutions for Modern Businesses
        </h1>

        {/* Supporting keyword-rich text */}
        <p className="text-lg md:text-xl max-w-2xl text-gray-200 mb-6">
          We design and develop high-performance websites, scalable applications,
          and user-focused digital experiences to grow your business online.
        </p>

        {/* Proper links (no button inside anchor) */}
        <div className="flex gap-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-4xl font-semibold transition"
            aria-label="Contact us to get started"
          >
            Get Started
          </a>

          <a
            href="/solutions"
            className="px-6 py-3 border border-gray-300 rounded-4xl transition font-semibold"
            aria-label="View our digital solutions"
          >
            View Solutions
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;