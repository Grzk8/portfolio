import React, { Component } from "react";
import About from './main/About.js';
import Contact from './main/Contact.js';
import Portfolio from './main/Portfolio';
import Skills from './main/Skills.js';
import Home from './main/Home.js';
import skill from '../data/data-skills';
import projects from '../data/projects';
import Courses from './main/Courses'
import courses from '../data/courses'

const Main = () => {
    return <>
        <Home />
        <About />
        <Skills skills={skill} />
        <Courses courses={courses} />
        <Portfolio portfolio={projects} />
        <Contact />
    </>
};

export default Main;