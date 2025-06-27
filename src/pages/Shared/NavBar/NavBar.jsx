import React, { useState } from 'react';
import { Link } from 'react-router';
import { FiMenu, FiX } from "react-icons/fi";
import Logo from '../Logo/Logo';
import Sheikh_Fahad_CV from '../../../../public/Sheikh Fahad CV.pdf'
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
       <nav className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold"><Logo></Logo></div>
        <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/about" className="hover:text-green-600">About</Link>
          <Link to="/skills" className="hover:text-green-600">Skills</Link>
          <Link to="/projects" className="hover:text-green-600">Projects</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </div>
        <a
          href={Sheikh_Fahad_CV}
          download
          className="hidden md:inline-block bg-green-600 text-white font-semibold px-4 py-2 rounded hover:bg-green-700"
        >
          Resume
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-3 text-center text-gray-800 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <a
            href={Sheikh_Fahad_CV}
            download
            className="bg-green-600 text-white font-semibold px-4 py-2 rounded hover:bg-green-700"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
    );
};

export default NavBar;