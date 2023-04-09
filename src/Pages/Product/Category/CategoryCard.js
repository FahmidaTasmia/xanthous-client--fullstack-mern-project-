import React from 'react'
import { Link } from 'react-router-dom';

function CategoryCard({category}) {
    const{img,name,_id} =category;
    console.log('hello', category)
  
  return (
    <div data-aos="zoom-in-up">
     <div className="group relative  duration-500 ease-in-out overflow-hidden" >
             <div className='grid  '>
                  <div className='relative overflow-hidden'>
                  <div className="group-hover:scale-110 duration-500 ease-in-out "><img className='md:h-80 md:w-80' src={img} alt="" /></div>
                  <div className="absolute inset-0 md:w-80 bg-[#020b0d8e]  opacity-1 group-hover:opacity-100 duration-500 ease-in-out"></div>
                   
                    <div className="absolute pl-6 flex justify-center ltr:left-50 rtl:right-50 bottom-[100px] opacity-1 group-hover:opacity-100 duration-500 ease-in-out">
                                <div className=" ">
                                    <h2 className='text-neutral font-serif tracking-widest font-semibold text-xl mb-5 uppercase'>{name}</h2>
                                    <Link to={`/category/${_id}`} className='btn-67 text-white w-40 '>Explore</Link>
                                  
                                </div>
                            </div>
                  
                  </div>
            </div>
           </div>
    </div>
  )
}

export default CategoryCard
