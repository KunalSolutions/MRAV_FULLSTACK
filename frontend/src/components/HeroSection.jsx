import { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "https://i.pinimg.com/1200x/cf/b8/6b/cfb86b290e22116ccd0170487340529f.jpg",
    "https://i.pinimg.com/1200x/e7/6d/2a/e76d2a2eb1a9064eeb8b34ef00d6cb21.jpg",
    "https://i.pinimg.com/1200x/32/21/77/3221775710f21f554b9379e5099d5a62.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000); // 1s image + 1s fade = perfect smooth loop

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* Background Sliding Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-3000 
          ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>


      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg">
            Empowering Your Digital Experience
        </h1>

        <p className="text-lg md:text-xl max-w-2xl text-gray-200 mb-6">
          We build modern solutions with clean design, great performance,  
          and seamless user experience tailored for your business.
        </p>

        <div className="flex gap-4">
          <a href="/contact">
            <button className="px-6 cursor-pointer py-3 bg-blue-600 hover:bg-blue-700 rounded-4xl font-semibold transition">
              Get Started
            </button>
          </a>
          <a href="/solutions">
            <button className="px-6 cursor-pointer py-3 border border-gray-300 rounded-4xl transition font-semibold">
               Solutions
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
