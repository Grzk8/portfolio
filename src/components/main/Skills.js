import React, { Component } from 'react';
import Skill from './main_components/Skill';

class Skills extends Component {
    render() {
        return <>
            <section className={'skills_container'} id='skills'>
                <p className={'title'}>technologies and tools that I use</p>
                <div className={'skills_container-skills'}>

                    {this.props.skills.map(skill =>
                        <Skill
                            id={skill.id}
                            icon={skill.icon}
                            desctiption={skill.desctiption}
                        />
                    )}

                </div>
            </section>
        </>
    };
};

export default Skills;