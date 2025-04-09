import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-3 text-center lg:text-left">
        
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-400">
            We are committed to providing the best products and services to our customers. 
            Your satisfaction is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/products" className="hover:text-gray-300">Products</a></li>
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info and Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Connect with Us</h2>
          <p className="flex items-center gap-2">
            <FaPhone /> <span>+91 964-456-7890</span>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope /> <span>support@yourcompany.com</span>
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-4 text-2xl">
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>© All Rights Reserved 2025. BINKEYIT.</p>
      </div>
    </footer>
  );
};

export default Footer;
