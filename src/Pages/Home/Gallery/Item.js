import React from 'react'
import '../Home.css'
import bg from '../../../asset/line-pattern.png'
function Item({data}) {
  return (
    <div className='max-w-screen-xl mx-auto p-10'>
       <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
        {
          data.map((value)=>{
           const {id, image, title, description} = value;
           return (
          <div data-aos="zoom-in-up">
             <div className="group relative  duration-500 ease-in-out overflow-hidden" >
             <div className='grid  '>
                  <div className='relative overflow-hidden'>
                  <div className="group-hover:scale-110 duration-500 ease-in-out hover:-translate-y-6"><img src={image} alt="" /></div>
                  <div className="absolute inset-0 bg-slate-900/50 bottom-[75px] opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                    <div className='bg-white font-serif bottom-[70px] mr-10 py-5 px-2  relative ' >
                        <h2 className='z-40'>{description.slice(0,100)}</h2>
                    </div>
                   
                    
                    <div className="absolute pl-6 ltr:left-0 rtl:right-0 bottom-[200px] opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                <div className="pb-4 ltr:pl-4 rtl:pr-4 ">
                                    <h2 className='numb '>{id}</h2>
                                   
                                 <h2 className='numb uppercase tracking-widest text-xl'>{title}</h2>
                                  
                                </div>
                            </div>
                  
                  </div>
            </div>
           </div>
          </div>

           )
          })
        }
</div>
    </div>
  )
}

export default Item
