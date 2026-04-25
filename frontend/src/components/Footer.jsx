import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden" role="contentinfo">
      
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 relative">

        {/* Company Info (Local SEO Boost) */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">
            MR AV Solutions
          </h2>

          <address className="not-italic text-sm leading-relaxed text-slate-400">
            <span className="text-white font-semibold">Address</span><br/>
            H.O 98, 3rd Floor, Rajesh Building<br/>
            Dr. D.B. Marg, Lamington Road,<br/>
            Mumbai – 400007, Maharashtra, India
          </address>

          <div className="mt-4 text-sm space-y-1 text-slate-400">
            <p className="text-white font-semibold">Phone</p>
            <a href="tel:+912223802513" className="hover:text-red-500 block">
              +91 22 2380 2513
            </a>
            <a href="tel:+912223856204" className="hover:text-red-500 block">
              +91 22 2385 6204
            </a>

            <p className="mt-3 text-white font-semibold">Email</p>
            <a href="mailto:info@mreindia.com" className="hover:text-red-500">
              info@mreindia.com
            </a>
          </div>
        </div>

        {/* Quick Links (SEO Internal Linking) */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500">About Us</Link></li>
            <li><Link to="/services" className="hover:text-red-500">AV Services</Link></li>
            <li><Link to="/solutions" className="hover:text-red-500">AV Solutions</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Solutions (Now SEO Valuable) */}
        <nav aria-label="Our Solutions">
          <h3 className="text-white font-semibold mb-4">Our Solutions</h3>

          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link to="#" className="hover:text-red-500">Auditorium AV Solutions</Link></li>
            <li><Link to="#" className="hover:text-red-500">Conference Room Setup</Link></li>
            <li><Link to="#" className="hover:text-red-500">Meeting Room AV</Link></li>
            <li><Link to="#" className="hover:text-red-500">LED Display Solutions</Link></li>
            <li><Link to="#" className="hover:text-red-500">Video Wall Solutions</Link></li>
          </ul>
        </nav>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>

          <p className="text-sm text-slate-400 mb-5">
            Follow us for updates, AV projects, and latest technology trends.
          </p>

          <div className="flex gap-3">

            <a
              href="https://www.youtube.com/channel/UCoxw1_ttEGxRaCY0HxoLLlg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-3 rounded-lg bg-slate-800 hover:bg-red-600 transition"
            >
              <Youtube size={18} />
            </a>

            <a
              href="https://www.facebook.com/AVSITechnologies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-3 rounded-lg bg-slate-800 hover:bg-blue-600 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://www.instagram.com/avsitechnologies/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 rounded-lg bg-slate-800 hover:bg-pink-600 transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://in.linkedin.com/company/avsitechnologies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
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
          MR AV Solutions
        </span>{" "}
        | Audio Visual & IT Solutions Company in Mumbai, India
      </div>

    </footer>
  );
};

export default Footer;