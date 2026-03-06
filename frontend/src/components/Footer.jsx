import { Link } from "react-router-dom";
import { Youtube, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 relative">

        {/* Company */}
        <div>
          <h3 className="text-white font-bold text-xl mb-4">
            MR AV Solution
          </h3>

          <p className="text-sm leading-relaxed text-slate-400">
            <span className="text-white font-semibold">Address</span><br/>
            H.O 98, 3rd Floor, Rajesh Building<br/>
            Dr. D.B. Marg, Lamington Road,<br/>
            Mumbai – 400 007
          </p>

          <div className="mt-4 text-sm space-y-1 text-slate-400">
            <p className="text-white font-semibold">Phone</p>
            <p>+91 2223802513</p>
            <p>+91 2223856204</p>

            <p className="mt-3 text-white font-semibold">Email</p>
            <p>info@mreindia.com</p>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-red-500 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-red-500 transition">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-red-500 transition">
                Services
              </Link>
            </li>

            <li>
              <Link to="/solution" className="hover:text-red-500 transition">
                Solutions
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-red-500 transition">
                Query
              </Link>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Solutions</h4>

          <ul className="space-y-3 text-sm text-slate-400">
            <li className="hover:text-red-500 transition">Auditorium</li>
            <li className="hover:text-red-500 transition">Conference Room</li>
            <li className="hover:text-red-500 transition">Meeting Room</li>
            <li className="hover:text-red-500 transition">Active LED Displays</li>
            <li className="hover:text-red-500 transition">Video Wall Solutions</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>

          <p className="text-sm text-slate-400 mb-5">
            Follow us for updates, events and new AV solutions.
          </p>

          <div className="flex gap-3">

            <a
              href="https://www.youtube.com/channel/UCoxw1_ttEGxRaCY0HxoLLlg"
              target="_blank"
              className="p-3 rounded-lg bg-slate-800 hover:bg-red-600 transition"
            >
              <Youtube size={18} />
            </a>

            <a
              href="https://www.facebook.com/AVSITechnologies"
              target="_blank"
              className="p-3 rounded-lg bg-slate-800 hover:bg-blue-600 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://www.instagram.com/avsitechnologies/"
              target="_blank"
              className="p-3 rounded-lg bg-slate-800 hover:bg-pink-600 transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://in.linkedin.com/company/avsitechnologies"
              target="_blank"
              className="p-3 rounded-lg bg-slate-800 hover:bg-blue-700 transition"
            >
              <Linkedin size={18} />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 text-center py-5 text-sm text-slate-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">
          MR AV Solution
        </span>{" "}
        | All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;