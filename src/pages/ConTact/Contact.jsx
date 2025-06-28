import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Contact = () => {
    const [formData, setFormData] = useState({
        subject: "",
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

        Swal.fire({
            icon: "success",
            title: "Message sent!",
            text: "Thank you for contacting me. I will get back to you soon.",
            confirmButtonColor: "#22c55e",
        });

        setFormData({ subject: "", message: "" });
    };

    return (
        <section id="contact" className="py-20 px-4 bg-white max-w-6xl mx-auto">
            <Helmet>
                <title>
                    Sheikh Fahad
                </title>
            </Helmet>
            <h1
                className="text-4xl font-bold text-center text-green-600 mb-16"
                data-aos="fade-down"
            >
                Contact
            </h1>

            <div
                className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10 gap-10 md:gap-12"
                data-aos="fade-up"
            >
                {/* Left: Contact Info */}
                <div className="md:w-1/2 flex flex-col justify-center space-y-8 md:border-r md:border-gray-300 md:pr-10 pr-0 border-0">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-4 md:mb-6">
                        Contact Info
                    </h2>
                    <p className="text-lg text-gray-700">
                        📧 Email:{" "}
                        <a
                            href="mailto:aminulislamfahad1@gmail.com"
                            className="text-green-600 underline hover:text-green-700 transition"
                        >
                            aminulislamfahad1@gmail.com
                        </a>
                    </p>
                    <p className="text-lg text-gray-700">
                        📞 Phone:{" "}
                        <a
                            href="tel:+8801959792191"
                            className="text-green-600 underline hover:text-green-700 transition"
                        >
                            +8801959792191
                        </a>
                    </p>
                </div>

                {/* Right: Email Form */}
                <div className="md:w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 transition"
                        />
                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 transition resize-none"
                        />
                        <button
                            type="submit"
                            className="w-full py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold text-lg"
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
