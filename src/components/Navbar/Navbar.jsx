import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logo.svg"

const Navbar = () => {
  return (
    
        <nav className='flex justify-between container mx-auto mt-6 border-b-2 border-b-border-nav pb-5'>
            <div>
                <Link to="/">
                    <img src={logo} className="w-3/4" alt="logo de romigurumis" />
                </Link>
            </div>
            <div className=' items-center flex basis-full justify-between '>
                <Link to="/shop">
                    <button className='font-semibold text-lg'>TIENDA</button>
                </Link>
                <Link to="/about">
                    <button className='font-semibold text-lg'>SOBRE NOSOTROS</button>
                </Link>
                <Link to="/contacto">
                    <button  className='font-semibold text-lg'>CONTACTO</button>
                </Link>
            </div>
        </nav>
    
  )
}

export default Navbar