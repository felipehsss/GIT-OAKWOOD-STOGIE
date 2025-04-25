import React from 'react';
import './Header.css'; 

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-background-color ">
        <div className="container-fluid">
         <img src="/image-logo/page-2.jpeg"  className='img-fluid img-logo' alt="Logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex gap-3">
              <a className='nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href="/">Home</a>
              <a className='nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href="/about">About</a>
              <a className='nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href="/contact">Contact</a>
              </li>
            </ul>
            
            <div className='d-flex gap-3'>
            <a href="/Login" className='btn btn-outline-light'>Sign In</a>
            <a href="/Sign" className='btn btn-outline-light'>Sign Up</a>
            </div>
          </div>
        </div>
      </nav>

    );
};

export default Header;
