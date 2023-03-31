import React, { useState } from 'react'

const ItemCount = ({stock, initial=1, onAdd}) => {

    const [ count, setCount ] = useState(initial)

    const handleSuma = ()=>{
        if(count !== stock){
            setCount(count + 1)
        }
    }

    const handleResta = ()=>{
        if(count > initial){
            setCount(count - 1)
        }
    }
        
    

  return (
    <>
    
        <div className='flex justify-center md:justify-start items-center my-3'>
            <button className='rounded-xl bg-banner-color px-8 hover:bg-emerald-800 transition-colors duration-300 text-button-card text-xl font-bold' onClick={()=>{handleResta()}}>-</button>
            <p className=' mx-6 text-xl'>{count}</p>
            <button className='rounded-xl bg-banner-color px-8 hover:bg-emerald-800 transition-colors duration-300 text-button-card text-xl font-bold' onClick={()=>{handleSuma()}}>+</button>
        </div>
        <div className='flex justify-center md:justify-start  mt-6'>
            <button onClick={()=>onAdd(count)} className='my-3 border-black rounded-xl hover:bg-banner-color   bg-text-button-card text-2xl transition-colors ease-in-out duration-300 font-bold font-banner-color px-8'>Agregrar al carrito</button>
        </div>
    </>
  ) 
}

export default ItemCount