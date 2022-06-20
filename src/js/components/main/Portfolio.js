import React, { Component } from 'react';
import Project from './main_components/Project';

class Portfolio extends Component{
    render(){     
        return<>
            <section className={'container'} id='portfolio'>
                <p className={'title'}>Projects</p>
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
        </>
    }
}
export default Portfolio;