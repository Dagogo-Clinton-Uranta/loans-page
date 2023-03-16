import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/gray copy-min.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay} from 'swiper';

//swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
     
   <Swiper className="container testimonials__container"
   //swiper js options
   modules={[ Pagination, Scrollbar, A11y,Autoplay]}
   
   autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
   scrollbar={{ draggable: true }}
   slidesPerView={1}
   spaceBetween={50}
   pagination={{clickable:true}}
   
   > 
   {/*1 */}
    <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR1} alt="avatar one" />
     </div>

     
     <h5 className="client__name">Dagogo Uranta</h5>
     <small className="client__review">
      Amber is highly skilled at what she does
      consectetur adipisicing elit. Sint totam sunt soluta eius 
      laboriosam ab eos exercitationem, nobis ex placeat!
      </small>

    </SwiperSlide>

     {/*2 */}
    <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR2} alt="avatar one" />

     </div>

     <h5 className="client__name">Harry Roe</h5>
     <small className="client__review">
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Sint totam sunt soluta eius 
      laboriosam ab eos exercitationem, nobis ex placeat!
      </small>

    </SwiperSlide>

 {/*3 */}
    <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR3} alt="avatar one" />
     </div>
    
     <h5 className="client__name">Jim Eagleton</h5>
     <small className="client__review">
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Sint totam sunt soluta eius 
      laboriosam ab eos exercitationem, nobis ex placeat!
      </small>

    </SwiperSlide>

  {/*3 */}
  <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR4} alt="avatar one" />
     </div>
    
     <h5 className="client__name">Alisson Pawnee</h5>
     <small className="client__review">
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Sint totam sunt soluta eius 
      laboriosam ab eos exercitationem, nobis ex placeat!
      </small>

    </SwiperSlide>




  </Swiper> 


    </section>
  )
}

export default Testimonials