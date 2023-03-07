import React from 'react'
import line from '../../asset/line-pattern.png'
import line2 from '../../asset/bg.jpg'
import line3 from '../../asset/dan.jpg'
import './Home.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className=' p-5 lg:p-24 md:p-12  relative' data-aos="fade-up">
    {/* <div className="absolute inset-0  bg-black opacity-40"></div> */}
     <div className=' '>
        <div className='grid lg:grid-cols-2 gap-8'>
            {/* div1 [content div] */}
            <div className='m-auto'>
                
           <div className='lg:px-5'>
           <div className='flex gap-4'><div className='w-24 h-[1px] bg-primary mt-4'></div> <h2 className='uppercase font-semibold text-2xl mb-5  '>WELCOME</h2></div>
            <div><h2 className='font-extrabold mb-5 text-transparent text-4xl md:text-3xl font-serif  lg:leading-relaxed tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#b18551] to-[#000]'>BEST ART COLLECTIONS  FOR YOU.</h2></div>
            <div className='text-justify grid gap-5 font-[robots]'>
                <p>Art is a diverse range of human activities in creating visual, auditory, or performing artifacts (artworks), expressing the author’s imaginative, conceptual ideas, or technical skill.</p>
                <p>Art can be defined as a diverse range of activities executed by human beings, as well as the products of these activities. Art can be of many forms, as well.
                     A visual art is the creation of images that can be seen by the eyes and these include sculpting,
                      painting, photography and other visual media. </p>
                      <div className=' flex justify-start '>
               <Link to='/about' className='btn-67 text-primary shadow-2xl'> READ More</Link>
               </div>   
            </div>
           
           </div>
           
            </div>
            {/* image div [div-2] */}
           <div >
           <div  >
                {/* div1 */}
                <div className='grid grid-cols-2 lg:gap-8 md:gap-5 gap-8'>
                   <div style={{backgroundImage:(`url(${line})`)}} ></div>
                    <div  data-aos="zoom-in-right"><img className='rounded-sm '  src={line3} alt="" /></div>
                    <div className='lg:h-[50vh] '  data-aos="zoom-in-left"><img className='w-full h-full'   src={line2} alt="" /></div>
                    <div className='border-8   md:scale-75    relative  hidden md:block '>

                        <div className='exp  '>
                            <h2 className='text-primary leading-[50px] font-bold  md:text-6xl z-0'>21</h2>
                            <p className='text-xl tracking-[3px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#000] to-[#b18551]'>Years Of Glory</p>
                        </div>
                    </div>
                    <div className='block md:hidden' style={{backgroundImage:(`url(${line})`)}} ></div>
                </div>
             
            </div>
           </div>
           {/* end img div */}
        </div>
     </div>
    </div>
  )
}

export default About
