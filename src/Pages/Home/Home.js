import React from 'react'
import Category from '../Product/Category/Category'
import About from './About'
import Blog from './Blog'
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
  <Category></Category>
  <Gallary></Gallary>
  <Testimonial></Testimonial>
  <Team></Team>
  <Contact></Contact>
  <Blog></Blog>
    </div>
  )
}

export default Home
