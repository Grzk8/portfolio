import React from 'react';

function Contact() {
    return <>
            <section className={'contact container'} id='contact'>
            <p className={'contact_title'}>Kontakt</p>
            <div className={'contact_cont'}>
                <div className={'contact_cont_mail'}>
                    <a className="contactLogo mail" href="mailto:grzesiek125@op.pl"></a> 
                </div>
                <div className={'contact_cont_github'}>
                    <a className="contactLogo github" href="https://github.com/Grzk8" target="_blank" rel="noopener noreferrer"></a>
                </div>
                <div className={'contact_cont_linkedin'}>
                    <a className="contactLogo linkedin" href="https://www.linkedin.com/in/g-kaczor/" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>
            </section>
    </>
}
export default Contact;