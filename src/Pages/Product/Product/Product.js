import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import Slider from '../../Home/Slider/Slider';
import BookingModal from './BookingModal';
import ProductsCard from './ProductsCard';

function Product() {
    const allProducts = useLoaderData();
    const[booking,setBooking]=useState(null);
  return (
    <div>
        <div>
            <Slider></Slider>
        </div>
       <div className='lg:p-24'>
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
