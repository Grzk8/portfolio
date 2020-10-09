import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';

class Skills extends Component{

    render(){
            
        return(
            <HashRouter>
            <section className={'skills container'} id='skills'>
                <p className={'skills_title'}>Technologie</p>
                <div className={'skills_cont'}>

                    {this.props.skills.map (s=>

                            <div className={'skill'} key={s.id}>
                                <img className="skill_icon" src={s.icon} alt="" />
                                <p className={'skill_description'} >{s.desctiption}</p>
                            </div>
                        )}
                   
                </div>
            </section>
     
        </HashRouter>
        )
    }
}
export default Skills;