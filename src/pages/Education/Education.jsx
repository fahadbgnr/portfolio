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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10">
        <Helmet>
          <title>
            Sheikh Fahad || Education
          </title>
        </Helmet>
        <h2
          className="text-3xl font-bold text-green-600 mb-10 text-center"
          data-aos="fade-down"
        >
          Education
        </h2>

        <div className="space-y-8 text-gray-700">
          {/* Bachelor Degree */}
          <div
            className="p-6 border border-gray-200 rounded-2xl shadow-md bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Bachelor of Computer Science and Engineering
            </h3>
            <p className="text-green-600 font-medium">
              Daffodil International University | DIU, Daffodil Smart City, Birulia 1216
            </p>
            <p>Graduation Date: June, 2024</p>
            <p>CGPA: 2.90 (out of 4.00)</p>
          </div>

          {/* HSC */}
          <div
            className="p-6 border border-gray-200 rounded-2xl shadow-md bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-green-600 font-medium">
              Dhaka Imperial College, Jahurul Islam City, Aftabnagar, Dhaka-1212
            </p>
            <p>Year of Completion: 2018</p>
            <p>Board: Dhaka</p>
            <p>GPA: 3.42 (out of 5.00)</p>
          </div>

          {/* Dakhil */}
          <div
            className="p-6 border border-gray-200 rounded-2xl shadow-md bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Dakhil (Equivalent to SSC)
            </h3>
            <p className="text-green-600 font-medium">
              Tamirul Millat Kamil Madrasah, Mirhazirbag, Kazibari, Jatrabari, Dhaka-1204
            </p>
            <p>Year of Completion: 2016</p>
            <p>Board: Madrasah</p>
            <p>GPA: 5.00 (out of 5.00)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
