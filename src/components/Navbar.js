import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";
import { Menu, X } from "lucide-react"; // for hamburger icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-black/90 backdrop-blur-md shadow-lg"
      }`}
    >
      {/* 🔔 Announcement Bar */}
      <div className="bg-black border-b border-gray-800 py-2 px-4 text-center text-sm">
        <p className="text-white">
          Announcing our $14.5M Series A!{" "}
          <span className="text-purple-400 cursor-pointer hover:underline">
            Read the blog post {">"}
          </span>
        </p>
      </div>

      {/* 🌐 Main Navbar */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Openlayer" className="h-12 w-auto sm:h-14 md:h-16" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {["Product", "Resources", "Documentation", "Company", "Pricing"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-purple-400 transition-colors"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Login
          </a>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Request demo {">"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md shadow-lg border-t border-gray-800">
          <div className="flex flex-col items-center space-y-4 py-6">
            {["Product", "Resources", "Documentation", "Company", "Pricing"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white hover:text-purple-400 transition-colors text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <a
              href="#"
              className="text-white hover:text-purple-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </a>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Request demo {">"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
