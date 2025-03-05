import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import './App.css';
import Experience from './components/Experience/Experience';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';



const App = () => {

  const current_theme = localStorage.getItem('current_theme');


  const {theme,setTheme}=useState(current_theme? current_theme : 'light');
  useEffect(()=> {
    localStorage.setItem('current_theme ',theme)
  },[theme])
  return (
    <div className={'container ${theme}'}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <section id="home">
      <Home/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="projects">
      <Projects/>
      </section>
      <section id="experience">
      <Experience/>
      </section>
      <Testimonials/>
      <section id="contact">
      <Contact/>
      </section>

      
    
    </div>
  );
};

export default App;
