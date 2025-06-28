import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import dragonNewsPic from '../../assets/DragonNews/Dragon news.PNG';
import dragonNewsPic1 from '../../assets/DragonNews/Dragon news 1.PNG';
import dragonNewsPic2 from '../../assets/DragonNews/dragon news 2.PNG';

import careerCode from '../../assets/CarearCode/carear-code.PNG';
import careerCode1 from '../../assets/CarearCode/carear-code-1.PNG';
import careerCode2 from '../../assets/CarearCode/carear-code-3.PNG';


import freelanceTask from '../../assets/freelanceTask/freelance-task.PNG';
import freelanceTask1 from '../../assets/freelanceTask/freelance-task 1.PNG';
import freelanceTask2 from '../../assets/freelanceTask/freelance-task 2.PNG';

// Icons
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiFirebase, SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si';
import { Helmet } from 'react-helmet';

const techIcons = {
    HTML: <FaHtml5 className="text-orange-500 text-xl" />,
    CSS: <FaCss3Alt className="text-blue-500 text-xl" />,
    JavaScript: <SiJavascript className="text-yellow-400 text-xl" />,
    React: <FaReact className="text-blue-400 text-xl" />,
    "TailwindCSS": <SiTailwindcss className="text-cyan-500 text-xl" />,
    Firebase: <SiFirebase className="text-yellow-500 text-xl" />,
    "Next.js": <SiNextdotjs className="text-black text-xl" />,
    MongoDB: <SiMongodb className="text-green-600 text-xl" />,
    Express: <SiExpress className="text-gray-800 text-xl" />,
    Nodejs: <FaNodeJs className="text-green-500 text-xl" />,
};

const projects = [
    {
        id: 1,
        title: "freelancer-client-task",
        description: "TaskHive is a freelance task marketplace where users can post, browse, and manage tasks efficiently.",
        images: [freelanceTask, freelanceTask1, freelanceTask2],
        techStack: ["React", "JavaScript", "MongoDB", "Next.js"],
        liveLink: "https://freelance-task-app.web.app",
        githubLink: "https://github.com/fahadbgnr/freelancer-client-task",
    },
    {
        id: 2,
        title: "career-code-client",
        description: "Career Code is an interactive job-hunting web app that allows users to browse job categories, view detailed job descriptions, apply for jobs, and manage applications. The platform also supports routing, filtering, and smooth user experience with Firebase authentication and real-time data rendering.",
        images: [careerCode, careerCode1, careerCode2],
        techStack: ["React", "JavaScript", "MongoDB", "Next.js"],
        liveLink: " https://career-code-be114.web.app",
        githubLink: "https://github.com/fahadbgnr/career-code-client",
    },
    {
        id: 3,
        title: "Dragon News",
        description:
            "Dragon News is a news web application where users can browse and read categorized news articles, log in using Firebase Authentication, and enjoy a smooth user experience with dynamic content loading and routing. The application is mobile-responsive and optimized for modern browsers.",
        images: [dragonNewsPic, dragonNewsPic1, dragonNewsPic2],
        techStack: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://dragon-news-3dfae.web.app",
        githubLink: "https://github.com/fahadbgnr/dragon-news",
    },
];

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="projects" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <Helmet>
                    <title>
                        Sheikh Fahad || Projects
                    </title>
                </Helmet>
                <h2
                    className="text-4xl font-bold text-center text-green-600 mb-16"
                    data-aos="fade-down"
                >
                    Projects
                </h2>

                <div className="space-y-14">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="flex flex-col md:flex-row items-center gap-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            {/* Carousel */}
                            <div className="w-full md:w-[360px] rounded-xl overflow-hidden">
                                <Carousel
                                    showThumbs={false}
                                    showStatus={false}
                                    infiniteLoop
                                    autoPlay
                                    interval={3000}
                                >
                                    {project.images.map((img, i) => (
                                        <div key={i}>
                                            <img
                                                src={img}
                                                alt={`Project ${project.id} Image ${i + 1}`}
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600">{project.description}</p>

                                {/* Tech Stack with icons + hover effect */}
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {project.techStack.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 text-sm text-gray-700 transition-all duration-200 hover:shadow-md hover:scale-105 hover:bg-gray-100 cursor-default"
                                        >
                                            {techIcons[tech] || null}
                                            <span>{tech}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4 pt-4">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                                    >
                                        Live
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                                    >
                                        GitHub
                                    </a>
                                    <Link
                                        to={`/projectDetails/${project.id}`}
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
