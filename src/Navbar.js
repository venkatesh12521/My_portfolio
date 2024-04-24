import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-yellow-400 py-6 relative">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <div className="text-white font-semibold text-xl">
          {/* You can add any logo or text here */}
          
        </div>
        <button
          className="md:hidden text-white focus:outline-none absolute top-0 right-0 mt-4 mr-4"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>
      {/* Links */}
      <ul
        className={`${
          isMenuOpen ? 'flex flex-col md:flex-row justify-center items-center' : 'hidden md:flex'
        } md:flex md:ml-96 md:pl-96 space-y-4 md:space-y-0 md:space-x-8`}
      >
        <li className="text-white hover:text-gray-300 cursor-pointer"><a href="#hero" onClick={toggleMenu}>Home</a></li>
        <li className="text-white hover:text-gray-300 cursor-pointer"><a href="#about" onClick={toggleMenu}>About</a></li>
        <li className="text-white hover:text-gray-300 cursor-pointer"><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li className="text-white hover:text-gray-300 cursor-pointer"><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li className="text-white hover:text-gray-300 cursor-pointer"><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li className="text-white hover:text-gray-300 cursor-pointer"><a href="#timeline" onClick={toggleMenu}>Timeline</a></li>
        <li className="text-white hover:text-gray-300 cursor-pointer"><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
