import React from 'react'

const Item = ({title,img}) => {
  return (
    <div>
        <h2>{title}</h2>
        <img className='w-1/4' src={img} alt="imagen del producto" />
    </div>
  )
}

export default Item