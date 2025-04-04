import React from 'react';
import './Header.css'; 

const Header = () => {
    return (
        <header className="container text-center header">

            <div className="row">
            <div className="col">
                <img src="/image-logo/page-2.jpeg"  className='img-fluid' alt="Logo" />
            </div>
            
            <nav className="col">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>

            <div className="col">
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
            </div>
            </div>

        </header>

    );
};

export default Header;
