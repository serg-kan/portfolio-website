import React from 'react'
import './contact.css'



const ContactOption = ({title, contact, link, icon }) => {

  return (
    <article className="contact__option">
    {icon}
    <h4>{title}</h4>
    <h5>{contact}</h5>
    <a href={link} target="_blank" rel="noreferrer">
      Send a message
    </a>
  </article>
  )
}

export default ContactOption;