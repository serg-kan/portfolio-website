import React from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {FaTelegramPlane} from 'react-icons/fa';

import ContactOption from './ContactOption.jsx';

const Contact = () => {
 
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <ContactOption 
            title="Email"
            contact="serg.kan096@gmail.com"
            link="mailto:serg.kan096@gmail.com"
            icon={<MdOutlineEmail className="contact__option-icon" />}
          />

          <ContactOption 
            title="WhatsApp"
            contact="+79175307982"
            link="https://api.whatsapp.com/send?phone=+79175307982"
            icon={<BsWhatsapp className="contact__option-icon" />}
          />

          <ContactOption 
            title="Telegram"
            contact="@serg_kan"
            link="https://t.me/serg_kan"
            icon={<FaTelegramPlane className="contact__option-icon" />}
          />

        </div>
      </div>
    </section>
  )
}

export default Contact