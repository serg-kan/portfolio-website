import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const data = [
  {
    avatar: AVTR1,
    name: 'Ivan Ivanov',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa minus in quis nam obcaecati facere? Fuga earum optio facere molestias in nisi enim iste error, tempora odit quae quisquam cum.'
  },
  {
    avatar: AVTR2,
    name: 'Ivan Ivanov',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa minus in quis nam obcaecati facere? Fuga earum optio facere molestias in nisi enim iste error, tempora odit quae quisquam cum.'
  },
  {
    avatar: AVTR3,
    name: 'Ivan Ivanov',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa minus in quis nam obcaecati facere? Fuga earum optio facere molestias in nisi enim iste error, tempora odit quae quisquam cum.'
  },
  {
    avatar: AVTR4,
    name: 'Ivan Ivanov',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa minus in quis nam obcaecati facere? Fuga earum optio facere molestias in nisi enim iste error, tempora odit quae quisquam cum.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination,A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({ avatar, name, review }) => (
            <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">
              {review}
            </small>
          </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Testimonials