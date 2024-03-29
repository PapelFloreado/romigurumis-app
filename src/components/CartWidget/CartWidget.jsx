import React, {useContext} from 'react'
import { GlobalContext } from "../../context/CartContext"
import {HiOutlineShoppingCart} from "react-icons/hi2"
import "./CartWidget.css"

const CartWidget = () => {

    const {carritoCount, precioFinal} = useContext(GlobalContext)

  return (
    
    <div className='flex md:flex justify-center items-center'>
        <HiOutlineShoppingCart className='widget'/>
        <p className="mx-2 text-lg md:text-2xl">{carritoCount} <span className='text-lg md:text-4xl font-bold'> | </span><span>$ {precioFinal}</span></p>
    </div>
  )
}

export default CartWidget

