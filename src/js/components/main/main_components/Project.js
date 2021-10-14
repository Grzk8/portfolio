import React from 'react';

const project = props => {
    return (
        <div className={'portfolio_cont_project'} key={props.key}>
        <div className={'portfolio_cont_project_title'} >{props.title}</div>
        <img className="portfolio_pic" src={props.img} alt="" />
        <div className={'portfolio_cont_project_description'}>{props.desctiption}</div>
        <div className={'portfolio_cont_project_tags'}>{props.tags}</div>
        <div className={'portfolio_cont_project_buttons'}>
            <div className={'portfolio_cont_project_button'}>
                <a className={'portfolio_cont_project_link'} target="_blank" rel="noopener noreferrer" href={props.adressLive}>Podgląd</a>
            </div>
            <div className={'portfolio_cont_project_button'}>
                <a className={'portfolio_cont_project_link'} target="_blank" rel="noopener noreferrer" href={props.adressGithub}>Kod</a>
            </div>
        </div>
    </div>
    );
};

export default project;