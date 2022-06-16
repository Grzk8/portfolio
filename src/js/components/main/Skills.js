import React, { Component } from 'react';
import Skill from './main_components/Skill';

class Skills extends Component{
    render(){        
        return<>
            <section className={'container'} id='skills'>
                <p className={'title'}>Skills and technologies</p>
                <div className={'skills_cont'}>
                    {this.props.skills.map (skill=>
                        <Skill 
                            id={skill.id} 
                            icon={skill.icon} 
                            desctiption={skill.desctiption}/>
                        )}
                </div>
                <p className={'title'}>Currently I`m working on</p>
                <div className={'skills_cont'}>
                {this.props.learning.map (skill=>
                        <Skill 
                            id={skill.id} 
                            icon={skill.icon} 
                            desctiption={skill.desctiption}/>
                        )}
                </div>
            </section>
        </>
    };
};
export default Skills;