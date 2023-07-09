import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpg';
import ME from '../../assets/me-new-2.jpg';

import {BiAnalyse} from 'react-icons/bi';
import {BsCodeSlash} from 'react-icons/bs';
import {ImOffice} from 'react-icons/im';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiAnalyse className="about__icon" />
              <h5>Product Management</h5>
              <small>2+ Years</small>
            </article>

            <article className="about__card">
              <BsCodeSlash className="about__icon" />
              <h5>Development</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <ImOffice className="about__icon" />
              <h5>Samolet Group</h5>
              <small>Current Company</small>
            </article>
          </div>

          <p>
            Hey there! I'm Sergey, client-oriented product manager with 5+ years of experience in product and development
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About