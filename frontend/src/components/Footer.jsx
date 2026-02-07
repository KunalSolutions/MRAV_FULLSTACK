import { Link } from "react-router-dom";
import {
  Youtube,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* Address & Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            MR AV Solution
          </h3>
          <p className="text-sm leading-relaxed">
            <strong className="text-white">Address:</strong><br />
            H.O 98, 3rd Floor, Rajesh Building <br />
            Dr. D.B. Marg, Lamington Road, <br />
            Mumbai – 400 007
          </p>

          <div className="mt-4 text-sm space-y-1">
            <p><strong className="text-white">Phone:</strong></p>
            <p>+91 2223802513</p>
            <p>+91 2223856204</p>
            <p className="mt-2">
              <strong className="text-white">Email:</strong><br />
              info@mreindia.com
            </p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500">About Us</Link></li>
            <li><Link to="/services" className="hover:text-red-500">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-red-500">Solutions</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Query</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li>Auditorium</li>
            <li>Conference Room</li>
            <li>Meeting Room</li>
            <li>Active LED Displays</li>
            <li>Video Wall Solutions</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <p className="text-sm mb-4">
            Let’s stay in touch! Follow us for updates, events, and exciting content.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.youtube.com/channel/UCoxw1_ttEGxRaCY0HxoLLlg"
              target="_blank"
              className="p-2 rounded-full bg-red-600 hover:bg-red-700 text-white"
            >
              <Youtube size={18} />
            </a>

            <a
              href="https://www.facebook.com/AVSITechnologies"
              target="_blank"
              className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://www.instagram.com/avsitechnologies/"
              target="_blank"
              className="p-2 rounded-full bg-gradient-to-tr from-red-600 to-blue-700 text-white"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://in.linkedin.com/company/avsitechnologies"
              target="_blank"
              className="p-2 rounded-full bg-blue-800 hover:bg-blue-900 text-white"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 text-center py-4 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">
          MRAV Solution
        </span>{" "}
        | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
