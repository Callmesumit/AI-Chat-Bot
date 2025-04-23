import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full mt-0 bg-gradient-to-r from-blue-500 to-blue-300 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-2 py-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">🤖 MindTalk</h1>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="/" className="text-black hover:text-red-600 transition">Home</a>
          <a href="/contact" className="text-black hover:text-red-600 transition">Contact</a>
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden text-black focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-medium">
          <a href="#home" className="block text-black hover:text-red-600 transition">Home</a>
          <a href="#contact" className="block text-black hover:text-red-600 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
