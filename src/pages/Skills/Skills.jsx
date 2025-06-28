import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const frontend = ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'React', 'Next.js', 'Bootstrap'];
  const backend = ['Express', 'MongoDB', 'Firebase'];
  const tools = ['Git'];

  const renderBadges = (skills) =>
    skills.map((skill, index) => (
      <span
        key={index}
        className="
          bg-green-100 text-green-700 
          px-4 py-1 rounded-full font-medium text-sm shadow-sm
          cursor-pointer
          transition transform duration-300
          hover:bg-green-600 hover:text-white
          hover:scale-110
          "
      >
        {skill}
      </span>
    ));

  return (
    <section className="py-16" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <Helmet>
          <title>
            Sheikh Fahad
          </title>
        </Helmet>
        <h2 className="text-3xl font-bold text-green-600 mb-10 text-center" data-aos="fade-down">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Frontend */}
          <div data-aos="fade-up" className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Frontend</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {renderBadges(frontend)}
            </div>
          </div>

          {/* Backend */}
          <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Backend</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {renderBadges(backend)}
            </div>
          </div>

          {/* Tools */}
          <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {renderBadges(tools)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
