// call to action
import React from 'react'
import CV from '../../assets/cv.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a> 
        {/* <a href="https://t.me/product_kan" target="_blank" rel="noreferrer" className='btn'>Telegram Channel</a>  */}
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA