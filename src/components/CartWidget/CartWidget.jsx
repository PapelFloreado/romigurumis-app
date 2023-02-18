import React, {useContext} from 'react'
import { GlobalContext } from "../../context/CartContext"
import {BsCart2} from "react-icons/bs"
import "./CartWidget.css"

const CartWidget = () => {

    const {carritoCount, carrito} = useContext(GlobalContext)

  return (
    <div className='flex justify-center items-center'>
        <BsCart2 className='widget'/>
        <p className="mx-2 text-2xl">{carritoCount}</p>
    </div>
  )
}

export default CartWidget

