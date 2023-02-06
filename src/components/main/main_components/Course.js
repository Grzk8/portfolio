import React from 'react';

const course = props => {
    return (
        <div className='course' key={props.id}>
            <a href={props.link} target="_blank">
                <img src={props.pic} className="course_small" />
            </a>
            <p className='course_description' >{props.name}</p>
            <p className='course_description organizer' >{props.organizer}</p>
        </div>
    );
};

export default course;