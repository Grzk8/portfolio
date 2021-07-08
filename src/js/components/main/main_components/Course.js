import React from 'react';

const course = props => {
    return (
        <div className='course' key={props.id}>
            <img className='course_small' src={props.pic} alt="" />
            <p className='course_description' >{props.name}</p>
        </div>
    )
};

export default course;