import React from 'react'


// import of all the components
// TODO: refactor later so that paths will be './components/';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';

import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Resume from './components/resume/Resume';

const App = () => {
  return (
    <>
      <Header /> 
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      {/* <Resume/> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App;