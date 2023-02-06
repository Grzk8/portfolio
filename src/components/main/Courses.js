import React, { Component } from 'react';
import Course from './main_components/Course';

class Courses extends Component {

    render() {
        console.log(this.props.courses)
        return <>
            <section className={'courses_container'} id='courses'>
                <p className={'title'}>courses and certificates</p>
                <div className={'courses_container-courses'}>

                    {this.props.courses.map(courses =>
                        <Course
                            id={courses.id}
                            pic={courses.pic}
                            name={courses.name}
                            organizer={courses.organizer}
                            link={courses.link} />
                    )}

                </div>
            </section>
        </>
    };
};

export default Courses;