import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
    console.log(items)
  return (
    <div className='flex container mx-auto justify-between min-h-screen'>
        {
            items === 0 ? <p>cargando</p> : items.map((items, index)=>(<Item key={index} id={items.id} title={items.title} img={items.img}/> ))  
        }
    </div>
  )
}

export default ItemList