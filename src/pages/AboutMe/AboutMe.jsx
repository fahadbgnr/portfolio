import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Helmet>
          <title>
            Sheikh Fahad
          </title>
        </Helmet>
        <h2
          className="text-4xl font-bold text-green-600 mb-12 text-center"
          data-aos="fade-down"
        >
          About Me
        </h2>

        <div
          className="max-w-3xl mx-auto text-gray-800 space-y-6 leading-relaxed text-justify"
          data-aos="fade-up"
        >
          <p>
            I'm <span className="font-semibold text-green-600">Sheikh Fahad</span>, a passionate frontend developer from Bangladesh with a strong interest in crafting clean, responsive, and engaging user interfaces using modern web technologies.
          </p>
          <p>
            My programming journey began during university, where I quickly developed a deep enthusiasm for building interactive apps and solving real-world problems with code.
          </p>
          <p>
            Outside of coding, I enjoy playing cricket 🏏, staying updated with the latest tech trends, and learning about entrepreneurship and innovation through books and videos.
          </p>
          <p className="text-green-600 font-medium">
            I'm a fast learner and always open to exploring new tools, frameworks, and opportunities to grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
