import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import Project from './Project';

class Portfolio extends Component{

    render(){
            
        return(
            <HashRouter>
            <section className={'portfolio container'} id='portfolio'>
                <p className={'portfolio_title'}>Portfolio</p>
                <div className={'portfolio_cont'}>

                    {this.props.portfolio.map (p=>
                        < Project 
                            key={p.id} 
                            title={p.title} 
                            img={p.img} 
                            desctiption={p.desctiption}
                            tags={p.tags}
                            adressLive={p.adressLive} 
                            adressGithub={p.adressGithub}/>
                        )}
                </div>
            </section>
     
        </HashRouter>
        )
    }
}
export default Portfolio;