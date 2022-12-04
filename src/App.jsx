import React from 'react'


// import of all the components
// TODO: refactor later so that paths will be './components/';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';

import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';

const App = () => {
  return (
    <>
      <Header /> 
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App;