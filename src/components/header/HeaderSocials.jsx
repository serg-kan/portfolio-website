import React from 'react'


import {BsYoutube} from 'react-icons/bs';
import {FaTelegramPlane, FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://t.me/product_kan" target="_blank" rel="noreferrer"><FaTelegramPlane /></a>
        <a href="https://github.com/serg-kan" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.youtube.com/channel/UCM1UBclX5KG3_ebnUXzgCeg" target="_blank" rel="noreferrer"><BsYoutube /></a>
    </div>
  )
}

export default HeaderSocials