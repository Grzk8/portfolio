import React from 'react';

const course = props => {
    return (
        <>
        <div className='course' key={props.id}>
            <a href={props.link}>
                <img src={props.pic} className="course_small" target="_blank"/>
            </a>
            <p className='course_description' >{props.name}</p>
        </div></>
    )
};

export default course;