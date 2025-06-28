import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/Shared/NavBar/NavBar';
import { Helmet } from 'react-helmet';

const RootLayout = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Sheikh Fahad
                </title>
            </Helmet>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;