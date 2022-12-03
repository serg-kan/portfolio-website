import React from 'react'
import './header.css'

import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="greetings">
          <h5>Hello I'm</h5>
          <h1>Sergey Kan</h1>
          <h5 className="text-light">Business Analyst | Product Manager</h5>
          <CTA />
        </div>
               
        <HeaderSocials />
        
        <a href="#contact" className="scroll__down">Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header