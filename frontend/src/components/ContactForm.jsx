import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  User,
  Send
} from "lucide-react";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uyc4suja",
        "template_engvy9h",
        formRef.current,
        "t9NymGoRAINsgl4bY"
      )
      .then(
        () => {
          alert("Message sent successfully");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* CONTACT INFO CARD */}
        <div className="bg-gray-100 rounded-xl p-6 shadow space-y-4">
          <h3 className="text-xl font-semibold text-red-600">
            MR AV Solutions
          </h3>

          <div className="flex items-start gap-3 text-gray-700">
            <MapPin className="text-red-600 mt-1" size={20} />
            <p>
              H.O 98, 3rd Floor, Rajesh Building<br />
              Dr. D.B. Marg, Lamington Road<br />
              Mumbai – 400007
            </p>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Phone className="text-red-600" size={20} />
            <p>+91 22 2380 2513</p>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Phone className="text-red-600" size={20} />
            <p>+91 22 2385 6204</p>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="text-red-600" size={20} />
            <p>info@mreindia.com</p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="border pl-10 p-3 rounded w-full"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="border pl-10 p-3 rounded w-full"
                />
              </div>
            </div>

            <div className="relative">
              <Building2 className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
                className="border pl-10 p-3 rounded w-full"
              />
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="border p-3 rounded w-full"
            />

            <button
              type="submit"
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
