import React, { useState } from 'react'
import Data from './Data';
import Tabs from './Tabs';
import Item from './Item';
import bg from '../../../asset/line-pattern.png'
function Gallary() {
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= ["all", ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category==="all"){
            setData(Data);
            return;
        }
       const filteredData =  Data.filter((value)=>{
           return value.category === category;
       })
       setData(filteredData);
    }
  return (
    <div className='bg-white  relative' style={{backgroundImage:(`url(${bg})`)}}>
       <div className="absolute inset-0  bg-white opacity-60"></div>
       <div className='relative m-auto '>
       <h2 className="font-bold text-6xl text-start relative top-[70px]  md:text-[120px] text-gray-300 opacity-[0.1] px-3 numbs">COLLECTION</h2>
        <h2 className='uppercase text-center   font-extrabold mb-5 text-transparent lg:text-4xl md:text-3xl font-serif  lg:leading-relaxed tracking-wider lg:tracking-[2px] bg-clip-text bg-gradient-to-r from-[#b18551] to-[#000]'>CHECK XANTHOUS Huge Collections Here.</h2>
        {/* <p>You've got to invest in the world, you've got to read, you've got to go to art galleries, you've got to find out the names of plants. You've got to start to love the world and know about the whole genius of the human race. We're amazing people.</p> */}
       </div>
      <div className='grid '>
      <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
            <Item data={data} />
      </div>
    </div>
  )
}

export default Gallary
