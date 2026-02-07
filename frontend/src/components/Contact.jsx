import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      {/* Page Title */}
      <section className="bg-gray-100 dark:bg-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="text-3xl font-bold dark:text-white mb-4 lg:mb-0">
            Contact
          </h1>

          <nav className="text-sm text-gray-600 dark:text-gray-300">
            <ol className="flex gap-2">
              <li className="hover:text-[#C62828] cursor-pointer">
                Home
              </li>
              <li>/</li>
              <li className="font-semibold text-[#C62828]">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              title="MR AV Solutions Location"
              className="w-full h-[300px] md:h-[350px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15093.349345385064!2d72.81726895040089!3d18.96070376351846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1267dcdec7%3A0x1e3d0ab8ae92d251!2sRajesh%20Building!5e0!3m2!1sen!2us!4v1738126548111!5m2!1sen!2us"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
