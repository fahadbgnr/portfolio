import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router'; 
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../Logo/Logo';
import Sheikh_Fahad_CV from '../../../../public/Sheikh Fahad CV.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // dynamic navlink styling function
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-green-600 font-semibold'
      : 'hover:text-green-600 transition';

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50 shadow-md" data-aos="fade-down">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/aboutMe" className={linkClass}>About</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/education" className={linkClass}>Education</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Resume Button */}
        <a
          href={Sheikh_Fahad_CV}
          download
          className="hidden md:inline-block bg-green-600 text-white font-semibold px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden flex flex-col space-y-3 mt-3 text-center text-gray-800 font-medium"
          data-aos="fade-down"
        >
          <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClass}>Home</NavLink>
          <NavLink to="/aboutMe" onClick={() => setIsOpen(false)} className={linkClass}>About</NavLink>
          <NavLink to="/skills" onClick={() => setIsOpen(false)} className={linkClass}>Skills</NavLink>
          <NavLink to="/education" onClick={() => setIsOpen(false)} className={linkClass}>Education</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)} className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={linkClass}>Contact</NavLink>
          <a
            href={Sheikh_Fahad_CV}
            download
            className="bg-green-600 text-white font-semibold px-4 py-2 rounded hover:bg-green-700 transition mx-auto w-[150px]"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
