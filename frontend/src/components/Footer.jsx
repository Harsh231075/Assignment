import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

          {/* All Solution Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              All <span className="text-blue-400">Solution</span>
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Professional accounting and tax services. Your trusted partner for GST registration, tax filing, and comprehensive business compliance solutions.
            </p>

            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold text-white">GST No:</span> 07AHVPR3818B1Z3
              </div>
              <div>
                <span className="font-semibold text-white">UDYAM No:</span> UDYAM-DL-09-0029197
              </div>
              <div>
                <span className="font-semibold text-white">UPI:</span> ALLSOLUTION8152@SBI
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Quick Links
              <div className="w-12 h-0.5 bg-blue-400 mt-2"></div>
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Contact Us
              <div className="w-12 h-0.5 bg-blue-400 mt-2"></div>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    S-17/10, Jogabai Ext, Jamia Nagar,<br />
                    Okhla, New Delhi - 110025, India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+919810028152" className="text-gray-300 hover:text-white transition duration-300">
                  +91 98100 28152
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:allsolution8152@gmail.com" className="text-gray-300 hover:text-white transition duration-300">
                  allsolution8152@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">

            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center lg:text-left">
              © 2025 All Solution - Professional Accounting Services. All rights reserved.
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition duration-300">
                Terms of Service
              </Link>
              <Link to="/refund-policy" className="text-gray-400 hover:text-white transition duration-300">
                Refund Policy
              </Link>
            </div>
          </div>

          {/* Powered By */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 mb-2">Powered by</p>
            <div className="flex justify-center">
              <img src="/logo.png" alt="Powered by" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;