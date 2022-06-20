import React, {Component} from "react";
import About from './main/About.js';
import Contact from './main/Contact.js';
import Portfolio from './main/Portfolio';
import Skills from './main/Skills.js';
import Home from './main/Home.js';
import skill from '../../data/data-skills';
import learning_skill from '../../data/learning-skill';
import projects from '../../data/projects';
import Courses from './main/Courses'
import courses from '../../data/courses'

class Main extends Component {
    render(){
        return <>
                <Home/>
                <About/>
                <Skills skills={skill} learning={learning_skill}/>
                <Courses courses={courses}/>
                <Portfolio portfolio={projects}/>
                <Contact/>
            </>
    }    
}
export default Main;