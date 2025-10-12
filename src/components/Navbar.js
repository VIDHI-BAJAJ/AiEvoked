// src/components/navbar.js
import React, { useState, useEffect } from 'react';
import Logo from "../Images/Logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-black/90 backdrop-blur-md shadow-lg'}`}>
      {/* Announcement Bar */}
      <div className="bg-black border-b border-gray-800 py-2 px-4 text-center text-sm">
        <p className="text-white">
          Announcing our $14.5M Series A!{' '}
          <span className="text-purple-400 cursor-pointer hover:underline">Read the blog post {'>'}</span>
        </p>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="">
          </div>
          <Link to="/" className="flex items-center">
         <img 
            src= {Logo}
            alt="Openlayer" 
            className="h-16 w-auto"
          />
        </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-purple-400 transition-colors">Product</a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors">Resources</a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors">Documentation</a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors">Company</a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors">Pricing</a>
        </div>
        
        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white hover:text-purple-400 transition-colors">Login</a>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Request demo {'>'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;