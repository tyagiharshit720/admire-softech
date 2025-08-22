import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';

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

            {/* Social Icons */}
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-amber-400 transition">
                 <Link to="https://www.facebook.com/people/Admire-Holidays/100090809996697/?mibextid=ZbWKwL" className="text-gray-400 hover:text-amber-400 text-xl transition-colors">
                <FaFacebook />
              </Link>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-amber-400 transition">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-amber-400 transition">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-amber-400 transition">
                <i className="fab fa-instagram text-lg"></i>
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
              <li><Link to="/services" className="text-blue-200 hover:text-white transition">Web Development</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-white transition">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-white transition">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-white transition">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-blue-200 hover:text-white transition">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic space-y-3 text-blue-200">
              <p className="flex items-start">
                <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                <a
                  href="https://www.google.com/maps?q=34,+Sewak+Park,+Dwarka+More+Metro,+Near+Pillar+No-772,+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition"
                >
                  34, Sewak Park, Dwarka More Metro, Near Pillar No-772, New Delhi
                </a>
              </p>
              <p className="flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>
                <a href="tel:18001214252" className="hover:text-yellow-500 transition">
                  1800-121-4252 
                </a>
              </p>
              <p className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <a href="mailto:info@admiresoftech.com" className="hover:text-yellow-500 transition">
                  info@admiresoftech.com
                </a>
              </p>
            </address>

            {/* Legal Links */}
            <ul className="flex space-x-2 mt-4">
              <li>
                <Link to="/privacy-policy" className="text-blue-200 hover:text-yellow-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <span className="text-yellow-400">|</span>
              <li>
                <Link to="/terms-and-conditions" className="text-blue-200 hover:text-yellow-400 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            {/* Optional bottom social icons (visible on small screens) */}
            <div className="flex space-x-4 mt-4 md:hidden">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-amber-400 transition">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-amber-400 transition">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-amber-400 transition">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-amber-400 transition">
                <i className="fab fa-instagram text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-800 pt-6 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Admire Softech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
