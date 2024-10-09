import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex space-x-4">
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <svg
                  className="h-6 w-6 text-blue-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v8m-4-4h8m6 8a9 9 0 10-18 0 9 9 0 0018 0z"
                  />
                </svg>
                <span className="font-bold text-xl">Dr.</span>
              </a>
            </div>
          </div>

          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#about" className="py-5 px-3 text-gray-700 hover:text-gray-900">
              About Me
            </a>
            <a href="#services" className="py-5 px-3 text-gray-700 hover:text-gray-900">
              Services
            </a>
            <a href="#testimonials" className="py-5 px-3 text-gray-700 hover:text-gray-900">
              Testimonials
            </a>
            <a href="#blog" className="py-5 px-3 text-gray-700 hover:text-gray-900">
              Blog
            </a>
            <a href="#contact" className="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-600">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu md:hidden">
          <a href="#about" className="block py-2 px-4 text-sm hover:bg-gray-200">
            About Me
          </a>
          <a href="#services" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Services
          </a>
          <a href="#testimonials" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Testimonials
          </a>
          <a href="#blog" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Blog
          </a>
          <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
