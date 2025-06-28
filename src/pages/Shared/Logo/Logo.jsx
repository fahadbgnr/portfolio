import React from 'react';
import logo from '../../../assets/Logo.png'
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

const Logo = () => {
    return (
        <Link to='/'>
            <div>
                <Helmet>
                    <title>
                        Sheikh Fahad
                    </title>
                </Helmet>
                <img className='w-16' src={logo} alt="" />

            </div>
        </Link>
    );
};

export default Logo;