import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import './Slider.css'
import background from '../../../asset/image-4.jpg'
import background1 from '../../../asset/image-1.jpg'
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <div className=' relative top-0' >
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='relative ' style={{backgroundImage:(`url(${background})`), backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="absolute inset-0  bg-black opacity-60"></div>
            <div className='min-h-screen grid content-center relative' >
          
               <div className='mb-5'  data-aos="fade-up">
               <h2 className='font-extrabold mb-5 text-transparent text-4xl md:text-6xl  leading-loose tracking-wider lg:tracking-[4px] bg-clip-text bg-gradient-to-r from-[#edebde] to-[#b18551] '>COLLECT OUR OWN CREATIVE </h2>

                <span className='text-white font-bold tracking-[3px]  '>XANTHOUS ART </span>
               </div>
               <div className='m-auto '>
               <Link className='btn-67 text-white'> Explore More</Link>
               </div>
            </div>

        </SwiperSlide>

        {/* div2 */}
        <SwiperSlide className='relative' style={{backgroundImage:(`url(${background1})`), backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className="absolute inset-0  bg-black opacity-60"></div>
            <div className='min-h-screen grid content-center relative' >
          
            <div className='mb-5'  data-aos="fade-up">
               <h2 className='font-extrabold mb-5 text-transparent text-4xl md:text-6xl tracking-[4px] bg-clip-text bg-gradient-to-r from-[#edebde] to-[#b18551] '>COLLECT OUR OWN CREATIVE </h2>

                <span className='text-white font-bold tracking-[3px]  '>XANTHOUS ART </span>
               </div>
               <div className='m-auto '>
               <Link className='btn-67 text-white'> Explore More</Link>
               </div>

              
           
            </div>

        </SwiperSlide>
        
      </Swiper>

    </div>
  )
}

export default Slider
