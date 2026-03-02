import React from "react";
import {
  MapPin,
  Lightbulb,
  Award,
  Users,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    title: "Innovation",
    desc: "Embracing the latest AV technologies and trends.",
    icon: <Lightbulb size={32} />,
  },
  {
    title: "Quality",
    desc: "Exceptional results from design to installation and support.",
    icon: <Award size={32} />,
  },
  {
    title: "Customer Focus",
    desc: "Tailored solutions that meet unique business goals.",
    icon: <Users size={32} />,
  },
  {
    title: "Teamwork",
    desc: "Strong collaboration for outstanding execution.",
    icon: <ShieldCheck size={32} />,
  },
];

const locations = [
  "Kolkata",
  "Indore",
  "Jaipur",
  "Chandigarh",
  "Secunderabad",
  "Gujarat",
  "Kochin",
  "Kolhapur",
  "Sholapur",
  "Nagpur",
  "Nasik",
  "Aurangabad",
];

const Location = () => {
  return (
    <>
      {/* OUR VALUES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-[#d9232d] mb-10">
          Our Values
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex justify-center text-[#d9232d] mb-4">
                {item.icon}
              </div>
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REMOTE LOCATIONS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Remote Locations</h2>
            <p className="text-gray-600 mt-2">
              We provide support across these cities
            </p>
          </div>

          {/* Desktop grid / Mobile horizontal scroll */}
          <div
            className="
              grid gap-4
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              max-md:flex
              max-md:overflow-x-auto
              max-md:space-x-4
              max-md:pb-4
            "
          >
            {locations.map((city, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-center gap-2
                  bg-gray-100 rounded-lg px-5 py-4
                  font-medium cursor-pointer
                  transition-all duration-300
                  hover:bg-[#d9232d] hover:text-white
                  max-md:min-w-[160px]
                "
              >
                <MapPin size={18} />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
