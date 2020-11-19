import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import Skill from './Skill'

class Skills extends Component{

    render(){
            
        return(
            <HashRouter>
            <section className={'skills container'} id='skills'>
                <p className={'skills_title'}>Technologie</p>
                <div className={'skills_cont'}>

                    {this.props.skills.map (skill=>
                        <Skill 
                            id={skill.id} 
                            icon={skill.icon} 
                            desctiption={skill.desctiption}/>
                        )};
                </div>

            </section>
     
        </HashRouter>
        );
    };
};
export default Skills;