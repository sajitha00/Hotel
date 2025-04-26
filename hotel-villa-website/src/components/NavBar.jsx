import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-200 shadow-md p-4 sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between w-full relative">
        <div className="flex-shrink-0 pl-6">
          <Logo />
        </div>
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-gray-700 font-medium">
          <Link
            to="/"
            className="px-4 py-2 rounded-md hover:bg-orange-100 hover:text-orange-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 rounded-md hover:bg-orange-100 hover:text-orange-500 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="px-4 py-2 rounded-md hover:bg-orange-100 hover:text-orange-500 transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-md hover:bg-orange-100 hover:text-orange-500 transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        <div className="hidden md:flex pr-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button*/}
        <div className="md:hidden pr-6">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link
            to="/"
            onClick={toggleMenu}
            className="px-4 py-2 rounded-md hover:bg-orange-100 hover:text-orange-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="px-4 py-2 rounded-md hover:bg-orange-100 hover:text-orange-500 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/services"
            onClick={toggleMenu}
            className="px-4 py-2 rounded-md hover:bg-orange-100 hover:text-orange-500 transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="px-4 py-2 rounded-md hover:bg-orange-100 hover:text-orange-500 transition duration-300"
          >
            Contact Us
          </Link>

          <button
            onClick={toggleMenu}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
