import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white text-lg font-bold">Logo</a>
            <div className="hidden sm:flex sm:space-x-4 ml-4">
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <a
              href="/view-course"
              className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              View Course
            </a>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          <a href="/view-course" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center hover:bg-blue-700">View Course</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
