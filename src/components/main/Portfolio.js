import React, { Component } from 'react';
import Project from './main_components/Project';

class Portfolio extends Component {
    render() {
        return <>
            <section className={'portfolio'} id='portfolio'>
                <div className='portfolio_container'>
                    <p className={'title'}>Projects</p>

                    <div className='portfolio_container_main_project'>
                        <p className={'portfolio_container_main_project-project_title'} >Best Bookstore</p>
                        <img className="portfolio_container_main_project-pic" src='https://raw.githubusercontent.com/Grzk8/Portfolio/dev/src/images/projects/bestbookstore.png' alt="" />
                        <p className={'portfolio_container_main_project-description'}>Full-stack online bookstore site. 
                            It is an application that I have been developing for a long time. During ?Learning new technologies and tools, I update it by adding new modules and functions.
                            The front-end was made using the Sass preprocessor, which was helpful in designing a responsive website, both for smartphones and large screens. It includes separate navigation, for smartphones and tablets, and for large screens. The website was made in React using hooks. It allows you to browse books by category, search, add and remove from baskets. The application includes form validation and fetch API, which is connected to a back-end created in the Node.js Express framework. It is connected to the MongoDB database hosted by the Mongoose library, which creates a connection between MongoDB and NodeJS. This allows you to download, update and add data to the database. The application includes an authentication module. The server generates a Token, which is stored in the browser's localStorage and then sent back with a request to the backend. It allows you to set up an account, log in, place an order, view previous orders, change your data.</p>
                        <p className={'portfolio_container_main_project-tags'}>FRONT-END: React, React hooks, Fetch API, React Router, Sass</p>
                        <p className={'portfolio_container_main_project-tags'}>BACK-END: NodeJS, ExpressJS, MongoDB, Mongoose </p>
                        <div className={'portfolio_container_main_project-buttons'}>
                            <div className={'portfolio_container_main_project-button'}>
                                <a className={'portfolio_container_main_project-link'} target="_blank" rel="noopener noreferrer" href={'https://grzk8.github.io/best-bookstore'}>Show</a>
                            </div>
                            <div className={'portfolio_container_main_project-button'}>
                                <a className={'portfolio_container_main_project-link'} target="_blank" rel="noopener noreferrer" href={'https://github.com/grzk8/best-bookstore'}>Code Frontend</a>
                           
                            </div>
                            <div className={'portfolio_container_main_project-button'}>
                                
                                <a className={'portfolio_container_main_project-link'} target="_blank" rel="noopener noreferrer" href={'https://github.com/Grzk8/best-bookstore_backend'}>Code Backend</a>
                            </div>
                        </div>
                    </div>

                    <p className={'title'}>Small projects</p>
                    <div className={'portfolio_cont'}>

                        {this.props.portfolio.map(p =>
                            < Project
                                key={p.id}
                                title={p.title}
                                img={p.img}
                                desctiption={p.desctiption}
                                tags={p.tags}
                                adressLive={p.adressLive}
                                adressGithub={p.adressGithub} />
                        )}

                    </div>
                </div>
            </section>
        </>
    };
};

export default Portfolio;