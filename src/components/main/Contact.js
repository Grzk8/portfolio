import React from 'react';

const Contact = () => {
    return <>
        <section className={'contact_container'} id='contact'>

            <div className={'contact_container_cont'}>
                <a href="#top" className='contactLogo top'></a>
                <div className={'contact_container_cont-icons'}>
                    <div className={'contact_cont_mail'}>
                        <a className="contactLogo mail" href="mailto:grzesiek125@op.pl"> </a>
                    </div>
                    <div className={'contact_cont_github'}>
                        <a className="contactLogo github" href="https://github.com/Grzk8" target="_blank" rel="noopener noreferrer"> </a>
                    </div>
                    <div className={'contact_cont_linkedin'}>
                        <a className="contactLogo linkedin" href="https://www.linkedin.com/in/g-kaczor/" target="_blank" rel="noopener noreferrer"></a>
                    </div>
                </div>
                <p className='contact_container_cont-created'> Grzegorz Kaczor &copy; 2022</p>
            </div>
        </section>
    </>
};

export default Contact;