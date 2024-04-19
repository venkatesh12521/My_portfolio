import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-semibold text-xl"></div>
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-300 cursor-pointer"><a href="#hero">Home</a></li>
          <li className="text-white hover:text-gray-300 cursor-pointer"><a href="#about">About</a></li>
          <li className="text-white hover:text-gray-300 cursor-pointer"><a href="#skills">Skills</a></li>
          <li className="text-white hover:text-gray-300 cursor-pointer"><a href="#services">Services</a></li>
          <li className="text-white hover:text-gray-300 cursor-pointer"><a href="#projects">Projects</a></li>
          <li className="text-white hover:text-gray-300 cursor-pointer"><a href="#timeline">Timeline</a></li>
          <li className="text-white hover:text-gray-300 cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
