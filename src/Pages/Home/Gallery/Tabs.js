import React from 'react'

function Tabs({filterCategory, tabsData}) {
  return (
    <div>
      <>
 <div className="text-center my-4 relative">
 {
 tabsData.map((category, index)=>{
      return (
        <button type="button" className="btn btn-neutral transition duration-500 hover:scale-105 ease-in-out mx-2 my-3 rounded-none  text-capitalize" onClick={()=> filterCategory(category)} key={index}>{category}</button>
      )
 })
 }
</div>
        </>
    </div>
  )
}

export default Tabs
