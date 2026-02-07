import React from "react";
import {
  Award,
  ShieldCheck,
  Lightbulb,
  Quote,
  ChevronRight,
} from "lucide-react";

const AboutUSSection = () => {
  return (
    <>
      {/* Page Title */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-[#0F172A] mb-3 lg:mb-0">
            About
          </h1>

          {/* Breadcrumbs */}
          <nav className="text-sm text-[#0F172A]/70 flex items-center gap-2">
            <a href="/" className="hover:text-[#C62828] transition">
              Home
            </a>
            <ChevronRight size={16} />
            <span className="text-[#C62828] font-semibold">About</span>
          </nav>
        </div>
      </div>

      {/* About Proprietor Section */}
      <section
        id="about-proprietor"
        className="bg-white py-20"
      >
        <div className="container mx-auto px-6 md:px-12" data-aos="fade-up">
          {/* Quote Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Quote className="text-[#C62828]" />
              <h3 className="text-2xl md:text-3xl font-semibold text-[#C62828]">
                A Visionary Leader with 20+ Years of Expertise
              </h3>
              <Quote className="text-[#C62828] rotate-180" />
            </div>

            <p className="text-[#0F172A] mb-4">
              Mahesh Dagar, a seasoned technocrat, established the M R Group of
              Companies to deliver exceptional solutions across the AV and IT
              ecosystem.
            </p>
            <p className="text-[#0F172A]/80">
              A decade of experience in Singapore sharpened his skills and
              introduced him to global standards, shaping a customer-first,
              quality-driven organization.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
              <Award size={48} className="mx-auto text-[#1E3A8A]" />
              <h5 className="mt-4 text-xl font-semibold text-[#0F172A]">
                Quality
              </h5>
              <p className="mt-2 text-[#0F172A]/80">
                Unmatched quality in design, products, and customer-first
                installation services.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
              <ShieldCheck size={48} className="mx-auto text-green-600" />
              <h5 className="mt-4 text-xl font-semibold text-[#0F172A]">
                Safety
              </h5>
              <p className="mt-2 text-[#0F172A]/80">
                Adhering to top-tier safety standards for employees, customers,
                and partners.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
              <Lightbulb size={48} className="mx-auto text-yellow-500" />
              <h5 className="mt-4 text-xl font-semibold text-[#0F172A]">
                Innovation
              </h5>
              <p className="mt-2 text-[#0F172A]/80">
                Future-ready solutions blending advanced technology with
                practical insights.
              </p>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h4 className="text-2xl font-semibold text-[#C62828] mb-3">
                Vision
              </h4>
              <p className="text-[#0F172A]/80">
                Empower customers worldwide with cutting-edge solutions,
                ensuring seamless infrastructure integration with a strong
                focus on aesthetics and functionality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h4 className="text-2xl font-semibold text-[#C62828] mb-3">
                Mission
              </h4>
              <p className="text-[#0F172A]/80">
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
