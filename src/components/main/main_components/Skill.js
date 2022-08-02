import React from 'react';

const skill = props => {
    return (
        <div className='skill' key={props.id}>
            <img className='skill_icon' src={props.icon} alt="" />
            <p className='skill_description' >{props.desctiption}</p>
        </div>
    );
};

export default skill;