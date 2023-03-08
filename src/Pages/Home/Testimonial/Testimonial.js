import React from 'react'
import tigre from '../../../asset/color.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function Testimonial() {
  return (
  <div className='hidden lg:block'  >
    
    {/* <div className='bg-black relative min-h-screen z-0' >
    
    </div> */}
      <div className=' h-[80vh]  relative ' style={{backgroundImage:(`url(${tigre})`), backgroundSize:'cover', backgroundPosition:"center"}} >
      <div className="absolute inset-0  bg-[#020B0D] opacity-80"></div>
      <div className='grid lg:grid-cols-2 gap-5'>

        <div className='flex gap-8 m-auto  relative top-[-100px] text-white' >
          <div className='bg-black border-double border-[10px] border-primary pt-10 px-10' data-aos="zoom-in-right">
              <h2 className='font-bold mb-5 text-transparent uppercase text-4xl md:text-3xl lg:text-6xl   tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#b18551] to-[#fff]'>2500</h2>
              <h3 className='relative left-[130px] top-[-105px] font-extrabold text-4xl'>+</h3>
              <p className='font-bold mb-5 text-transparent uppercase text-4xl md:text-3xl lg:text-2xl relative top-[-30px]  tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#edebde] to-[#b18551]'>SOLD ITEMs</p>
          </div>
          <div className='bg-black  border-double border-[10px] border-primary pt-10 px-10' data-aos="zoom-in-up">
              <h2 className='font-bold mb-5 text-transparent uppercase text-4xl md:text-3xl lg:text-6xl   tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#b18551] to-[#fff]'>1500</h2>
              <h3 className='relative left-[130px] top-[-105px] font-extrabold text-4xl'>+</h3>
              <p className='font-bold mb-5 text-transparent uppercase text-4xl md:text-3xl lg:text-2xl relative top-[-30px]  tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#edebde] to-[#b18551]'>HAPPY COLLECTORS</p>
          </div>
        </div>
{/* swiper div */}
        <div className=' border-double border-[15px] border-[#262626] lg:mx-16 mt-24  relative lg:top-[-180px]' data-aos="zoom-in">
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
                
                <div className=' box relative pb-5  '>
                <div className='text-start lg:py-40 lg:px-16' >
                   <div>
                   <h2 className='text-lg uppercase tracking-wider text-neutral'> our  Collector’s  Compliments</h2>
                    <h1 className='font-extrabold mb-5 text-transparent uppercase text-4xl md:text-3xl font-serif  lg:leading-relaxed tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#b18551] to-[#fff] '>What they Say ?</h1>
                   </div>
                    <div className='mt-3 text-white'>
                        <p className='text-xl text-justify font-serif'>I just love their  all stunning Collections. You must know what can you do for a painting before taking it, but with xanthous, the sky is the limit.</p>
                    </div>
                    <div className='flex gap-5 mt-5'>
                        <div className='w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'><img className=' rounded-full border' src="https://i.ibb.co/0qfTh0b/03.jpg" alt="" /></div>
                        <div className='self-center text-neutral tracking-widest'> 
                        <h2 className='uppercase text-[12px] mb-2'>jenifer gets</h2>
                        <h2 className='uppercase text-[12px]'>NEW YORK</h2>
                        </div>
                    </div>
                </div>
                </div>
        </SwiperSlide>

        <SwiperSlide >
                
                <div className=' box relative pb-5  '>
                <div className='text-start lg:py-40 lg:px-16' >
                   <div>
                   <h2 className='text-lg uppercase tracking-wider text-neutral'> our  Collector’s  Compliments</h2>
                    <h1 className='font-extrabold mb-5 text-transparent uppercase text-4xl md:text-3xl font-serif  lg:leading-relaxed tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#b18551] to-[#fff] '>What they Say ?</h1>
                   </div>
                    <div className='mt-3 text-white'>
                        <p className='text-xl text-justify font-serif'>I just love their  all stunning Collections. You must know what can you do for a painting before taking it, but with xanthous, the sky is the limit.</p>
                    </div>
                    <div className='flex gap-5 mt-5'>
                        <div className='w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'><img className=' rounded-full border' src="https://i.ibb.co/pjPjGPc/06.jpg" alt="" /></div>
                        <div className='self-center text-neutral tracking-widest'> 
                        <h2 className='uppercase text-[12px] mb-2'>jhon smith</h2>
                        <h2 className='uppercase text-[12px]'>NEW YORK</h2>
                        </div>
                    </div>
                </div>
                </div>
        </SwiperSlide>

        <SwiperSlide >
                
                <div className=' box relative pb-5  '>
                <div className='text-start lg:py-40 lg:px-16' >
                   <div>
                   <h2 className='text-lg uppercase tracking-wider text-neutral'> our  Collector’s  Compliments</h2>
                    <h1 className='font-extrabold mb-5 text-transparent uppercase text-4xl md:text-3xl font-serif  lg:leading-relaxed tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#b18551] to-[#fff] '>What they Say ?</h1>
                   </div>
                    <div className='mt-3 text-white'>
                        <p className='text-xl text-justify font-serif'>I just love their  all stunning Collections. You must know what can you do for a painting before taking it, but with xanthous, the sky is the limit.</p>
                    </div>
                    <div className='flex gap-5 mt-5'>
                        <div className='w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'><img className=' rounded-full border' src="https://i.ibb.co/j353Xq5/04.jpg" alt="" /></div>
                        <div className='self-center text-neutral tracking-widest'> 
                        <h2 className='uppercase text-[12px] mb-2'>ALEX REGELMAN</h2>
                        <h2 className='uppercase text-[12px]'>NEW YORK</h2>
                        </div>
                    </div>
                </div>
                </div>
        </SwiperSlide>

       
        
      </Swiper>
    </>
        </div>
{/* end sweiper div */}
      </div>
      </div>
  </div>
  )
}

export default Testimonial
