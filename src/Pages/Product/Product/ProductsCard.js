import React from 'react';

const ProductsCard = ({product,setBooking}) => {
    const{sellerName,originalPrice,resalePrice,title,description,image,Collect}=product;
    
    return (
     <div data-aos="zoom-in-up">
         <div className='bg-black text-white'>
        <div className=' grid lg:p-16 p-8'>
        <div className='lg:w-80 lg:m-auto'>
            <img src={image} alt="" />
        </div>
        <div>
        <div className='my-5 text-center'>
            <h2 className='uppercase  text-transparent lg:text-2xl text-xl font-serif  lg:leading-relaxed tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#b18551] to-[#fff]'>{title}</h2>
        </div>
        <div className=''>
            <p className='text-justify'><span className='uppercase text-primary font-serif font-thin text-sm tracking-wider'>seller Name :</span> {sellerName}</p>
            <p className='text-justify'><span className='uppercase text-primary font-serif font-thin text-sm tracking-wider'>Description :</span> {description}</p>
            <p className='text-justify'><span className='uppercase text-primary font-serif font-thin text-sm tracking-wider'>Collection Time :</span> {Collect}</p>
            <p className='text-justify'><span className='uppercase text-primary font-serif font-thin text-sm tracking-wider'>Collected Price :</span> $ {originalPrice}</p>
            <p className='text-justify'><span className='uppercase text-primary font-serif font-thin text-sm tracking-wider'>resale Price :</span> $ {resalePrice}</p>
        </div>
        <div className="mt-5">
            
            <label htmlFor="booking-modal" className="btn-67 text-white btn-wide text-center" onClick={()=>setBooking(product)}>Book now</label>
        </div>
        </div>
        </div>

      </div>
     </div>
    );
};

export default ProductsCard;