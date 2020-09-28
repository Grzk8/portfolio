import React, {Component} from "react";
import {HashRouter, Link} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Skills from './Skills';

function Header() {
    return <HashRouter>
        <>
        <div className={'menuScroll'}>
        <ul className={'scrollList flex-box'}>
        <li><ScrollLink className='ScrollLink start' to={'home'} spy={true}>Start</ScrollLink></li>
        <li><ScrollLink className='ScrollLink' to={'about'} spy={true}>O mnie</ScrollLink></li>
        <li><ScrollLink className='ScrollLink' to={'skills'} spy={true}>skills</ScrollLink></li>
        <li><ScrollLink className='ScrollLink' to={'portfolio'} spy={true}>portfolio</ScrollLink></li>
        <li><ScrollLink className='ScrollLink' to={'contact'} spy={true}>kontakt</ScrollLink></li>
        </ul>
      </div>
        </>
    </HashRouter>
}
export default Header;