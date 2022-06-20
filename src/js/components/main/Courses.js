import React, { Component } from 'react';
import Course from './main_components/Course';

class Courses extends Component{

    render(){     
        console.log(this.props.courses)
        return<>
            <section className={'container'} id='courses'>
                <p className={'title'}>Courses and certificates</p>
                <div className={'courses_cont'}>
                    {this.props.courses.map (courses=>
                            <Course 
                                id={courses.id}
                                pic={courses.pic} 
                                name={courses.name}
                                organizer={courses.organizer}
                                link={courses.link}/>
                            )}
                </div>
            </section>
        </>
    }
}
export default Courses;