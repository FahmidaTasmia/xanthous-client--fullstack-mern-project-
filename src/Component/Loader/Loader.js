import React from 'react'
import { Triangle } from 'react-loader-spinner'

function Loader() {
  return (
    <div>
      <Triangle
  height="80"
  width="80"
  color="#b89d4f"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>
    </div>
  )
}

export default Loader
