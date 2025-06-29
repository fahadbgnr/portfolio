import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Pic from '../../assets/pic.png';
import { Helmet } from 'react-helmet';

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-12">
      <Helmet>
        <title>Sheikh Fahad</title>
      </Helmet>

      <div
        className="w-full min-h-[80vh] rounded-2xl shadow-lg px-4 sm:px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-center gap-10"
        data-aos="zoom-in"
      >
        {/* Text Section */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">Sheikh Fahad</h1>
          <h2 className="text-xl sm:text-2xl text-green-600 font-semibold">Web Developer</h2>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0">
            Hello! I am from Bangladesh, I make beautiful web apps!
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4 text-green-600 text-2xl">
            <a href="https://github.com/fahadbgnr" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sheikh-fahad-956777357" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>

          {/* Resume Button with Icon */}
          <a
            href="/SheikhFahadCV.pdf"
            className="inline-flex items-center gap-2 mt-4 bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition"
            download
          >
            <FaDownload className="text-white text-lg" />
            Resume
          </a>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center ml-6 sm:ml-10 md:ml-16" data-aos="fade-left">
          <img
            className="w-52 h-52 sm:w-64 sm:h-64 object-cover rounded-2xl shadow-md"
            src={Pic}
            alt="Sheikh Fahad"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
