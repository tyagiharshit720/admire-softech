import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path ? 'bg-blue-800 text-white' : 'text-blue-200 hover:bg-blue-800 hover:text-white';
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-indigo-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and main menu */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white font-bold text-2xl">
                <Link to="/" className="flex items-center">
                  <span className="text-amber-400">Admire</span>
                  <span className="text-white">Softech</span>
                </Link>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  to="/" 
                  className={`px-4 py-2 rounded-md text-md font-medium transition duration-300 ${isActive('/')}`}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`px-4 py-2 rounded-md text-md font-medium transition duration-300 ${isActive('/about')}`}
                >
                  About Us
                </Link>
                <Link 
                  to="/services" 
                  className={`px-4 py-2 rounded-md text-md font-medium transition duration-300 ${isActive('/services')}`}
                >
                  Services
                </Link>
                <Link 
                  to="/portfolio" 
                  className={`px-4 py-2 rounded-md text-md font-medium transition duration-300 ${isActive('/portfolio')}`}
                >
                  Portfolio
                </Link>

                <Link 
              to="/career" 
              className={`block px-4 py-3 rounded-md text-lg font-medium transition duration-300 ${isActive('/contact')}`}
              onClick={() => setIsOpen(false)}
            >
              Career
            </Link>
                <Link 
                  to="/contact" 
                  className={`px-4 py-2 rounded-md text-md font-medium transition duration-300 ${isActive('/contact')}`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Button for desktop */}
          <div className="hidden md:block">
            <Link 
              to="/get-quote" 
              className="ml-4 bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md text-md font-medium transition duration-300 shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-800 focus:outline-none transition duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-4 py-3 rounded-md text-lg font-medium transition duration-300 ${isActive('/')}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-4 py-3 rounded-md text-lg font-medium transition duration-300 ${isActive('/about')}`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={`block px-4 py-3 rounded-md text-lg font-medium transition duration-300 ${isActive('/services')}`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className={`block px-4 py-3 rounded-md text-lg font-medium transition duration-300 ${isActive('/portfolio')}`}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className={`block px-4 py-3 rounded-md text-lg font-medium transition duration-300 ${isActive('/contact')}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link 
              to="/career" 
              className={`block px-4 py-3 rounded-md text-lg font-medium transition duration-300 ${isActive('/contact')}`}
              onClick={() => setIsOpen(false)}
            >
              Career
            </Link>

            
            <Link 
              to="/get-quote" 
              className="bg-amber-500 hover:bg-amber-600 text-white block px-4 py-3 rounded-md text-lg font-medium text-center mt-2 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;