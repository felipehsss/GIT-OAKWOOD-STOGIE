import React from 'react';
import './Header.css'; 

const Header = () => {
    return (
        <header className="container-fluid text-center header">

            <div className="row">
            <div className="col ">
                <img src="/image-logo/page-2.jpeg"  className='img-fluid' alt="Logo" />
            </div>
            
            <nav className="col ">
                <a className='nav-link' href="/Home">Home</a>
                <a className='nav-link' href="/about">About</a>
                <a className='nav-link' href="/contact">Contact</a>
                <a className='nav-link' href="/produtos">Produtos</a>
            </nav>

            <div className="col ">
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
            </div>
            </div>

        </header>

    );
};

export default Header;
