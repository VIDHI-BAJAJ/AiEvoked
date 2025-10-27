import React from 'react';
import { Link } from "react-router-dom";
import { FaTag } from "react-icons/fa";
import FixedFooter from './FixedFooter';


const Pricing = () => {
  return (
    <>
     <section className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-br from-slate-900 to-black text-white px-4">
      {/* Icon */}
      <div className="bg-green-100 p-4 rounded-full mb-6">
        <FaTag className="text-green-700 text-2xl" />
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-bold text-white mb-4">Master pricing</h1>

      {/* Subtext */}
      <p className="text-white text-lg max-w-xl mb-8">
        Track SKU-level pricing trends across localities and pin codes.
      </p>

      {/* Button */}
      <Link to="/contact">
        <button className="bg-[#7E22CE] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg  transition duration-300">
          Get Started for free
        </button>
      </Link>
    </section>
     <FixedFooter />
     </>
  );
};

export default Pricing;
