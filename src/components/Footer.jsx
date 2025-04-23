// components/Footer.js
import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">ChatGPT Clone</h2>
          <p className="text-sm">
            Your personal AI assistant powered by modern web technologies. Built with React, Node, and Tailwind.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-md font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-md font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Docs</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white text-md font-semibold mb-3">Connect with Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} ChatGPT Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
