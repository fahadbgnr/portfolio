import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16" id="education">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <Helmet>
          <title>Sheikh Fahad</title>
        </Helmet>
        <h2
          className="text-3xl font-bold text-green-600 mb-10 text-center"
          data-aos="fade-down"
        >
          Education
        </h2>

        <div className="space-y-10 text-gray-700">
          {/* Bachelor Degree */}
          <div
            className="p-10 border border-gray-200 rounded-2xl shadow-md bg-white transition-all duration-300 ease-in-out"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Bachelor of Computer Science and Engineering
            </h3>
            <p className="text-green-600 font-medium mb-1">
              Daffodil International University | DIU, Daffodil Smart City, Birulia 1216
            </p>
            <p className="mb-1">Graduation Date: June, 2024</p>
            <p>CGPA: 2.90 (out of 4.00)</p>
          </div>

          {/* HSC */}
          <div
            className="p-10 border border-gray-200 rounded-2xl shadow-md bg-white transition-all duration-300 ease-in-out"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-green-600 font-medium mb-1">
              Dhaka Imperial College, Jahurul Islam City, Aftabnagar, Dhaka-1212
            </p>
            <p className="mb-1">Year of Completion: 2018</p>
            <p className="mb-1">Board: Dhaka</p>
            <p>GPA: 3.42 (out of 5.00)</p>
          </div>

          {/* Dakhil */}
          <div
            className="p-10 border border-gray-200 rounded-2xl shadow-md bg-white transition-all duration-300 ease-in-out"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Dakhil (Equivalent to SSC)
            </h3>
            <p className="text-green-600 font-medium mb-1">
              Tamirul Millat Kamil Madrasah, Mirhazirbag, Kazibari, Jatrabari, Dhaka-1204
            </p>
            <p className="mb-1">Year of Completion: 2016</p>
            <p className="mb-1">Board: Madrasah</p>
            <p>GPA: 5.00 (out of 5.00)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
