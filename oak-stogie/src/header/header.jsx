import React from 'react';
import './Header.css'; // Assuming a CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/image-logo/page-2.jpeg" alt="Logo" />
            </div>
            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
            <div className="auth-links">
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
            </div>
        </header>
    );
};

export default Header;
