import React from 'react'
import {logo} from "../../assets/index"

export default function header() {
  return (
    <div className='w-full bg-amazon_blue text-white px-4 py-3'>
      <div className='px-2 h-[80%] flex items-center border border-transparent 
      hover:border-white cursor-pointer duration-100'>
        <img className='w-24 mt-2' src={logo}/>
      </div>
    </div>
  )
}
