import React from 'react';
import {HashRouter} from 'react-router-dom';


function About() {
    return <HashRouter>
        <>
            <section className={'about container'} id='about'>
            <p className={'about_title'}>O mnie</p>
            <p className={'about_text'}>
            Mam na imię Grzesiek i jestem Front-end developerem z Krakowa. 
            Ukończyłem studia na kierunku metalurgia na Akademii Górniczo-Hutniczej oraz na kierunku inżynieria produkcji na Politechnice Krakowskiej. 
            W trakcie swojej kariery zawodowej pracowałem przez wiele lat w przemyśle. 
            </p>
            <p className={'about_text'}>Postanowiłem jednak kształcić się w kierunku web developmentu.
            Ukończyłem kurs JavaScript Developer: React organizowany przez szkołę programowania CodersLab, 
            obecnie jestem w trakcie kursu Udemy – React The complete Guide. 
            Swoje projekty tworzyłem za pomocą zarówno JavaScript jak i React w kierunku którego chciałbym się rozwijać. 
            Staram się używać poprawnego i semantycznego kodu HTML i CSS . Korzystam ze składni preprocesora Sass.</p>
            </section>
        </>
    </HashRouter>
}
export default About;