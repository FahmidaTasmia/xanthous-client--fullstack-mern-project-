import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import Slider from '../../Home/Slider/Slider';
import BookingModal from './BookingModal';
import ProductsCard from './ProductsCard';
import dot from '../../../asset/dots.png'

function Product() {
    const allProducts = useLoaderData();
    const[booking,setBooking]=useState(null);
  return (
    <div>
        <div>
            <Slider></Slider>
        </div>
       <div className='lg:p-24 p-8' style={{backgroundImage:(`url(${dot})`)}}>
       <div className='relative m-auto pb-5 px-5' >
       <h2 className="font-bold text-6xl text-start   md:text-[120px] text-gray-300 opacity-[0.07] numbs uppercase "> Collection </h2>
        <h2 data-aos="zoom-in-right" className='uppercase relative bottom-[70px]  font-extrabold mb-5 text-transparent lg:text-4xl md:text-3xl font-serif  lg:leading-relaxed tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#b18551] to-[#000]'>
            You are Our Priority ! <br /> Collect YOUR DREAM before stock out .
            </h2>
       </div>
       <div className='max-w-screen-xl mx-auto'>
         <div className='grid md:grid-cols-2 gap-8 '>
         
         {
                allProducts.map(product=><ProductsCard
                key={product._id}
                product={product}
                setBooking={setBooking}
                ></ProductsCard>)
           }



        </div>

      {
        booking &&
        <BookingModal
        booking={booking}
        setBooking={setBooking}
        ></BookingModal>
      }
       </div>
       </div>
    </div>
  )
}

export default Product
