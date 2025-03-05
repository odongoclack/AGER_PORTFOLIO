import React from 'react';
import './Navbar.css';
import {Link } from 'react-router-dom';



import logo_light from '../../assets/logo-black-def284cf.png'
import logo_dark from '../../assets/logo-black-def284cf.png'
import search_icon_light  from '../../assets/search-w.png' 
import search_icon_dark  from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import { Router } from 'react-router-dom';



function Navbar({theme,setTheme}) {

  const toggle_mode= ()=>{
    theme=='light'? setTheme('dark') : setTheme('light');
  }
  return (
    <div className='navbar'>
        <img src={theme == 'light' ? logo_light : logo_dark} alt="" className="logo"/>
      <div className='nav-links'>
      <ul>
         <li><a href="#home" >Home</a></li>
         <li><a href="#about" >About</a></li>
         <li><a href="#projects" >Projects</a></li>
         <li><a href="#experience" >Experience</a></li>
         <li><a href="#contact" >Contact</a></li>

      </ul>
</div>
      <div className='search-box'>
        <input type="text" placeholder='search'/>
      <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" />
      </div>
      <img  onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light : toggle_dark}  alt=""  className='toggle-icon'/>
    </div>
  )
}

export default Navbar;
