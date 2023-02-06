import React from 'react';
import zdjecie from '../../images/photo/1.jpg'

const Home = () => {
    return <section className={'home_container'} id='home'>
        <div className='home_container_photo'>
            <img src={zdjecie} className='home_container_photo-photo'></img>
        </div>
        <div className='home_container_introduction'>
            <p className={'home_container_introduction-text'}>Hi, my name is</p>
            <p className={'home_container_introduction-name'}>Grzegorz Kaczor</p>
            <p className={'home_container_introduction-text'}>I'm a web developer</p>
        </div>
    </section>
};

export default Home;