import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message sent!",
          text: "Thank you for contacting me. I will get back to you soon.",
          confirmButtonColor: "#22c55e",
        });
        setFormData({ name: "", email: "", title: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again.",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white max-w-6xl mx-auto">
      <Helmet><title>Sheikh Fahad</title></Helmet>
      <h1 className="text-4xl font-bold text-center text-green-600 mb-16" data-aos="fade-down">
        Contact
      </h1>

      <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10 gap-10 md:gap-12" data-aos="fade-up">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-8 md:border-r md:border-gray-300 md:pr-10 pr-0 border-0">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4 md:mb-6">Contact Info</h2>
          <p className="text-lg text-gray-700">
            📧 Email:{" "}
            <a href="mailto:aminulislamfahad1@gmail.com" className="text-green-600 underline hover:text-green-700 transition">
              aminulislamfahad1@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-700">
            📞 Phone:{" "}
            <a href="tel:+8801959792191" className="text-green-600 underline hover:text-green-700 transition">
              +8801959792191
            </a>
          </p>
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 transition"
            />
            <input
              type="text"
              name="title"
              placeholder="Subject"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 transition"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 transition resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold text-lg cursor-pointer"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
