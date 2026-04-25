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
    title: "Quality AV Solutions",
    description:
      "Delivering high-quality audio visual systems with precision design and expert installation services.",
    color: "text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Reliability",
    description:
      "Ensuring safe, reliable, and industry-compliant AV installations for businesses and enterprises.",
    color: "text-green-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation in AV Technology",
    description:
      "Providing future-ready AV and IT solutions with cutting-edge technology and smart integration.",
    color: "text-yellow-500",
  },
];

const AboutUSSection = () => {
  return (
    <>
      {/* PAGE TITLE */}
      <header className="bg-gradient-to-r from-slate-100 to-gray-50 py-12 border-b">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
          
          {/* H1 (SEO Critical) */}
          <h1 className="text-4xl font-bold text-[#0F172A] mb-3 lg:mb-0">
            About US
          </h1>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-gray-600 flex items-center gap-2">
            <a href="/" className="hover:text-[#C62828] transition">Home</a>
            <ChevronRight size={16} />
            <span className="text-[#C62828] font-semibold">About Us</span>
          </nav>
        </div>
      </header>

      {/* ABOUT CONTENT */}
      <main className="relative py-24 bg-white overflow-hidden">
        {/* Background */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6">

          {/* Founder Section */}
          <section className="max-w-4xl mx-auto text-center mb-20">
            <Quote className="mx-auto text-[#C62828] mb-6" size={42} />

            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#C62828] to-[#1E3A8A] bg-clip-text text-transparent">
              Founder Mahesh Dagar – AV Industry Expert
            </h2>

            <p className="text-gray-600 leading-relaxed">
              <strong>Mahesh Dagar</strong>, founder of <strong>MR AV Solutions</strong>, is a seasoned AV and IT professional with over 20+ years of experience in delivering advanced audio visual systems across India and global markets.
            </p>

            <p className="text-gray-500 mt-3">
              His international experience in Singapore helped establish global standards, making the company a trusted name in AV integration, video conferencing, and automation solutions.
            </p>
          </section>

          {/* Core Values */}
          <section className="grid md:grid-cols-3 gap-10 mb-20">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={index}
                  className="group bg-white border rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gray-100 mb-5 group-hover:bg-red-50 transition">
                    <Icon size={30} className={value.color} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </section>

          {/* Vision & Mission */}
          <section className="grid md:grid-cols-2 gap-10">

            {/* Vision */}
            <article className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-md hover:shadow-xl transition">
              <Eye size={42} className="text-blue-600 mb-5" />

              <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To be a leading audio visual solutions provider in India,
                delivering innovative AV systems for businesses, enterprises,
                and modern workspaces.
              </p>
            </article>

            {/* Mission */}
            <article className="bg-gradient-to-br from-red-50 to-white p-10 rounded-2xl shadow-md hover:shadow-xl transition">
              <Target size={42} className="text-red-600 mb-5" />

              <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To provide high-performance AV and IT solutions including
                conference room setups, video walls, and automation systems
                that enhance communication and productivity.
              </p>
            </article>
          </section>

        </div>
      </main>
    </>
  );
};

export default AboutUSSection;