import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-amber-400">Admire</span>
              <span>Softech</span>
            </h3>
            <p className="text-blue-200">
              Innovative software solutions to transform your business and drive growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-white transition">Services</Link></li>
              <li><Link to="/portfolio" className="text-blue-200 hover:text-white transition">Portfolio</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/web-development" className="text-blue-200 hover:text-white transition">Web Development</Link></li>
              <li><Link to="/services/mobile-apps" className="text-blue-200 hover:text-white transition">Mobile Apps</Link></li>
              <li><Link to="/services/ui-ux" className="text-blue-200 hover:text-white transition">UI/UX Design</Link></li>
              <li><Link to="/services/cloud" className="text-blue-200 hover:text-white transition">Cloud Solutions</Link></li>
              <li><Link to="/services/consulting" className="text-blue-200 hover:text-white transition">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic space-y-2">
              <p className="text-blue-200">
                <i className="fas fa-map-marker-alt mr-2"></i>
                123 Tech Park, Bangalore, India
              </p>
              <p className="text-blue-200">
                <i className="fas fa-phone-alt mr-2"></i>
                +91 9876543210
              </p>
              <p className="text-blue-200">
                <i className="fas fa-envelope mr-2"></i>
                info@admiresoftech.com
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-6 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} Admire Softech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;