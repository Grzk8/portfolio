import React from "react";
import {HashRouter} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


function Header() {
    return (
        <section className={'header'}>
          <div className={'header_flex flex-box'}>
            <div className={'header_info'}>
              <div className={'header_info_name'}>Grzegorz Kaczor</div>
              <div className={'header_info_description'}>Front-end developer</div>
            </div>
            <div className={'menuScroll'}>
              <ul className={'scrollList flex-box'}>
                <li><ScrollLink className='ScrollLink start' to={'home'} spy={true}>START</ScrollLink></li>
                <li><ScrollLink className='ScrollLink' to={'about'} spy={true}>O MNIE</ScrollLink></li>
                <li><ScrollLink className='ScrollLink' to={'skills'} spy={true}>SKILLS</ScrollLink></li>
                <li><ScrollLink className='ScrollLink' to={'portfolio'} spy={true}>PORTFOLIO</ScrollLink></li>
                <li><ScrollLink className='ScrollLink' to={'contact'} spy={true}>KONTAKT</ScrollLink></li>
              </ul>
            </div>
          </div>
        </section>
      )

}
export default Header;