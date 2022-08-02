import React from "react";
import { Link as ScrollLink } from 'react-scroll';


const Header = () => {
  return (
    <section className={'header'}>
      <div className={'header_flex flex-box'}>
        <div className={'header_info'}>
          <div className={'header_info_name'}>Grzegorz Kaczor</div>
          <div className={'header_info_description'}>Web developer</div>
        </div>
        <div className={'menuScroll'}>
          <ul className={'scrollList flex-box'}>
            <li><ScrollLink className='ScrollLink start' to={'home'} spy={true}>START</ScrollLink></li>
            <li><ScrollLink className='ScrollLink' to={'about'} spy={true}>ABOUT ME</ScrollLink></li>
            <li><ScrollLink className='ScrollLink' to={'skills'} spy={true}>SKILLS</ScrollLink></li>
            <li><ScrollLink className='ScrollLink' to={'courses'} spy={true}>COURSES</ScrollLink></li>
            <li><ScrollLink className='ScrollLink' to={'portfolio'} spy={true}>PROJECTS</ScrollLink></li>
            <li><ScrollLink className='ScrollLink' to={'contact'} spy={true}>CONTACT</ScrollLink></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;