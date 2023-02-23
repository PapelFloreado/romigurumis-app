import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logo.svg"
import CartWidget from '../CartWidget/CartWidget'
import { UserAuth } from '../../context/AuthContext'

const Navbar = () => {

    const { user, logOut } = UserAuth()

    const handleSingOut = ()=>{
        logOut()
    }

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
                {
                    user?.displayName ? <button className='font-semibold text-lg' onClick={handleSingOut}>CERRAR SESIÓN</button> : <Link to="/signin">
                    <button  className='font-semibold text-lg'>INICIAR SESIÓN</button>
                </Link>
                }
                
                <Link to="/cart">
                    <CartWidget className="w-96"/>
                </Link>
            </div>
        </nav>
    
  )
}

export default Navbar