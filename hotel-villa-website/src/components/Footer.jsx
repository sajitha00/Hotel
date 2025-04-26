import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4 w-full fixed bottom-0 z-50">
      <div className="w-full flex items-center justify-between px-6 relative">
        <div className="flex-shrink-0 text-white font-bold text-sm md:text-lg tracking-wide">
          <Link to="/">Paradise Hotel</Link>
        </div>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4 text-xs md:text-sm">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/about" className="hover:text-white">
            About Us
          </Link>
          <Link to="/services" className="hover:text-white">
            Services
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact Us
          </Link>
        </div>
        <div className="hidden md:flex flex-shrink-0 text-xs md:text-sm text-right">
          © {new Date().getFullYear()} Paradise Hotel
        </div>

        <div className="flex flex-col md:hidden w-full items-center text-xs space-y-2 mt-2">
          <div className="flex justify-center flex-wrap gap-2">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>
            <Link to="/services" className="hover:text-white">
              Services
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact Us
            </Link>
          </div>
          <div className="text-[10px]">© {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
