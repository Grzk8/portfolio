import React from 'react';
import {HashRouter} from 'react-router-dom';

function Home() {
    return <HashRouter>
        <>
            <section className={'home container'} id='home'>
                <div className={'home1'}>
                    <div className={'name'}>Grzegorz Kaczor</div>
                </div>
            </section>
        </>
    </HashRouter>
}
export default Home;