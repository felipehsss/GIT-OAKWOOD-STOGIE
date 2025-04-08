import React from 'react';
import './Header.css'; 

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
         <img src="/image-logo/page-2.jpeg"  className='img-fluid img-logo' alt="Logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className='nav-link' href="/">Home</a>
              </li>
              <li className="nav-item">
              <a className='nav-link' href="/about">About</a>
              </li>
              <li className="nav-item">
              <a className='nav-link' href="/contact">Contact</a>
              </li>
              <li className="nav-item">
              <a className='nav-link' href="/produtos">Produtos</a>
              </li>
              
             
            </ul>
            <a href="/login" className='btn btn-outline-light'>Login</a>
            <a href="/signup" className='btn btn-outline-light'>Sign Up</a>
          </div>
        </div>
      </nav>

    );
};

export default Header;
