import React, { Component } from 'react';
import courses from '../../../data/courses';
import Course from './main_components/Course';

class Courses extends Component{
    render(){     
        return<>
            <section className={'container'} id='courses'>
                <p className={'title'}>Kursy</p>
                <div className={'courses_cont'}>
                    {this.props.courses.map (courses=>
                            <Course 
                                id={courses.id}
                                pic={courses.pic} 
                                name={courses.name}/>
                            )}
                </div>
            </section>
        </>
    }
}
export default Courses;