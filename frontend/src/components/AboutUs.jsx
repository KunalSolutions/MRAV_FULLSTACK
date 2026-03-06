import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden"
    >
      {/* Background Blur Effect */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#C62828] to-[#1E3A8A] bg-clip-text text-transparent mb-3">
          About Us
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Delivering world-class AV & IT solutions with innovation, expertise,
          and decades of industry leadership.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-gray-700 leading-relaxed mb-8">
            FIRST CLASS PROFESSIONAL AV / IT SOLUTIONS SINCE 1985. Since 1985,
            we’ve been transforming the digital world with our holistic AV/IT
            solutions. Founded by Mr. Mahesh Dagar in Mumbai, "M.R.
            ENTERPRISES" today has offices across India and a presence in 3
            other countries.
          </p>

          {/* Features */}
          <div className="space-y-5">
            {[
              "Providing cutting-edge AV/IT solutions for businesses worldwide.",
              "Experienced team with over 120 employees dedicated to excellence.",
              "Offices in India and presence in 3 other countries.",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border hover:shadow-md transition"
              >
                <CheckCircle
                  className="text-[#C62828] flex-shrink-0"
                  size={22}
                />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Card */}
        <div className="bg-white rounded-2xl shadow-lg border p-10 relative">
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#C62828] rounded-xl opacity-20"></div>

          <h3 className="text-2xl font-semibold text-[#0F172A] mb-4">
            Our Mission
          </h3>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Our mission is to provide innovative AV and IT solutions that
            enhance communication and drive business success. We specialize in
            designing and integrating advanced audiovisual systems that improve
            efficiency and user experience.
          </p>

          <a
            href="/about"
            className="inline-flex items-center gap-2 bg-[#C62828] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A61B1B] transition shadow-md hover:shadow-lg"
          >
            Read More
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;