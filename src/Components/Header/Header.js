import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <a href="/">HOME</a>
                <a href="/reviews">REVIEWS</a>
                <a href="dashboard">DASHBOARD</a>
                <a href="blogs">BLOGS</a>
                <a href="about">ABOUT</a>
            </nav>
        </div>
    );
};

export default Header;