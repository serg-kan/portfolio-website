import React from 'react'


import {BsYoutube} from 'react-icons/bs';
import {FaTelegramPlane, FaGithub, FaLinkedin} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/sergkan/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://t.me/kan_notes" target="_blank" rel="noreferrer"><FaTelegramPlane /></a>
        <a href="https://www.youtube.com/@serg_kan" target="_blank" rel="noreferrer"><BsYoutube /></a>
    </div>
  )
}

export default HeaderSocials