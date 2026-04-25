import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition font-medium ${
      isActive
        ? "text-red-600 border-b-2 border-red-600"
        : "text-slate-800 hover:text-blue-800"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" role="banner">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo (SEO optimized) */}
        <Link 
          to="/" 
          className="flex items-center gap-2"
          aria-label="MR AV Solutions Home"
        >
          <img
            src="/MRAV.png"
            alt="MR AV Solutions - Audio Visual and IT Solutions Company"
            className="h-16 w-auto"
            loading="eager"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex items-center gap-8 text-sm"
          aria-label="Main Navigation"
        >
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/solutions" className={navLinkClass}>Solutions</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* Mobile Menu Button (accessible) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-900"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div id="mobile-menu" className="md:hidden bg-white border-t">
          <nav 
            className="flex flex-col px-6 py-4 space-y-4 text-sm"
            aria-label="Mobile Navigation"
          >
            <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkClass}>About Us</NavLink>
            <NavLink to="/services" onClick={() => setOpen(false)} className={navLinkClass}>Services</NavLink>
            <NavLink to="/solutions" onClick={() => setOpen(false)} className={navLinkClass}>Solutions</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkClass}>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;