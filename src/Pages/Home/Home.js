import React from 'react'
import About from './About'
import Contact from './Contact'
import Gallary from './Gallery/Gallary'
import Slider from './Slider/Slider'
import Team from './Team'
import Testimonial from './Testimonial/Testimonial'


function Home() {
  return (
    <div>
  <Slider></Slider>
  <About></About>
  <Gallary></Gallary>
  <Testimonial></Testimonial>
  <Team></Team>
  <Contact></Contact>
  
    </div>
  )
}

export default Home
