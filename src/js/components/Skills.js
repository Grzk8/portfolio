import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';

class Skills extends Component{

    render(){
            
        return(
            <HashRouter>
            <section className={'skills container'} id='skills'>
                <p className={'skills_title'}>Umiejętności</p>
                <div className={'skills_cont'}>
                    {this.props.skills.map (s=>
                        <>
                            <div key={s.id}>
                                <img className="cover" src={s.icon} height="120px" width="120px" />
                                <p>{s.desctiption}</p>
                            </div>

                        </>
                        )}
                   
                </div>
            </section>
     
        </HashRouter>
        )
    }
}
export default Skills;