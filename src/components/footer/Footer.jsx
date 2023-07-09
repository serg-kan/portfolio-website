import React from 'react'
import './footer.css'

import {BsYoutube} from 'react-icons/bs';
import {FaTelegramPlane, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">KAN</a>
      
      <ul className="permalinks">
         <li><a href="#">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sergkan/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://t.me/kan_notes" target="_blank" rel="noreferrer"><FaTelegramPlane /></a>
        <a href="https://www.youtube.com/@serg_kan" target="_blank" rel="noreferrer"><BsYoutube /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022, Sergey Kan</small>
      </div>
    </footer>
  )
}

export default Footer