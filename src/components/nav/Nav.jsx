import React, { useState, useEffect } from 'react'
import './nav.css'

import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    console.log('current', activeNav);

  }, [activeNav])

  //TODO: Выделить меню навигации в отдельный файл и подтягивать оттуда (сюда, в App.js и в footer)

  return (
    <nav>
      <a  
        href="#" 
        className={activeNav === '#' ? 'active' : ''}
        onClick={() => setActiveNav('#')}
      ><AiOutlineHome /></a>
      <a 
        href="#about" 
        className={activeNav === '#about' ? 'active' : ''}
        onClick={() => setActiveNav('#about')}
      ><AiOutlineUser /></a>
      {/* <a 
        href="#experience" 
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => setActiveNav('#experience')}
      ><BiBook /></a>
      <a 
        href="#services" 
        className={activeNav === '#services' ? 'active' : ''}
        onClick={() => setActiveNav('#services')}
      ><RiServiceLine /></a> */}
      <a 
        href="#contact" 
        className={activeNav === '#contace' ? 'active' : ''}
        onClick={() => setActiveNav('#contact')}
      ><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav