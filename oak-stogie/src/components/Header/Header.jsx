import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-background-color">
      <div className="container-fluid">
        <img src="/image-logo/page-2.jpeg" className="img-fluid img-logo" alt="Logo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-3">
            <li className="nav-item">
              <a className="nav-link nav-link-efeito-hover link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="/">Home</a>
            </li>

            {/* Dropdown de Products */}
            <li className="nav-item dropdown">
              <a className="nav-link nav-link-efeito-hover-products dropdown-toggle link-light link-underline-opacity-25" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/Produtos">Stogies</a></li>
                <li><a className="dropdown-item" href="/Acessorios">Accessories</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-link-efeito-hover link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-efeito-hover link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="/contact">Contact</a>
            </li>
          </ul>

          <div className="login-signup">
            <a href="/Login" className="btn btn-outline-light">Sign In</a>
            <a href="/Sign" className="btn btn-outline-light">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
