import React from 'react';
import zdjecie from '../../images/photo/2.jpg'

const About = () => {
    return <>
        <section className={'about'} id='about'>
            <div className={'about_container'}>
                <p className='about_container-text header-text'>ABOUT ME</p>
                <img src={zdjecie} p className='about_container-photo'></img>
                <p className='about_container-text'>
                    I`m a web developer. Programming is my passion and I`m working on front-end technologies like JavaScript and React. At the same time I`m also diving into back-end technologies NodeJS, SQL, MongoDB; building full stack applications. I would like to develop my skills learning new technologies and expand the horizons, so I`m looking for the first professional experience that will enable me to do this.
                </p>
            </div>
        </section>
    </>
};

export default About;