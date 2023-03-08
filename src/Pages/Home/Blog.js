import React from 'react'
import { Link } from 'react-router-dom'
import art1 from '../../asset/dan.jpg'
import dot from '../../asset/dots.png'
import dan from '../../asset/ado.jpg'
function Blog() {
  return (
    <div className=' px-8 md:pt-16 pt-8  ' style={{backgroundImage:(`url(${dot})`)}}>
      <div className='max-w-screen-xl mx-auto relative '>
      <div className='relative m-auto pb-5 px-5' >
       <h2 className="font-bold text-6xl text-start   md:text-[120px] text-gray-300 opacity-[0.1] numbs uppercase hidden lg:block">OUR BLOGS</h2>
       <h2 className="font-bold text-6xl text-start   md:text-[120px] text-gray-300 opacity-[0.07] numbs uppercase lg:hidden block">BLOGS</h2>
        <h2 data-aos="zoom-in-right" className='uppercase relative bottom-[70px]  font-extrabold mb-5 text-transparent lg:text-4xl md:text-3xl text-2xl  font-serif  lg:leading-relaxed tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#b18551] to-[#000]'>Our LATEST NEWS.</h2>
       </div>
    <div className='grid md:grid-cols-2 md:gap-x-12 ' data-aos="fade-up">
        <div>
            <div className='relative  hover:scale-105 duration-700 ease-in-out' >
                <img className='w-full' src={art1} alt="" />
            </div>
             <div className='bg-white py-5 md:p-5 mx-5 text-center relative md:bottom-24 bottom-12'>
               <div className='md:scale-90'>
                <div className='flex gap-5 justify-center'>
                    <h2>ALEX SMITHAUG </h2>
                    <p>---</p>
                    <h2>06-2022</h2>
                    </div>
                <h2 className='uppercase  font-extrabold  text-transparent lg:text-4xl  font-serif  lg:leading-relaxed tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#b18551] to-[#000]'> 
                Artist focus: L.HUNT
                </h2>
                <p className='text-lg text-gray-500 mb-5'>A closer look at the artwork of L.HUNT</p>
                <Link className='uppercase text-primary  border-b md:p-3 border-primary'>Read more</Link>
               </div>
             </div>
        </div>
        {/* 2 */}
        <div>
            <div className='relative  hover:scale-105 duration-700 ease-in-out' >
                <img className='w-full' src={dan} alt="" />
            </div>
             <div className='bg-white py-5 md:p-5 mx-5 text-center relative md:bottom-24 bottom-12'>
               <div className='md:scale-90'>
                <div className='flex gap-5 justify-center'>
                    <h2 className='uppercase'> Sent Joseph </h2>
                    <p>---</p>
                    <h2>02-2023</h2>
                    </div>
                <h2 className='uppercase  font-extrabold  text-transparent lg:text-4xl  font-serif  lg:leading-relaxed tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#b18551] to-[#000]'> 
                Fervent Emblems
                </h2>
                <p className='text-lg text-gray-500 mb-5'>Painting Becomes Exciting Again</p>
                <Link className='uppercase text-primary  border-b md:p-3 border-primary'>Read more</Link>
               </div>
             </div>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Blog
