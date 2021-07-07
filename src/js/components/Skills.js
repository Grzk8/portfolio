import React, { Component } from 'react';
import Skill from './Skill';

class Skills extends Component{
    render(){        
        return<>
            <section className={'container'} id='skills'>
                <p className={'title'}>Narzędzia i technologie</p>
                <div className={'skills_cont'}>
                    {this.props.skills.map (skill=>
                        <Skill 
                            id={skill.id} 
                            icon={skill.icon} 
                            desctiption={skill.desctiption}/>
                        )}
                </div>
                <p className={'title'}>Uczę się</p>
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