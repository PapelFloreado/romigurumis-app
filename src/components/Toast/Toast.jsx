import React from 'react'
import {HiOutlineCheck} from "react-icons/hi2"

const Toast = () => {

    return (

        <div className=' transition-all ease-in-out  duration-1000 text-button-card items-center mx-auto container rounded-xl flex flex-row-reverse  min-h-[40px]'>
            <h2 className='mx-6 justify-center items-center flex text-xl absolute top-[85%] bg-banner-color p-6 rounded-xl'>Producto agregado al carrito <HiOutlineCheck className=''/></h2>
        </div>
  )
}

export default Toast