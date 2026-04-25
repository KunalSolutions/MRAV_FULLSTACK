import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      {/* Section Title */}
      <header className="max-w-7xl mx-auto text-center mb-16 px-6">
        <h2
          id="about-heading"
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#C62828] to-[#1E3A8A] bg-clip-text text-transparent mb-3"
        >
          Leading AV & IT Solutions Company in Mumbai
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We deliver professional audio visual and IT solutions across India,
          helping businesses enhance communication, collaboration, and
          performance.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <article>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>MR AV Solutions</strong> has been providing professional AV
            and IT integration services since 1985. Founded by{" "}
            <strong>Mahesh Dagar</strong> in Mumbai, the company has grown into
            a trusted name in audio visual solutions with a strong presence
            across India and international markets.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            We specialize in delivering advanced audiovisual systems for
            corporate offices, conference rooms, auditoriums, and commercial
            spaces, ensuring seamless communication and enhanced user
            experience.
          </p>

          {/* Features */}
          <div className="space-y-5">
            {[
              "Cutting-edge AV and IT solutions for modern businesses",
              "Experienced team with 100+ professionals",
              "Serving clients across India and global markets",
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
        </article>

        {/* Right Content */}
        <aside className="bg-white rounded-2xl shadow-lg border p-10 relative">
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#C62828] rounded-xl opacity-20"></div>

          <h3 className="text-2xl font-semibold text-[#0F172A] mb-4">
            Our Mission
          </h3>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Our mission is to deliver innovative audio visual and IT solutions
            that improve business communication, collaboration, and operational
            efficiency. We design and integrate high-performance AV systems
            tailored to modern enterprise needs.
          </p>

          <a
            href="/about"
            className="inline-flex items-center gap-2 bg-[#C62828] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A61B1B] transition shadow-md hover:shadow-lg"
            aria-label="Learn more about MR AV Solutions"
          >
            Learn More About Us
            <ArrowRight size={18} />
          </a>
        </aside>
      </div>
    </section>
  );
};

export default AboutUs;