import React from "react";
import {
  Award,
  ShieldCheck,
  Lightbulb,
  Quote,
  ChevronRight,
  Eye,
  Target,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality",
    description:
      "Unmatched quality in design, products and customer-first installation services.",
    color: "text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    description:
      "Adhering to top-tier safety standards for employees, customers and partners.",
    color: "text-green-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Future-ready solutions blending advanced technology with practical insights.",
    color: "text-yellow-500",
  },
];

const AboutUSSection = () => {
  return (
    <>
      {/* PAGE TITLE */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-50 py-12 border-b">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-4xl font-bold text-[#0F172A] mb-3 lg:mb-0">
            About Us
          </h1>

          <nav className="text-sm text-gray-600 flex items-center gap-2">
            <a href="/" className="hover:text-[#C62828] transition">
              Home
            </a>
            <ChevronRight size={16} />
            <span className="text-[#C62828] font-semibold">About</span>
          </nav>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Blur */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6">

          {/* QUOTE */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Quote className="mx-auto text-[#C62828] mb-6" size={42} />

            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#C62828] to-[#1E3A8A] bg-clip-text text-transparent">
              A Visionary Leader with 20+ Years of Expertise
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Mahesh Dagar, a seasoned technocrat, established the M R Group of
              Companies to deliver exceptional solutions across the AV and IT
              ecosystem.
            </p>

            <p className="text-gray-500 mt-3">
              A decade of experience in Singapore sharpened his skills and
              introduced him to global standards, shaping a customer-first,
              quality-driven organization.
            </p>
          </div>

          {/* CORE VALUES */}
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className="group bg-white border rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gray-100 mb-5 group-hover:bg-red-50 transition">
                    <Icon size={30} className={value.color} />
                  </div>

                  <h4 className="text-xl font-semibold text-[#0F172A] mb-2">
                    {value.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* VISION & MISSION */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Vision */}
            <div className="relative bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-md hover:shadow-xl transition">
              <Eye
                size={42}
                className="text-blue-600 mb-5"
              />

              <h4 className="text-2xl font-bold text-[#0F172A] mb-3">
                Our Vision
              </h4>

              <p className="text-gray-600 leading-relaxed">
                Empower customers worldwide with cutting-edge solutions,
                ensuring seamless infrastructure integration with a strong
                focus on aesthetics and functionality.
              </p>
            </div>

            {/* Mission */}
            <div className="relative bg-gradient-to-br from-red-50 to-white p-10 rounded-2xl shadow-md hover:shadow-xl transition">
              <Target
                size={42}
                className="text-red-600 mb-5"
              />

              <h4 className="text-2xl font-bold text-[#0F172A] mb-3">
                Our Mission
              </h4>

              <p className="text-gray-600 leading-relaxed">
                Leverage decades of expertise to deliver tailored audiovisual,
                communication, and automation solutions that exceed
                expectations through state-of-the-art services.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutUSSection;