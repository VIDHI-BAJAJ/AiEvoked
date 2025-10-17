import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-br from-slate-900 to-black text-white py-12 px-6"
      style={{ backgroundColor: "#080412" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
        
        {/* 1️⃣ Logo & Description */}
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <img src={Logo} alt="Logo" className="h-14 w-auto" />
          </Link>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Empowering innovation with AI-driven solutions that help businesses
            scale faster, smarter, and more efficiently.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-sm text-gray-400 hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/product" className="text-sm text-gray-400 hover:text-blue-400 transition">Product</Link></li>
            <li><Link to="/pricing" className="text-sm text-gray-400 hover:text-blue-400 transition">Pricing</Link></li>
            <li><Link to="/contactus" className="text-sm text-gray-400 hover:text-blue-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* 3️⃣ Policy & Legal */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Legal & Policy</h3>
          <ul className="space-y-3">
            <li><Link to="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition">Terms of Service</Link></li>
            <li><Link to="/cookies" className="text-sm text-gray-400 hover:text-blue-400 transition">Cookie Policy</Link></li>
            <li><Link to="/security" className="text-sm text-gray-400 hover:text-blue-400 transition">Security</Link></li>
            <li><Link to="/disclaimer" className="text-sm text-gray-400 hover:text-blue-400 transition">Disclaimer</Link></li>
          </ul>
        </div>

        {/* 4️⃣ Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <i className="fas fa-phone text-blue-400 mt-1"></i>
              <div>
                <h4 className="text-sm font-medium text-gray-300">Phone</h4>
                <a href="tel:+15551234567" className="text-sm text-gray-400 hover:text-blue-400 transition">
                  +1 (555) 123-4567
                </a>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <i className="fas fa-envelope text-blue-400 mt-1"></i>
              <div>
                <h4 className="text-sm font-medium text-gray-300">Email</h4>
                <a href="mailto:vidhibajaj1401@gmail.com" className="text-sm text-gray-400 hover:text-blue-400 transition">
                  vidhibajaj1401@gmail.com
                </a>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <i className="fas fa-map-marker-alt text-blue-400 mt-1"></i>
              <div>
                <h4 className="text-sm font-medium text-gray-300">Location</h4>
                <p className="text-sm text-gray-400">
                  123 Tech Avenue<br />San Francisco, CA 94107
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AuraOS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
