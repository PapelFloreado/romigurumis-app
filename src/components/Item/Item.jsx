import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({title,img, id}) => {
  return (
    <div className='items-center flex-col mt-10 p-6'>
        <h2 className='text-center font-bold uppercase mb-6 text-2xl'>{title}</h2>
        <div className='flex justify-center'>
            <img className='rounded-xl shadow-2xl w-3/4' src={img} alt="imagen del producto" />
        </div>
        <div className='flex justify-center mt-6'>
            <Link to={`/shop/item-detail/${id}`}>
                <button className='text-xl font-bold'>Conocer más</button>
            </Link>
        </div>
    </div>
  )
}

export default Item