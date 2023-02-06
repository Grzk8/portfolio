import React from 'react';

const project = props => {
    return (
        <div className={'portfolio_cont_project'} key={props.id}>
            <p className={'portfolio_cont_project_title'} >{props.title}</p>
            <img className="portfolio_pic" src={props.img} alt="" />
            <p className={'portfolio_cont_project_description'}>{props.desctiption}</p>
            <p className={'portfolio_cont_project_tags'}>{props.tags}</p>
            <div className={'portfolio_cont_project_buttons'}>
                <div className={'portfolio_cont_project_button'}>
                    <a className={'portfolio_cont_project_link'} target="_blank" rel="noopener noreferrer" href={props.adressLive}>Show</a>
                </div>
                <div className={'portfolio_cont_project_button'}>
                    <a className={'portfolio_cont_project_link'} target="_blank" rel="noopener noreferrer" href={props.adressGithub}>Code</a>
                </div>
            </div>
        </div>
    );
};

export default project;