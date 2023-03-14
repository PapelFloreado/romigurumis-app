import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/CartContext'
import FormCart from '../FormCart/FormCart'

const CartItems = () => {

    const { carrito, clear, deleteItem, precioFinal } = useContext(GlobalContext)

  return (
    <div className='  min-h-[450px] mt-20'>
        <h2 className='text-4xl my-10 text-center uppercase font-bold'>Carrito de Compras</h2>
        {

        carrito.length < 1 ? 
        (<div className='flex my-32 flex-col items-center justify-center container mx-auto'>
            <p className='text-2xl  my-20'>No hay productos agregados al carrito</p>
            <Link to="/shop">
                <button className='text-2xl rounded-xl text-button-card  font-bold   hover:bg-emerald-800 ease-in-out transition-colors duration-300 bg-banner-color px-8'>Volver a la Tienda</button>
            </Link>
        </div>) : 
        <div>

            {
                carrito.map((producto, index)=>(
                    <div className='flex basis-full w-3/4 justify-between items-center container mx-auto' key={index}>
                        <img className=' w-40 rounded-xl shadow-xl' src={producto.img} alt={producto.title} />
                        <p className='basis-1/4 text-2xl mx-6 uppercase font-bold'>{producto.title}</p>
                        <p className='text-xl mx-6 uppercase font-bold'>Cantidad: {producto.quantity}</p>
                        <p className='text-xl mx-6 uppercase font-bold'>Precio: ${producto.price}</p>
                        <button className='rounded-xl text-2xl mx-6  text-button-card  font-bold   hover:bg-emerald-800 ease-in-out transition-colors duration-300 bg-banner-color px-8' onClick={()=>deleteItem(producto.id)}>Eliminar del Carrito</button>
                    </div>
                ))
            }
            <div>
                <FormCart/>
            </div>
            <div className=' mt-28 flex container mx-auto items-center justify-around  w-1/2'>
                <Link to="/shop">
                    <button className='rounded-xl text-2xl mx-6  text-button-card  font-bold   hover:bg-emerald-800 ease-in-out transition-colors duration-300 bg-banner-color px-8'>Volver a la Tienda</button>
                </Link>
                <p className='uppercase text-3xl font-bold'>Precio Final: ${precioFinal} </p>
                <button className='rounded-xl text-2xl mx-6  text-button-card  font-bold   hover:bg-emerald-800 ease-in-out transition-colors duration-300 bg-banner-color px-8' onClick={clear}>Vaciar Carrito</button>
                
            </div>
        </div>
        }
    </div>
  )
}

export default CartItems