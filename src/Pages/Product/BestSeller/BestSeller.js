import React, { useEffect, useState } from 'react'
import Loader from '../../../Component/Loader/Loader';
import Card from './Card';
import dot from '../../../asset/dots.png'

function BestSeller() {
    const[products,setProducts]=useState ([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/bestItem')
        .then(res=>res.json())
        .then(data=>{
            setLoading(false);
            setProducts(data);
        })
    },[])
    if(loading){
        return <Loader></Loader>
    }
  return (
    <div className='lg:pb-44 p-8 bg-white ' style={{backgroundImage:(`url(${dot})`)}} >
   
    <div className='max-w-screen-xl mx-auto '  >
    <div className='relative m-auto pb-5 px-5' >
      <h2 className="font-bold text-6xl text-start   md:text-[120px] text-gray-300 opacity-[0.07] numbs uppercase ">BEST SELLER </h2>
       <h2 data-aos="zoom-in-right" className='uppercase relative bottom-[70px]  font-extrabold mb-5 text-transparent lg:text-4xl md:text-3xl font-serif  lg:leading-relaxed tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#b18551] to-[#000]'>Our best seller item</h2>
      </div>

     <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5  px-10 '>
       {
           products?.map(product=><Card key={product._id} product={product}>

           </Card>)
       }
     </div>
   </div>
  </div>
  )
}

export default BestSeller
