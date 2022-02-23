import React from 'react';

function About() {
    return <>
            <section className={'container'} id='about'>
                <p className={'title'}>O mnie</p>
                <p className={'about_text'}>
                Mam na imię Grzesiek i jestem Front-end developerem z Krakowa. 
                Ukończyłem studia na kierunku metalurgia na Akademii Górniczo-Hutniczej oraz na kierunku inżynieria produkcji na Politechnice Krakowskiej. 
                W trakcie swojej kariery zawodowej pracowałem przez wiele lat w przemyśle. 
                </p>
                <p className={'about_text'}>Postanowiłem jednak kształcić się w kierunku web developmentu.
                Programowaniem zajmuję się od półtora roku. Swoje projekty
                tworzyłem głównie za pomocą React, lecz jestem otwarty na naukę
                innych technologii, frameworków. Staram się używać poprawnego i
                semantycznego kodu HTML i CSS, korzystam ze składni
                preprocesora Sass, bibliotek Bootstrap, jQuery, React także Redux.
                Jednocześnie uczę się również technologii back-endowych: Node.js,
                Express.js, MongoDb, GraphQl.
                Ukończyłem kursy: JavaScript Developer: React organizowany przez szkołę programowania CodersLab 
                oraz kurs Udemy – React - The Complete Guide (incl Hooks, React Router, Redux) Academind by Maximilian Schwarzmüller.
                </p>
                <p className={'about_text'}>Szukam pierwszej pracy jako Front-end Developer w której będę mógł wykorzystać zdobytą wiedzę, oraz pomoże mi w dalszym rozwoju. 
                </p>
            </section>
        </>
}
export default About;