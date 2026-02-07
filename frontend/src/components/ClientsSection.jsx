import React from "react";

const clientLogos = [
  "../Brand/0.png",
  "../Brand/company logo-01.png",
  "../Brand/company logo-02.png",
  "../Brand/company logo-04.png",
  "../Brand/company logo-05.png",
  "../Brand/company logo-06.png",
];

const ClientsSection = () => {
  return (
    <section id="clients" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12" data-aos="fade-up">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100} // staggered animation
            >
              <img src={logo} alt={`Client ${index + 1}`} className="h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
