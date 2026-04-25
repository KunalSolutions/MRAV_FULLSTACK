import {
  Award,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Innovation",
    desc: "Embracing the latest AV technologies and trends.",
    icon: Lightbulb,
  },
  {
    title: "Quality",
    desc: "Exceptional results from design to installation and support.",
    icon: Award,
  },
  {
    title: "Customer Focus",
    desc: "Tailored solutions that meet unique business goals.",
    icon: Users,
  },
  {
    title: "Teamwork",
    desc: "Strong collaboration for outstanding execution.",
    icon: ShieldCheck,
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
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">

        {/* background blur */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-200 blur-3xl opacity-30 rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#d9232d] to-[#1E3A8A] bg-clip-text text-transparent mb-3">
              Our Values
            </h2>
            <p className="text-gray-600">
              The principles that guide our innovation and service excellence
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 text-center border shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-red-50 mb-5 group-hover:bg-red-100 transition">
                    <Icon size={28} className="text-[#d9232d]" />
                  </div>

                  <h4 className="font-semibold text-xl mb-2 text-[#0F172A]">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REMOTE LOCATIONS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-3">
              Remote Locations
            </h2>

            <p className="text-gray-600">
              We provide support across multiple cities in India
            </p>
          </div>

          <div
            className="
              grid gap-6
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
                  bg-gray-100 rounded-xl px-6 py-4
                  font-medium cursor-pointer
                  transition duration-300
                  hover:bg-[#d9232d] hover:text-white hover:shadow-lg
                  max-md:min-w-[170px]
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