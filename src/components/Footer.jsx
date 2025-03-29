import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaStethoscope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FaStethoscope className="w-8 h-8 text-cyan-500" />
            <span className="text-2xl font-bold text-cyan-500">AVSwasthya</span>
          </div>
          <p className="text-gray-600 text-sm">
            Experience personalized medical care from the comfort of your home.
          </p>
        </div>

   
        <div>
          <h3 className="font-bold text-cyan-900 mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Getting Started</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">FAQs</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Help Articles</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Report an Issue</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact Help Desk</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="font-bold text-cyan-900 mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Booking appointments</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Online consultation</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Prescriptions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Medicine Refills</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Medical Notes</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-bold text-cyan-900 mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Cookie Notice</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Cookie Preferences</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Trust Center</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div>
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            HealNet 2024 © All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
