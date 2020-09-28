import React, {Component} from "react";
import {
    HashRouter,
    Link
} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import About from './components/About.js';
import Header from './components/Header.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio.js';
import Skills from './components/Skills.js';
import './App.css';


function App() {
  return(
    <>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )

}
export default App;
