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
                    
                            <div className={'portfolio_cont_project'} key={p.id}>
                                <div className={'portfolio_cont_project_title'} >{p.title}</div>
                                <img className="portfolio_pic" src={p.img} alt="" />
                                <div className={'portfolio_cont_project_description'}>{p.desctiption}</div>
                                <a className={'portfolio_cont_project_link'} target="_blank" rel="noopener noreferrer" href={p.adressLive}>Live</a>
                                <a className={'portfolio_cont_project_link'} target="_blank" rel="noopener noreferrer" href={p.adressGithub}>Code</a>
                            </div>
                        )}
                </div>
            </section>
     
        </HashRouter>
        )
    }
}
export default Portfolio;