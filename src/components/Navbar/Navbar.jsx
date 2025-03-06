import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ theme, setTheme }) {
  const toggle_mode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

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

      <img 
        onClick={toggle_mode} 
        src={theme === 'light' ? "/assets/night.png" : "/assets/day.png"}  
        alt="Toggle Theme"  
        className='toggle-icon' 
      />
    </div>
  );
}

export default Navbar;