import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import projectData from '../../../public/projectData.json';
import { Helmet } from 'react-helmet';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 800 });
        const foundProject = projectData.find(p => p.id === id);
        setProject(foundProject);
    }, [id]);

    if (!project) return <div className="text-center py-20">Loading...</div>;

    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <Helmet>
                    <title>
                        Sheikh Fahad || ProjectDetails
                    </title>
                </Helmet>
                <div data-aos="fade-up" className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                    <h2 className="text-3xl font-bold text-green-600 mb-4">{project.title}</h2>
                    <p className="text-gray-700 mb-6">{project.description}</p>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">🔗 Links</h3>
                        <div className="flex gap-4 flex-wrap">
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Live Site</a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 underline">GitHub Repo</a>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">⚙️ Technologies</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {project.tech.map((tech, i) => <li key={i}>{tech}</li>)}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">✨ Features</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">⚠️ Challenges</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {project.challenges.map((challenge, i) => <li key={i}>{challenge}</li>)}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">🚀 Future Plans</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {project.future.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
