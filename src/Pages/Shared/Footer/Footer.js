import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import {HiOutlineMail,HiPhoneIncoming } from "react-icons/hi";
import { SlPaperPlane } from "react-icons/sl";
import { FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import vecto from '../../../asset/line-pattern.png'
function Footer() {
  return (
   <div className=' p-16 relative ' style={{backgroundImage:(`url(${vecto})`)}}>
    <div className="absolute inset-0  bg-black opacity-90"></div>
     <div className='max-w-screen-xl mx-auto relative text-white' data-aos="fade-up">
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>

        <div>
            <h1 className='uppercase font-bold text-start mb-4 tracking-[4px]'>Countact us.</h1>
            <div className='flex gap-5'> 
            <p className='self-center text-4xl'><CiLocationOn className='text-primary'></CiLocationOn></p>
                <div className='text-start'>
                   
                    <h2 className='text-primary uppercase tracking-widest font-semibold'>official Address</h2>
                    <p className='text-gray-400'>504 uttara . Dhaka, GA 30534 , Bangladesh</p>
                </div>
            </div>
            <div className='flex gap-5 my-3'> 
            <p className='self-center text-4xl'><HiOutlineMail className='text-primary'></HiOutlineMail></p>
                <div className='text-start'>
                   
                    <h2 className='text-primary uppercase tracking-widest font-semibold'>Email Us</h2>
                    <p className='text-gray-400'>tasmia@gmail.com</p>
                </div>
            </div>

            <div className='flex gap-5'> 
            <p className='self-center text-4xl'><HiPhoneIncoming className='text-primary'></HiPhoneIncoming></p>
                <div className='text-start'>
                   
                    <h2 className='text-primary uppercase tracking-widest font-semibold'>Call Us</h2>
                    <p className='text-gray-400'>+789368876</p>
                </div>
            </div>
        </div>

        {/* service */}
        <div className='text-start' 
>
            <h2 className='uppercase font-bold text-start mb-4 tracking-[4px]'>Our Collection.</h2>
            <div className='flex gap-5'>
                <img className='w-20 h-20' src="https://i.ibb.co/x8HmLVN/test.png" alt="" />
                <div>
                    <Link to='/service' className='text-primary uppercase tracking-widest font-semibold'>Vintage Collection</Link>
                    <p className='font-thin text-gray-400'>We take care of everything related to project documentation, providing you with all the information you need. </p>
                </div>
            </div>
            <div className='flex gap-5 my-5'>
                <img className='w-20 h-20' src="https://i.ibb.co/TWKnRxg/raghav.jpg" alt="" />
                <div>
                <Link to='/service' className='text-primary uppercase tracking-widest font-semibold'>Latest Collection</Link>
                    <p className='font-thin text-gray-400'>We take care of everything related to project documentation, providing you with all the information you need. </p>
                </div>
            </div>

            <div className='flex pb-8'>
            <input type="text" placeholder="Type here" className="input input-bordered text-black border-primary w-full rounded-full" />
            <p className='text-2xl border p-5 border-primary rounded-full relative right-10 z-30 bg-primary bottom-3 ' ><SlPaperPlane className='text-black'></SlPaperPlane></p>
            </div>
        </div>

        {/* company */}

        <div className='text-start mx-auto'>
            <h2 className='uppercase font-bold text-2xl text-start mb-4 tracking-[2px] text-primary'>Xanthous</h2>
            <div className='flex gap-5 my-5'>
            <Link className='p-5 border rounded-full border-[#c5a47e]'><FaFacebookF className='text-xl text-primary  shadow-xl '></FaFacebookF></Link>
            <Link className='p-5 border rounded-full border-[#c5a47e]'><FaInstagram className='text-xl text-primary  shadow-xl '></FaInstagram></Link>
            <Link className='p-5 border rounded-full border-[#c5a47e]'><FaLinkedinIn className='text-xl text-primary  shadow-xl '></FaLinkedinIn></Link>
            </div>
            <p>© 2022, Xanthous. MADE WITH PASSION BY <span className='text-primary font-bold'>TASMIA</span> .</p>
            <p className='text-gray-400'>all rights reserved !</p>
        </div>

      </div>
    </div>
   </div>
  )
}

export default Footer