import React from 'react';
import Banner from '../../Banner/Banner';
import { Helmet } from 'react-helmet';
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../../Skills/Skills';
import Education from '../../Education/Education';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Sheikh Fahad
                </title>
            </Helmet>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
        </div>
    );
};

export default Home;