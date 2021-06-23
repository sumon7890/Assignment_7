import React from 'react';

import './Header.css'

const Header = () => {


    return (
        <div>
            <nav className="fixed-top">
                <ul className="Menu">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Team</a>
                    <a href="/">Reports</a>
                </ul>
            </nav>
        </div>
    );
};

export default Header;