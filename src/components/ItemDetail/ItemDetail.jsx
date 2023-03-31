import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/CartContext'
import Spinner from '../Spinner/Spinner'
import Carousel from '../CarouselProductos/CarouselProductos'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import Toast from '../Toast/Toast'

const ItemDetail = ({item}) => {

    const [ counter, setCounter ] = useState(0)
    const [ add, setAdd ] = useState(false)
    
    const {addItem, isInCart} = useContext(GlobalContext)

    const { title, id, img, img_carousel, description, price, stock } = item
    
    
    function onAdd(quantity){
        setAdd(true)
        setCounter(quantity)
        addItem(item, quantity)
        setTimeout(() => {
            setAdd(false)
        }, 3000);
        
    }
    return (
        <div className='items-center justify-center'>

            {
                item.length < 1 ? <Spinner/> : 
                
                <div className='md:grid md:grid-cols-2 gap-4  mt-14'>
                    
                    
                    <div className=' mt-10 row-span-3  items-end basis-full  mx-auto container'>
                        {
                            img_carousel === undefined ? <Spinner/> :
                            <Carousel img_principal={img} img_carousel={img_carousel}/>
                        }
                    </div>
                    <div className='md:align-baseline md:flex md:items-end '>
                        <h2 className='text-3xl md:text-4xl align-baseline text-center mt-10 mb-10  uppercase font-bold'>{title}</h2>
                    </div>
                    <div className='md:flex md:flex-col text-center md:text-left  justify-start  align-middle  container mx-auto'>
                        <h2 className='text-4xl md:text-6xl my-3'> ${price}</h2>
                        <p className='text-xl my-3'>3 Coutas Sin Interés de ${(price/3).toFixed(2)}</p>
                        <p className='text-lg uppercase'>stock: {stock}</p>
                        {
                            isInCart(id) ? (
                                <div className='md:flex md:flex-col  md:justify-start'>
                                    <Link className='mx-4' to="/shop">
                                        <button className='rounded-xl mb-6 text-2xl mt-4 w-1/3 text-button-card  font-bold   hover:bg-emerald-800 ease-in-out transition-colors duration-300 bg-banner-color px-8'>Volver a la Tienda</button>
                                    </Link>
                                    <Link className='mx-4' to="/cart">
                                        <button className='rounded-xl text-2xl  w-1/3  text-button-card  font-bold   hover:bg-emerald-800 ease-in-out transition-colors duration-300 bg-banner-color px-8'>Finalizar Compra</button>
                                    </Link>
                                </div>
                        )
                        : (<ItemCount onAdd={onAdd} stock={stock}/>)
                    

                        }
                    </div>
                    
                    <div>
                        <h2 className='text-2xl md:text-left text-center'>Descripción del artículo</h2>
                        <p className='text-xl text-center md:text-left mt-10'>{description}</p>
                        
                    </div>
                        {
                            
                
            }
                </div>
                
            }
            <div>
                    {add === true ? <Toast/> : <div className='hidden'></div>}
            </div>
            
        </div>
    )
    }

export default ItemDetail