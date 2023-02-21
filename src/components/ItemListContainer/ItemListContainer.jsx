import React, { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
import db from "../../services"
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'

const ItemListContainer = () => {

    const [ items, setItems ] = useState([])
    
    useEffect(() => {
        const getColData = async()=>{
            try {
                const data = collection(db, "Productos")
                const col = await getDocs(data)
                const res = col.docs.map((doc)=>doc={id:doc.id, ...doc.data()})
                setItems(res)
                
                
            } catch (error) {
                console.log(error)
            }
        }
        getColData()
    
      return () => {
        
      }
    }, [])
    


  return (
    <div className='container mx-auto'>
      <h2 className='text-center mt-16 text-3xl font-bold uppercase'>Nuestros Productos</h2>
        {
            items.length === 0 ? <Spinner/> : <ItemList items={items}/>
        }
    </div>
        
  )
}

export default ItemListContainer