import React from 'react'
import dot from '../../asset/dots.png'
import team1 from '../../asset/2.jpg'
import team2 from '../../asset/1.jpg'
import team3 from '../../asset/3.jpg'
import team4 from '../../asset/4.jpg'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram,  FaLinkedinIn } from 'react-icons/fa'
function Team() {
  return (
    <div className='lg:p-24' style={{backgroundImage:(`url(${dot})`)}} >
      <div className='max-w-screen-xl mx-auto min-h-screen' >
      <div className='relative m-auto pb-5 px-5' >
       <h2 className="font-bold text-6xl text-start relative top-[70px]  md:text-[120px] text-gray-300 opacity-[0.07] numbs uppercase hidden lg:block"> creative TEAM</h2>
       <h2 className="font-bold text-6xl text-start relative top-[70px]  md:text-[120px] text-gray-300 opacity-[0.07] numbs uppercase lg:hidden block"> TEAM</h2>
        <h2 data-aos="zoom-in-right" className='uppercase   font-extrabold mb-5 text-transparent lg:text-4xl md:text-3xl font-serif  lg:leading-relaxed tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#b18551] to-[#000]'>About Our creative Team Spirit.</h2>
        {/* <p>You've got to invest in the world, you've got to read, you've got to go to art galleries, you've got to find out the names of plants. You've got to start to love the world and know about the whole genius of the human race. We're amazing people.</p> */}
       </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 px-5' data-aos="fade-up">
        <div className='team lg:px-10 md:py-3 border-double border-neutral border-[5px] '>
            <div className='scale-90'>
            <div className=''>
                <img src={team1} alt="" />
            </div>
            <div className='mt-3'>
                <h2 className='uppercase text-[#684E30] font-bold font-serif tracking-wider'>Mike Douglas</h2>
                <h2 className='text-accent tracking-wider'>Department of Arts</h2>
            </div>
            <div className='flex gap-5 my-5'>
            <Link className='p-3 border rounded-none border-[#684E30] '><FaFacebookF className='text-xl text-primary shadow-xl '></FaFacebookF></Link>
            <Link className='p-3 border rounded-none border-[#684E30]'><FaInstagram className='text-xl  text-primary shadow-xl '></FaInstagram></Link>
            <Link className='p-3 border rounded-none border-[#684E30]'><FaLinkedinIn className='text-xl text-primary  shadow-xl '></FaLinkedinIn></Link>
            </div>
            </div>
        </div>
        {/* di2v */}
        <div className='team lg:px-10 md:py-3 border-double border-neutral border-[5px] data-aos="fade-up"'>
            <div className='scale-90'>
            <div className=''>
                <img src={team2} alt="" />
            </div>
            <div className='mt-3'>
                <h2 className='uppercase text-[#684E30] font-bold font-serif tracking-wider'>Fedro Roktob</h2>
                <h2 className='text-accent tracking-wider '>Senior Collectors</h2>
            </div>
            <div className='flex gap-5 my-5'>
            <Link className='p-3 border rounded-none border-[#684E30] '><FaFacebookF className='text-xl text-primary shadow-xl '></FaFacebookF></Link>
            <Link className='p-3 border rounded-none border-[#684E30]'><FaInstagram className='text-xl  text-primary shadow-xl '></FaInstagram></Link>
            <Link className='p-3 border rounded-none border-[#684E30]'><FaLinkedinIn className='text-xl text-primary  shadow-xl '></FaLinkedinIn></Link>
            </div>
            </div>
        </div>
        {/* div3 */}
        <div className='team lg:px-10 md:py-3 border-double border-neutral border-[5px] '>
            <div className='scale-90'>
            <div className=''>
                <img src={team3} alt="" />
            </div>
            <div className='mt-3'>
                <h2 className='uppercase text-[#684E30] font-bold font-serif tracking-wider'>Daniel EVANS</h2>
                <h2 className='text-accent tracking-wider'>Art Critic</h2>
            </div>
            <div className='flex gap-5 my-5'>
            <Link className='p-3 border rounded-none border-[#684E30] '><FaFacebookF className='text-xl text-primary shadow-xl '></FaFacebookF></Link>
            <Link className='p-3 border rounded-none border-[#684E30]'><FaInstagram className='text-xl  text-primary shadow-xl '></FaInstagram></Link>
            <Link className='p-3 border rounded-none border-[#684E30]'><FaLinkedinIn className='text-xl text-primary  shadow-xl '></FaLinkedinIn></Link>
            </div>
            </div>
        </div>
        {/* div4 */}
        <div className='team lg:px-10 md:py-3 border-double border-neutral border-[5px] '>
            <div className='scale-90'>
            <div className=''>
                <img src={team4} alt="" />
            </div>
            <div className='mt-3'>
                <h2 className='uppercase text-[#684E30] font-bold font-serif tracking-wider'>Richard Piters</h2>
                <h2 className='text-accent tracking-wider'>Senior Artist</h2>
            </div>
            <div className='flex gap-5 my-5'>
            <Link className='p-3 border rounded-none border-[#684E30] '><FaFacebookF className='text-xl text-primary shadow-xl '></FaFacebookF></Link>
            <Link className='p-3 border rounded-none border-[#684E30]'><FaInstagram className='text-xl  text-primary shadow-xl '></FaInstagram></Link>
            <Link className='p-3 border rounded-none border-[#684E30]'><FaLinkedinIn className='text-xl text-primary  shadow-xl '></FaLinkedinIn></Link>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Team
