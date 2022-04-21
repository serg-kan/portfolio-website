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
              <h5>Business Analysis</h5>
              <small>1 Year</small>
            </article>

            <article className="about__card">
              <BsCodeSlash className="about__icon" />
              <h5>Development</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <ImOffice className="about__icon" />
              <h5>Leroy Merlin</h5>
              <small>Current Company</small>
            </article>
          </div>

          <p>
            TL;DR
            <br />
            Hey there! I'm Sergey, a former software developer, current business analyst and future product manager.
            <br />
            How did this happen?
          </p>

          <p>
            In 2014 I moved from my parents to another city to study Software Engineering. 
            On the third year I decided to save my parents some money and found a job as an Intern in Accenture.
            It was awesome. I got into a corporate culture and also could afford to buy bad beer myself. 
          </p>

          <p>
            Since I was an Intern, I had to try different specialities: system analysis, testing, development.
            One of our clients was Leroy Merlin - a big DIY retail company. In 2018 they offered me a job as a Software Developer. 
            I took it.
            
          </p>

          <p>
            That meant that four years at the Faculty of Computer Science at Higher School of Economics were not in vain.
          </p>

          <p>
            Three years passed like one day. Covid and quarter life crisis happened. 
            I decided to move forward and "change the mission". 
            I wanted to be more into a client: think about their needs and have an opportunity to change a product depending on them.
            Product management sounded exactly like what I wanted.
          </p>

          <p>
            Leroy Merlin offered me to become a business analyst to gain some experience. 
            Now I'm at this point. 
            <br />
            TBD
          </p>
          

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About