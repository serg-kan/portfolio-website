import React from 'react'
import './header.css'

import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
// import ME from '../../assets/me.png';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="greetings">
          <h5>Hello I'm</h5>
          <h1>Sergey Kan</h1>
          <h5 className="text-light">Former Software Developer - Current Business Analyst - Future Product Manager</h5>
          <CTA />
        </div>
       
        
        
        <HeaderSocials />

        {/* <div className="me">
          <img src={ME} alt="me" className="me__image" />
        </div> */}
        
        <a href="#contact" className="scroll__down">Scroll Down</a>
        

      </div>
    </header>
  )
}

export default Header