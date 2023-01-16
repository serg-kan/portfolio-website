import React, { useState } from 'react'
import './nav.css'

import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiMessageSquareDetail} from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

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
      <a 
        href="#contact" 
        className={activeNav === '#contace' ? 'active' : ''}
        onClick={() => setActiveNav('#contact')}
      ><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav