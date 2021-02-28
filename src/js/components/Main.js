import React, {Component} from "react";
import {HashRouter} from 'react-router-dom';
import About from './About.js';
import Contact from './Contact.js';
import Portfolio from './Portfolio.js';
import Skills from './Skills.js';
import Home from './Home.js';
import skill from '../../data/data-skills';
import learning_skill from '../../data/learning-skill'
import projects from '../../data/projects'

class Main extends Component {

    render(){

        return <HashRouter>
        <>
            <Home/>
            <About/>
            <Skills skills={skill} learning={learning_skill}/>
            <Portfolio portfolio={projects}/>
            <Contact/>
        </>
    </HashRouter>
    }    

}
export default Main;