import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ theme}) {

  return (
    <div className='navbar'>
      <img src={theme === 'light' ? "/assets/logo-black-def284cf.png" : "/assets/logo-black-def284cf.png"} alt="Logo" className="logo"/>

      <div className='nav-links'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img src={theme === 'light' ? "/assets/search-w.png" : "/assets/search-b.png"} alt="Search Icon" />
      </div>


    </div>
  );
}

export default Navbar;