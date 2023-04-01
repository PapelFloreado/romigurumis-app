import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logo.svg"
import CartWidget from '../CartWidget/CartWidget'
import { UserAuth } from '../../context/AuthContext'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"


const Navbar = () => {

    const { user, logOut } = UserAuth()
    const [nav, setNav ] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
    }

    const handleSingOut = ()=>{
        logOut()
    }

  return (
    
        <nav className='flex justify-between container px-6 mx-auto mt-6 border-b-2 border-b-border-nav pb-5'>
            <div className=''>
                <Link to="/">
                    <img src={logo} className="w-2/4 md:w-3/4" alt="logo de romigurumis" />
                </Link>
            </div>
            <div className='hidden md:items-center md:flex basis-full justify-between '>
                <Link to="/shop">
                    <button className='rounded-xl font-semibold text-lg'>TIENDA</button>
                </Link>
                <Link to="/about">
                    <button className='rounded-xl font-semibold text-lg'>SOBRE NOSOTROS</button>
                </Link>
                <Link to="/contacto">
                    <button  className='rounded-xl font-semibold text-lg'>CONTACTO</button>
                </Link>
                {
                    user?.displayName || user?.email ? 
                    
                    (
                    <>
                    <Link to="/account">
                        <button  className='rounded-xl font-semibold text-lg'>MI CUENTA</button>
                    </Link>
                    <button className='rounded-xl font-semibold text-lg' onClick={handleSingOut}>CERRAR SESIÓN</button>
                    </>) : 
        
                    (<Link to="/signin">
                        <button  className='rounded-xl font-semibold text-lg'>INICIAR SESIÓN</button>
                    </Link>)
                    
                        
                    
                }
                
                <Link to="/cart">
                    <CartWidget className="w-96"/>
                </Link>
                
            </div>
            <div className="md:hidden flex items-center">
                <Link to="/cart">
                        <CartWidget className="w-96"/>
                </Link>
            </div>
            <div onClick={handleNav} className='items-center md:hidden flex'>
                {
                    nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />
                }
            </div>
            <ul className={nav? 'fixed pt-6 top-0 left-0 w-[50%] h-full border-r border-r-black bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <li>

                    <Link to="/shop">
                        <button className='rounded-xl font-semibold text-lg'>TIENDA</button>
                    </Link>
                </li>
                <li>

                    <Link to="/about">
                        <button className='rounded-xl font-semibold text-lg'>SOBRE NOSOTROS</button>
                    </Link>
                </li>
                <li>

                    <Link to="/contacto">
                        <button  className='rounded-xl font-semibold text-lg'>CONTACTO</button>
                    </Link>
                </li>

                {
                    user?.displayName || user?.email ? 
                    
                    (
                    <>
                    <Link to="/account">
                        <button  className='rounded-xl font-semibold text-lg'>MI CUENTA</button>
                    </Link>
                    <li>

                    <button className='rounded-xl font-semibold text-lg' onClick={handleSingOut}>CERRAR SESIÓN</button>
                    </li>
                    </>)
                    
                    : 
        
                    (<Link to="/signin">
                        <button  className='rounded-xl font-semibold text-lg'>INICIAR SESIÓN</button>
                    </Link>)
  
                }
                
                
            </ul>
        </nav>
    
  )
}

export default Navbar