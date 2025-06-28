import React from 'react';
import Banner from '../../Banner/Banner';
import { Helmet } from 'react-helmet';
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../../Skills/Skills';
import Education from '../../Education/Education';
import Projects from '../../Projects/Projects';
import Contact from '../../ConTact/Contact';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Sheikh Fahad || Home
                </title>
            </Helmet>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;