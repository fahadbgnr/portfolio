import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Pic from '../../assets/pic.png'
import Sheikh_Fahad_CV from '../../../public/Sheikh Fahad CV.pdf'
const Banner = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-12 gap-10">
            <div className="md:w-1/2 space-y-4 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">Sheikh Fahad</h1>
                <h2 className="text-xl sm:text-2xl text-green-600 font-semibold">Web Developer</h2>
                <p className="text-gray-600 max-w-md mx-auto md:mx-0">
                    Hello! I am from Bangladesh, I make beautiful web apps!
                </p>
                <div className="flex justify-center md:justify-start space-x-4 text-green-600 text-2xl">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
                <a
                    href={Sheikh_Fahad_CV}
                    className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700"
                    download
                >
                    Resume
                </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="w-52 h-52 sm:w-64 sm:h-64"><img className='rounded-2xl' src={Pic} alt="" /> </div>
            </div>
        </section>
    );
};

export default Banner;