import React from 'react'
import { CiClock1, CiLocationOn } from 'react-icons/ci'
import { HiOutlineMail, HiPhoneIncoming } from 'react-icons/hi'
import beg from '../../asset/beg.jpg'
function Contact() {
  return (
    <div className=' relative lg:pt-24 py-8' style={{backgroundImage:(`url(${beg})`), backgroundSize:'cover', }}  >
        <div className="absolute inset-0  bg-[#020B0D] opacity-30"></div>
      <div className='max-w-screen-xl mx-auto relative' data-aos="fade-up">
        <div className='grid md:grid-cols-2 gap-8 px-8 py-8 lg:py-12'>
        {/* content start */}
        <div className='text-white m-auto' data-aos="fade-right">
            <h2 className='uppercase tracking-wider lg:text-4xl text-2xl font-semibold '> We are always ready to listen you .</h2>
            <p className='my-5'>We feel precious that our supportive team member are always very helpful & kind in nature. Our most priority is you and your want. so we gather all next level collection for you </p>

            <div className='grid lg:grid-cols-2 gap-5'>
                <div>
                    <h2 className='uppercase tracking-wider lg:text-2xl text-xl font-semibold '> sylhet branch</h2>
                    <div className='flex gap-3 mt-3'> 
            <p className='self-center text-2xl'><CiLocationOn className='text-primary'></CiLocationOn></p>
                <div className='text-start'>
                    <p className='text-gray-400'> 103 . Baluchar, Sylhet, Bangladesh</p>
                </div>
            </div>
                    <div className='flex gap-3  my-3'> 
            <p className='self-center text-2xl'><HiPhoneIncoming className='text-primary'></HiPhoneIncoming></p>
                <div className='text-start'>
                    <p className='text-gray-400'>+888 01789368876</p>
                </div>
            </div>

            <div className='flex gap-3'> 
            <p className='self-center text-2xl'><HiOutlineMail className='text-primary'></HiOutlineMail></p>
                <div className='text-start'>
                    <p className='text-gray-400'>xanthous@gmail.com</p>
                </div>
            </div>
            <div className='flex gap-3 mt-3'> 
            <p className='self-center text-2xl'><CiClock1 className='text-primary'></CiClock1></p>
                <div className='text-start'>
                    <p className='text-gray-400'> 10:00 AM -- 06:00 PM</p>
                </div>
            </div>
                </div>
                {/* //2 */}
                <div>
                    <h2 className='uppercase tracking-wider lg:text-2xl text-xl font-semibold '> Dhaka branch</h2>
                    <div className='flex gap-3 mt-3'> 
            <p className='self-center text-2xl'><CiLocationOn className='text-primary'></CiLocationOn></p>
                <div className='text-start'>
                    <p className='text-gray-400'> 504 uttara . Dhaka,  Bangladesh</p>
                </div>
            </div>
                    <div className='flex gap-3  my-3'> 
            <p className='self-center text-2xl'><HiPhoneIncoming className='text-primary'></HiPhoneIncoming></p>
                <div className='text-start'>
                    <p className='text-gray-400'>+888 01789368876</p>
                </div>
            </div>

            <div className='flex gap-3'> 
            <p className='self-center text-2xl'><HiOutlineMail className='text-primary'></HiOutlineMail></p>
                <div className='text-start'>
                    <p className='text-gray-400'>xanthous@gmail.com</p>
                </div>
            </div>
            <div className='flex gap-3 mt-3'> 
            <p className='self-center text-2xl'><CiClock1 className='text-primary'></CiClock1></p>
                <div className='text-start'>
                    <p className='text-gray-400'> 10:00 AM -- 06:00 PM</p>
                </div>
            </div>
                </div>
            </div>
       
        </div>
        {/* content- end */}

        {/* form start */}
        <div className='bg-[#020b0d] border-double border-[5px] border-accent  ' data-aos="zoom-in-right">
           <div className='lg:scale-75 scale-90 text-white '>
            <div>
                <h2 className='uppercase tracking-wider lg:text-4xl text-2xl font-semibold'>Contact Form</h2>
                <h1 className='lg:pr-20 lg:text-xl font-sans  text-justify py-5 lg:mb-4'>
                For more information or any booking, our reservation team is available 24/7 by phone <span className='text-secondary'>
                +33(0)7994688 </span>  or by email  
                <span className='text-secondary'> xanthous@team.com </span>.</h1>
            </div>
           <form className='text-white' >
                  <div className='grid  gap-4 '>
                            <input name="firstName" type="text" placeholder="Your Full Name" 
                            className="input  bg-transparent border border-neutral rounded-sm " />
                                    
                            <input name="email" type="text" placeholder="Your Email"   
                            className="input  bg-transparent border border-neutral rounded-sm "  />

                            <input name="subject" type="text" placeholder="Subject"  
                            className="input  bg-transparent border border-neutral rounded-sm "  />
                            </div>
                            <textarea name="message" className="textarea bg-transparent border border-neutral rounded-sm  h-40 w-full my-5 "  
                            placeholder="Your Message" required></textarea>
        
                            <input className='btn bg-transparent border text-primary hover:bg-transparent rounded-md  btn-wide ' type="submit" value="Send Message" />
            </form>
           </div>
        </div>
        {/* form end */}
        </div>
      </div>
    </div>
  )
}

export default Contact
