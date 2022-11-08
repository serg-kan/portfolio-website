import React, { useRef } from 'react'

import './contact.css'

import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {FaTelegramPlane} from 'react-icons/fa';

const Contact = () => {
 
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>serg.kan096@gmail.com</h5>
            <a href="mailto:serg.kan096@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+79175307982</h5>
            <a href="https://api.whatsapp.com/send?phone=+79175307982" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>serg_kan</h5>
            <a href="https://t.me/serg_kan" target="_blank" rel="noreferrer">Send a message</a>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Contact