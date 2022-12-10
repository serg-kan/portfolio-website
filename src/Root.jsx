import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import About from '../about/About';
import Contact from '../contact/Contact';
import Experience from '../experience/Experience';

import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import Navbar from '../navbar/Navbar';

const Root = () => {
  return (
    <>
      <Navbar />
      <Header /> 
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default Root;