import React, {Component} from "react";
import {
    HashRouter,
    Link
} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Header from './components/Header.js';
import Main from './components/Main'
import Footer from './components/Footer.js';
import '../App.css';


function App() {
  return(
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}
export default App;
