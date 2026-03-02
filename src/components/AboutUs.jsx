import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-20">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-[#C62828] mb-2">About</h2>
        <p className="text-xl text-[#0F172A]">About Us</p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
            <p className="text-[#0F172A] mb-6">
              FIRST CLASS PROFESSIONAL AV / IT SOLUTIONS SINCE 1985. 
              Since 1985, we’ve been transforming the digital world with our holistic AV/IT solutions. Founded by Mr. Mahesh Dagar in Mumbai, 
              'M.R. ENTERPRISES' today has offices across India and a presence in 3 other countries. 
              With a dedicated team of over 120 employees, we design, integrate, and incorporate the latest AV technology and communication systems 
              into business facilities across the world.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#0F172A]">
                <CheckCircle className="text-[#C62828] mt-1" size={20} />
                <span>Providing cutting-edge AV/IT solutions for businesses worldwide.</span>
              </li>
              <li className="flex items-start gap-3 text-[#0F172A]">
                <CheckCircle className="text-[#C62828] mt-1" size={20} />
                <span>Experienced team with over 120 employees dedicated to excellence.</span>
              </li>
              <li className="flex items-start gap-3 text-[#0F172A]">
                <CheckCircle className="text-[#C62828] mt-1" size={20} />
                <span>Offices in India and presence in 3 other countries.</span>
              </li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 flex flex-col justify-center" data-aos="fade-up" data-aos-delay="200">
            <p className="text-[#0F172A] mb-6">
              Our mission is to provide innovative AV and IT solutions that enhance communication and drive business success. 
              We specialize in the design and integration of audiovisual systems that improve efficiency and user experience.
            </p>

            <a
              href="/about"
              className="inline-flex items-center text-[#1E3A8A] font-semibold hover:text-[#C62828] transition"
            >
              <span>Read More</span>
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
