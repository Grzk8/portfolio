import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';

class Portfolio extends Component{

    render(){
            
        return(
            <HashRouter>
            <section className={'portfolio container'} id='portfolio'>
                <p className={'portfolio_title'}>Portfolio</p>
                <div className={'portfolio_cont'}>
                    {this.props.portfolio.map (p=>
                        <>
                            <div key={p.id}>
                                <p>{p.title}</p>
                                <a href={p.adressLive}>Live</a>
                                <a href={p.adressGithub}>Code</a>
                                <p>{p.desctiption}</p>
                            </div>

                        </>
                        )}
                   
                </div>
            </section>
     
        </HashRouter>
        )
    }
}
export default Portfolio;