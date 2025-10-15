import React from "react";
import Logo from '../Images/Logo.png';
import { Link} from 'react-router-dom';

const Footer = () => {

return (
<div className="bg-gradient-to-br from-slate-900 to-black text-white" style={{ backgroundColor: '#080412' }}>
 {/* Footer */}
 <footer className="border-t border-gray-100 px-6 py-12">
  <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
  <div>
   <div className=" font-bold text-xl mb-6">
      <Link to="/" className="flex items-center">
                       <img 
                          src= {Logo}
                          alt="Openlayer" 
                          className="h-16 w-auto"
                        />
                      </Link>
            </div>
           
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600">All systems operational</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white hover:text-purple-600">LLM observability</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">LLM evaluation</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">ML observability</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">ML evaluation</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Data quality monitoring</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">AI governance & compliance</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Other products</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Blog</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Changelog</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Customers</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Glossary</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Pricing</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Discord</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Request demo</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Getting started</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">API reference</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">SDKs</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">CLI</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Integrations</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Templates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white hover:text-purple-600">About us</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Manifesto</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Careers</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Security</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Terms of service</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Privacy policy</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Cookie policy</a></li>
              <li><a href="#" className="text-sm text-white hover:text-purple-600">Responsible disclosure</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;