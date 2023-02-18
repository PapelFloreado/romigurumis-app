import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/CartContext'
import Spinner from '../Spinner/Spinner'
import Carousel from '../CarouselProductos/CarouselProductos'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {

    const [ counter, setCounter ] = useState(0)
    
    const {addItem, isInCart} = useContext(GlobalContext)

    const { title, id, img, img_carousel, description, price, stock } = item
    
    
    function onAdd(quantity){
        setCounter(quantity)
        addItem(item, quantity)
        
      }
  return (
    <div className='items-center justify-center'>
        {
            item.length < 1 ? <Spinner/> : 
            
            <div className='grid grid-cols-2 gap-4  mt-14'>
                <div className=' mt-10 row-span-3  items-end basis-full  mx-auto container'>
                    {
                        img_carousel === undefined ? <Spinner/> :
                        <Carousel img_principal={img} img_carousel={img_carousel}/>
                    }
                </div>
                <h2 className='text-4xl align-baseline flex items-end mb-16  uppercase font-bold'>{title}</h2>
                <div className='flex flex-col justify-start  align-middle  container mx-auto'>
                    <h2 className='text-6xl my-3'> ${price}</h2>
                    <p className='text-xl my-3'>3 Coutas Sin Interés de ${(price/3).toFixed(2)}</p>
                    <p className='text-lg uppercase'>stock: {stock}</p>
                    <ItemCount onAdd={onAdd} stock={stock}/>
                </div>
                <div>
                    <h2 className='text-2xl'>Descripción del artículo</h2>
                    <p className='text-xl mt-10'>{description}</p>
                </div>
            </div>
        }
    </div>
  )
}

export default ItemDetail