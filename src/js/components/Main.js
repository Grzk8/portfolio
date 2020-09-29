import React from 'react';
import {HashRouter} from 'react-router-dom';
import About from './About.js';
import Contact from './Contact.js';
import Portfolio from './Portfolio.js';
import Skills from './Skills.js';
import Home from './Home.js';

function Main() {
    return <HashRouter>
        <>
        <Home/>
        <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
        </>
    </HashRouter>
}
export default Main;