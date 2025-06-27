import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center" data-aos="fade-down">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto text-gray-700 space-y-5 text-justify" data-aos="fade-up">
          <p>
            I'm <span className="font-semibold text-green-600">Sheikh Fahad</span>, a passionate web developer from Bangladesh with a deep love for clean code and creative design. I specialize in building fast, responsive, and accessible user interfaces using the latest frontend technologies.
          </p>
          <p>
            My journey into programming began in university, where I discovered a passion for building interactive applications and solving real-world problems through code.
          </p>
          <p>
            When I’m not coding, I enjoy playing cricket 🏏, exploring new tech trends, and watching educational content or reading about entrepreneurship.
          </p>
          <p className="font-medium text-green-600">
            I am always open to learning new technologies and excited to contribute to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
