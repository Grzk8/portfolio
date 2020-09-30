import React from 'react';
import {HashRouter} from 'react-router-dom';

function Footer() {
    return <HashRouter>
        <>
            <div className={'footer'}>
                <div className={'footer_created'}>
                    Grzegorz Kaczor &copy; 2020
                </div>
            </div>
        </>
    </HashRouter>
}
export default Footer;