import React from 'react'
import Spinner from '../Spinner/Spinner'
import Carousel from '../CarouselProductos/CarouselProductos'

const ItemDetail = ({item}) => {
  

    const { title, id, img_carousel, description } = item

  return (
    <div>
        {
            item.length < 1 ? <Spinner/> : 
            
            <div className='flex-col items-center mt-14'>
                <h2 className='text-3xl text-center uppercase font-bold'>{title}</h2>
                <div className='flex mt-10'>
                    {
                        img_carousel === undefined ? <Spinner/> :
                        <Carousel img_carousel={img_carousel}/>
                    }
                </div>
                <div>
                    <h2>precio</h2>
                </div>
                <p className='text-xl text-center mt-10'>{description}</p>
            </div>
        }
    </div>
  )
}

export default ItemDetail