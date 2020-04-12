import React from 'react';
import logo from '../../assets/img/img-logo.png'
import './index.css'
const Header = () => {
  return (
      <nav className="navbar-expand-md navbar fixed-top" id="navbar">
        <a className="navbar-brand" data-scroll="" href="/">
        <img className="img-fluid" src={logo} alt="Logo"/>
        </a>
        <span className="navbar-menu ml-auto"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              role="button"
        >
          <span className="btn-line"/>
        </span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item pr-4"><a className="nav-link" href="about">About</a></li>
            <li className="nav-item pr-4"><a className="nav-link" href="resume">Resume</a></li>
            {/*<li className="nav-item pr-4"><a className="nav-link" href="portfolio">Portfolio</a></li>*/}
            {/*<li className="nav-item pr-4"><a className="nav-link" href="blog">Blog</a></li>*/}
            <li className="nav-item"><a className="nav-link" href="contact">Contact</a></li>
          </ul>
        </div>
      </nav>
  )
};

export default Header;
