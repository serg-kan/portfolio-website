import React from 'react'
import './footer.css'

import {BsYoutube} from 'react-icons/bs';
import {FaTelegramPlane, FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">KAN</a>
      
      <ul className="permalinks">
         <li><a href="#">Home</a></li>
         <li><a href="#about">About</a></li>
         {/* <li><a href="#experience">Experience</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#portfolio">Portfolio</a></li>
         <li><a href="#testimonials">Testimonials</a></li> */}
         <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://t.me/product_kan" target="_blank" rel="noreferrer"><FaTelegramPlane /></a>
        <a href="https://www.youtube.com/channel/UCM1UBclX5KG3_ebnUXzgCeg" target="_blank" rel="noreferrer"><BsYoutube /></a>
        <a href="https://github.com/serg-kan" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022, Sergey Kan</small>
      </div>
    </footer>
  )
}

export default Footer