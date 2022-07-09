import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

const Navbar = () => {
  return (
    <div className="portfolio__navbar">
        <div className="portfolio__navbar-links">
          <div className="portfolio__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="portfolio__navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About Me</a></p>
            <p><a href="#projects">Projects</a></p>
            <p><a href="#experience">Work Experience</a></p>
            <p><a href="#educaion">Education</a></p>
            <p><a href="#contact">Contact Me</a></p>
          </div>
        </div>
    </div>
  )
}

export default Navbar