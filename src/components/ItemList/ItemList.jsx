import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
    console.log(items)
  return (
    <>
        {
            items === 0 ? <p>cargando</p> : items.map((items, index)=>(<Item key={index} title={items.title} img={items.img}/> ))  
        }
    </>
  )
}

export default ItemList