import React from 'react';
import {HashRouter} from 'react-router-dom';

function Contact() {
    return <HashRouter>
        <>
            <section className={'contact container'} id='contact'>
            <p className={'contact_title'}>Kontakt</p>
            <div className={'contact_cont'}>
            <a className="contactLogo mail" href="mailto:grzesiek125@op.pl"></a>  
            <a className="contactLogo github" href="https://github.com/Grzk8" target="_blank" rel="noopener noreferrer"></a>
            <a className="contactLogo linkedin" href="https://www.linkedin.com/in/g-kaczor/" target="_blank" rel="noopener noreferrer"></a>
            </div>
            </section>
        </>
    </HashRouter>
}
export default Contact;