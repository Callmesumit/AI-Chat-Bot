// components/Header.js
import React from 'react';
import { Bot } from 'lucide-react'; // Optional: You can use any icon library

const Header = ({ title, subtitle, actions }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md rounded-2xl mb-6">
      <div className="flex items-center space-x-4">
        <Bot className="w-8 h-8 text-indigo-600" />
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      </div>
      {actions && <div className="flex items-center space-x-2">{actions}</div>}
    </header>
  );
};

export default Header;
